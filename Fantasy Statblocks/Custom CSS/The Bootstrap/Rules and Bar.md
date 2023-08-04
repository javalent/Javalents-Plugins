---
aliases:
  - .bar
description: This page explains the Rules and Bar css in Fantasy Statblocks.
permalink: statblocks/css/rules-and-bar
publish: true
tags:
  - xCSS/Statblocks/Bar
---

# Rules and Bar

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #Statblocks/Milestones/CSS-Update

>[!files]- .bar Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
> - **CSS Version**: [Bar CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/3-bar-Content-Container.css)
> - **SCSS Version**: [Bar SCSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/scss/3-bar-Content-Container.scss) 

**`.bar`** controls the styling of any horizontal rule that does not fall under the .tapered-rule styling.

## Default Code

>[!code]- .bar CSS
> ```css
> .statblock.yourlayoutname .bar {
>   height: 5px;
>   background: var(--statblock-bar-color);
>   border: var(--statblock-bar-border-size) solid var(--statblock-bar-border-color);
>   z-index: 1;
>   width: auto;
> }
> .statblock.yourlayoutname .statblock-content-container {
>   /* This is a Div Container and only contains this variable */
>   --statblock-column-width: 400px;
> }
> ```

---

>[!code]- .bar Nested SCSS
> ```scss
> .statblock.yourlayoutname {
>   & .bar {
>     height: 5px;
>     background: var(--statblock-bar-color);
>     border: var(--statblock-bar-border-size) solid var(--statblock-bar-border-color);
>     z-index: 1;
>     width: auto;
>   }
> 
>   & .statblock-content-container {
>     // This element only contains this variable. This variable is adjusted from the javascript within Fantasy Statblocks.
>     /* This is a Div Container and only contains this variable */
>     --statblock-column-width: 400px;
>   }
> }
> ```