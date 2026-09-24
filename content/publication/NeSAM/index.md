---
title: 'NeSAM: Neuro-Symbolic Kinodynamics with Soil Adaptation for Off-Road Mobility'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - C. Pan
  - T. Xu
  - F. Cancelliere
  - and X. Xiao

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2026-08-21'
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

abstract: "Accurate prediction of off-road vehicle motion over deformable terrain remains challenging because sinkage, slip, and traction vary with local soil conditions. Existing learning-based kinodynamic models directly approximate vehicle-terrain interactions from data but do not explicitly represent soil mechanics and offer limited physical interpretability. To address these limitations, we present NeSAM, a neuro-symbolic framework that combines differentiable Bekker-Wong terramechanics with learned terrain representations and a Transformer-based residual dynamics model for long-horizon, six degree-of-freedom kinodynamic prediction. The terramechanics component models soil-dependent interaction forces, while the residual model corrects discrepancies between the analytical prediction and the observed vehicle dynamics. NeSAM further estimates physically meaningful soil parameters from terrain observations and updates them online using an extended Kalman filter. We evaluate NeSAM in Verti-Bench, a simulator built on the Chrono multiphysics engine, and validate its performance on a physical Verti-4-Wheeler platform. NeSAM improves prediction accuracy by up to 30% in simulation and 29% on real-world data relative to the strongest compared baselines. When integrated with a close-loop navigation controller, NeSAM further improves traversal success rate through online soil adaptation while reduces Hausdorff distance to the reference trajectory by 69.4%, indicating improved trajectory tracking accuracy."


# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2608.21330'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Custom thumbnail size for list view (optional, overrides default 500x250)
thumbnail_size: "480x240"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: '**NeSAM**'
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