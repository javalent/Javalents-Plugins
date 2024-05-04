---
aliases: [Dice Modifiers]
description: "Learn about the various modifiers that can be applied to dice rolls in the Obsidian dice roller plugin."
permalink: dice/modifiers
publish: true
tags: [Dice/Modifiers]
---

# Modifiers

Modifiers are a feature of the parser that allow you to modify basic number dice, and will be displayed in the tooltip alongside the roll result. Keep in mind that modifiers are only supported on basic number dice. 

> [!note] If a modifier requires a parameter, but none is provided, it will default to 1.

| Modifier                                      | Syntax         | Description                                                                                        |                                        |
| --------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [[Dice Roller/Intermediate/Modifiers/Min-Max  | Min Max]]      | `Xd[Y, Z]`                                                                                         | Roll a dice with minimum Y, maximum Z. |
| [[Dice Roller/Modifiers/Keep Highest]]        | `k{n}`/`kh{n}` | Keep highest `{n}` dice.                                                                           |                                        |
| [[Dice Roller/Modifiers/Keep Lowest]]         | `kl{n}`        | Keep lowest `{n}` dice.                                                                            |                                        |
| [[Dice Roller/Modifiers/Drop Lowest]]         | `dl{n}`        | Drop lowest `{n}` dice.                                                                            |                                        |
| [[Dice Roller/Modifiers/Drop Highest]]        | `dh{n}`        | Drop highest `{n}` dice.                                                                           |                                        |
| [[Dice Roller/Modifiers/Explode]]             | `!{n}`, `!i`   | Explode dice `{n}` times. If `i` is provided, will explode "infinitely" (capped at 100).           |                                        |
| [[Dice Roller/Modifiers/Explode and Combine]] | `!!{n}`, `!!i` | Same as explode, but exploded dice are summed in the display instead of being shown individually.  |                                        |
| [[Dice Roller/Modifiers/Re-roll]]             | `r{n}`, `ri`   | Re-roll a minimum dice `{n}` times. If `i` is provided, will re-roll "infinitely" (capped at 100). |                                        |
| [[Dice Roller/Modifiers/Sort]]                | `s(a)`, `sd`   | Sort results ascending or descending.                                                              |                                        |
| [[Dice Roller/Modifiers/Make Unique]]         | `u`            | Dice will be rerolled until all results are unique.                                                |                                        |
| [[Dice Roller/Modifiers/Custom Percent]]      | `XdX%`         | Customize the type of percent dice rolled.                                                         |                                        |

