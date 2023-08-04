---
aliases: [Customizing Bookmarked]
description: "Learn how to customize the appearance of Bookmarked in Obsidian by modifying the CSS."
image: 
order: 
permalink: bookmarked/customizing
publish: true
tags: [Prominent/Customizing]
---

To customize the appearance of Bookmarked Files in Obsidian, you can modify the CSS class `.prominent-decorated-file`. This class controls the layout and style of the Bookmarked Files pane in the Obsidian file explorer.

```css
.prominent-decorated-file {
    display: flex;
    align-items: center;
    margin-left: auto;
}
```

## Icon

To update the icon, you will need to specifically target the content of the CSS of `.promiment-decorated-file` or the content of a `::before` or `::after` pseudoselector. 

For example, below will replace the existing icon with your own.
```css
.prominent-decorated-file {
  visibility: hidden;
}

.prominent-decorated-file {
  visibility: visible;
  content: "svg-data";
}
```

### Changing Icon Location

#Todo/Sigrunixia 