/*************************************************
 *  Academic
 *  https://github.com/gcushen/hugo-academic
 *
 *  In-built Fuse based search algorithm.
 *  Modified to show search bar but no results.
 **************************************************/

/* ---------------------------------------------------------------------------
* Configuration.
* --------------------------------------------------------------------------- */

// Configure Fuse.
let fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  tokenize: true,
  threshold: search_config.threshold,  // Set to ~0.3 for parsing diacritics and CJK languages.
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: search_config.minLength,  // Set to 1 for parsing CJK languages.
  keys: [
    {name:'title', weight:0.99}, /* 1.0 doesn't work o_O */
    {name:'summary', weight:0.6},
    {name:'authors', weight:0.5},
    {name:'content', weight:0.2},
    {name:'tags', weight:0.5},
    {name:'categories', weight:0.5}
  ]
};

// Configure summary.
let summaryLength = 60;

/* ---------------------------------------------------------------------------
* Functions.
* --------------------------------------------------------------------------- */

// Get query from URI.
function getSearchQuery(name) {
  return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}

// Set query in URI without reloading the page.
function updateURL(url) {
  if (history.replaceState) {
    window.history.replaceState({path:url}, '', url);
  }
}

// Pre-process new search query.
function initSearch(force, fuse) {
  let query = $("#search-query").val();

  // If query deleted, clear results.
  if ( query.length < 1) {
    $('#search-hits').empty();
  }

  // Check for timer event (enter key not pressed) and query less than minimum length required.
  if (!force && query.length < fuseOptions.minMatchCharLength)
    return;

  // Do search - but don't show results.
  $('#search-hits').empty();
  // searchAcademic(query, fuse);  // DISABLED: Don't show search results
  let newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + '?q=' + encodeURIComponent(query) + window.location.hash;
  updateURL(newURL);
}

// Perform search - DISABLED.
function searchAcademic(query, fuse) {
  // Search functionality disabled - no results will be shown
  return;
}

// Parse search results - DISABLED.
function parseResults(query, results) {
  // Results parsing disabled
  return;
}

function render(template, data) {
  // Replace placeholders with their values.
  let key, find, re;
  for (key in data) {
    find = '\\{\\{\\s*' + key + '\\s*\\}\\}';  // Expect placeholder in the form `{{x}}`.
    re = new RegExp(find, 'g');
    template = template.replace(re, data[key]);
  }
  return template;
}

/* ---------------------------------------------------------------------------
* Initialize.
* --------------------------------------------------------------------------- */

// If Academic's in-built search is enabled and Fuse loaded, then initialize it.
if (typeof Fuse === 'function') {
// Wait for Fuse to initialize.
  $.getJSON(search_config.indexURI, function (search_index) {
    let fuse = new Fuse(search_index, fuseOptions);

    // On page load, check for search query in URL.
    if (query = getSearchQuery('q')) {
      $("body").addClass('searching');
      $('.search-results').css({opacity: 0, visibility: "visible"}).animate({opacity: 1},200);
      $("#search-query").val(query);
      $("#search-query").focus();
      initSearch(true, fuse);
    }

    // On search box key up, process query.
    $('#search-query').keyup(function (e) {
      clearTimeout($.data(this, 'searchTimer')); // Ensure only one timer runs!
      if (e.keyCode == 13) {
        initSearch(true, fuse);
      } else {
        $(this).data('searchTimer', setTimeout(function () {
          initSearch(false, fuse);
        }, 250));
      }
    });
  });
}
