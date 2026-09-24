---
title: 'Determinization-Guided Planning for Multi-Robot Multi-Goal Navigation under Terrain-Dependent Robot Failure'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - M. Ogunsina
  - A. Paudel
  - T. Xu
  - X. Xiao
  - and G. Stein

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2026-09-12'
doi: ''

# draft: true

# Schedule page publish date (NOT publication's date).
publishDate: ''

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['3']

# Publication name and optional abbreviated publication name.
publication: 'under review'
publication_short: ''

abstract: "We study concurrent multi-robot, multi-goal navigation in which a terrain traversal can permanently immobilize a robot, and the robots that remain must still visit every goal. Solving this exactly requires full probabilistic planning. In practice the problem is determinized and planned with a fixed cost per traversal that keeps time or risk, which cannot represent whether another robot could still cover a goal after a failure. We introduce a RISK-TIME value function, that accounts for travel time, failure cost, and the coverage that remains after a failure. It is computed from a determinized version of the problem, and the same function serves determinized planning as a cost per traversal and probabilistic planning as a state value. With failure probabilities fit to off-road traversals, it reduces mean expected cost by 29--43% across the synthetic terrain layouts relative to a time-only baseline, and by 5.9% relative to a risk-only baseline. Probabilistic planning with it yields a further benefit at larger teams, but not consistently more than determinized planning with the same function. The choice between the two can therefore follow the computation available to the team at planning time."


# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: '**Risk-Time**'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects: ''

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: ''
---