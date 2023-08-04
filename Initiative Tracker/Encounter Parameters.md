---
aliases:
  - Encounter Parameters
  - Parameters in Encounters
description: This page details the encounter parameters you can use for players
  and characters within Initiative Tracker.
permalink: it/encounter/parameters
publish: true
tags:
  - IT/Encounters
---

# Encounter Parameters

Each encounter can be customized using the following parameters:

````
```encounter
name: string     # Optional name of the encounter.
rollHP: boolean  # Override the global Roll HP setting.
party: string    # Name of the party to use, overriding the default party if set. Optional.
players: boolean | string | array # Filter which players to include in the encounter. Optional.
creatures: array # Array of creatures to include in the encounter. Optional.
```
````

## Name

The `name` parameter specifies an optional name for the encounter. This name will be displayed in Preview mode as well as in the Initiative Tracker when the encounter is launched.

## Roll HP

The `rollHP` parameter can be used to override the global Roll HP setting. If a creature in the encounter has the `hit_dice` property set, it will roll for HP when being added to the encounter.

## Party

The `party` parameter specifies what party to use for this encounter. If a default party is defined in settings, it will be used unless this parameter is provided. The `party` parameter always takes precedence over the `players` parameter.

## Players

The `players` parameter can be used to filter which players to include in the encounter. If the `players` parameter is omitted, all players will be added to the encounter.

You can use the following values for the `players` parameter:

-   `false` or `none`: No players will be added to the encounter.
-   `true` or omitting the parameter: All players will be added to the encounter.
-   An array of player names: Only players with matching names will be added to the encounter.

````
```encounter
players: false                          # No players will be added to the encounter.
players: none                           # Same as players: false
players: true                           # All players will be added. Same as omitting the parameter.
players:                                # Players will only be added to the encounter if they match the provided names.
 - Name
 - Name 2
```
````

## Creatures

For Creatures, refer to [[Initiative Tracker/Creatures and Encounters]].