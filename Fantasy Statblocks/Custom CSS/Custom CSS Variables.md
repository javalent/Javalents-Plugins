---
aliases: [Custom Variables]
description: "This page describes how to apply the default variables to a new Statblock."
permalink: statblocks/css/custom-root
publish: true
tags: [xCSS/Statblocks/Variables]
---

# Custom variables

In this page, we are going to customize those prior root variables, and potentially introduce some of our own. First, however, we need to know what system you are working with.

- Are you working with **CSS** only? You will be only using [[String|Plain Characters]] and [[Hyphen Variables|Dash Variable]].
- Are you working with **SCSS** or **SASS**? You can use plain characters, dash variables, and [[Sass Variables|Dollar Variables]].

There are many different schools of thought as to the best usages of Dash versus Dollar variables. Every designer will develop their own preferences. 

For Obsidian, you will want to keep the following in mind:
- Dash Variables work great at managing content that needs to change. For example: Any elements that change colors between `.theme-dark` and `.theme-light`.
- Dollar Variables are great at managing content that is static. For example, a border that is always going to be 4px wide.

## Reskinning 5e

I grabbed the most popular palette right now of of [coolors.co](http://coolors.co).

|          **CSS Hex**          |         **SCSS Hex**         |                **SCSS RGB**                |
|:-------------------------:|:------------------------:|:--------------------------------------:|
|   --charcoal: `#264653;`    |   $charcoal: `#264653;`    |    $charcoal: rgba(38, 70, 83, 1);     |
| --persian-green: `#2a9d8f;` | $persian-green: `#2a9d8f;` | $persian-green: rgba(42, 157, 143, 1); |
|    --saffron: `#e9c46a;`    |    $saffron: `#e76f51;`    |   $saffron: rgba(233, 196, 106, 1);    |
|  --sandy-brown: `#f4a261;`  |  $sandy-brown: `#f4a261;`  |  $sandy-brown: rgba(244, 162, 97, 1);  |
| --burnt-sienna: `#e76f51;`  | $burnt-sienna: `#e76f51;`  | $burnt-sienna: rgba(231, 111, 81, 1);  |

Now as an example, I am going to randomly assign these colors to the root variables of the 5e layout as is, and save it to a css file named `moop.css` in my `.obsidian/snippets` folder. 

> [!code]- Code Below the Collapse
> ```css
> :root {
>     --statblock-primary-color: #7a200d;
>     --statblock-rule-color: #2a9d8f;
>     --statblock-background-color: #264653;
>     --statblock-bar-color: #2a9d8f;
>     --statblock-bar-border-size: 1px;
>     --statblock-bar-border-color: #000;
>     --statblock-image-width: 75px;
>     --statblock-image-height: 75px;
>     --statblock-image-border-size: 2px;
>     --statblock-image-border-color: var(--statblock-primary-color);
>     --statblock-border-size: 1px;
>     --statblock-border-color: #e76f51;
>     --statblock-box-shadow-color: #2a9d8f;
>     --statblock-box-shadow-x-offset: 0;
>     --statblock-box-shadow-y-offset: 0;
>     --statblock-box-shadow-blur: 1.5em;
>     --statblock-font-color: var(--statblock-primary-color);
>     --statblock-font-weight: 700;
>     --statblock-content-font: "Noto Sans", "Myriad Pro", Calibri, Helvetica,
>         Arial, sans-serif;
>     --statblock-content-font-size: 14px;
>     --statblock-heading-font: "Libre Baskerville", "Lora", "Calisto MT",
>         "Bookman Old Style", Bookman, "Goudy Old Style", Garamond,
>         "Hoefler Text", "Bitstream Charter", Georgia, serif;
>     --statblock-heading-font-color: var(--statblock-font-color);
>     --statblock-heading-font-size: 23px;
>     --statblock-heading-font-variant: small-caps;
>     --statblock-heading-font-weight: var(--statblock-font-weight);
>     --statblock-heading-line-height: inherit;
>     --statblock-link-style: inherit;
>     --statblock-property-line-height: 1.4;
>     --statblock-property-font-color: var(--statblock-font-color);
>     --statblock-property-name-font-color: var(--statblock-font-color);
>     --statblock-property-name-font-weight: bold;
>     --statblock-section-heading-border-size: 1px;
>     --statblock-section-heading-border-color: var(--statblock-primary-color);
>     --statblock-section-heading-font-color: var(--statblock-font-color);
>     --statblock-section-heading-font-size: 21px;
>     --statblock-section-heading-font-variant: small-caps;
>     --statblock-section-heading-font-weight: normal;
>     --statblock-saves-line-height: 1.4;
>     --statblock-spells-font-style: italic;
>     --statblock-subheading-font-size: 12px;
>     --statblock-subheading-font-style: italic;
>     --statblock-subheading-font-weight: normal;
>     --statblock-table-header-font-weight: bold;
>     --statblock-traits-font-weight: bold;
>     --statblock-traits-font-style: italic;
> }
> ```

After ensuring the snippet is active, I go and check the the result…

>[!danger]- Hideousness Hiding To Protect Your Eyes
> ![statblock-bad-css.png|400](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/statblock-bad-css.png?raw=true)

Oh my that is horrible! Who can read that?! Worse yet, every single 5e Statblock is now going to look like this. The Great Old Ones have done it again. *Begone Aberrations!* This will not work at all. 

### Scoping the variables

Let's at least fix this to make sure it is scoped out to a specific layout. This will be what you named the custom layout inside Fantasy Statblocks, sluggified (dashes instead of spaces).

>[!example] For example, if you named your custom layout "Dragon Party", your css layout name will be `.dragon-party`. Also of note, you can apply this towards bestiary entries as well. `.statblock.ancient-black-dragon`

For the purposes of this guide, everything will be shown as `.statblock.yourlayoutname`. Replace `yourlayoutname` with the name of your layout.

Using the above example, that would make the full selector `.statblock.dragon-party`.

> [!code]- Code Below the Collapse
> ```css
> .statblock.yourlayoutname {
>     --statblock-primary-color: #7a200d;
>     --statblock-rule-color: #2a9d8f;
>     --statblock-background-color: #264653;
>     --statblock-bar-color: #2a9d8f;
>     --statblock-bar-border-size: 1px;
>     --statblock-bar-border-color: #000;
>     --statblock-image-width: 75px;
>     --statblock-image-height: 75px;
>     --statblock-image-border-size: 2px;
>     --statblock-image-border-color: var(--statblock-primary-color);
>     --statblock-border-size: 1px;
>     --statblock-border-color: #e76f51;
>     --statblock-box-shadow-color: #2a9d8f;
>     --statblock-box-shadow-x-offset: 0;
>     --statblock-box-shadow-y-offset: 0;
>     --statblock-box-shadow-blur: 1.5em;
>     --statblock-font-color: var(--statblock-primary-color);
>     --statblock-font-weight: 700;
>     --statblock-content-font: "Noto Sans", "Myriad Pro", Calibri, Helvetica,
>         Arial, sans-serif;
>     --statblock-content-font-size: 14px;
>     --statblock-heading-font: "Libre Baskerville", "Lora", "Calisto MT",
>         "Bookman Old Style", Bookman, "Goudy Old Style", Garamond,
>         "Hoefler Text", "Bitstream Charter", Georgia, serif;
>     --statblock-heading-font-color: var(--statblock-font-color);
>     --statblock-heading-font-size: 23px;
>     --statblock-heading-font-variant: small-caps;
>     --statblock-heading-font-weight: var(--statblock-font-weight);
>     --statblock-heading-line-height: inherit;
>     --statblock-property-line-height: 1.4;
>     --statblock-property-font-color: var(--statblock-font-color);
>     --statblock-property-name-font-color: var(--statblock-font-color);
>     --statblock-property-name-font-weight: bold;
>     --statblock-section-heading-border-size: 1px;
>     --statblock-section-heading-border-color: var(--statblock-primary-color);
>     --statblock-section-heading-font-color: var(--statblock-font-color);
>     --statblock-section-heading-font-size: 21px;
>     --statblock-section-heading-font-variant: small-caps;
>     --statblock-section-heading-font-weight: normal;
>     --statblock-saves-line-height: 1.4;
>     --statblock-spells-font-style: italic;
>     --statblock-subheading-font-size: 12px;
>     --statblock-subheading-font-style: italic;
>     --statblock-subheading-font-weight: normal;
>     --statblock-table-header-font-weight: bold;
>     --statblock-traits-font-weight: bold;
>     --statblock-traits-font-style: italic;
> }
> ```

There we are. Now my 5e Layouts will be safe from this.. thing. Let's fix these colors.

### How about some variety?

>[!screenshot]- Corrected Image Below The Collapse
> ![Cloaker|600](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/BnB-Coloration.png?raw=true)

---

>[!code]- Corrected Code Coloration Below The Collapse
> ```css
> .statblock.yourlayoutname {  
> /*! Default Variables */  
> --statblock-background-color: rgba(250, 250, 250, 1);  
> --statbest-background-image-size: 6.25em 6.25em;  
> --statblock-bar-border-color: rgba(98, 97, 108, 1);  
> --statblock-bar-border-size: 0.0625em;  
> --statblock-bar-color: rgba(98, 97, 108, 1);  
> --statblock-border-color: rgba(203, 206, 208, 1);  
> --statblock-border-size: 0.0625em;  
> --statblock-box-shadow-blur: 0;  
> --statblock-box-shadow-color: rgba(254, 254, 254, 1);  
> --statblock-box-shadow-x-offset: 0;  
> --statblock-box-shadow-y-offset: 0;  
> --statblock-content-font-size: 14px;  
> --statbest-content-font-weight: 300;  
> --statblock-font-color: rgba(79, 82, 93, 1);  
> --statblock-font-weight: 300;  
> --statblock-heading-font-color: rgba(79, 82, 93, 1);  
> --statblock-heading-font-size: clamp(1.25em, calc(20px + 1.5vw), 28px);  
> --statblock-heading-font-variant: small-caps;  
> --statblock-heading-font-weight: 700;  
> --statblock-heading-line-height: 1;  
> --statblock-image-border-color: rgba(78, 84, 94, 1);  
> --statblock-image-border-size: 0;  
> --statblock-image-height: 100%;  
> --statblock-image-width: 100%;  
> --statblock-primary-color: rgba(98, 97, 108, 1);  
> --statblock-property-font-color: rgba(79, 82, 93, 1);  
> --statblock-property-line-height: 1;  
> --statblock-property-name-font-color: rgba(79, 82, 93, 1);  
> --statbest-property-name-font-size: 16px;  
> --statblock-property-name-font-weight: bold;  
> --statblock-rule-color: rgba(98, 97, 108, 1);  
> --statblock-saves-line-height: 1.4;  
> --statblock-section-heading-border-color: rgba(98, 97, 108, 1);  
> --statblock-section-heading-border-size: 0.0625em;  
> --statblock-section-heading-font-color: rgba(79, 82, 93, 1);  
> --statblock-section-heading-font-size: clamp(17px, calc(18px + 0.8333vw), 20px);  
> --statblock-section-heading-font-variant: small-caps;  
> --statblock-section-heading-font-weight: 500;  
> --statblock-spells-font-color: rgba(79, 82, 93, 1);
> }
> ```
> 

Okay, I fixed the colors, but.. It just looks like a 5e reskin, yeah? It seems that just working on the variables is not going to cut it if we want to make a Statblock look like something unique. No, we need something else. Something extra. 

But it should be accessible. Maybe slightly challenging, but not so much that you would give up after five minutes, right?

What we need.. is a bootstrap! Lets go to [[Fantasy Statblocks/Custom CSS/The Bootstrap|CSS Boostrap]]!






