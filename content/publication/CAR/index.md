---
title: 'CAR: Cross-Vehicle Kinodynamics Adaptation via Mobility Representation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - T. Xu
  - C. Pan
  - and X. Xiao

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'
  - ''

date: '2026-02-28'
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

abstract: "Developing autonomous off-road mobility typically requires either extensive, platform-specific data collection or relies on simplified abstractions, such as unicycle or bicycle models, that fail to capture the complex kinodynamics of diverse platforms, ranging from wheeled to tracked vehicles. This limitation hinders scalability across evolving heterogeneous autonomous robot fleets. To address this challenge, we propose Cross-vehicle kinodynamics Adaptation via mobility Representation (CAR), a novel framework that enables rapid mobility transfer to new vehicles. CAR employs a Transformer encoder with Adaptive Layer Normalization to embed vehicle trajectory transitions and physical configurations into a shared mobility latent space. By identifying and extracting commonality from nearest neighbors within this latent space, our approach enables rapid kinodynamics adaptation to novel platforms with minimal data collection and computational overhead. We evaluate CAR using the Verti-Bench simulator, built on the Chrono multi-physics engine, and validate its performance on four distinct physical configurations of the Verti-4-Wheeler platform. With only one minute of new trajectory data, CAR achieves up to 67.2% reduction in prediction error compared to direct neighbor transfer across diverse unseen vehicle configurations, demonstrating the effectiveness of cross-vehicle mobility knowledge transfer in both simulated and real-world environments."


# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2603.06866'
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
  caption: '**CAR**'
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