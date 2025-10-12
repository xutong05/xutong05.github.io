---
title: 'Traverse the Non-Traversable: Estimating Traversability for Wheeled Mobility on Vertically Challenging Terrain'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - C. Pan
  - C. Pan
  - A. Pokhrel
  - M. Choulas
  - M. Nazeri
  - T. Xu
  - and X. Xiao

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2025-09-14'
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

abstract: "Most traversability estimation techniques divide off-road terrain into traversable (e.g., pavement, gravel, and grass) and non-traversable (e.g., boulders, vegetation, and ditches) regions and then inform subsequent planners to produce trajectories on the traversable part. However, recent research demonstrated that wheeled robots can traverse vertically challenging terrain (e.g., extremely rugged boulders comparable in size to the vehicles themselves), which unfortunately would be deemed as non-traversable by existing techniques. Motivated by such limitations, this work aims at identifying the traversable from the seemingly non-traversable, vertically challenging terrain based on past kinodynamic vehicle-terrain interactions in a data-driven manner. Our new Traverse the Non-Traversable (TNT) traversability estimator can efficiently guide a downstream sampling-based planner containing a high-precision 6-DoF kinodynamic model, which becomes deployable onboard a small-scale vehicle. Additionally, the estimated traversability can also be used as a costmap to plan global and local paths without sampling. Our experiment results show that TNT can improve planning performance, efficiency, and stability by 50%, 26.7%, and 9.2% respectively compared with a state-of-the-art off-road navigation method on a physical robot platform."

# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://cs.gmu.edu/~xiao/papers/tnt.pdf'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=Shcalb8sGcA'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: '**TNT**'
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