---
aliases: [Dice Rollers Overview]
description: 
permalink: dice/overview
publish: true
tags: [Dice/Overview]
---

# Dice Roller Overview

Place a code block with your formula in your note (such as `` `dice: XdX` ``) and in preview mode it will be replaced with the result of the dice rolls. The result can then be re-rolled by clicking on it.

The parser supports addition, subtraction, multiplication, division, and exponents of an arbitrary number of dice or static numbers. Spaces are removed before the formula is parsed.

There is full order-of-operations support, so it can even nested into parentheses!

| Examples                                  |
|-------------------------------------------|
| `` `dice: 1d2` ``                         |
| `` `dice: 3d4 + 3` ``                     |
| `` `dice: 1d12 + 1d10 + 5` ``             |
| `` `dice: 3d4+3d4-(3d4 * 1d4) - 2^1d7` `` |

## Formulas

Dice formulas can be added in settings, allowing you to define aliases for commonly used rolls. 
This works for *all* dice types defined within .

## Faces

The faces can be supplied as either a raw number or as a `[min, max]` array.

Example: `` `dice: 1d[3,5]` `` will roll 1 die between 3 and 5.

## Omitting Values

Both the number of rolls and the faces can be omitted.

Roll will default to `1`.

Faces will default to `100`.

These defaults can be changed in settings.

## Percentile Dice

The parser supports percentile dice. `` `dice: Xd%` `` will roll X d100 dice.

For a custom percent (such as those used for Traveller's `1d66`), you can use `XdX%` - see [the percent modifier](#custom-percent-dice).

# Fudge/Fate Dice

Use `` `dice: XdF` `` to roll a fudge/fate dice. See [here](<https://en.wikipedia.org/wiki/Fudge_(role-playing_game_system)#Fudge_dice>) for more info on this type of dice.

# Fantasy AGE Stunt Dice

Use `` `dice: 1dS` `` to roll a Fantasy AGE stunt dice. The result will show the total roll and also the stunt points if successful.

## Tooltip

The result in preview mode has a tooltip that will appear when you hover over it.

It displays the formula used to calculate the result on the top line, and displays the calculated rolls on the bottom line.

## The Dice View

The plugin comes with a Dice View that can be added to the workspace.

If you have the [Open Dice View on Startup](#open-dice-view-on-startup) setting off or have closed the Dice View, it can be re-opened using the "Open Dice View" command in the command palette.

The Dice View has buttons for common D20 dice set, can be set to roll with advantage or disadvantage, and modifiers can be added.

Formulas can also just be written directly in the `Dice Formula` textbox. These formulas can be saved using the plus button under the text box for quick re-rolling.

## Graphical Dice

3D Dice can be rolled using the Dice View if [[Dice Roller/Dice Roller Settings#Always Render Dice|Always Render Dice]] is turned on in settings, or the [[Dice Roller/Dice Flags#Render and NoRender|Render and NoRender]] flag is used in the dice formula.

>[!note] Only the basic D20 set (D4, D6, D8, D10, D12, and D20) can be rolled graphically.

See [Graphical Dice](#graphical-dice-1) for settings.
