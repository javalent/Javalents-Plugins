---
aliases:
  - Re-Roll
  - Dice Re-Roll
description: Re-roll a minimum dice. If `{n}` or `{i}` is provided, it will
  continue re-rolling until a number greater than the minimum is rolled, or
  `{n}` attempts have been made.
permalink: dice/modifiers/re-roll
publish: true
tags:
  - Dice/Modifiers
---

# Re-roll

**Syntax**: `XdXr{n|i}`

Re-roll a minimum dice. If `{n}` or `{i}` is provided, it will continue re-rolling until a number greater than the minimum is rolled, or `{n}` attempts have been made.

Re-rolled dice *replace* their original roll, unlike explode, which *add* new rolls.

Re-rolled dice will display as `Xr` in the tooltip.

## Examples

| Formula       | Result          |
| ------------- | --------------- |
| `dice: 2d20r` | `[7r, 18] = 15` |
| `dice: 2d4r3` | `[3, 3r] = 6`   |
| `dice: 1d2ri` | `[2r] = 2`      |

