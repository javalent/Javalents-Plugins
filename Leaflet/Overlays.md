---
aliases: [Leaflet Overlays, Overlays]
description: Add overlays to your map to highlight specific areas or points of interest.
permalink: leaflet/beginner/overlays
publish: true
tags: [Leaflet/Overlays]
---

# Overlays

## Overlay overview

You can add overlays to your map in two ways:

1.  **Shift-right clicking**: To add an overlay with a circular shape, simply hold down the Shift key and right-click the map. Then, drag the mouse to set the radius of the overlay and click again to finish. To cancel the drawing and remove the overlay, hit the Escape key. Overlays added to the map in this manner will be saved to the map instance and will be recreated when the map is reopened.
2. **Source block**: Alternatively, you can specify overlays directly in the source block using the `overlay` parameter. You can either specify a single overlay using the syntax below:

## Overlays in the code block

```yaml
overlay: [<color>, [<lat>, <long>], <radius> <unit?>, <desc>]
```

This will create a circular overlay centered at the specified `<lat>, <long>` coordinates, with a radius of `<radius>` in `<unit>`. The `<color>` can be any valid CSS color, including hexadecimals, `rgb()`, and `hsl()`. You can also include a short description of the overlay using `<desc>`.

Or you can specify multiple overlays using the following syntax:

```yaml
overlay:
    - [<color>, [<lat>, <long>], <radius> <unit?>, <desc>]
    - [<color>, [<lat>, <long>], <radius> <unit?>, <desc>]
    ...
```

Each line in the list represents an overlay. Each overlay has the same format as the single-overlay syntax above.

Please note that due to the [[Glossary/YAML|YAML]] syntax, strings starting with `#` and entries with commas must be enclosed in quotes.

> [!note] Overlays are drawn in the order they are specified. 
> If a smaller overlay is obscured by a larger one, the smaller one will not be interactable.

````
```leaflet
overlay: [blue, [32, -89], 25 mi, 'This is my overlay!']
```
````

````
```leaflet
overlay:
  - ['rgb(255, 255, 0)', [32, -89], 25 km, 'This is also my overlay!']
  - ['#00FF00', [32, -89], 500 ft, 'This is a third overlay!']
```
````

### Editing overlays

Overlays directly drawn on the map can be edited. You can right-click on the overlay to change its radius and color or remove it.

### Overlays using note front matter

Overlays can also be created from notes using the `markerFile`, `markerFolder`, and `markerTag` parameters. 
The `filterTag` parameter can be used to filter files based on their tags.

The plugin scans the front matter of the notes and generates an overlay from a front matter `mapoverlay` parameter using the same syntax as above.

### Overlay tag

The overlay tag parameter allows you to automatically generate an overlay from a tag in a note's front matter.

For example:

````yaml
```leaflet
overlayTag: nearby
```
````

Note front matter:

```yaml
nearby: 50 km
```

### Overlay color

The overlay color tag specifies the default overlay color when drawing on the map or using the overlay tag parameter.

## Overlays with images

You can add image overlays to the map using the `imageOverlay` parameter in the code block.

The syntax for this parameter is:

````yaml
```leaflet
imageOverlay:
 - [ [[ImageFile|Optional Alias]], [Top Left Coordinates], [Bottom Right Coordinates] ]
 - [ [[ImageFile2|Optional Alias]], [Top Left Coordinates], [Bottom Right Coordinates] ]
 - ...
```
````

This adds an image overlay between the two coordinate bounds. If the coordinate bounds are not provided:

1.  On Image maps, the overlay covers the entire image.
2.  On Real maps, the overlay covers the initial map view.

You can toggle image overlays on or off using the layer control box in the top-right. 


If you provide an optional alias, the layer box will display the alias instead of the file name, similar to maps with multiple layers.

