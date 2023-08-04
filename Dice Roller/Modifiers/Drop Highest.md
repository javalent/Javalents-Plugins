---
aliases:
  - Drop Highest
description: This page details the Drop Highest functionality of Obsidian Dice Roller.
permalink: dice/modifiers/highest-drop
publish: true
tags:
  - Dice/Modifiers
---

# Drop Highest

**Syntax**: `XdXdh{n}``

Keeps lowest `{n}` rolls. `{n}` is optional, and will default to 1. Dropped dice will display as `Nd`.

## Example

| Formula         | Result                |
| --------------- | --------------------- |
| `dice: 2d20dh`  | `[7, 18d] = 7`        |
| `dice: 4d20dh2` | `[4, 12d, 15d, 3 = 7` |

