---
title: 'VertiSelector: Automatic Curriculum Learning for Wheeled Mobility on Vertically Challenging Terrain'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - T. Xu
  - C. Pan
  - and X. Xiao

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2025-06-01'
doi: ''

# draft: true

# Schedule page publish date (NOT publication's date).
publishDate: ''

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (**IROS**), 2025 <span style="color: red;">✨Oral Presentation✨</span>'
publication_short: 'IROS 2025'

abstract: Reinforcement Learning (RL) has the potential to enable extreme off-road mobility by circumventing complex kinodynamic modeling, planning, and control by simulated end-to-end trial-and-error learning experiences. However, most RL methods are sample-inefficient when training in a large amount of manually designed simulation environments and struggle at generalizing to the real world. To address these issues, we introduce Verti-Selector (VS), an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain. VS prioritizes vertically challenging terrain with higher Temporal Difference (TD) errors when revisited, thereby allowing robots to learn at the edge of their evolving capabilities. By dynamically adjusting the sampling focus, VS significantly boosts sample efficiency and generalization within the VW-Chrono simulator built on the Chrono multi-physics engine. Furthermore, we provide simulation and physical results using VS on a Verti-4-Wheeler platform. These results demonstrate that VS can achieve 23.08% improvement in terms of success rate by efficiently sampling during training and robustly generalizing to the real world.

# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2409.17469'
url_code: 'https://github.com/RobotiXX/VertiSelector'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=s14i06w9sOM'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: '**VS**'
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