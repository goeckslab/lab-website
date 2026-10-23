
# goeckslab's Website

Visit **[www.goeckslab.org](https://www.goeckslab.org)** 🚀

_Built with [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_


## Updating featured projects

Edit `_data/projects.yaml` to update both the homepage showcase and the Projects
page. Entries appear in file order. Keep each `id` stable because it is used in
project anchor links. Each entry includes a title, category, short summary,
description, focus, image path, image description, caption, internal destination,
and resource links. Use captions to distinguish conceptual illustrations from
research figures. Store images in `images/` and provide descriptive alternative
text; full-size images are linked from the Projects page.

The visual refresh is styled in `_styles/refresh.css`, which loads after the
shared template styles. Build locally with `JEKYLL_ENV=production bundle exec
jekyll build` using a Ruby version compatible with the Gemfile.
