---
aliases: [Dice Callback]
description: The dice callback function in the Statblocks plugin expects an
permalink: statblocks/javascript/dice
publish: true
tags: [Statblocks/Callbacks/Dice]
---

# Dice Callbacks

The dice callback function in the plugin expects an array of strings or objects as its return [[value]]. These will be combined to create a text [[string]] along with any necessary dice rolls.

The expected format of the objects in the array is:

```js
interface DiceCallbackObject {
    text: string // string to be parsed into a dice roll
    original?: string // optional, will be placed after the dice roll in parenthesis
}
```

For example, if you wanted to create a fortune-telling monster that guesses the number of freckles a player has, the dice roll override and associated text could be:

```js
return ["The monster guesses you have: ", { text: "1d20 + 2" }, " freckles."];
```

This would render as: "The monster guesses you have *`dice:1d20 + 2`* freckles."

