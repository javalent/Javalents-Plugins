---
aliases: [Inline Encounters]
description: This page details how to use inline encounters.
permalink: it/encounters/inline
publish: true
tags: [IT/Encounters]
---

# Inline encounters

The inline encounter syntax allows you to create encounters directly within your notes, without the need for an encounter block. The syntax is `` `encounter: <creatures>` `` where creatures are separated by commas.

For example, the following syntax creates an encounter with 3 Hobgoblins, 1d5 Goblins, and a custom monster:

`encounter: 3: Hobgoblin, 1d5: Goblin, Custom Monster`

You can also use the single-line array syntax to control creature stats and display names:
`encounter: [[Hobgoblin, Jim], 12, 13, 2, 25], 2: [[Hobgoblin, Jeff], 12, 13]`

Note that the inline encounter syntax does not support controlling players.

You can also use the inline encounter syntax in conjunction with the [[Dice Roller|Dice Roller]] plugin to create lookup tables that roll for an encounter. For example:

```markdown
| 1d2 | Encounter                                      |
| --- | ---------------------------------------------- |
| 1   | `encounter: 3: Hobgoblin, 1d5: Goblin, Custom` |
| 2   | `encounter: 2 Hobgoblin`                       |
^test-encounter

---

`dice: [[Encounter#^test-encounter]]`
```

In this example, rolling a 1 will generate an encounter with 3 Hobgoblins, 1d5 Goblins, and a custom monster, while rolling a 2 will generate an encounter with 2 Hobgoblins.