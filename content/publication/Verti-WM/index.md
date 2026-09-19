---
title: 'Verti-WM: A Physics-Aided Exteroceptive World Model for Off-Road Reinforcement Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - C. Pan
  - T. Xu
  - and X. Xiao

# # Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'
#   - ''
#   - ''

date: '2026-09-19'
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

abstract: "Reinforcement learning for off-road navigation requires extensive vehicle-terrain interaction data, which are costly to collect in high-fidelity simulation. World models offer a promising alternative by replacing simulator roll-outs during policy optimization. However, an off-road world model must condition state transitions on exteroceptive terrain information, which proprioception alone does not provide. This challenge is further amplified by the need to model both rigid and deformable terrain, where data-driven and physics-based approaches offer complementary strengths. We propose Verti-WM, a physics-aided exteroceptive world model that recurrently fuses a frozen Transformer for rigid terrain and a neuro-symbolic terramechanics model for deformable terrain. Elevation and semantic observations queried from a supplied map at each predicted pose condition fusion, enabling six-degree-of-freedom rollouts for policy optimization without further simulator access. Verti-WM reduces prediction error by 34.6% and 21.7% over data-driven and physics-based baselines, respectively. Policies trained entirely within Verti-WM achieve comparable task success rates while reducing computation time by 23.6X relative to direct training in the high-fidelity simulator. We further validate Verti-WM using real-world data, enabling policy optimization within learned real-world kinodynamics and achieving a 80% success rate on the Verti-4-Wheeler platform, compared with 40% for direct sim-to-real transfer."


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
  caption: '**Verti-WM**'
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