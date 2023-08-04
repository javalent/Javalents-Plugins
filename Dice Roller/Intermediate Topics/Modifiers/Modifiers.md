---
aliases: [Dice Modifiers]
cover: 
description: "Learn about the various modifiers that can be applied to dice rolls in the Obsidian dice roller plugin."
image: 
permalink: dice/modifiers
publish: true
tags: [Dice/Beginner/Modifiers]
---

Modifiers are a feature of the parser that allow you to modify basic number dice, and will be displayed in the tooltip alongside the roll result. Keep in mind that modifiers are only supported on basic number dice. 

> [!note] If a modifier requires a parameter, but none is provided, it will default to 1.

| Modifier                                                 | Syntax         | Description                                                                                        |
| -------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------- |
| [[Min-Max\|Min Max]]                           | `Xd[Y, Z]`     | Roll a dice with minimum Y, maximum Z.                                                             |
| [[Keep Highest]]                 | `k{n}`/`kh{n}` | Keep highest `{n}` dice.                                                                           |
| [[Keep Lowest]]                   | `kl{n}`        | Keep lowest `{n}` dice.                                                                            |
| [[Drop Lowest]]                   | `dl{n}`        | Drop lowest `{n}` dice.                                                                            |
| [[Drop Highest]]                 | `dh{n}`        | Drop highest `{n}` dice.                                                                           |
| [[Explode]]                           | `!{n}`, `!i`   | Explode dice `{n}` times. If `i` is provided, will explode "infinitely" (capped at 100).           |
| [[Explode and Combine]] | `!!{n}`, `!!i` | Same as explode, but exploded dice are summed in the display instead of being shown individually.  |
| [[Re-Roll]]                           | `r{n}`, `ri`   | Re-roll a minimum dice `{n}` times. If `i` is provided, will re-roll "infinitely" (capped at 100). |
| [[Sort]]                                 | `s(a)`, `sd`   | Sort results ascending or descending.                                                              |
| [[Make Unique]]                   | `u`            | Dice will be rerolled until all results are unique.                                                |
| [[Custom Percent]]        | `XdX%`         | Customize the type of percent dice rolled.                                                                                                    |

