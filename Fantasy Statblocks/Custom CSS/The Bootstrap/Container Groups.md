---
aliases:
  - .statblock-item-container
description: This page goes over container groups in Fantasy Statblocks.
permalink: statblocks/css/container-groups
publish: true
tags:
  - xCSS/Statblocks/statblock-item-container
---

# Container Groups

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #Statblocks/Milestones/CSS-Update



>[!files]- .statblock-item-container Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
>
> **CSS Version:** [Statblock Item Container CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/5-container-groups.css)

`.statblock-item-container` and its children control the *div* size of the child elements that sit within them. If the `.container` is the canvas for `.statblock`, then `.statblock-item-container` is the thick, black border around individual objects and people.

Furthermore, the suffix containers you see, match up to the different blocks available within Statblocks. 

## Container Groups

### Group Container

- `.group-container` controls the div element of all [[Fantasy Statblocks/The Layout Editor/Grouping Blocks#Group Block|Group Block]].

### Heading Container

- `.heading-container` controls the div element of all [[Fantasy Statblocks/The Layout Editor/Core Blocks#Heading Block|Heading Block]].

### Inline Container

- `.inline-container` controls the div element of all [[Fantasy Statblocks/The Layout Editor/Grouping Blocks#Inline Group|Inline Group]].

### Image Container

- `.image-container` controls the div elements of all [[Fantasy Statblocks/The Layout Editor/Core Blocks#Image Block|Image Block]].

### Property Container

- `.property-container` controls the div elements of all [[Fantasy Statblocks/The Layout Editor/Core Blocks#Property Line Block|Property Line]] blocks.

### Rule Container

- `.rule-container` controls the div elements of all [[Fantasy Statblocks/The Layout Editor/The Layout Editor#Block Options|Horizontal Rules]] that are enabled within each block. Also see [[Fantasy Statblocks/Custom CSS/The Bootstrap/Rules and Bar|.bar]].

### Subheading Container

- `.subheading-container` controls the div element of all [[Fantasy Statblocks/The Layout Editor/Core Blocks#Subheading Block|Subheading Block]].

## Default CSS Code

>[!code]- .statblock-item-container CSS
> ```css
> .statblock.yourlayoutname .statblock-item-container {
>   margin-bottom: 0.25rem;
> }
> .statblock.yourlayoutname .statblock-item-container .statblock-item-inline {
>   display: flex;
>   justify-content: space-between;
> }
> .statblock.yourlayoutname .statblock-item-container.inline-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.group-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.heading-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.subheading-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.image-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.rule-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.property-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.traits-container {
>   
> }
> .statblock.yourlayoutname .statblock-item-container.statblock-trait-prop {
>   
> }
> .statblock.yourlayoutname .flex-container {
>   display: flex;
>   justify-content: space-between;
>   align-items: center;
> }
> ```

