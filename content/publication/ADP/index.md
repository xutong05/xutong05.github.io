---
title: 'Adaptive Dynamics Planning for Robot Navigation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Y. Lu
  - M. Mao
  - T. Xu
  - L. Wang
  - X. Lin
  - and X. Xiao

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2025-09-15'
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
publication: 'IEEE International Conference on Robotics and Automation (**ICRA**), 2026'
publication_short: ''

abstract: "Autonomous robot navigation systems often rely on hierarchical planning, where global planners compute collision-free paths without considering dynamics, and local planners enforce dynamics constraints to produce executable commands. This discontinuity in dynamics often leads to trajectory tracking failure in highly constrained environments. Recent approaches integrate dynamics within the entire planning process by gradually decreasing its fidelity, e.g., increasing integration steps and reducing collision checking resolution, for real-time planning efficiency. However, they assume that the fidelity of the dynamics should decrease according to a manually designed scheme. Such static settings fail to adapt to environmental complexity variations, resulting in computational overhead in simple environments or insufficient dynamics consideration in obstacle-rich scenarios. To overcome this limitation, we propose Adaptive Dynamics Planning (ADP), a learning-augmented paradigm that uses reinforcement learning to dynamically adjust robot dynamics properties, enabling planners to adapt across diverse environments. We integrate ADP into three different planners and further design a standalone ADP-based navigation system, benchmarking them against other baselines. Experiments in both simulation and real-world tests show that ADP consistently improves navigation success, safety, and efficiency."

# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://people.cs.gmu.edu/~xiao/papers/adp.pdf'
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
  caption: '**ADP**'
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