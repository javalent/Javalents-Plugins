---
aliases: [Dice Roller - Replacing Note Content, Dice-Mod, Dice Mod]
description: "Learn how to replace note content using the Dice Roller Plugin."
permalink: dice/replacing-content
publish: true
tags: [Dice/Saving]
---

# Dice-Mod

It is possible to tell the plugin to replace the file contents of the note with the calculated dice roll using the `dice-mod: <formula>` syntax.

The plugin will replace the contents of the note with the syntax:

`<formula> -> <full results> -> <combined results>`

Example:

221 => `3d100 + 12 -> [75, 20, 75] + 12 -> 182`

## Displaying Formula

By default, the plugin will display the formula along with the result.

This can be turned off globally by turning off `Add Formula When Modifying` in settings, or by appending the [[Dice Roller/Dice Flags]] `|noform` to a `dice-mod` roll.

## Replacing Blocks

If `dice-mod` is used on a [[Dice Roller/Section Rollers|Section Roller]], the plugin will attempt to find a [block id](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link+to+a+block+in+a+note "Obsidian") for the resulting section, so it can be embedded.

If a block id does not exist for that section, the plugin will attempt to create one for the section. This will modify the file being rolled.