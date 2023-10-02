---
aliases: [Explode]
description: This page details the Explode functionality in Obsidian Dice Roller.
permalink: dice/modifiers/explode
publish: true
tags: [Dice/Modifiers]
---

# Explode

**Syntax**: `XdX!{n|i}`

Explode will roll an additional die for each maximum die roll. If `{n}` or `{i}` is provided, it will continue exploding until a number less than the maximum is rolled, or `{n}` attempts have been made. `{i}` is capped at 100 rolls to prevent abuse.

Exploded dice will display as `N!`.

## Examples

| Formula       | Result                                |
| ------------- | ------------------------------------- |
| `dice: 2d20!` | `[7, 20!, 8] = 35`                    |
| `dice: 2d4!3` | `[3, 4!, 4!, 2] = 13`                 |
| `dice: 1d1!i` | `[1!, 1!, 1!, … , 1!, 1!, 1] = 100` |

