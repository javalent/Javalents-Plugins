---
aliases: [The Bestiary]
cover: 
description: "This page details how to handle the creatures within the Bestiary in Statblocks."
image: 
permalink: statblocks/readme/bestiary
publish: true
tags: [Statblocks/General/Bestiary]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > *You Are Here*

---

The statblock plugin contains a library of creatures that can be used in statblocks and other plugins, such as the [[Initiative Tracker|Initiative Tracker]]. 

## Adding to the Bestiary

### Manually Saving an Entry

You can manually save a custom entity to the bestiary by creating a statblock [[Glossary/Code Block|Codeblock]] in a note and defining the creature within it. You have the option of creating a brand new entity from scratch or modifying an existing entity in the bestiary by overriding its fields.

Once you have created and rendered the statblock for your entity, you can save it to the bestiary by clicking on the menu icon in the top right corner of the statblock and selecting "Save to Bestiary".

### Creating Creatures in Frontmatter

When using [[YAML]] syntax, a statblock created using the statblock code block can be added to a note's frontmatter. 

#### Entities in Frontmatter

To enable parsing of frontmatter for custom monsters, the note must have a `statblock: true` parameter in its frontmatter, and the "[[Statblock Settings#Parse Frontmatter For Creatures|Parse Frontmatter in Notes]]" setting must be enabled, or the corresponding command in [Commpand Palette](https://help.obsidian.md/Plugins/Command+palette "Obsidian") must be used.

In addition to the statblock, the note must also have a name parameter in the frontmatter to save the creature. All other fields are optional. Once the creature is located in the note's frontmatter, it is automatically added to the bestiary and synced with the note content.

If the statblock field is removed, set to `statblock: false`, or if the note is deleted, the creature will be removed from the bestiary as well.

>[!red] Advanced Configuration
> This method of storing and utilizing your manually created Bestiary items is recommended for advanced Obsidian users only. 

#### Entities in Code Blocks

If the frontmatter specifies `statblock: inline` and "[[Statblock Settings#Parse Frontmatter For Creatures|Parse Frontmatter in Notes]]" setting is enabled, then the first statblock in the note will be automatically registered in the plugin as if its YAML had been copied into the frontmatter.

>[!green] Recommended Setting
> This is the recommended way of storing and utilizing your manually created Bestiary items. 
> There are more possible conflicts and complications when using the [[The Bestiary#Entities in Frontmatter|Entities in Frontmatter]] approach.
>
>Furthermore, with [Metadata Improvements](https://trello.com/b/Psqfqp7I/obsidian-roadmap "Obsidian") currently in the works, this is the most future-proofed method.
> %% #Obsidian/Roadmap-Check %%

### Create Creatures in Settings

Creatures can be created directly in settings under the Homebrew Creatures section by clicking the "Add Creature" button. More in [[Statblock Settings#Adding Creatures|Adding Creatures]].

## Accessing the Bestiary

These entities can be accessed in three ways:

1. By recalling them from the Fantasy Bestiary, Fantasy Statblocks, or within Obsidian by name or using a search function. We'll refer to this as [[The Bestiary|The Bestiary]].
2. By manually creating them in Fantasy Statblocks using a code block as discussed in the prior section. We'll refer to this as [[Statblock Codeblocks]]. These creatures can be saved into the internal Bestiary later.
3. By recalling them via API, using Dataview or Javascript. This is an advanced function and will be covered in the [[Using Dataview]] section.

### Recall by Name

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

### Overriding Fields

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

## Adding to Fields

> [!warning] 2023-05-34
> This feature is currently acting in an unpredictable manner. There are plans to rewrite how traits work as soon as workload allows. Until then, this feature is acting unpredictably and we recommend creating raw Codeblocks. \- Sigrunixia
> #Statblocks/Milestone/Traits


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

> [!screenshot] Adding to Fields Rendered Statblock
> Waiting for Bug Fix

### Extends

> [!warning] 2023-05-34
> This feature is currently acting in an unpredictable manner. There are plans to rewrite how traits work as soon as workload allows. Until then, this feature is acting unpredictably and we recommend creating raw Codeblocks. \- Sigrunixia
> #Statblocks/Milestone/Traits

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

>[!screenshot] Extends Rendered Screenshot
> Waiting for Bug Fix


---

Done with The Bestiary? Check out [[Statblock Codeblocks|The Code Block]].


