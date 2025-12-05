---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Simon Fraser University</p>
    <p>Burnaby, BC, Canada</p>

news: true # includes a list of news items
latest_posts: false # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # disable theme default icons; we will render custom ones below
---

I'm a Ph.D. student in Computer Science at [Simon Fraser University](https://www.sfu.ca/) in Burnaby, British Columbia, Canada, advised by [Prof. Ke Li](http://www.sfu.ca/~keli/).

## Research Interests

My research focuses on:
- **Computer Vision & 3D Neural Rendering** - Point-based neural rendering, intrinsic decomposition, and 3D scene editing
- **Generative Modeling & Generative AI** - Diffusion models, conditional image synthesis, and implicit maximum likelihood estimation
- **Self-Supervised & Unsupervised Representation Learning** - Masked image modeling and uncertainty quantification
- **Large Language Models & Natural Language Interfaces** - LLM distillation, efficient inference, and natural language-to-UI generation

I develop novel approaches for efficient 3D neural rendering, particularly point-based methods for scene representation and editing. My work spans from fundamental research in generative modeling to practical applications in industrial and medical domains.

## Background

Before joining SFU, I completed my B.Sc. in Computer Engineering (with a focus on Artificial Intelligence and Computer Networks) and a second degree in Electrical Engineering (Control) at Amirkabir University of Technology in Tehran, Iran. I graduated with a GPA of 18.40/20 (3.84/4.00), ranking in the top 5% of my class.

<div class="social">
  <div class="contact-icons">
    {% for item in site.data.social %}
      <a href="{{ item.url }}" title="{{ item.title }}" target="_blank">
        <i class="{{ item.icon }}"></i>
      </a>
    {% endfor %}
  </div>
  <div class="contact-note">
    {{ site.contact_note }}
  </div>
</div>

