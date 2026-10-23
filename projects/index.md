---
title: Projects
nav:
  order: 2
  tooltip: Learn about our projects!
---
<div class="projects-intro">
  <p class="eyebrow">Our work</p>
  <h1>Better tools.<br>Deeper understanding.</h1>
  <p>We connect computational precision oncology, open scientific software, and cloud infrastructure to advance biomedical research.</p>
  <div class="project-jump-links" aria-label="Project shortcuts">
    {% for project in site.data.projects %}<a href="#{{ project.id }}">{{ project.title }} <span aria-hidden="true">↓</span></a>{% endfor %}
  </div>
</div>
{% for project in site.data.projects %}
{% include section.html %}
<article class="project-detail" id="{{ project.id }}">
  <div class="project-detail-copy">
    <p class="eyebrow">{{ project.category }}</p>
    <h2>{{ project.title }}</h2>
    <p class="project-summary">{{ project.summary }}</p>
    <p>{{ project.description }}</p>
    <p>{{ project.focus }}</p>
    <div class="project-resources">
      {% for resource in project.links %}<a class="lab-text-link" href="{{ resource.url }}">{{ resource.label }} <span aria-hidden="true">↗</span></a>{% endfor %}
    </div>
  </div>
  <figure class="project-figure">
    <a href="{{ project.image | relative_url }}" aria-label="View full image: {{ project.title | escape }}"><img src="{{ project.image | relative_url }}" alt="{{ project.image_description | escape }}" loading="lazy"></a>
    <figcaption>{{ project.caption }} <a href="{{ project.image | relative_url }}">View full image</a></figcaption>
  </figure>
</article>
{% endfor %}
{% include section.html %}
<div class="project-closing"><h2>Explore the science behind our work</h2><a class="lab-button" href="{{ '/research/' | relative_url }}">Browse all publications <span aria-hidden="true">→</span></a></div>
