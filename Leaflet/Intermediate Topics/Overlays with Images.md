---
aliases: [Leaflet Image Overlays, Image Overlays]
cover: 
description: "Add image overlays to your map to further highlight specific areas or points of interest."
image: 
permalink: leaflet/beginner/overlays-images
publish: true
tags: [Leaflet/Overlays/Images]
---

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

#Todo/Sigrunixia 