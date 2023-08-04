---
aliases:
  - Initial Zoom Level
  - leaflet Initial Zoom Level
description: This page details how to use Zoom Level within Obsidian Leaflet.
permalink: leaflet/distance/zoom
publish: true
tags:
  - Leaflet/Zoom
---

# Initial Zoom Level

To set the initial zoom level of the map, use the `defaultZoom` parameter. This value must be between the `minZoom` and `maxZoom` parameters. If the `defaultZoom` parameter is outside of the allowed range, the plugin will set it to the nearest valid value.

Alternatively, if you've defined a note using the `coordinates` parameter, the plugin can read the `zoomTag` parameter from that note's frontmatter. The `zoomTag` parameter should specify a distance and unit. For example, if a note has the following frontmatter:

```yaml
### Note With Frontmatter.md
---
location: [-36, 89]
nearby: 100 mi
---
```

and the map is defined like this:

````yaml
```leaflet
coordinates: [[Note With Frontmatter]]
zoomTag: nearby
```
````

Then the plugin will read the `nearby` tag, which is set to `100 miles`. The plugin will then set the initial zoom level to the closest level that displays a 100-mile radius on the map. The actual zoom level depends on the `minZoom`, `maxZoom`, and `zoomDelta` parameters.

> [!tip] If you're using an image map, keep in mind that zoom levels and image maps may be a bit tricky to work with. Check out the "Zooming with Image Maps" section below for more information.

