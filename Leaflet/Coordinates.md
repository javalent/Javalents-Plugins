---
aliases:
  - Coordinates
  - Leaflet Coordinates
description: Obsidian Leaflet supports the ability to set coordinates.
permalink: leaflet/coordinates
publish: true
tags:
  - Leaflet/Coordinates
---

# Coordinates

The initial coordinates of the map can be set using the `lat` and `long` parameters. If these parameters are not provided, the map will default to the latitude and longitude defined in settings.

Alternatively, the `coordinates` parameter can be used to set the initial coordinates. This parameter can take an array of numbers or a wikilink to a note that has a `location` frontmatter tag.

```yaml
```leaflet
coordinates: [36, -89]
coordinates: [[Note with Location Frontmatter]]
```
````

