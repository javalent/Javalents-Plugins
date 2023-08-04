---
aliases: [GPX, Leaflet GPX]
cover: 
description: "Learn how to use GPX within Obsidian Leaflet."
image: 
permalink: leaflet/advanced/gpx
publish: true
tags: [Leaflet/GPX]
---

## GPX Overview

GPX, or GPS eXchange, files can be added to the map using the `gpx` parameter similarly to how GeoJSON files are added to maps.

> Want to show your Apple Health workouts in Obsidian? Follow [these](https://support.apple.com/guide/iphone/share-health-and-fitness-data-iph27f6325b2/ios) steps, then add the exported GPX files to your vault and use them in a map!

````
```leaflet
gpx: [[GPX_File.gpx]]
```
````

or

````
```leaflet
gpx:
  - [[GPX_File.gpx]]
  - [[GPX_File 2.gpx]]
```
````

Especially large or a large number of GPX files could slow down rendering.

### GPX Markers

By default, the map will not show markers on the starting point, ending point or the defined waypoints. The map can be told to use marker types you have defined in settings using the `gpxMarkers` parameter:

````
```leaflet
gpx: [[GPX_File.gpx]]
gpxMarkers:
  start: start_marker_type
  waypoint: waypoint_marker_type
```
````

### GPX Data

GPX files are parsed for datapoints which can be displayed on the map as heatlines. Clicking on a GPX route will open a control box where these datapoints can be selected. Hovering over a point on the track will display information for that specific point.

Currently, the data parsed out of a GPX file is:

1. Cadence
2. Elevation
3. Heartrate
4. Speed

If any of these are missing from the file, it will not be an option.