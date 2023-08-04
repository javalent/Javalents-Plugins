---
aliases:
  - Bounds
  - Leaflet Bounds
description: Obsidian Leaflet also supports the ability to set custom boundaries.
permalink: leaflet/bounds
publish: true
tags:
  - Leaflet/Bounds
---

# Bounds

You can define custom bounds for an image map using the `bounds` parameter to update the latitude and longitude of the image map to fit within the bounds. However, be aware that *this may skew the image if the provided bounds do not match the aspect ratio of the image*. 

>[!note] Any markers or overlays on the map will not be updated.


````
```leaflet
image: Image-in-a-wikilink.jpg
bounds:
    - [<top-left-latitude>, <top-left-longitude>]
    - [<bottom-right-latitude>, <bottom-right-longitude>]
```
````

## Latitude and Longitude of Image Maps

The latitude and longitude provided for an image map must be given as a percentage from the **top left corner of the image**.

