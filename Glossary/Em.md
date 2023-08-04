---
aliases: [Em]
cover: 
description: "EM is a unit of measurement in CSS that is relative to the font size of the parent element."
image: 
permalink: glossary/em
publish: true
tags: [Glossary/CSS/Em]
---

EM is a unit of measurement in CSS that is relative to the font size of the parent element. For example 1em is equal to the font size of the parent element, which may be 14px, 16px, or any other pixel size. This makes it a versatile unit for adjusting font sizes and other dimensions relative to their context.

For example, let's say you have want to style the loot text of your statblock, which you gave the [[Key|Key]] name `loot`. It is a [[Core Blocks#Trait Block|Trait Block]], which gives it the parent of `.statblock-item-container`. By default, `.statblock-item-container` inherits the size of its font from `.statblock-content` which is **14px**. If you set the font-size of the loot element to 2em, the resulting font-size will be 28 pixels (2 times the font-size of the parent div).

>[!danger] EM Is Not Consistent
> It's important to note that when using em units, the dimensions of an element will be affected by the font-size of its parent element, which we demonstrated with `.statblock-item-container` and `.statblock-content`. This can make it more difficult to maintain consistent dimensions across an entire statblock. 
> 
> This is where the rem unit can come in handy, as it is based on the root element and allows for more consistent sizing.
