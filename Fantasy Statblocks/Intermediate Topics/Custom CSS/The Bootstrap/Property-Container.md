---
aliases: [.property-container, .line, .statblock-markdown]
cover: 
description: 
image: 
permalink: statblocks/css/property-container
publish: true
tags: [Statblocks/Layout/xCSS/container/property]
---

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #statblock/milestones/css-update 
> 

>[!files]- .property-container, .line, .statblock-markdown Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
>
> **CSS Version:** [Property Container CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/6-property-container.css)
> **SCSS Version:** [Property Container CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/scss/6-property-container.scss)

Outside of the `.trait-container`, the `.property-container` is likely going to be the div container you interact with the most. 

Typically, as with any container element, you will likely limit those modifications towards *fonts*, *margin*, *padding*, and *display*. However, there may be some rare times you want to apply overarching stylization to a container, such as *box-shadow* or *border*.

## Default Code

> [!code] .property-container, .line, .statblock-markdown CSS
> ```css
> .statblock.yourlayoutname {
>   /* Custom Property Block Like This One Below */
> }
> .statblock.yourlayoutname .line {
>   line-height: var(--statblock-property-line-height);
>   display: block;
>   color: var(--statblock-property-font-color);
> }
> .statblock.yourlayoutname .line .saves-name {
>   margin: 0;
>   margin-right: 0.25em;
>   display: inline;
>   color: var(--statblock-property-name-font-color);
>   font-weight: var(--statblock-property-name-font-weight);
> }
> .statblock.yourlayoutname .statblock-markdown {
>   display: inline;
> }
> .statblock.yourlayoutname .statblock-markdown:global(p) {
>   display: inline;
> }
> .statblock.yourlayoutname .rare_01 {
>   color: rgb(255, 255, 255) !important;
>   font-size: 12px;
>   font-style: normal !important;
>   font-weight: 900 !important;
>   letter-spacing: 0.01em;
>   min-width: 4em;
>   margin: 0 var(--statblock-traits-gap) 0 0;
>   padding: 0.4em 1.1em 0.2em;
>   text-align: center;
>   text-transform: uppercase;
> }
> ```

---

> [!code] .property-container, .line, .statblock-markdown SCSS
> ```scss
> .statblock.yourlayoutname {
>   & .line {
>     line-height: var(--statblock-property-line-height);
>     display: block;
>     color: var(--statblock-property-font-color);
> 
>     & .saves-name {
>       margin: 0;
>       margin-right: 0.25em;
>       display: inline;
>       color: var(--statblock-property-name-font-color);
>       font-weight: var(--statblock-property-name-font-weight);
>     }
>   }
> 
>   & .statblock-markdown {
>     display: inline;
> 
>     &:global(p) {
> 
>       display: inline;
>     } 
>   }
> 
>   // Custom Property Blocks like this one Below
>   /* Custom Property Block Like This One Below */
>   & .rare_01 {
>     color: rgb(255, 255, 255) !important;
>     font-size: 12px;
>     font-style: normal !important;
>     font-weight: 900 !important;
>     letter-spacing: 0.01em;
>     min-width: 4em;
>     margin: 0 var(--statblock-traits-gap) 0 0;
>     padding: 0.4em 1.1em 0.2em;
>     text-align: center;
>     text-transform: uppercase;
>   }
> }
>```
