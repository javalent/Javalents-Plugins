---
aliases:
  - Custom Variables 2.0
description: This page goes over some custom variables for Fantasy Statblocks.
permalink: statblocks/css/variables-redux
publish: true
tags:
  - xCSS/Statblocks/Variables
---

# Variables Redux

>[!warning] This section is getting updated and should not be considered up-to-date \- Sigrunixia
> #Statblocks/Milestones/CSS-Update

> [!files]- Variables Bootstrap File
> If you have not downloaded the entire Bootstrap, you will need the individual files for this page.
> 
> **CSS Version:** [Statblock Container CSS](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/docs/statblock-bootstrap/css/2-statblock-container.css)

The default variables, as we learned in [[Fantasy Statblocks/Custom CSS/Default Variables|Default Variables]], are the ones that are built into Fantasy Statblocks to be read by default. 

We also learned in [[Fantasy Statblocks/Custom CSS/Custom Variables|Custom Variables]] that we need to limit overwrites of these variables to a specific layout name, or else they will effect every default layout. 

## Default Code

This code is applicable to CSS and SCSS users.

>[!code]- Variables Below
> ```css
> .statblock.yourlayoutname {  
> /* Default Variables             */
> --statblock-primary-color: #7a200d;  
> --statblock-rule-color: #922610;  
> --statblock-background-color: #fdf1dc;  
> --statblock-bar-color: #e69a28;  
> --statblock-bar-border-size: 1px;  
> --statblock-bar-border-color: #000;  
> --statblock-image-width: 75px;  
> --statblock-image-height: 75px;  
> --statblock-image-border-size: 2px;  
> --statblock-image-border-color: var(--statblock-primary-color);  
> --statblock-border-size: 1px;  
> --statblock-border-color: #ddd;  
> --statblock-box-shadow-color: #ddd;  
> --statblock-box-shadow-x-offset: 0;  
> --statblock-box-shadow-y-offset: 0;  
> --statblock-box-shadow-blur: 1.5em;  
> --statblock-font-color: var(--statblock-primary-color);  
> --statblock-font-weight: 700;  
> --statblock-content-font: "Noto Sans", "Myriad Pro", Calibri, Helvetica,  
> Arial, sans-serif;  
> --statblock-content-font-size: 14px;  
> --statblock-heading-font: "Libre Baskerville", "Lora", "Calisto MT",  
> "Bookman Old Style", Bookman, "Goudy Old Style", Garamond,  
> "Hoefler Text", "Bitstream Charter", Georgia, serif;  
> --statblock-heading-font-color: var(--statblock-font-color);  
> --statblock-heading-font-size: 23px;  
> --statblock-heading-font-variant: small-caps;  
> --statblock-heading-font-weight: var(--statblock-font-weight);  
> --statblock-heading-line-height: inherit;  
> --statblock-property-line-height: 1.4;  
> --statblock-property-font-color: var(--statblock-font-color);  
> --statblock-property-name-font-color: var(--statblock-font-color);  
> --statblock-property-name-font-weight: bold;  
> --statblock-section-heading-border-size: 1px;  
> --statblock-section-heading-border-color: var(--statblock-primary-color);  
> --statblock-section-heading-font-color: var(--statblock-font-color);  
> --statblock-section-heading-font-size: 21px;  
> --statblock-section-heading-font-variant: small-caps;  
> --statblock-section-heading-font-weight: normal;  
> --statblock-saves-line-height: 1.4;  
> --statblock-spells-font-style: italic;  
> --statblock-subheading-font-size: 12px;  
> --statblock-subheading-font-style: italic;  
> --statblock-subheading-font-weight: normal;  
> --statblock-table-header-font-weight: bold;  
> --statblock-traits-font-weight: bold;  
> --statblock-traits-font-style: italic;  
>   
> /* Any Custom Dash Variables Here */ 
>   
> }  
>   
> /* Feel Free to throw some variables into theme-dark */  
> /* or theme-light if you want to change it when the */
> /* obsidian theme changes  */
> .theme-dark .statblock.yourlayoutname {  
>   
> }  
>   
>   
> .theme-light { .statblock.yourlayoutname {  
>      
> }
> ```

