---
title: 'VertiAKD: Adaptive Off-Road Kinodynamics on Vertically Challenging Terrain'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - T. Xu
  - C. Pan
  - F. Cancelliere
  - and X. Xiao

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - ''
  - ''
  - ''

date: '2026-08-2'
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

abstract: "Off-road mobility requires autonomous mobile robots to generalize across heterogeneous vehicle fleets and continuously changing terrain conditions. Existing cross-vehicle adaptation approaches generally assume flat terrain, while terrain-aware kinodynamic models often require platform-specific data collection and retraining. To this end, we propose VertiAKD, a unified framework for transferring and adapting off-road kinodynamic knowledge across diverse vehicles on geometrically and semantically complex terrain simultaneously. VertiAKD learns a shared mobility representation that jointly encodes vehicle configurations, trajectory transitions, and local elevation and semantic terrain features. Given limited data from a novel vehicle operating on unseen terrain, VertiAKD identifies the most relevant mobility descriptors and transfers their knowledge to initialize a terrain-aware kinodynamic model via function encoders, which is then periodically refined online from streaming observations without gradient-based retraining. We evaluate VertiAKD in the Verti-Bench simulator, built on the Chrono multi-physics engine, and on five physical configurations of the Verti-4-Wheeler platform. With only one minute of new trajectory data and associated terrain features, VertiAKD reduces long-horizon prediction error by up to 34.52% over direct mobility descriptor transfer across diverse unseen vehicle configurations and 94.43% over competing baselines. We further demonstrate robust closed-loop trajectory tracking in both simulation and physical experiments, highlighting the effectiveness of terrain-aware cross-vehicle knowledge transfer for accurate modeling and reliable off-road navigation."


# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2608.00945'
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
  caption: '**VertiAKD**'
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