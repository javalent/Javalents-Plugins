---
aliases:
  - Creatures and Encounters
  - Creatures
  - Initiative Tracker Creatures
description: The `creatures` parameter allows you to add additional creatures to
  the encounter, and it is the most complicated parameter.
permalink: it/encounters/creatures
publish: true
tags:
  - IT/Encounters
---

# Creatures and Encounters

> [!info] Looking for Players and Party Settings? Refer to [Encounter Parameters](Initiative%20Tracker/Encounter%20Parameters.md).

The `creatures` parameter allows you to add additional creatures to the encounter, and it is the most complicated parameter.

A basic creature is defined as an array with the syntax of `[name, hp, ac, initiative modifier, xp]`.

>[!note] Please note that hp, ac, the modifier, and xp are all optional.

````yaml
```encounter
creatures:
  - My Monster                          # 1 monster named My Monster will be added, with no HP, AC or modifier.
  - Goblin, 7, 15, 2                    # 1 goblin with HP: 7, AC: 15, MOD: 2 will be added.
  - Goblin, 5, 15, 2, 25                # 1 goblin with HP: 7, AC: 15, MOD: 2 worth 25 XP will be added.
```
````

Multiple creatures of the same type can be added using `X: [name, hp, ac, initiative modifier, xp]`, which will add `X` creatures:

````yaml
```encounter
creatures:
  - 3: Goblin, 7, 15, 2                 # 3 goblins with HP: 7, AC: 15, MOD: 2 will be added.
  - 2: Goblin, 5, 15, 2, 25             # 2 goblins with HP: 7, AC: 15, MOD: 2 worth 25 XP will be added.
```
````

You can *also* add multiple creatures by adding additional lines, which allows you to change HP, AC, and modifier values for different creatures:

````yaml
```encounter
creatures:
  - 2: Goblin, 7, 15, 2                 # 2 goblins with HP: 7, AC: 15, MOD: 2 will be added.
  - Goblin, 6, 15, 2                    # 1 goblin with HP: 6, AC: 15, MOD: 2 will be added.
  - Goblin, 9, 15, 2                    # 1 goblin with HP: 9, AC: 15, MOD: 2 will be added.
```
````

## Display Name

You can assign display names to creatures using different syntaxes as shown below:

````yaml
```encounter
creatures:
  - [[Hobgoblin, Bob]]                 # Adds 1 Hobgoblin with the display name Bob
  - [Hobgoblin, Jim]                   # Adds 1 Hobgoblin named Jim with 12 HP, 13 AC, +2 to initiative and worth 25 XP
    - 12
    - 13
    - 2
    - 25
  - [[Hobgoblin, Jim], 12, 13, 2, 25]  # Adds the same Hobgoblin named Jim defined in a single line
  - 2: [Hobgoblin, Jeff]               # Adds 2 Hobgoblins named Jeff with 12 HP and 13 AC
  - 2: [[Hobgoblin, Jim], 12, 13]      # Adds the same Hobgoblins named Jeff defined in a single line
  - 5:                                 # Adds 5 Hobgoblins named Ted with 12 HP and 13 AC
      creature: Hobgoblin
      name: Ted
      hp: 12
      ac: 13
  - 1d5:                               # Adds a random number (between 1 and 5) of Hobgoblins named Sarah with 12 HP and 13 AC
      creature: Hobgoblin
      name: Sarah
      hp: 12
      ac: 13
```
````

>[!note] Note that equivalent creatures will still be grouped together, but the display name will be taken into account when grouping them.

## Creatures Names Containing a Comma

Referencing creatures with a `,` in their name can be done as follows:

````yaml
```encounter
creatures:
  - 2: [["Rat, Giant"]]                     # 2 'Rat, Giant'
  - [["Rat, Giant", Snuggletooth], 12, 13]  # 1 'Rat, Giant' named Snuggletooth
                                            # with 12 HP, 13 AC
  -                                         # Snuggletooth but defined over multiple lines.
    - ["Rat, Giant", Snuggletooth]          
    - 12
    - 13
  - 1d5:                                    # 1d5 'Rat, Giant' named Snuggletooth
      creature: "Rat, Giant"                # with 12 HP and 13 AC.
      name: Sarah
      hp: 12
      ac: 13
```
````

You can also use an inline encounter for this:

`` `encounter: 2: [["Rat, Giant", Snuggletooth], 12, 13]` ``

## Using Dice Rolls

If you have the [[Dice Roller|Dice Roller]] plugin installed, you can specify the number of creatures by a dice roll. The plugin will group together creatures that are the same, and add a Dice Roller with the combined formula to the block.

![Dice Encounters in IT](https://github.com/javalent/initiative-tracker/blob/main/publish/images/dice-encounter.png?raw=true)

You can click the dice roller to re-roll the number of creatures. Note that this number is **not** saved permanently, but when you start the encounter, the number of creatures shown will be used.

## Creatures from the Bestiary

You can add creatures from your bestiary by their name. This includes the complete SRD creature list, as well as any homebrew creatures added in Fantasy Statblocks.

For example:

````yaml
```encounter
creatures:
  - 2: Goblin                           # 2 goblins with HP: 7, AC: 15, MOD: 2 will be added.
```
````

If the creature is from the SRD Bestiary, the plugin will auto-calculate its XP based on its challenge rating. Otherwise, if you created the creature in the [[Fantasy Statblocks|Fantasy Statblocks]] plugin, you can supply a CR or an XP for the creature.

## Setting Creatures as Allies

To set a creature as friendly, add the `, ally` flag after an individual or group.

````yaml
```encounter
creatures:
  - 2: Orc, ally                           # 2 Ally Orc will be created
```
````

> [!screenshot]- Screenshot of Allied and Friendly Orcs
> ![Friendly Orcs](https://github.com/javalent/initiative-tracker/blob/main/publish/images/encounter-block/friendly-creatures.png?raw=true)

## Setting Creatures as Friendly

To set a creature as friendly, add the `, friendly` flag after an individual or group.

````yaml
```encounter
creatures:
  - 2: Orc, friendly                           # 2 friendly Orc will be created
```
````

## Setting Creatures as Hidden

To set a creature as friendly, add the `, hidden` flag after an individual or group.

````yaml
```encounter
creatures:
  - 2: Orc, hidden                           # 2 hidden Orc will be created
```
````

> [!screenshot]- Screenshot of Hidden Orcs
> ![Hidden Orcs](https://github.com/javalent/initiative-tracker/blob/main/publish/images/encounter-block/hidden-creatures.png?raw=true)

## Setting Creatures as Players

To set a creature as a player, you will need to to make a the creature a player in Fantasy Statblocks. You can follow the instructions at [[Fantasy Statblocks/Statblock Codeblocks#Player|The Code Block]] to adjust this setting.

After that, the creature will appear in the [[Initiative Tracker/Tracker Settings]].


The creature will also appear in the Right Sidebar "Add a Creature" as a player.


>[!note] At this time, it is not possible to set a creature as a player within the encounter codeblock.