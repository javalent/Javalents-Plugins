---
aliases: [Admonition Commands]
cover: 
description: "This page details what commands Admonition registers by default."
image: 
permalink: admonition/beginner/commands
publish: true
tags: [Admonitions/Commands]
---

The plugin provides several commands in the [Command Palette](https://help.obsidian.md/Plugins/Command+palette "Obsidian") by default.

## Collapse and Expand All Admonitions in Note

If an open note has collapsible admonitions, these commands can collapse or expand all of them, respectively.

## Insert Admonition

This command opens a modal window to set the type, title, and collapse behavior of a new admonition. The plugin then generates the appropriate code block, which is inserted into the open editor.

## Admonition-Specific Commands

Custom commands can be registered for each custom admonition type by clicking the `Register Commands` button in [[Admonition Settings]].

Three commands will be registered for each type: `Insert <type> Callout`, `Insert <type>`, and `Insert <type> with Title`.

### Insert Callout

This command inserts the selected type as an Obsidian callout, along with any selected text.

### Insert

This command inserts the selected type as a code block admonition, along with any selected text.

### Insert With Title

This command inserts the selected type as a code block admonition with a `title:` parameter, along with any selected text. The cursor will be placed on the title line.

## Mermaid Graphs

Admonitions are compatible with Mermaid graphs, which are visual aids. However, there are some restrictions to keep in mind:

-   [>] Mermaid graphs cannot be combined with embeds or transclusions.
-   [>] Mermaid graphs do not function within admonitions that are set to collapse by default.
