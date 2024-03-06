---
---

{% include section.html %}

{% capture text %}

Our lab develops data science methods and software tools to advance cancer research and patient care. Our areas of technical focus are computational infrastructure, cloud computing, and machine learning. Our areas of cancer research include precision oncology and early detection.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/Research.png"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

We contribute to the national computational infrastructure projects [Galaxy](https://galaxyproject.org/) and [AnVIL](https://anvilproject.org/). These projects enable accessible, reproducible, collaborative, and scalable analysis of biomedical datasets. We also develop machine learning methods for cancer, including single-cell and spatial datasets.

{%
  include button.html
  link="projects"
  text="Learn about our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/Galaxy-ML.png"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

We're a group of graduate students, data scientists, and software engineers with a passion for applied computing and advancing cancer research. We are looking for motivated individuals with a passion for data science and cancer research. If you're interested, [please consider joining us](/join-us).

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/lab_axe_throwing.jpg"
  link="team"
  title="Our Team"
  text=text
%}
