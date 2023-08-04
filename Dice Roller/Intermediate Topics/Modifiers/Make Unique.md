---
aliases: [Make Unique]
cover: 
description: 
image: 
permalink: 
publish: true
tags: []
---

**Syntax**: `XdXu`

When calculating the dice with the `u` modifier, the plugin ensures that all rolls are unique by preventing any two faces from having the same roll amount. To indicate that the formula generated an array of unique values, the plugin appends a `u` to any re-rolled numbers.

## Examples

| Formula      | Result                                |
| ------------ | ------------------------------------- |
| `dice: 8d8u` | `[7, 5, 3u, 8u, 1u, 4u, 6u, 2] -> 36` |
| `dice: 4d20u` | `4d20u -> [5, 17u, 11, 16] -> 49`                                      |

