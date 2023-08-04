---
aliases: [Root Variables, :root Variables]
cover: 
description: "This page provides an overview of the Default Variables for Statblocks."
image: 
permalink: statblocks/css/root
publish: true
tags: [Statblocks/Layout/xCSS/Variables]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > [[Custom CSS]] > *You Are Here*

---
Fantasy Statblocks is skinned by default to look like the Dungeons and Dragons 5th Edition Statblock. 

With that, it has a set of root variables it uses to fall back on those chosen attributes for a statblock in case that attribute is otherwise undefined.

We will use these variables for our purposes in creating your custom statblock.

## The Default Variables

I will take a moment to suggest some alternatives as you move forward.

1) Instead of using Hex colors `#7a200d` or HSL `hsl(12, 12, 12, 1)` use `rgba(122, 32, 13, 1)`. The last number in each is the alpha number.  Read Wildbit's post on the [limitations of HSL in design](https://wildbit.com/blog/accessible-palette-stop-using-hsl-for-color-systems).
2) Instead of px (pixels) for sizing units such as border width, use em or rem. If your default font across Statblocks is 16px, then 1em is 16px. This helps make your statblock more responsive (able to change with screen size changes)).
3) As such, leave `--statblock-content-font-size: 14px;` in pixels.
4) If you are well versed in SCSS and SASS, you know when to link a variable to a variable. For a beginner, avoid this `--statblock-image-border-color: var(--statblock-primary-color)`.  Does it save time when you want all colors to be the same? About three seconds. 
	1) Does it cause much confusion when trying to find an issue? Yes. 
	2) Does it create habits that some languages and validators yell at you about? Yes.

Now, we have these variables. Are you going to throw them in a .css file and call it a day? Nope! Its going to effect everything! We need a layout to pin this to. 

Keep this page open and handy, and move onto [[Custom Variables|Custom Variables]].

>[!code]- Root Variables Below
> ```css
> :root {
>     --statblock-primary-color: #7a200d;
>     --statblock-rule-color: #922610;
>     --statblock-background-color: #fdf1dc;
>     --statblock-bar-color: #e69a28;
>     --statblock-bar-border-size: 1px;
>     --statblock-bar-border-color: #000;
>     --statblock-image-width: 75px;
>     --statblock-image-height: 75px;
>     --statblock-image-border-size: 2px;
>     --statblock-image-border-color: var(--statblock-primary-color);
>     --statblock-border-size: 1px;
>     --statblock-border-color: #ddd;
>     --statblock-box-shadow-color: #ddd;
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
>     --statblock-link-style: italic; // Released in 3.2.2.
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
>```

## Breaking It Down

What does Each one of those things do? Well, let's explore!

| --**Variable**: **Value** | **Effect** | **Some Alternate Values or Notes** |
|:---:|:---:|---|
| --statblock-primary-color: #7a200d; | The Primary Text and Accent Color |  |
| --statblock-rule-color: #922610; | The Color of any Horizontal Rules |  |
| --statblock-background-color: #fdf1dc; | The Primary Statblock Background Color |  |
| --statblock-bar-color: #e69a28; | The Color of the Tapered Bar |  |
| --statblock-bar-border-size: 1px; | Thickness of the Statblock Bar Border |  |
| --statblock-bar-border-color: #000; | Statblock Bar Border Color |  |
| --statblock-image-width: 75px; | Default Image Width |  |
| --statblock-image-height: 75px; | Default Image Height |  |
| --statblock-image-border-size: 2px; | Thickness of Image Border |  |
| --statblock-image-border-color: var(--statblock-primary-color); | Color of Image Border |  |
| --statblock-border-size: 1px; | Generic Statblock Border Thickness |  |
| --statblock-border-color: #ddd; | Generic Statblock Border Color |  |
| --statblock-box-shadow-color: #ddd; | Statblock Container Box Shadow Color |  |
| --statblock-box-shadow-x-offset: 0; | Box Shadow X Size |  |
| --statblock-box-shadow-y-offset: 0; | Box Shadow Y Size |  |
|      --statblock-box-shadow-blur: 1.5em; | Box Shadow Blur Length |  |
|      --statblock-font-color: var(--statblock-primary-color); | Statblock Default Font Color |  |
|      --statblock-font-weight: 700; | Statblock Default Font Thickness | 400 == Normal, 700 == Bold |
|      --statblock-content-font: "Noto Sans" | The Font for all `p` elements |  |
|      --statblock-content-font-size: 14px; | The Body Font Size |  |
|      --statblock-heading-font: "Libre Baskerville" | The Heading Font | This Font should should be very easy to read and different from Content Font |
|      --statblock-heading-font-color: var(--statblock-font-color); | The Heading Font Color |  |
|      --statblock-heading-font-size: 23px; | The Heading Font Size for H1 | Consider using rem or em units.  |
|      --statblock-heading-font-variant: small-caps; | Presentation of Caps.  | See [Font Caps](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps) |
|      --statblock-heading-font-weight: var(--statblock-font-weight); | The Font Thickness |  |
|      --statblock-heading-line-height: inherit; | The default line height for headings | See [Line Height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |
|      --statblock-link-style: italic; | Styles Links in Statblocks to be Italic |  |
|      --statblock-property-line-height: 1.4; | Line Height for property blocks. |  |
|      --statblock-property-font-color: var(--statblock-font-color); | Property Block Text Font Color | `Name: Text` |
|      --statblock-property-name-font-color: var(--statblock-font-color); | Property Block Name Font Color |  |
|      --statblock-property-name-font-weight: bold; | Property Block Name Font Weight | Consider keeping this bold or Italic. |
|      --statblock-section-heading-border-size: 1px; | Border Size for Section Headers | Section Headers are created when choosing an optional header within certain Blocks |
|      --statblock-section-heading-border-color: var(--statblock-primary-color); | Border Color for Section Headers |  |
|      --statblock-section-heading-font-color: var(--statblock-font-color); | Font color for Section Headers |  |
|      --statblock-section-heading-font-size: 21px; | Font Size for Section Headers |  |
|      --statblock-section-heading-font-variant: small-caps; | Font Presentation for Section Headers |  |
|      --statblock-section-heading-font-weight: normal; | Font Weight for Section Headers |  |
|      --statblock-saves-line-height: 1.4; | Saves Block Line Height |  |
|      --statblock-spells-font-style: italic; | Spells Block Text Font Style | Normal will not effect the spell links |
|      --statblock-subheading-font-size: 12px; | Subheading Block Font Size |  |
|      --statblock-subheading-font-style: italic; | Subheading Block Font Style |  |
|      --statblock-subheading-font-weight: normal; | Subheading Block Font Weight |  |
|      --statblock-table-header-font-weight: bold; | Table Block Header Font Weight |  |
|      --statblock-traits-font-weight: bold; | Trait Block Font Weights |  |
|      --statblock-traits-font-style: italic; | Trait Block Font Styles | Normal makes text straight; Oblique is rarely supported |




