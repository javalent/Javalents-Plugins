---
aliases:
  - Mapoverlays
  - Mapoverlay
  - Map Overlay
  - Map Overlays
description: This page details how to use Map Overlays within Obsidian Leaflet.
permalink: leaflet/overlays
publish: true
tags:
  - Leaflet/Overlays
---

# Map Overlays

The `mapoverlay` parameter can be used to define an arbitrary number of overlays to display on the map. This does not require the `location` tag to be set.

A marker defined using `mapoverlay` should have the following syntax:

```
---
mapoverlay:
  - [<color>, [<latitude>, <longitude>], <radius> <unit?>, <optional description>]
  - [<color>, [<latitude>, <longitude>], <radius> <unit?>, <optional description>]
  - ...
---
```

As shown above, the radius of the overlay should be specified using `<radius> <unit>` (such as `100 miles`). If the `<unit>` is not provided, it will default to `meters`. Please see [src/utils/units.ts](https://github.com/javalent/obsidian-leaflet/blob/main/src/utils/units.ts) for a list of supported units.