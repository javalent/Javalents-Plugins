---
aliases: [Encounter Tables]
description: This page details how to create and use basic Encounter Tables
permalink: it/encounter/tables
publish: true
tags: [IT/Encounters]
---

# Encounter tables

An encounter table is a way to define [Multiple Encounters](Initiative%20Tracker/Multiple%20Encounters.md) in a table format using the `encounter-table` [Code Block](Glossary/Code%20Block.md).

Each encounter defined using the multiple encounters syntax will be added to the table as a row. The encounter table supports all the parameters shown in the [[Initiative Tracker/Encounter Parameters|Encounter Parameters]] section.

Here's an example of an encounter table:

````
```encounter-table
name: Goblin Ambush
creatures:
- Goblin
- 2: Hobgoblin
- Bugbear

---

name: Bandit Attack
creatures:
- Bandit
- Bandit Captain

---

name: Undead Foes
creatures:
- 2: Skeleton
- Zombie
- Ghoul
````

![encounter table](https://github.com/javalent/initiative-tracker/blob/main/publish/images/encounter-block/encounter-table.PNG?raw=true)

When you add an encounter table to a note, it will display as a table with one row per encounter, showing the name of the encounter and the number and type of [[Initiative Tracker/Creatures and Encounters|creatures]] in each encounter. 

If there is a party loaded, it will also list the difficulty of the encounter.

You can click on the name of an encounter to launch it in the initiative tracker.