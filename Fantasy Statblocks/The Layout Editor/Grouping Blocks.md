---
aliases: [Grouping Blocks, Group Block, Inline Group]
description: 
permalink: statblocks/layout/grouping
publish: true
tags: [Statblocks/Layout/Blocks/Groups]
---

# Grouping Blocks

## Group Block

>[!tip] Group Blocks can have optional CSS Classes added to them. See below for details!

> [!green]
> **+** **Type**: Organizational
> **+** **Encoding**: None
> **+** **CSS**:  [[Fantasy Statblocks/Custom CSS/The Bootstrap/Container Groups|.statblock-item-container]]

Group blocks allow several different types of blocks to be grouped together. Additional blocks can be added to the group block using the context menu (three dots), or by dragging blocks into the square.

The main benefit of this is for organisation, and for CSS Styling.

## Inline Group

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
> **+** **CSS**:  [[Fantasy Statblocks/Custom CSS/The Bootstrap/Container Groups|.statblock-item-container]]

The Inline Group allows you to further link different blocks together within a [[Fantasy Statblocks/The Layout Editor/Grouping Blocks#Group Block|Group Block]]. Inline blocks are like group blocks, but blocks grouped inside them will render next to each other instead of on top. Additional blocks can be added to the group block using the context menu (three dots), or by dragging blocks into the square.

As with the Group Block, the main benefit of this is for organisation, and for CSS Styling.

## Adding CSS Classes to Group Blocks

1. Within the layout editor, on a Group Block or Inline Group Block, click it's three-vertical dots to edit the property.
2. Once you have done so, you will be presented with a new pop-up window.

>[!screenshot]- Screenshot of Pop-Up Window
>![Pop-Up Window](https://github.com/javalent/fantasy-statblocks/blob/gh-pages/images/statblock/group-block-edit.png?raw=true)

3. Add the name of what you want to have your cssClass be called. You do not need to add the normal period (.) in front of it. 
4. One you hit the checkbox and the window closes, the cssClass has been applied and is ready to style. For an example of this styling in action, check out the [[Fantasy Statblocks/Custom CSS/Frequently Asked Snippets and Tips for Statblocks|FAST]].