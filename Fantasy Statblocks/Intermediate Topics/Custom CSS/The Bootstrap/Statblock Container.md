---
aliases: [.container, .statblock, .icons]
cover: 
description: "This page explains the "
image: 
permalink: statblocks/css/statblock-container
publish: true
tags: [Statblocks/Layout/xCSS/container, Statblocks/Layout/xCSS/icons, Statblocks/Layout/xCSS/statblock]
---

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #statblock/milestones/css-update

> [!files]- .container .statblock .icons Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
> 
> **CSS Version:** [Statblock Container CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/2-statblock-container.css)
> **SCSS Version**: [Statblock Container SCSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/scss/2-statblock-container.scss)

## Explanation

**`.container`** controls the size, shape, and rendering of the overall Statblock Container. Think of it like the canvas the statblock is painted onto.

**`.statblock`** further reaffirms any padding or margins needed for the .container's child elements.

**`.statblock :global (a)`** states that all links in the statblocks will follow the font style set in `var(--statblock-link-style)`.

**`.icons`** controls the positioning of the three vertical dots on the statblock that allow some of the additional functionality enabled within the [[Statblock Settings|Statblocks Configuration Settings]], such as resetting dice.

### Default Code

>[!code]- .container .statblock .icons CSS
> ```css
> 
> .statblock.yourlayoutname .statblock :global(a) {
> font-style: var(--statblock-link-style);
> }
>
> .statblock.yourlayoutname .container {
>   display: flex;
>   width: 100%;
>   margin: 0.25rem 0;
> }
> .statblock.yourlayoutname .container .statblock {
>   margin: 0 auto;
>   position: relative;
> }
> .statblock.yourlayoutname .container .icons {
>   position: absolute;
>   right: 0;
> }
> .statblock.yourlayoutname .container .icons .clickable-icon {
>   -webkit-app-region: no-drag;
>   background-color: transparent;
>   display: flex;
>   align-items: center;
>   justify-content: center;
>   padding: var(--size-2-2) var(--size-2-3);
>   cursor: var(--cursor);
>   border-radius: var(--clickable-icon-radius);
>   color: var(--icon-color);
>   opacity: var(--icon-opacity);
>   transition: opacity 0.15s ease-in-out;
>   height: auto;
> }
> .statblock.yourlayoutname .container .icons svg.svg-icon {
>   height: var(--icon-size);
>   width: var(--icon-size);
>   stroke-width: var(--icon-stroke);
> }
> ```
> 

---

>[!code]- .container .statblock .icons Nested SCSS
> ```scss
> .statblock.yourlayoutname {
>
>   .container {
>     display: flex;
>     width: 100%;
>     margin: 0.25rem 0;
> 
>     & .statblock {
>       margin: 0 auto;
>       position: relative;
> 		  & :global(a) {
> 		  font-style: var(--statblock-link-style);
> 		  }
>     }
> 
>     & .icons {
>       position: absolute;
>       right: 0;
> 
>       & .clickable-icon {
>         // Default Obsidian Setting
>         -webkit-app-region: no-drag;
>         background-color: transparent;
>         display: flex;
>         align-items: center;
>         justify-content: center;
>         padding: var(--size-2-2) var(--size-2-3);
>         cursor: var(--cursor);
>         border-radius: var(--clickable-icon-radius);
>         color: var(--icon-color);
>         opacity: var(--icon-opacity);
>         transition: opacity 0.15s ease-in-out;
>         height: auto;
>       }
> 
>       & svg.svg-icon {
>         height: var(--icon-size);
>         width: var(--icon-size);
>         stroke-width: var(--icon-stroke);
>       }
>     }
>   }
> }
> ```


