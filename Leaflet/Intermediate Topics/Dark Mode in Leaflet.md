---
aliases: [Leaflet Dark Mode, Dark Mode in Leaflet]
cover: 
description: "How to invert the colors of Leaflet maps using CSS and enable dark mode."
image: 
permalink: leaflet/css/dark-mode
publish: true
tags: [Leaflet/xCSS]
---

## Dark Mode

To enable dark mode on Leaflet maps, add the `darkMode` parameter to the map creation code. This applies a `.dark-mode` CSS class to the map tile layer and inverts the colors using the following CSS:

### Change how Dark Mode Looks

You can customize the appearance of dark mode by overriding this CSS in a custom snippet. 

```css
.leaflet-container .dark-mode {
    filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(
            0.3
        ) brightness(0.7);
}
```

For more information on the `filter` CSS property used in the above CSS code, please refer to [Mozilla Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).