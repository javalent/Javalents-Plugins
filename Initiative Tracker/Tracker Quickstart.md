---
aliases:
  - Initiative Tracker Readme
  - Using The Initiative Tracker
  - Tracker Quickstart
description: Learn the basic controls of Initiative Tracker.
permalink: it/readme
publish: true
tags:
  - IT/Quickstart
---

# Tracker Quickstart

The Initiative Tracker plugin for Obsidian allows you to keep track of combat encounters in your tabletop roleplaying games. In this guide, you'll learn how to use the plugin to manage your encounters.

## Using the Initiative Tracker

To add monsters to the combat, click the `Add Creature` button. This opens a form where you can set the creature's name, HP, AC, and initiative.

### Creature View

If the [[Fantasy Statblocks|Fantasy Statblocks]] plugin (version 2.0+) is installed, creatures may be viewed by clicking on them in the initiative tracker. A new view will open up with a rendered statblock.

### Initiatives

Once all creatures in the combat have been added, you can modify initiatives by clicking on the initiative number and entering the new initiative.

### HP

By clicking on their HP, creatures can receive various modifications including taking damage, being healed, gaining temporary HP, or taking max HP damage. The temp HP and max HP modifiers both support the "-" symbol, allowing you to remove temp HP and restore or gain max HP.

#### Rolling HP

If a creature's `hit_dice` property is set (whether from the add menu or in the bestiary), there is an option to Roll for HP. You can set this globally in settings, per-encounter, or when adding creatures to a combat.

### AC

You can temporarily adjust a creature's Armor Class (AC) by typing directly into the `AC` field. This is useful for effects like the Shield spell or any other ability that temporarily modifies AC.

### Actions

To edit or remove creatures from the combat, use the `Actions` menu located to the right of each creature.

### Controls

Start combat by clicking the `play` button. The currently active creature will be displayed. Clicking `next` or `previous` will move to the next enabled combatant.

Initiatives can be re-rolled for all creatures in the combat by clicking the `Re-roll Initiatives` button.

Reset creatures' HP and status effects by clicking `Reset HP and Status`.

Start a new encounter (just player characters) by clicking `New Encounter`.

### Commands

The plugin registers several commands to Obsidian that can be assigned to hotkeys or used with the Command Palette (Ctrl / Cmd + P).

#### Open Initiative Tracker

If the initiative tracker view has been closed for any reason, use this command to add it back to the right pane.

#### Toggle Encounter

This command can be used to start or stop an encounter.

#### Applying Damage And Status Effects

Click on the creature's HP display to select them for damage and status effect application. This makes them appear in a separate table where application can be adjusted.

You can also right-click on the creature's HP display or click the creature's edit menu and select "Set HP/Status", or Ctrl-click a creature to open or add them to the table.

#### Next Combatant

If the encounter is active, use this command to make the next enabled combatant active (similar to clicking the `Next` button).

#### Previous Combatant

If the encounter is active, use this command to make the previous enabled combatant active (similar to clicking the `Previous` button).

## Tracker Menu

The Initiative Tracker has a tracker menu located in the top right of the view. From the tracker menu, you can perform several actions, such as creating a new encounter, resetting HP, or changing parties.

![Tracker-Menu](https://github.com/javalent/initiative-tracker/blob/main/publish/images/menu.gif?raw=true)

## New Encounter

Creating a new encounter clears any creatures from the previous encounter, resets HP and status effects, enables all party members, and rolls new initiatives.

## Reset HP & Status

Resetting HP and status effects restores all creature's (including party members) HP and status effects to their starting values. However, it does *not* roll new initiatives or re-enable disabled creatures.

### Add a Status

## Re-roll Initiatives

Re-rolling initiatives generates new initiative values for *all* creatures, including players.

## Switch Party

Switching the party replaces all players in the current encounter with the new party members. 

If a player is in both parties, they will receive a new initiative.


<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yOOEuWCXEFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Group and Ungroup Creatures

Grouping creatures with equivalent names and AC rolls them into a single initiative value.

## Saving Encounters

![float-right](https://raw.githubusercontent.com/valentine195/obsidian-initiative-tracker/master/assets/save-encounter.png)
If an encounter is in-progress (combat has been started), the plugin automatically tracks it and reloads the encounter state when Obsidian is re-opened. You can also save and load encounters by opening the initiative tracker menu and selecting "Save Encounter" or "Load Encounter". 

When you save an encounter, it saves a **snapshot** of the encounter at that moment. Any further changes to the encounter will not be saved, so you must save it again.

