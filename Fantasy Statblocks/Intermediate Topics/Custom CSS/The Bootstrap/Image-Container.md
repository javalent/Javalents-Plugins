---
aliases: [.image-container, .image, .image.pointer, img]
cover: 
description: 
image: 
permalink: statblocks/css/image-container
publish: true
tags: [Statblocks/Layout/xCSS/container/image]
---

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #statblock/milestones/css-update


> [!files]- .image-container, .image, .image.pointer, img Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
>
> **CSS Version:** [Statblock Item Container CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/5-container-groups.css)
> **SCSS Version:** [Statblock Item Container SCSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/scss/5-container-groups.scss)

The `.image-container` holds any [[Core Blocks#Image Block|Image Block]] that you create, including ones you give custom names such as *Token* or *Banner*. 

Because it is unlikely you will want to apply the same styling elements to every image, it is recommended that you only apply text styling to this parent container.

## Default Code

> [!code]- .image-container, .image, .image.pointer, img CSS
> ```css
> /** Related CSS */  
>  .workspace-leaf-content .image-container {  
> text-align: center;  
> }  
>   
> .statblock.layoutname .image-container {  
> text-align: center;  
> }  
> .statblock.layoutname .image-container .image {  
> width: var(--statblock-image-width);  
> height: var(--statblock-image-height);  
> }  
> .statblock.layoutname .image-container .image.pointer {  
> cursor: pointer;  
> }  
> .statblock.layoutname .image-container img {  
> object-fit: cover;  
> width: 100%;  
> height: 100%;  
> border-radius: 100%;  
> border: var(--statblock-image-border-size) solid var(--statblock-image-border-color);  
> object-position: center;  
> }
>```





