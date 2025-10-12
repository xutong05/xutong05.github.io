---
title: 'Verti-Bench: A General and Scalable Off-Road Mobility Benchmark for Vertically Challenging Terrain'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - T. Xu
  - C. Pan
  - M. B. Rao
  - A. Datar
  - A. Pokhrel
  - Y. Lu
  - and X. Xiao

# Author notes (optional)
# author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2025-04-01'
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
publication: 'Robotics: Science and Systems (**RSS**), 2025 <span style="color: red;">✨Spotlight✨</span>'
publication_short: 'RSS 2025'

abstract: Recent advancement in off-road autonomy has shown promises in deploying autonomous mobile robots in outdoor off-road environments. Encouraging results have been reported from both simulated and real-world experiments. However, unlike evaluating off-road perception tasks on static datasets, benchmarking off-road mobility still faces significant challenges due to a variety of factors, including variations in vehicle platforms and terrain properties. Furthermore, different vehicle-terrain interactions need to be unfolded during mobility evaluation, which requires the mobility systems to interact with the environments instead of comparing against a pre-collected dataset. In this paper, we present Verti-Bench, a mobility benchmark that focuses on extremely rugged, vertically challenging off-road environments. 100 unique off-road environments and 1000 distinct navigation tasks with millions of off-road terrain properties, including a variety of geometry and semantics, rigid and deformable surfaces, and large natural obstacles, provide standardized and objective evaluation in high-fidelity multiphysics simulation. Verti-Bench is also scalable to various vehicle platforms with different scales and actuation mechanisms. We also provide datasets from expert demonstration, random exploration, failure cases (rolling over and getting stuck), as well as a gym-like interface for reinforcement learning. We use Verti-Bench to benchmark ten off-road mobility systems,present our findings, and identify future off-road mobility research directions.

# Summary. An optional shortened abstract.
# summary: Verti-Selector, an automatic curriculum learning framework designed to enhance learning efficiency and generalization by selectively sampling training terrain

# tags: ["autonomous vehicle navigation","motion and path planning","ML for robot control"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2502.11426'
url_code: 'https://github.com/RobotiXX/verti_bench'
url_dataset: 'https://dataverse.orc.gmu.edu/dataset.xhtml?persistentId=doi:10.13021/ORC2020/TIDSD3'
url_poster: ''
url_project: 'https://cs.gmu.edu/~xiao/Research/Verti-Bench/'
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=O9VlMg3tnvo'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: '**Verti-Bench**'
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