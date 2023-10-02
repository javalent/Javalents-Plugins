---
aliases: 
description: 
image: 
order: 
permalink: 
publish: true
tags: 
---

## Dark Mode

The `darkMode` parameter will invert the colors of the map using CSS. This is done by applying a `.dark-mode` CSS class to the map tile layer, and the following CSS:

```css
.leaflet-container .dark-mode {
    filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(
            0.3
        ) brightness(0.7);
}
```

Overriding this CSS in a custom snippet will allow for customization of the dark mode appearance. For a reference to the CSS `filter` property, please see [this article](https://developer.mozilla.org/en-US/docs/Web/CSS/filter).