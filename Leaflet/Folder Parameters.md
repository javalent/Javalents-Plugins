---
aliases:
  - Geojson Folder Parameters
description: Explore how markerFolder and geojsonFolder tags work.
permalink: leaflet/folders
publish: true
tags:
  - Leaflet/Folder
---

# Folder Parameters

The `geojsonFolder` tag enables you to specify one or more folders containing `*.geojson` or `*.json` files that can be displayed on the current map. 

Similarly, the `markerFolder` tag allows you to specify one or more folders containing `*.md` files with `location` and `mapmarker` tags in their YAML FrontMatter to be displayed as markers in the Map. 

You can use either an absolute path starting with `/` or a relative path starting with `./` for both folder paths. By default, all subfolders are included, but you can restrict the number of subfolders by adding one or more `/` to the path.

### Code Block Example

````yaml
```leaflet
zoomFeatures: true 
minZoom: 2 
maxZoom: 18
geojsonFolder: ./Germany~East/
markerFolder: ./Germany~East/City
```
````


This feature allows rendering of both:

-   \*.geojson files located in the Germany~East folder and its immediate subfolders, and
-   markers for the Cities.md files present in the Germany~East/City folder.

The output will resemble the following screenshot:

> [!screenshot]- Screenshot of Germany East
> ![Geojson and GPX](https://github.com/javalent/obsidian-leaflet/blob/main/publish/images/Germany~East.png?raw=true)

You can find the complete sample in this [repository](https://github.com/SpocWiki/_public/blob/main/geo/Continent/Europe/Germany/Germany~East.md).

