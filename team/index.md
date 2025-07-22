---
title: Team
nav:
  order: 3
  tooltip: Our Team!
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Current Members
{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: scientist" %}
{% include list.html data="members" component="portrait" filters="role: programmer" %}
{% include list.html data="members" component="portrait" filters="role: postdoc" %}
{% include list.html data="members" component="portrait" filters="role: \bphd" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi|alumniphd|scientist|programmer|postdoc|phd)" %}

## Alumni
{% include list.html data="members" component="portrait" filters="role: alumni" %}