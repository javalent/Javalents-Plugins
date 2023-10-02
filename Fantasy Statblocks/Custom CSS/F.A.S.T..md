---
aliases: [FASTBlock, Frequently Asked Snippets and Tips for Statblocks, FAST]
description: This Page presents some of the most commonly asked questions regarding Styling Statblocks
permalink: statblocks/fast
publish: true
tags: [xCSS/Statblocks]
---

# Frequently asked snippets and tips for statblocks

How do I….

## Make checkboxes inline?

```css
.statblock.yourlayoutname .statblock-markdown ul {
    margin: 0;
    display: inline-block;
}

or

.statblock.yourlayoutname .your-property-name ul {
    margin: 0;
    display: inline-block;
}
```

## Style multiple images within a statblock?

1. Place your [[Fantasy Statblocks/Editing Layouts/Core Blocks#Image Block|Image Blocks]] within their own [[Fantasy Statblocks/Editing Layouts/Grouping Blocks|Group Blocks]]. This can be a standard Group Block or an Inline Group Block.
2. Add a CSS Class to your Group Blocks. Instructions are on the Group Blocks Page linked in number 1.
3. Add the CSS code below to your CSS Layout. 
4. Replace `.yourlayoutname` with the name of your statblock layout.
5. Replace `yourgroupcssClass1` and `yourgroupcssClass2` with the CSS Class that you named your Group Blocks.
6. The last selector should always be `img`.

>[!hint] The code below shows a selector to a Group Block. If you use an Inline Group Block, you may need to add an additional Selector. Check the DOM!

>[!code]- Codeblock to Add to your Layout to Style Multiple Images
> ```css
> .statblock.yourlayoutname .statblock-item-container.image-container.yourgroupcssClass1 img {
>       width: 500px;
>       height: 250px;
>       border: var(--statblock-image-border-size) solid var(--statblock-image-border-color);
>       border-radius: 100%;
>       object-fit: cover;
>       object-position: center;
>     }
>     
> .statblock.yourlayoutname .statblock-item-container.image-container.yourgroupcssClass2 img {
>       width: calc(100% + 1em);
>       max-width: unset;
>       margin: -0.5em;
>       border: unset;
>       border-radius: unset;
>       object-fit: cover;
>       object-position: center;
>     }
> ```

## How do I make token images show faces?

This one is very simple!

```css
.statblock.yourlayoutnamehere .image img {
    object-position: center top;
}
```

Center top seems to be the common one that works, but depending on the face of the entity, you may need to do center right, or a different direction. 

Using an example of the 5e Statblock, you can further style it per enemy by using the following format. 

```css
.statblock.basic-5e-layout.mummy-lord, .statblock.basic-5e-layout.kobold .image img {
```

Each `monster` will need to be separated by a comma.