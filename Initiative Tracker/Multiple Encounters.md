---
aliases:
  - Multiple Encounters
description: This page details how to use multiple encounters in Initiative Tracker.
permalink: it/encounters/multiple
publish: true
tags:
  - IT/Encounters
---

# Multiple Encounters

A multiple encounter table is as simple as adding a horizontal line.

````yaml
```encounter
name: Goblin Charge
creatures:
 - Hobgoblin
 - 3: Goblin

---

name: Goblin Camp
creatures:
 - 3: Hobgoblin
 - Goblin

```
````

This code block shows an example of how to include multiple encounters within one encounter code block using the `---` separator. Each encounter can have its own name and set of creatures.

For example, the first encounter is named "Goblin Charge" and contains a Hobgoblin and three Goblins, while the second encounter is named "Goblin Camp" and contains three Hobgoblins and one Goblin.