---
aliases: [Leaflet Codeblock]
cover: 
description: "See an example of a leaflet codeblock."
image: 
permalink: leaflet/codeblock
publish: true
tags: [Leaflet/codeblock]
---

## YAML Syntax

> [!feature] **Feature**: This feature was added in 3.11.0.

All parameters may be defined using YAML syntax instead of using multiple of the same tag. The original syntax will still work, but the two cannot be combined.

For example:

````
```leaflet
image:
    - [[Image 1]]
    - [[Image 2]]
    - [[Image 3]]
marker:
    - [<type>, <lat>, <long>, <link>]
    - [<type>, <lat>, <long>, <link>]
```
````

## Codeblock

A map can be created with a `leaflet` code block. For example:

````yaml
```leaflet
id: leaflet-map
image: [[Image.jpg]]
height: 500px
width: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
marker: default, 39.983334, -82.983330, [[Note]]
darkMode: true
```
````

## Options

> [!info] Using Links
>
> Several parameters below are for providing links to the map, whether that be for images, marker files, etc.
>
> In all cases, either Obsidian's Wikilinks (`[[Link]]`) *or* standard Markdown links (`[Link](./path/to/file)`) may be provided.


| Option         | Description                                                                                                 | Default                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Bounds         | Set image map bounds to specified coordinates instead of default                                            |                                            |
| Geojson        | Load GeoJSON files onto maps.                                                                               |                                            |
| Unit           | Unit to display distances in                                                                                | meters                                     |
| commandMarker  | Create immutable markers that execute commands                                                              |                                            |
| coordinates    | Read location data from a note and use it as initial coordinates                                            |                                            |
| darkMode       | Invert map colors                                                                                           | false                                      |
| defaultZoom    | Map will load zoomed to this level.                                                                         | 5                                          |
| draw           | Enable the draw controller on the map.                                                                      | true                                       |
| drawColor      | Default color that new shapes will be drawn with                                                            | `#3388ff`                                    |
| filterTag      | Filter what files are used to create markers. Only markers that match the tags will be used.                |                                            |
| geojsonColor   | Change the default color of the GeoJSON features.                                                           | `#3388ff`                                    |
| geojsonFolder  | Parse a folder for `.geojson` or `.json` files to load to the map.                                          |                                            |
| gpx            | Load GPX files onto maps.                                                                                   |                                            |
| gpxColor       | Control default GPX color                                                                                   | `#3388ff`                                    |
| gpxFolder      | Parse a folder for `.gpx` files to load to the map.                                                         |                                            |
| gpxMarkers     | Set default start, stop and waypoint markers                                                                |                                            |
| height         | Height of the map element. Can be provided in pixels or percentage of note height.                          | 500px                                      |
| id             | Unique identifier (can be anything). **Required.**                                                          |                                            |
| image          | Direct URL/file path to an image file to be used as the map layer.                                          | OpenStreetMap map                          |
| imageOverlay   | Add an image overlay to the map.                                                                            |                                            |
| lat            | Default latitude to display when rendering.                                                                 | 50% (image) / 39.983334 (open street map)  |
| linksFrom      | Create immutable markers from *all* of the notes linking **FROM** a note                                    |                                            |
| linksTo        | Create immutable markers from *all* of the notes linking **TO** a note                                      |                                            |
| lock           | Control whether the map will start locked or unlocked                                                       | false                                      |
| long           | Default longitude to display when rendering.                                                                | 50% (image) / -82.983330 (open street map) |
| markerFile     | Create immutable marker from a note's frontmatter                                                           |                                            |
| markerFolder   | Create immutable markers from *all* of the notes in a given folder                                          |                                            |
| markerTag      | Create immutable markers from *all* of the notes with the given tags.                                       |                                            |
| markers        | Create immutable markers on the map                                                                         |                                            |
| maxZoom        | Maximum allowable zoom level of the map.                                                                    | 10                                         |
| minZoom        | Minimum allowable zoom level of the map.                                                                    | 1                                          |
| noScrollZoom   | Turns off scroll wheel zooming.                                                                             | false                                      |
| noUI           | No controls will be added to the map.                                                                       | false                                      |
| osmLayer       | Turn off the OpenStreetMap layer (only usable if additional Tile Servers have been provided)                |                                            |
| overlay        | Add a circle overlay to the map                                                                             |                                            |
| overlayColor   | Change default overlay color                                                                                | blue                                       |
| overlayTag     | Define a YAML tag to search for in specified marker notes                                                   |                                            |
| preserveAspect | If the note pane the map is in is resized, the map will resize itself to maintain its initial aspect ratio. | false                                      |
| recenter       | Forces map to stay re-center itself after panning.                                                          | false                                      |
| scale          | Scale factor for image map distance calculation.                                                            | 1                                          |
| showAllMarkers | Map will open showing all markers.                                                                          | false                                      |
| tileOverlay    | Add additional tile servers an overlay over the base map.                                                   |                                            |
| tileServer     | Add additional tile servers as different layers                                                             |                                            |
| tileSubdomains | Add Available subdomains for additional tile servers  concurrent requests. Spilt by ',', etc. 'a,b,c'       | a,b,c                                      |
| width          | Width of the map element. Can be provided in pixels or percentage of note width.                            | 100%                                       |
| zoomDelta      | Zoom level will change by this amount when zooming.                                                         | 1                                          |
| zoomFeatures   | The map will automatically fit all GeoJson and GPX features                                                 |                                            |
| zoomTag        | Read distance-to-zoom data from a note and use it as default initial zoom                                   |                                            |
