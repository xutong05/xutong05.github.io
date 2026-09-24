---
title: 'Learning Scene-Aware Humanoid Locomotion through 3D Clutter from Immersive Human Demonstrations'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - B. Wang
  - T. Xu
  - D. Kosukhin
  - Y. Yeung
  - Y. Lu
  - and X. Xiao

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2026-09-17'
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

abstract: "While learning from human motions has enabled highly dynamic humanoid skills such as dancing and martial arts in obstacle-free space, traversal through densely cluttered environments remains underexplored. These spaces are three-dimensional and geometrically constrained, requiring scene-aware locomotion that tightly couples whole-body motion with scene geometry for obstacle avoidance. To address these challenges, we present Moving Through Clutter (MTC), a learning-from-demonstration framework for scene-aware humanoid locomotion. To bypass costly physical scene construction, MTC uses procedurally generated Virtual Reality environments for immersive data collection. To transform these human motions into training-ready humanoid motions, we propose a scene-aware motion retargeting algorithm that converts human demonstrations into humanoid trajectories while strictly enforcing robot-scene clearance to guarantee collision-free traversal. These reference trajectories are then used to train a scene-aware locomotion policy that deploys on a Unitree G1 humanoid. Evaluated on our proposed MTC-Challenge for multi-obstacle traversal, the policy demonstrates a 70.2% collision-free rate across diverse scenarios, successfully traversing complex environments through diverse whole-body skills, including crawling through low-clearance passages and squeezing through narrow gaps."


# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2609.21107'
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
  caption: '**MTC**'
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