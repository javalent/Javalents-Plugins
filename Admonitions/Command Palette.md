---
aliases: [Admonition Commands]
description: This page details what commands Admonition registers by default.
permalink: admonition/beginner/commands
publish: true
tags: [Admonitions/Commands]
---

# Admonition commands

The plugin provides several commands in the [Command Palette](https://help.obsidian.md/Plugins/Command+palette "Obsidian") by default.

## Collapse and expand all admonitions in note

If an open note has collapsible admonitions, these commands can collapse or expand all of them, respectively.

## Insert admonition

This command opens a modal window to set the type, title, and collapse behavior of a new admonition. The plugin then generates the appropriate code block, which is inserted into the open editor.

## Admonition-specific commands

Custom commands can be registered for each custom admonition type by clicking the `Register Commands` button in [[Admonitions/Settings]].

Three commands will be registered for each type: `Insert <type> Callout`, `Insert <type>`, and `Insert <type> with Title`.

### Insert callout

This command inserts the selected type as an Obsidian callout, along with any selected text.

### Insert

This command inserts the selected type as a code block admonition, along with any selected text.

### Insert with title

This command inserts the selected type as a code block admonition with a `title:` parameter, along with any selected text. The cursor will be placed on the title line.

## Mermaid graphs

Admonitions are compatible with Mermaid graphs, which are visual aids. However, there are some restrictions to keep in mind:

-   [>] Mermaid graphs cannot be combined with embeds or transclusions.
-   [>] Mermaid graphs do not function within admonitions that are set to collapse by default.
