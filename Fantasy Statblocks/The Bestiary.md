---
aliases: [The Bestiary]
description: This page details how to handle the creatures within the Bestiary
permalink: statblocks/readme/bestiary
publish: true
tags: [Statblocks/General/Bestiary]
---

# The bestiary

The statblock plugin contains a library of creatures that can be used in statblocks and other plugins, such as the [[Initiative Tracker|Initiative Tracker]]. 

## Adding to the bestiary

### Manually saving an entry

You can manually save a custom entity to the bestiary by creating a statblock [[Glossary/Code Block|Codeblock]] in a note and defining the creature within it. You have the option of creating a brand new entity from scratch or modifying an existing entity in the bestiary by overriding its fields.

Once you have created and rendered the statblock for your entity, you can save it to the bestiary by clicking on the menu icon in the top right corner of the statblock and selecting "Save to Bestiary".

### Creating creatures in frontmatter

When using [[YAML]] syntax, a statblock created using the statblock code block can be added to a note's frontmatter. 

#### Entities in frontmatter

To enable parsing of frontmatter for custom monsters, the note must have a `statblock: true` parameter in its frontmatter, and the "[[Fantasy Statblocks/Plugin Settings#Parse Frontmatter For Creatures|Parse Frontmatter in Notes]]" setting must be enabled, or the corresponding command in [Commpand Palette](https://help.obsidian.md/Plugins/Command+palette "Obsidian") must be used.

In addition to the statblock, the note must also have a name parameter in the frontmatter to save the creature. All other fields are optional. Once the creature is located in the note's frontmatter, it is automatically added to the bestiary and synced with the note content.

If the statblock field is removed, set to `statblock: false`, or if the note is deleted, the creature will be removed from the bestiary as well.

>[!code]- Markdown Note Example of a Frontmatter Creature
>````markdown
> ---
> statblock: true
> columns: 2
> forcecolumns: true
> layout: Basic Pathfinder 2e Layout
> source: "B1"
> name: "Adult Blue Dragon"
> level: "Creature 13"
> alignment: "LE"
> size: "Huge"
> trait_03: "Dragon"
> trait_04: "Electricity"
> modifier: 24
> perception:
>   - name: "Perception"
>     desc: "Perception +24; __darkvision__, __imprecise scent 60__;"
> languages: "Auran, Common, Draconic, Jotun; "
> skills:
>   - name: "Skills"
>     desc: "__Acrobatics__: +22 (1d20+22); __Arcana__: +25 (1d20+25); __Deception__: +26 (1d20+26); __Diplomacy__: +26 (1d20+26); __Intimidation__: +24 (1d20+24); __Society__: +23 (1d20+23); __Stealth__: +20 (1d20+20); __Survival__: +22 (1d20+22); "
> abilityMods: [6, 3, 4, 4, 3, 5]
> abilities_top:
>   - name: "Sound Imitation"
>     desc: "  The dragon can mimic any sound it has heard. It must succeed at a [[compendium/skills.md#Deception|Deception]] check with a +4 circumstance bonus to do so."
> abilities_mid:
>   - name: "Frightful Presence"
>     desc: " ([[aura]], [[emotion]], [[fear]], [[mental]]);  90 feet, DC 32."
>   - name: "Wing Deflection"
>     desc: "⬲ __Trigger__ The dragon is targeted with an attack. __Effect__  The dragon raises its wing, gaining a +2 circumstance bonus to AC against the triggering attack. If the dragon is Flying, it descends 10 feet after the attack is complete."
> abilities_bot:
>   - name: "Breath Weapon"
>     desc: "⬺ ([[arcane]], [[electricity]], [[evocation]]);  The dragon breathes lightning that deals 9d12 (9d12) electricity damage in a 100-foot line (DC 33 basic Reflex save). It can't use Breath Weapon again for 1d4 (1d4) rounds."
>   - name: "Desert Thirst"
>     desc: " ([[arcane]], [[transmutation]]);  When casting create water, the dragon can attempt to destroy liquid instead of creating it, turning an equal amount of liquid into sand. This destroys liquid magic or alchemical items if they're of a lower level than the dragon (a creature can attempt a DC 32 Will save to protect all liquids in its possession). This doesn't affect the liquids in a creature's body."
>   - name: "Draconic Frenzy"
>     desc: "⬺  The dragon makes two claw [[Strike|Strikes]] and one horns [[Strike]] in any order."
>   - name: "Draconic Momentum"
>     desc: "  The dragon recharges its Breath Weapon whenever it scores a critical hit with a [[Strike]]."
> speed: 40 feet, burrow 20 feet, fly 150 feet
> ac: 34
> armorclass:
>   - name: AC
>     desc: "34; __Fort__: +24 (1d20+24); __Ref__: +23 (1d20+23); __Will__: +23 (1d20+23);"
> hp: 260
> health:
>   - name: HP
>     desc: "260;  __Immunities__ electricity, paralyzed, sleep;"
> attacks:
>   - name: Melee
>     desc: "⬻ jaws +27 ([[electricity]], [[magical]], [[reach|reach 15 feet]]); __Damage__ 3d8+12 (3d8+12) piercing plus 1d12 (1d12) electricity"
>   - name: Melee
>     desc: "⬻ claw +27 ([[magical]], [[agile]], [[reach|reach 10 feet]]); __Damage__ 3d8+12 (3d8+12) slashing"
>   - name: Melee
>     desc: "⬻ tail +25 ([[magical]], [[reach|reach 20 feet]]); __Damage__ 3d8+10 (3d8+10) bludgeoning"
>   - name: Melee
>     desc: "⬻ horns +25 ([[magical]], [[reach|reach 15 feet]]); __Damage__ 2d8+10 (2d8+10) piercing"
> spellcasting:
>   - name: "Arcane Innate Spells"
>     desc: "DC 33; __Cantrips (6th)__ [[ghost-sound|ghost sound]]; __1st__ [[create-water|create water]] at will; see desert thirst; __6th__ [[illusory-creature|illusory creature]], [[illusory-object|illusory object]], [[ventriloquism]] (at will);"
> sourcebook: "_Bestiary_, page 108."
> ---
> 
> 
> Note Content Here
> 
> ```statblock
> creature: Adult Blue Dragon
> ```
>````


>[!red] Advanced Configuration
> This method of storing and utilizing your manually created Bestiary items is recommended for advanced Obsidian users only. 

#### Entities in code blocks

If the frontmatter specifies `statblock: inline` and "[[Fantasy Statblocks/Plugin Settings#Parse Frontmatter For Creatures|Parse Frontmatter in Notes]]" setting is enabled, then the first statblock in the note will be automatically registered in the plugin as if its YAML had been copied into the frontmatter.

>[!green] Recommended Setting
> This is the recommended way of storing and utilizing your manually created Bestiary items. 
> There are more possible conflicts and complications when using the [[Fantasy Statblocks/The Bestiary#Entities in Frontmatter|Entities in Frontmatter]] approach.
>
>Furthermore, with [Metadata Improvements](https://trello.com/b/Psqfqp7I/obsidian-roadmap "Obsidian") currently in the works, this is the most future-proofed method.
> %% #Obsidian/Roadmap-Check %%


> [!code]- Markdown Note Example of Codeblock Creature
>  ````markdown
>  ---
> obsidianUIMode: preview
> noteType: pf2eMonster
> aliases: "Adult Blue Dragon"
> tags: 
>   - pf2e/creature/type/dragon
>   - pf2e/creature/level/13
> statblock: inline
> name: "Adult Blue Dragon"
> level: 13
> ---
> 
> ```statblock
> columns: 2
> forcecolumns: true
> layout: Basic Pathfinder 2e Layout
> source: "B1"
> name: "Adult Blue Dragon"
> level: "Creature 13"
> alignment: "LE"
> size: "Huge"
> trait_03: "Dragon"
> trait_04: "Electricity"
> modifier: 24
> perception:
>   - name: "Perception"
>     desc: "Perception +24; __darkvision__, __imprecise scent 60__;"
> languages: "Auran, Common, Draconic, Jotun; "
> skills:
>   - name: "Skills"
>     desc: "__Acrobatics__: +22 (1d20+22); __Arcana__: +25 (1d20+25); __Deception__: +26 (1d20+26); __Diplomacy__: +26 (1d20+26); __Intimidation__: +24 (1d20+24); __Society__: +23 (1d20+23); __Stealth__: +20 (1d20+20); __Survival__: +22 (1d20+22); "
> abilityMods: [6, 3, 4, 4, 3, 5]
> 
> abilities_top:
>   - name: "Sound Imitation"
>     desc: "  The dragon can mimic any sound it has heard. It must succeed at a [[compendium/skills.md#Deception|Deception]] check with a +4 circumstance bonus to do so."
> abilities_mid:
>   - name: "Frightful Presence"
>     desc: " ([[aura]], [[emotion]], [[fear]], [[mental]]);  90 feet, DC 32."
>   - name: "Wing Deflection"
>     desc: "⬲ __Trigger__ The dragon is targeted with an attack. __Effect__  The dragon raises its wing, gaining a +2 circumstance bonus to AC against the triggering attack. If the dragon is Flying, it descends 10 feet after the attack is complete."
> abilities_bot:
>   - name: "Breath Weapon"
>     desc: "⬺ ([[arcane]], [[electricity]], [[evocation]]);  The dragon breathes lightning that deals 9d12 (9d12) electricity damage in a 100-foot line (DC 33 basic Reflex save). It can't use Breath Weapon again for 1d4 (1d4) rounds."
>   - name: "Desert Thirst"
>     desc: " ([[arcane]], [[transmutation]]);  When casting create water, the dragon can attempt to destroy liquid instead of creating it, turning an equal amount of liquid into sand. This destroys liquid magic or alchemical items if they're of a lower level than the dragon (a creature can attempt a DC 32 Will save to protect all liquids in its possession). This doesn't affect the liquids in a creature's body."
>   - name: "Draconic Frenzy"
>     desc: "⬺  The dragon makes two claw [[Strike|Strikes]] and one horns [[Strike]] in any order."
>   - name: "Draconic Momentum"
>     desc: "  The dragon recharges its Breath Weapon whenever it scores a critical hit with a [[Strike]]."
> 
> speed: 40 feet, burrow 20 feet, fly 150 feet
> 
> ac: 34
> armorclass:
>   - name: AC
>     desc: "34; __Fort__: +24 (1d20+24); __Ref__: +23 (1d20+23); __Will__: +23 (1d20+23);"
> hp: 260
> health:
>   - name: HP
>     desc: "260;  __Immunities__ electricity, paralyzed, sleep;"
> 
> 
> attacks:
>   - name: Melee
>     desc: "⬻ jaws +27 ([[electricity]], [[magical]], [[reach|reach 15 feet]]); __Damage__ 3d8+12 (3d8+12) piercing plus 1d12 (1d12) electricity"
>   - name: Melee
>     desc: "⬻ claw +27 ([[magical]], [[agile]], [[reach|reach 10 feet]]); __Damage__ 3d8+12 (3d8+12) slashing"
>   - name: Melee
>     desc: "⬻ tail +25 ([[magical]], [[reach|reach 20 feet]]); __Damage__ 3d8+10 (3d8+10) bludgeoning"
>   - name: Melee
>     desc: "⬻ horns +25 ([[magical]], [[reach|reach 15 feet]]); __Damage__ 2d8+10 (2d8+10) piercing"
> 
> spellcasting:
>   - name: "Arcane Innate Spells"
>     desc: "DC 33; __Cantrips (6th)__ [[ghost-sound|ghost sound]]; __1st__ [[create-water|create water]] at will; see desert thirst; __6th__ [[illusory-creature|illusory creature]], [[illusory-object|illusory object]], [[ventriloquism]] (at will);"
> sourcebook: "_Bestiary_, page 108."
> ```
> 
> ```encounter-table
> name: Adult Blue Dragon
> creatures:
>   - 1: Adult Blue Dragon
> ```
> ````

### Create creatures in settings

Creatures can be created directly in settings under the Homebrew Creatures section by clicking the "Add Creature" button. More in [[Fantasy Statblocks/Plugin Settings#Adding Creatures|Adding Creatures]].

## Accessing the bestiary

These entities can be accessed in three ways:

1. By recalling them from the Fantasy Bestiary, Fantasy Statblocks, or within Obsidian by name or using a search function. We'll refer to this as [[Fantasy Statblocks/The Bestiary|The Bestiary]].
2. By manually creating them in Fantasy Statblocks using a code block as discussed in the prior section. We'll refer to this as [Codeblock Creatures](Fantasy%20Statblocks/Codeblock%20Creatures.md). These creatures can be saved into the internal Bestiary later.
3. By recalling them via API, using Dataview or Javascript. This is an advanced function and will be covered in the [Dataview in Statblocks](Fantasy%20Statblocks/Advanced%20Topics/Dataview%20in%20Statblocks.md) section.

### Recall by name

Currently within Fantasy Statblocks, only recall by name is supported as the way to pull entities from within the internal Fantasy Statblocks database. When Fantasy Bestiary is completed, this is expected to expand.

As mentioned in the introduction to this section, a statblock may be defined in a note using the base syntax below.

````yaml
```statblock
monster: <SRD/Homebrew Monster Name>
```
````

Using the 5e SRD included within the plugin, let's recall a simple monster as an example.

````yaml
```statblock
monster: Octopus
```
````

>[!screenshot]- Recall by Name Rendered Statblock
> ![Octopus](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/statblock-the-octopus.png?raw=true)

### Overriding fields

The `monster` field lets you customise a creature's properties by combining it with other fields. This allows you to create unique creatures with different characteristics. For example, if you want to change the properties of an Octopus to make it more interesting, you can use the `monster` field along with other fields to specify the changes you want to make. 

Let's start by making our Octopus friendlier.

````yaml
```statblock
layout: Basic 5e Layout
monster: Octopus
name: "My Octopus Friend"
```
````

>[!screenshot]- Overriding Fields Rendered Statblock
>![Octopus Friend](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/statblock-the-octopus-friend.png?raw=true)

## Adding to fields

You can add content to a field by appending a `+` to its name. This works for fields that contain plain text or an array of items.

For example, let's say your Octopus Friend has many Tentacles but they don't have a special ability yet. You can add a new action to its statblock using the `actions+` field. This will append the new action to any existing actions. In the code block below, we add a new action called "Tentacles Akimbo" that allows My Octopus Friend to use ranged weapons and deal damage to multiple targets.


````yaml
```statblock
layout: Basic 5e Layout
monster: Octopus
name: "My Octopus Friend"
actions+:
  - name: "Tentacles Akimbo (Recharges after a Long Rest)"
    desc: "My Octopus Friend calls upon his fishy friends for backup and receives a fresh shipment of 1d6 GUNS! Ranged Weapon Attack: 1 (+6 to Hit), reach 20 ft., multiple targets. Hit: 1d20 piercing damage per gun, spread across all active targets. After using Tentacles Akimbo, My Octopus Friend is slowed for two turns."
```
````

This allows you to add custom abilities to existing monsters and make them more unique.

> [!screenshot]- Adding to Fields Rendered Statblock
> ![](publish/images/IMG-The%20Bestiary.png)

## Removing from trait blocks

> [!feature] **Feature**: This was added in [3.8.0](https://github.com/javalent/fantasy-statblocks/releases/tag/3.8.0).


Trait blocks, often used for `actions`, `attacks`, `reactions`, `legendary_actions`, and more, can have their items removed either in full, or per action.

For example, My Octopus Friend has a default Tentacles attack. But, he does not need this because he has Tentacles Akimbo. So, I want to remove it only for this extension. To do this, I use the `-` after actions to tell Statblocks I want to remove the following items. Then, I list them out by `name`. 

> [!warning] If you have items that share the same name, such as `Melee` or `Ranged`, you will need to include the description as well.

````yaml
```statblock
layout: Basic 5e Layout
monster: Octopus
name: "My Octopus Friend"
actions+:
  - name: "Tentacles Akimbo (Recharges after a Long Rest)"
    desc: "My Octopus Friend calls upon his fishy friends for backup and receives a fresh shipment of 1d6 GUNS! Ranged Weapon Attack: 1 (+6 to Hit), reach 20 ft., multiple targets. Hit: 1d20 piercing damage per gun, spread across all active targets. After using Tentacles Akimbo, My Octopus Friend is slowed for two turns."
actions-:
  - name: Tentacles
```
````


> [!screenshot]- Removing Fields From Rendered Block
> ![](publish/images/IMG-The%20Bestiary-4.png) ![](publish/images/IMG-The%20Bestiary-5.png)

## Further extends

The `extends` feature allows you to create a new creature based on an existing one. This can be useful, for example, if you want to create a unique variant of a Goblin without having to duplicate all of its stats.

When you use `extends`, the new creature maintains a link to the original creature. This means that if you modify the original creature, those changes will automatically apply to the new creature as well.

You can specify one or more creatures to extend. If you specify multiple creatures, the values from later creatures will take precedence over earlier ones. If you define a value directly in the statblock, that value will take final precedence.

Finally, `extends` is a recursive feature, which means that if you extend a creature that extends another creature, the new creature will inherit all of the properties of both creatures.

````yaml
```statblock
layout: Basic 5e Layout
name: Paarthurnax
extends: Ancient Black Dragon
```
````

````yaml
```statblock
name: Extended Paarthurnax
extends:
- Paarthurnax
- Goblin
```
````

>[!screenshot]- Extends Rendered Screenshot
> ![](publish/images/IMG-The%20Bestiary-6.png)
> It's Hideous!


Done with The Bestiary? Check out [[Fantasy Statblocks/Codeblock Creatures|The Code Block]].


