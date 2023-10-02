---
aliases: [Table Roller, Table Rollers, Dice Roller Table Roller]
description: "This page goes over how to add and edit table rollers within Obsidian."
permalink: dice/rollers/table
publish: true
tags: [Dice/Rollers]
---

# Table rollers

## Table roller overview

The Dice Roller may also be given a link to a table in a note, which it will read and return a random result from the table.

**Usage**:

In a note (such as `Note.md`), create a table & optionally give it a block id:

| Header |
| ------ |
| A      |
| B      |
| C      |
^block-id

Then, in the dice formula, use a wikilink to the block reference of the table:

`` `dice: [[Note^block-id]]` ``

The plugin will read the table and return a random result.

To return multiple elements, use a [dice formula](#dice-rollers) before the wikilink:

-   `` `dice: X[[Note^block-id]]` ``

-   `` `dice: 1d4+1[[Note^block-id]]` ``

-   `` `dice: Xd[[Note^block-id]]` ``

Note that, for backward compatibility reasons, `d` is interpreted as a `d1` and not as a `d100` like in regular dice formulas.

Once in preview mode, you may Ctrl - click on the result to open the block reference in a new pane.

### Multiple headers

If a table provided to the plugin has multiple headers, the plugin will return the entire row unless you specify the header to use:

| Header | Header 2 |
| ------ | -------- |
| A      | D        |
| B      | E        |
| C      | F        |

^block-id

`` `dice: [[Note^block-id]]|Header 2` ``

### Lookup tables

The dice roller can also be used as a lookup table by passing a block-id to a table with the following format:

```markdown
| dice: 1d20 | Heading  |
| ---------- | -------- |
| 1-2        | Option 1 |
| 3-4        | Option 2 |
| 5-10       | Option 3 |
| 11         | Option 4 |
| 13,14      | Option 5 |
| 15-20      | Option 6 |
```

**Requirements**:

1. The table must only be **two columns**.
2. The first column **must be a valid dice roll syntax**.

The Table roller will roll the supplied dice formula, and return the matching result.

The options can *also* be a roller (of any type). This allows you to nest rollers: for example, you could supply a reference to different treasure tables, and when the treasure table is returned, the roller will get a random result from that table.

Example:

```markdown
| dice:1d% | Result                                 |
| -------- | -------------------------------------- |
| 01–50    | Nothing                                |
| 51–60    | `dice: [[Encounters^easy-encounters]]` |
| 61–100   | `dice: [[Encounters^hard-encounters]]` |

^encounter

`dice: [[ThisNote^encounter]]`
```

### 2d Table rollers

Adding `|xy` to the end of a table roller will return a random table cell (not row) from the table, *unless there is a column named xy*.