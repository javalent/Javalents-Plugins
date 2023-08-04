---
aliases: [Dice Roller Settings, Dice Settings]
cover: 
description: "This page goes over the different settings that are available within Dice Roller"
image: 
permalink: dice/settings
publish: true
tags: [Dice-Roller/Settings]
---

## Generic Settings

### Globally Save Results

The plugin will attempt to save and reload the results for all dice rollers. This feature can be overridden using a `-` in the dice formula, like this: `dice-: …`.

> [!note] Note that the plugin attempts to save results of inline code blocks, which can be tricky and difficult. 
> The plugin has to remember where in the note each dice roll was, in order to properly save and reload the result. 
> 
> Any changes made to the note outside of Obsidian will cause the plugin to lose this state, and the next time the note is opened, it will be rerolled.

If you need a permanent result, it is more reliable to use a `dice-mod` roll instead, which modifies the underlying note, making the result permanent.

See [[Dice-Mod]].

## Dice Display

Customise how the dice roll results are displayed.

### Display Formula with Results

Show the formula used to calculate the result along with the actual result.

### Display Dice Button with Results

Display a dice button next to the results, indicating that the result is a dice roll.

> [!note] You can modify the appearance of the dice button using CSS.

### Add Formula when Using Modify Dice

Include the formula used to calculate the result when a `dice-mod` roll is written to the note, by enabling this option.

### Display Formula in Parenthesis After

Include the original dice roll **After** the roller results.. With this enabled, `dice: 1d20+5` becomes **22 (1d20+5)**. 

This can be disabled situationally with the [[Dice Roller/Intermediate Topics/Dice Flags#Noparens||NoParens]] dice flag.

## Dice Rollers

This section lets you adjust how Dice Rollers work.

### Default Face

If a formula doesn't specify a dice face, the plugin will use this number as the default.

For more info, see the Faces section.

### Round Results

Choose how to round results that include decimal numbers.

### Always Render Dice

By default, dice rolls in notes are always rendered. To turn off this behavior, add the `|norender` flag to your formula.

## Table Rollers

This section includes settings that let you control the behavior of table rollers.

### Display Lookup Table Roll

When this option is enabled, lookup table rolls will show the number that was rolled in addition to the result from the table.

## Section Rollers

These settings let you control the behavior of [[Dice Roller/Intermediate Topics/Section Rollers|section rollers]].

### Add Copy Button to Section Results

With this option enabled, section roller results will have a "**Copy Content**" button that lets you copy the note contents for that section to your clipboard.

## Tag Rollers

These settings allow you to configure how [[Dice Roller/Proficient Topics/Tag Rollers with Dataview|tag rollers]] behave.

### Roll All Files for Tags

When this option is turned on, a result from each file with the specified tag will be returned. Otherwise, a result from a random file with the tag will be returned. You can override this behavior by using the `dice: #tag|-` command.

### Always Return Links for Tags

By default, tag rollers behave like link rollers. Enabling this option makes tag rollers always return links, which is equivalent to using the `dice: #tag|link` command.

## Dice View

### Open Dice View on Startup

When enabled, the Dice View will open automatically on startup. Alternatively, you can manually open it with the "Open Dice View" command.

## Graphical Dice

### Display Graphics for Dice View Rolls

Determines whether rolls made in the Dice View will use graphical dice.

### Display Time for Dice Graphics

Controls how long dice graphics are displayed before fading away, specified in milliseconds. If left blank, a click is required to clear the dice.

### Dice Base Color

This setting controls the color of the actual dice bodies.

### Dice Text Color

This setting controls the color of the numbers on the dice.