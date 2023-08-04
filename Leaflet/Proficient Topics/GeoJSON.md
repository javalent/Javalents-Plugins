---
aliases: [Leaflet GeoJSON]
cover: 
description: "Learn how to use GeoJSON within Obsidian Leaflet."
image: 
permalink: leaflet/advanced/geojson
publish: true
tags: [Leaflet/GeoJSON, Leaflet/GPX]
---

## GeoJSON

GeoJSON is a format used to describe geographic data structures, such as points, lines, and shapes. 

Please see [this](https://datatracker.ietf.org/doc/html/rfc7946) for a full reference of the GeoJSON format.

GeoJSON can be loaded into the map using the following syntax:

````yaml
```leaflet
geojson: [[GeoJSON_File.json]]|optional-alias
```
````

or

````yaml
```leaflet
geojson:
  - [[GeoJSON_File.json]]
  - [[GeoJSON_File_2.json]]|optional-alias|[[optional-note-wikilink]]
```
````

*Please note that GeoJSON is drawn in the order it is provided. *

*If a smaller file overlaps a larger file, you may not be able to interact with it.*

Especially large or a large number of GeoJSON files could slow down initial rendering.

### Linking to Notes

A GeoJSON file can link to a note by appending `|[[]]` to the end.

>[!note] Please note that the alias is required when linking to a note.

### Styles and Color

The default color for GeoJSON features can be defined in the map's code block using the `geojsonColor` parameter. 

This color must be a valid CSS color.

Additionally, the map will attempt to read the style properties defined for the GeoJSON features to apply styles. 

Styles should be defined using the [MapBox SimpleStyle specification](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0).

### Tooltip

The map will attempt to read the title of the GeoJSON feature to display the tooltip when hovered. 

This title should be defined in the `title`, `description` or `name` field of the GeoJSON feature properties.

