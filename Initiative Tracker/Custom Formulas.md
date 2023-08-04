---
aliases:
  - Creating Custom Formulas
  - Initiative Tracker Custom Formulas
description: This page details how to use custom formulas so you are not stuck
  with a simple 1d20 + mod.
permalink: it/formulas
publish: true
tags:
  - IT/Formulas
---

# Custom Formulas

As referenced in [[Initiative Tracker/Tracker Settings#Initiative Formula|Initiative Formula]], Initiative Tracker supports the ability to customise the formula used to determine initiative. 

Typically, this is in the form of `{number}d{number} + %mod1%`. However, some systems use different variations. For those, we need custom Formula Mods. 

## Shadowrun

> [!feature] This feature was added in Initiative Tracker Version 9.11.0

Initiative tracker supports the ability for encounters to have two Initiative Mods to assist with TTRPG's that utilise more complex initiatives. This feature will be expanded in the future.

We're going to use Shadowrun 5e+ for this example. In Shadowrun, there are two initiative modifiers. 
- The first modifier, called the `initiative modifier`, controls the additional modifier added after the dice roll. For this example, this will be called `%mod2%`.
- The second modifier, called the `initiative dice`, controls how many dice is rolled for that entity in the encounter. For this example, this will be called `%mod1%`.

>[!summary] In a make-believe scenario in future, the Metabanshee Blackout Blitz has a current initiative stat of `6/3`, this translates their dice roll to be `dice: 3d6 + 6`.

To accomplish this functionality within Initiative Tracker, we need to make use of `%Mod1%` and `%Mod2%` in the form of `[%mod1%, %mod2%]`.

1. Within Initiative Tracker settings, set the formula to be `%mod1%d6 + %mod2%`.
2. Set the creature initiatives with an array.
	1. In a code block, this would look like `[3, 6]`.
	2. In the sidebar modal, this would also be `[3, 6]`.

From there, Initiative functions as normal.


