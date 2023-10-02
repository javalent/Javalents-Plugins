---
aliases: [Keep Highest]
description: This page details the Keep Highest functionality in Obsidian Dice Roller.
permalink: dice/modifiers/highest-keep
publish: true
tags: [Dice/Modifiers]
---

# Keep highest

**Syntax**: `XdXk{n}` / `XdXkh{n}`

Keeps highest `{n}` rolls. `{n}` is optional, and will default to 1. Dropped dice will display as `Nd`.

## Example

| Formula                          | Result                 |
| -------------------------------- | ---------------------- |
| `dice: 2d20k` / `dice: 2d20kh`   | `[7d, 18] = 18`        |
| `dice: 4d20k2` / `dice: 4d20kh2` | `[4d, 12, 15, 3d = 27` |

