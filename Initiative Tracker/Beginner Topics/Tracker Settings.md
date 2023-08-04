---
aliases: [Initiative Tracker Settings, Tracker Settings]
cover: 
description: "Learn how to use the various settings available in the Initiative Tracker plugin, including how to manage players and homebrew creatures, and how to customize the initiative formula."
image: 
permalink: initiative-tracker/settings
publish: true
tags: [Initiative/Settings]
---

In the setting tab, you will find a range of options to manage homebrew creatures and players, in addition to modifying the formula for calculating initiative.

## Basic Settings

Under the "Basic Settings" section, there are three options:

### Display Beginner Tips

`Default: Enabled`

This option is enabled by default and displays instructions to help you get familiar with the workflow of the initiative tracker.

### Display Encounter Difficulty

`Default: Enabled`

Also enabled by default, this option calculates and displays the encounter difficulty based on the challenge rating of the creatures and the levels of the party members. 

The plugin will ignore any creatures and players without this information in the calculation.

### Roll Equivalent Creatures Together

`Default: Enabled`

This option, also enabled by default, causes equivalent creatures (i.e., creatures with the same HP, AC, and Name) to roll initiatives as a group.

## Battle

In the Battle section of the settings tab, you can modify various options related to combat and damage tracking.

### Clamp Minimum HP

`default: Enabled`

This setting clamps a creature's HP to 0 when its current HP would fall below 0 due to damage.

### Overflow Healing

`default: Ignore`

When healing exceeds a creature's maximum HP, you can set what happens to the excess healing using this option. 

-   **Ignore**: Any healing above the creature's max HP is ignored
-   **Temporary**: Any healing above the creature's max HP is added as temporary HP
-   **Current**: Any healing above the creature's max HP is added to the current HP total

### Automatic Unconscious Status Application

`Default: Enabled`

This option automatically applies the "Unconscious" status effect when a creature's HP falls below 0 due to damage.

### Additive Temporary HP

`Default: Disabled`

With this setting disabled, any temporary HP added to a creature will overwrite any existing temporary HP. Enabling this option allows temporary HP to stack.

### Roll for HP

If a creature has the `hit_dice` property set in the bestiary, enabling this option will automatically roll for HP.

### Logging

Enabling this option will activate a logging system to track actions taken during encounters. Each encounter will create a new log file.

### Log Folder

This is the folder where new log files will be saved.

## Players

This section lets you manage players that can be added to [Parties](https://chat.openai.com/c/37f7cf73-70f8-4bf2-bc84-3a476e51727a#parties).

If you haven't created any parties yet, all players added here will be considered part of a default party and added to new encounters.

### Players from Notes

When adding a new player, you can manually enter their data or base it on a note. The plugin will automatically sync the player's data with the note's frontmatter.

If you choose to add a player from a note, the frontmatter should be formatted like this:

```
---
hp: 23
ac: 17
modifier: 2
level: 2
---
```

All fields are optional.

#### Player Options

##### HP

The player's hit points.

##### AC

The player's armor class.

##### Modifier

The player's initiative modifier.

##### Level

The player's level.

## Parties

In the Parties section, you can create and manage different groups of players, known as parties. Each player can be a member of multiple parties.

When you create a new encounter, you can specify which party to use or use the default party. During the encounter, you can easily switch between parties, allowing you to quickly change which players are in combat.

For example, if you have two parties, "Party A" and "Party B", you can assign players to each party, and then choose which party to use (or both, your choice!) when running encounters.

## Encounters

This section covers settings related to the [[Initiative Tracker/Intermediate Topics/Encounter Builder|Encounter Builder]] and the XP system.

### Add Sidebar Shortcut

`Default: Enabled`

Disabling this setting will remove the encounter builder icon from the left side ribbon. Encounter builder will still be able to be triggered by the [Command Palette](https://help.obsidian.md/Plugins/Command+palette "Obsidian") or a Hotkey.

### Saved Encounters

When you save an encounter in either Encounter Builder or in the Initiative Tracker sidebar, your saved encounters can be found here for edit or export.

### XP System

> [!feature] This Feature was added in version 11.2.0.
 
Initiative tracker supports XP and difficulty calculations. Currently, it supports the following settings.
- DnD5e
- DnD5e [Lazy GM](https://slyflourish.com/the_lazy_encounter_benchmark.html)

## Statuses

In the Statuses section, you can add and manage different pre-defined statuses that can be applied to creatures during an encounter. For example, you could create a "Stunned" status that reduces a creature's movement speed and accuracy.

If any default statuses are deleted, you can re-add them by clicking the "Re-add Default Statuses" button. This button is only available if default statuses have been deleted.

## Plugin Integrations

This section covers the various integrations available with other Obsidian plugins.

### Sync Monsters from TTRPG Statblocks Plugin

`Default: Disabled`

Enabling this setting allows you to sync any homebrew creatures saved in the [[Fantasy Statblocks|Fantasy Statblocks]] plugin with this plugin.

### Initiative Formula

`Default: 1d20 + %mod%`

> [!warning] This setting can only be modified when the [[Dice Roller|Dice Roller]] plugin is installed.

This setting allows you to modify how a creature's initiative is calculated by the plugin. By default, the formula is set to `1d20 + %mod%`, where `%mod%` is a placeholder for the creature's initiative modifier. 

You can use any dice formula supported by the Dice Roller plugin to customize the initiative calculation.

### Integrate with Obsidian Leaflet

`Default: Disabled`

Enabling this setting allows you to use the [[Leaflet|Leaflet]] plugin as a battle map for encounters.
