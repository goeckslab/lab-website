---
---
<div class="lab-hero">
  <div class="hero-copy">
    <p class="eyebrow">The Goecks Laboratory · Moffitt Cancer Center</p>
    <h1>Biomedical data science. Computational <span>cancer research.</span></h1>
    <p class="hero-description">We develop computational infrastructure plus AI and machine learning approaches to advance biomedical data science and cancer research.</p>
    <div class="lab-actions">
      <a class="lab-button" href="{{ '/projects/' | relative_url }}">Explore our projects <span aria-hidden="true">↗</span></a>
      <a class="lab-text-link" href="{{ '/research/' | relative_url }}">Browse publications <span aria-hidden="true">→</span></a>
    </div>
  </div>
  <div class="hero-visual">
    <p class="eyebrow">At the intersection</p>
    <img src="{{ 'images/Research.png' | relative_url }}" width="462" height="327" alt="Lab research overview connecting tissue imaging, artificial intelligence, Galaxy, and AnVIL." fetchpriority="high">
    <p>Open science and software <span aria-hidden="true">×</span> AI &amp; Machine learning <span aria-hidden="true">×</span> Precision Oncology</p>
  </div>
</div>

{% include section.html %}

<div class="section-intro">
  <div><p class="eyebrow">From methods to discovery</p><h2>Featured projects</h2></div>
  <p>Building software and AI/ML methods to advance precision oncology and biomedical data science</p>
</div>
<div class="project-grid">
{% for project in site.data.projects %}
  {% include project-card.html project=project %}
{% endfor %}
</div>

{% include section.html %}

<div class="team-callout">
  <img src="{{ 'images/lab_axe_throwing.jpg' | relative_url }}" alt="Members of the Goecks lab together at an axe-throwing outing." loading="lazy" width="1960" height="4032">
  <div>
    <p class="eyebrow">Laboratory team</p>
    <h2>Teamwork and great science</h2>
    <p>We’re students, data scientists, software engineers, and faculty with a passion for applied computing and advancing cancer research.</p>
    <div class="lab-actions"><a class="lab-button" href="{{ '/team/' | relative_url }}">Meet our team <span aria-hidden="true">→</span></a><a class="lab-text-link" href="{{ '/join-us.html' | relative_url }}">Join the lab <span aria-hidden="true">↗</span></a></div>
  </div>
</div>
