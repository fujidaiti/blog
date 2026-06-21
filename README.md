# blog

Personal blog built with Hugo and the in-repo `simple` theme.

## Front matter

Standard Hugo fields (`title`, `date`, `description`, `tags`, ...) work as
usual. The theme also reads these custom page params:

- `showdescription` (bool, default `false`) — when `true`, renders `description`
  as a subtitle under the title on the single page. The description is always
  used for `<meta>` tags and list pages regardless.

- `hidemeta` (bool, default `false`) — when `true`, hides the date/tags line on
  the single page and the prev/next nav at the bottom.

Site-level params (set in `hugo.toml` under `[params]`):

- `author` (string, defaults to site title) — name shown in the footer
  copyright.

- `highlight` (bool, default `true`) — loads the syntax highlighting stylesheet
  in `baseof.html`.
