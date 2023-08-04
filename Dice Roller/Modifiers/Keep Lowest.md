---
aliases:
  - Keep Lowest
description: This page details the Keep Lowest functionality in Obsidian Dice Roller.
permalink: dice/modifiers/lowest-keep
publish: true
tags:
  - Dice/Modifiers
---

# Keep Lowest

**Syntax**: `XdXkl{n}`

Keeps lowest `{n}` rolls. `{n}` is optional, and will default to 1. Dropped dice will display as `Nd`.

## Example

| Formula         | Result                 |
| --------------- | ---------------------- |
| `dice: 2d20kl`  | `[7, 18d] = 7`         |
| `dice: 4d20kl2` | `[4, 12d, 15d, 3] = 7` |

