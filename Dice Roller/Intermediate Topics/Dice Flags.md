---
aliases: [Dice Roller Flags]
cover: 
description: "Learn how to modify the behavior of the dice in the dice roller with flags."
image: 
permalink: dice/flags
publish: true
tags: [Dice-Roller/Flags]
---

Flags are special parameters that modify the behavior of the dice roller. You can use the following flags:

## Nodice

**Syntax**: `|nodice`

Adding `|nodice` to any dice roll will disable the display of the dice button in the results. You can also turn it off in the settings.

## Form and NoForm

**Syntax**: `|form` and `|noform`

These two flags allow you to toggle the display of the dice formula when rolling with dice-modifiers.

## Render and NoRender

**Syntax**: `|render` and `|norender`

These two flags control whether the dice results are displayed in the chat box. Adding `|render` will display the results, while `|norender` will suppress them.

## Avg

**Syntax**: `|avg`

Using the `|avg` flag at the end of a dice-roller formula initializes the result using the average value of the dice rolls. The tooltip displays the result as an average.

For example, if you roll `2d6+3|avg`, the result will be `10`, and the tooltip will show `average: [3.5,3.5]+3`.

After the initial roll, subsequent rolls use random dice roll results unless you use Alt-click to reroll, which will force the average to be used again.

## None

**Syntax**: `|none`

Using the `|none` flag at the end of a dice-roller formula initializes the result with an empty value. The tooltip indicates that the result is none.

After the initial roll, subsequent rolls display the normal result using random dice roll results unless you use Ctrl-click to reroll, which will force the result to be none again.


## Noparens

**Syntax**: `|noparens`

If you have the [Display Formula in Parenthesis After](Dice%20Roller/Beginner%20Topics/Dice%20Roller%20Settings.md#Display%20Formula%20in%20Parenthesis%20After) enabled in Dice Roller Settings, you can use the `|noparens` flag to disable the dice roll in parenthesis - **(1d20)** - for that roll only.
## Text

**Syntax**: `|text(my text)`

Using the `|text(my text)` flag at the end of a dice-roller formula displays your `my text` **instead** of a numeric result. You can click on it to trigger a roll, and the result <u>is only</u> visible in the tooltip.

For example, if you roll `1d20 + 2|nodice|text(Dexterity +2)`, the display shows `Dexterity +2`, and when you hover over it, you'll see a random saving throw result (click to reroll as usual).

### FAQ

>[!faq]- Can I use formulas within `text(my text)` such as `text(1d20-4)`? 
> At this time, Dice Roller does not support the ability for the text field to have its own formulas or conditionals.

>[!faq]- Is there a way to just add the button by itself without displaying the output or anything?
> Yes! `dice: 1d20|text( )`
> There is a simple space within the `()` field. Different operating systems may have to use `""` instead. 

