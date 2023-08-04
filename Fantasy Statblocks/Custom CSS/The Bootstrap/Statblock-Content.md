---
aliases:
  - .Statblock-Content
description: This page goes over Statblock Content in Fantasy Statblocks.
permalink: statblocks/css/statblock-content
publish: true
tags:
  - xCSS/Statblocks/statblock-content
---

# Statblock-Content

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #Statblocks/Milestones/CSS-Update


>[!files]- .Statblock-Content Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
>
> **CSS Version:** [Statblock Content CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/4-statblock-content.css)
> **SCSS Version:** [Statblock Content SCSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/scss/4-statblock-content.scss)

`.statblock-content` controls the overall sizing and rendering.

It acts as the parent to most other elements of the statblocks.

## Default Code

>[!code]- .Statblock-Content CSS
> ```css
> .statblock.yourlayoutname .statblock-content {
>     font-family: var(--statblock-content-font);
>     font-size: var(--statblock-content-font-size);
>     color: var(--statblock-font-color);
>     background-color: var(--statblock-background-color);
>     padding: 0.5em;
>     border: var(--statblock-border-size) var(--statblock-border-color) solid;
>     box-shadow: var(--statblock-box-shadow-x-offset)
>         var(--statblock-box-shadow-y-offset) var(--statblock-box-shadow-blur)
>         var(--statblock-box-shadow-color);
>     margin-left: 2px;
>     margin-right: 2px;
>     display: flex;
>     gap: 1rem;
> }
> 
> .statblock.yourlayoutname .statblock-content > .column {
>     width: var(--statblock-column-width);
> }
> ```

---

>[!code]- .Statblock-Content Nested SCSS
> ```scss
> .statblock.yourlayoutname {
>   & .statblock-content {
>     font-family: var(--statblock-content-font);
>     font-size: var(--statblock-content-font-size);
>     color: var(--statblock-font-color);
>     background-color: var(--statblock-background-color);
>     padding: .5em;
>     border: var(--statblock-border-size) var(--statblock-border-color) solid;
>     box-shadow: var(--statblock-box-shadow-x-offset) var(--statblock-box-shadow-y-offset) var(--statblock-box-shadow-blur) var(--statblock-box-shadow-color);
>     margin-left: 2px;
>     margin-right: 2px;
>     display: flex;
>     gap: 1rem;
> 
    > .column {
>         width: var(--statblock-column-width);
>     }
>   }
> }
> ```


