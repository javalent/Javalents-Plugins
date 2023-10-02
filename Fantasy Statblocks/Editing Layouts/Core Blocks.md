---
aliases: [Core Blocks, Heading Block, Property Block, Property Line Block, Saves Block, Spells Block, Subheading Block, Table Block, Text Block, Trait Block, Image Block]
description: 
permalink: statblocks/layouts/core
publish: true
tags: [Statblocks/Layout/Block/Heading, Statblocks/Layout/Block/Property, Statblocks/Layout/Block/Saves, Statblocks/Layout/Block/Spells, Statblocks/Layout/Block/Subheading, Statblocks/Layout/Block/Table, Statblocks/Layout/Block/Text, Statblocks/Layout/Block/Trait]
---

# Core blocks

## Heading block

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: *[[String#YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
> **+** **CSS**: [[Fantasy Statblocks/Custom CSS/The Bootstrap/Container Groups|.header-container]]
> **+** **Additional**: The Heading block should point to a monster property that will be a string.

Heading blocks will render text in one of the Obsidian H1-H6 text styles. 

By default, this text is larger than the body text or '*p text*', but it can be changed with custom css.

## Image block

>[!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: Wikilink, Markdown Link
> **+** **CSS**:  [[Fantasy Statblocks/Custom CSS/The Bootstrap/Image-Container|.image-container]], [[Fantasy Statblocks/Custom CSS/The Bootstrap/Image-Container|.image.pointer]], [[Fantasy Statblocks/Custom CSS/The Bootstrap/Image-Container|.image]]
> **+** **Additional**: The Image block should point to a monster property will be a string.

Image blocks are used to display an image associated with the linked monster property. The linked property should be a valid Obsidian wikilink to an image in the vault. Alternatively, a link to an external website may also be used, but please note that privacy settings may cause issues.

## Property line block

>[!green]
**+** **Type**: `monster.key`
**+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
**+** **CSS**: [[Fantasy Statblocks/Custom CSS/The Bootstrap/Statblock Container|.statblock-container]], [[Fantasy Statblocks/Custom CSS/The Bootstrap/Property-Container|.property-container]]
> **+** **Additional**: The property block needs to reference a monster property that can be converted into a string. Non-string items will be recursively converted to strings by the plugin.

The standard block for displaying properties is called a property block, which shows the property name and its corresponding value for the monster, such as `Armor Class: 16`.

In addition, property blocks have an advanced option where a callback function can be provided to parse the property and use it as the value of the field. This callback function takes in the monster object and the plugin as parameters.

For instance, the Proficiency Bonus property in the basic 5e layout utilizes this option to determine its property values:

```js
if ("cr" in monster && monster.cr in plugin.CR) {
    return `+${Math.floor(2 + ((plugin.CR[monster.cr]?.value ?? 0) - 1) / 4)}`;
}
return "";
```

## Saves block

> [!green]
>**+** **Type**: `monster.key`
>**+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
>**+** **CSS**: 
>**+** **Additional**: The Saves block should point to a monster property that is an **object** of string number pairs.

The "saves" block is used to display saving throws and skill saves, such as "Str: +3".

````yaml
```statblock
saves:
  - strength: 3
  - dexterity: 5
```
````

## Spells block

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
> **+** **CSS**: 

The spells block is how the plugin displays spell using a `spellcasting` trait. The spellcasting trait requires a special `spells` field using the following syntax:

````yaml
```statblock
spells:
  - The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared
  - Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp
  - 1st level (4 slots): detect magic, identify, mage armor*, magic missile
  - 2nd level (3 slots): detect thoughts, mirror image, misty step
  - 3rd level (3 slots): counterspell, fly, lightning bolt
  - 4th level (3 slots): banishment, fire shield, stoneskin*
  - 5th level (3 slots): cone of cold, scrying, wall of force
  - 6th level (1 slot): globe of invulnerability
  - 7th level (1 slot): teleport
  - 8th level (1 slot): mind blank\*
  - 9th level (1 slot): time stop
  - "\* The archmage casts these spells on itself before combat."
```
````

> [!yellow] Heads Up! Overriding an existing monster's spells replaces the spells, *it does not combine*.

## Subheading block

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
> **+** **CSS**: 
> **+** **Additional**: The plugin will recursively stringify non-string items.

Subheading blocks are intended for smaller properties, such as the type of monsters in the basic 5e layout, and can have multiple monster properties linked to it.

## Table block

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: Integer, Integer Array
> **+** **CSS**:  
> 


The table block generates a table of headers and corresponding values. If a monster property has more values than specified headers, only the first few values up to the number of headers will be displayed. 

Additionally, the table block has an optional property called "Table Headers" where you can specify the headers to use.

## Text block

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
> **+** **CSS**: 

## Trait block

> [!green]
> **+** **Type**: `monster.key`
> **+** **Encoding**: *[[String#Usage in YAML|String]]*, *[[String#Wrapped Strings|Wrapped String]]* 
> **+** **CSS**: 

To add Traits, Actions, Reactions, and Legendary Actions, you can specify a name and a description (desc) as shown in the code block below.

```yaml
# The Traits of the Creature
traits:
  - name: Amphibious
    desc: The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.

# The Armor it Has and some Dice Roll Integration
armorclass:
  - name: AC
    desc: "39; __Fort__: +30 (1d20+30); __Ref__: +27 (1d20+27); __Will__: +29 (1d20+29);"

# Some Loot It May Carry
loot:
  - name: Ah!
    desc: "The little crab was carrying a +4 strength and +4 stamina leather belt. Where did it get such a thing?"
```
