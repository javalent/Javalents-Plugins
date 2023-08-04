---
aliases: 
cover: 
description: 
image: 
permalink: 
publish: true
tags: 
---

> [!tip] Making an Image Map?
>
> For images maps, it is **highly** recommended that you set your [bounds](#bounds) first.
>
> This will make working with your images much easier!
>
> Read the [discussion](https://github.com/valentine195/obsidian-leaflet-plugin/discussions/130 "Github") about the process. 

Josh Plunkett has also made a great video breaking down the process below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/54EyMzJP5DU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Image Map URL / File Path

There are three ways to load image maps:

1.  Direct URL (e.g., [https://i.imgur.com/jH8j3mJ.jpg](https://i.imgur.com/jH8j3mJ.jpg))
2.  Obsidian URL (e.g., obsidian://open?vault=VaultName&file=Path/To/Image.jpg)
3.  Obsidian wikilink of image (e.g., `[[Image.jpg]]`)

## Zooming with Image Maps

Zooming with image maps may not work as you expect. Increasing the maximum zoom level might cause the map to start farther away instead of allowing you to zoom in more.

This is because image maps are a workaround for the LeafletJS module. There is an underlying map with latitude and longitude, but it's hidden. The image is then drawn on top of that map and stretched to fit. Changing parameters, such as zoom levels, changes the underlying map, but the image is still placed at [0, 0] and stretched to fit.

To solve this, the [image bounds](https://chat.openai.com/c/37f7cf73-70f8-4bf2-bc84-3a476e51727a#bounds) need to be set for your map. This tells Leaflet where to place the image on the underlying map layer. With image bounds set, the image will always be in the same spot and the same size, no matter how the map instance changes.

## Multi-Image Maps

Multiple images can be layered on top of each other to create a complex image map. The plugin allows you to define multiple images by adding more `image` parameters:

````yaml
```leaflet
id: Map With Layered Images
image:
    - [[Image1.jpg|Optional Alias]]
    - [[Image2.jpg]]
    - [[Image3.jpg]]
```
````

In this example, the map will have three layers, with Image 1 on top, Image 2 in the middle, and Image 3 on the bottom. The images will be aligned around their center points.

The layer control box in the top-right corner of the map will allow you to switch between layers. You can create and save markers on each layer separately.

If you provide an `alias` for an image, the layer control box will display the alias name instead of the file name.

