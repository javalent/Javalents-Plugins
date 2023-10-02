---
aliases: [Custom Percent]
description: This page details the usage of the Custom Percent modifier in
permalink: dice/modifiers/custom-percent
publish: true
tags: [Dice/Modifiers]
---

# Custom percent

**Syntax**: `XdX%`

Customize the type of percent dice rolled by specifying the number of faces for each digit. The plugin will roll a separate die for each digit and combine the results into a final percentage value.

## Examples

| Formula         | Result                   |
| --------------- | ------------------------ |
| `dice: 1d66%`   | `[6, 3] = 6,3`           |
| `dice: 1d7367%` | `[4, 2, 4, 1] = 4,2,4,1` |