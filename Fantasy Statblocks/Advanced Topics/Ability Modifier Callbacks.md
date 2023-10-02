---
aliases: [Abilitiy Modifier Callbacks]
description: This page details some of the Ability Modifier Callbacks that can be used within Statblocks.
permalink: statblocks/javascript/modifier
publish: true
tags: [Statblocks/Callbacks/Ability-Modifier]
---

# Ability modifier callbacks

## Math adjustments

### Halve and round down

In order to round down, we need to use the `Math.Floor` function as this works in both whole and decimal number cases. 

This example halves 10, and returns `5`. 

```js
return Math.floor((stat - 10)/2)
```

However, if the number was not a nicely divided number such as 13…

```js
return Math.floor((stat - 13)/2)
```

It would initially calculate to `6.5` and then. round it down to `6`.