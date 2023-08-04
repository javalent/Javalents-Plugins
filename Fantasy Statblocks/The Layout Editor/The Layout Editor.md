---
aliases: [Layout Editor]
description: 
permalink: statblocks/layout/editor
publish: true
tags: [Statblocks/Layout]
---

# The Layout Editor

New layouts are created through settings, either by clicking the "New Layout" button or copying an existing layout and clicking the "Edit" button.

This will open the layout creator, where layout blocks can be added and managed to the layout.

## Names

Layouts must be given names, and the names must be unique. These names will be tied to the [[Key|Key]] used within the Statblock.

> [!faq] What's in a Name?
> Any block with the `name` key is the minimum requirement to make a Statblock.
> For maximum initiative tracker support, consider also including the following:
> `ac`
> `hp`
> `modifier`
^statblocks-name

## Blocks

Statblock layouts are made up of blocks. There are several types of blocks, and each block can be associated with a monster property.

Blocks can be added to the layout by clicking the "Add Block" button, where the type of block may be selected.

Once a block is added to the layout, it may be edited by clicking the "Edit Block" button that appears when the block is hovered or removed by clicking the "Delete Block" button.

Additionally, blocks may be moved around by clicking the drag handle and dragging them around.

>[!faq] Are there any required blocks?
> No. The absolute minimum is a `name` key, which we discuss more above in [[Fantasy Statblocks/The Layout Editor/The Layout Editor#^statblocks-name|Whats in a Name?]]

## Creating Blocks

A layout block has a type, and the type determines both how it renders and what options are available to the block. Once a block is created, its type cannot be changed.

Blocks have additional properties that will affect how it renders.

### Block Options

Most blocks will some or all of the following options for customization:

| Property                         | Description                                                                                                                                                                                                                                                                                                                                                       |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Link Monster Property            | The "property" or YAML "[[Key\|Key]]" the Block will try to access in the entities\' code block (for example, "name").                                                                                                                                                                                                                                            |
| Do Not Add Property as CSS Class | This prevents the associated Layout Block from adding itself to be styled by CSS directly. Useful for preventing [[Theme Collisions\|Theme Collisions]].                                                                                                                                                                                                          |
| Use Monster Property for Heading | If this *Block* displays a title or a name, that name will be set to the value of the specified [[Key\|Key]].                                                                                                                                                                                                                                                     |
| Display Text                     | This is an override field as explained in the [[Key\|Key]] section of the Glossary. This turns HP: 300 to Health: 300 if Health is set as the text in "Display Text".                                                                                                                                                                                             |
| Section Heading                  | A field to allow the specification of a *Section Heading* to be declared.                                                                                                                                                                                                                                                                                         |
| Section Subheading Text          | Allows text to be displayed after a *Section Heading* but before *Trait Descriptions*. Allows use of `{{monster}}` for templating.                                                                                                                                                                                                                                |
| Conditional                      | If a block is set to conditional, it will not be rendered if the property does not exist.                                                                                                                                                                                                                                                                         |
| Fallback                         | The fallback data to display if property does not exist, but the block is not toggled Conditional.                                                                                                                                                                                                                                                                |
| Has Rule                         | A horizontal rule or bar will be displayed after the property                                                                                                                                                                                                                                                                                                     |
| Parse for Dice                   | A toggle which will prompt the plugin to attempt to parse for common dice roll strings from the block. See [[Statblock Codeblocks#Dice Rolls|Dice Rolls]].                                                                                                                                                                                                             |
| Link Dice to Property            | The layout will use the property provided to generate the dice roller.                                                                                                                                                                                                                                                                                            |
| Advanced Options Toggle          | A collapsible toggle showing or hiding the Render as Markdown and Dice Callback, Callback fields, and Ability Modifier fields. This will automatically be enabled if "Show Advanced Options" is enabled in Layout Settings.                                                                                                                                       |
| Dice Callback                    | Requires [Dice Roller Plugin](https://github.com/valentine195/obsidian-dice-roller). JavaScript code may be provided to determine how the string is parsed for dice. See [[Fantasy Statblocks/Proficient Topics/Basic Callback Functions|Callback Functions]] for more information on Callbacks.                                                                                                      |
| Render as Markdown               | A toggle to allow the block to render markdown styling such as italics and links. [[String#Wrapped Strings\|Wrapped Strings]] Are *highly* recommended when this option is enabled as some markdown styling will result in a [[Help and Support/YAML Validation Errors|Failed Render]] without it.                                                                                |
| Callback                         | Javascript code may be provided to determine how the string is parsed for values. See [[Fantasy Statblocks/Proficient Topics/Basic Callback Functions|Callback Functions]] for more information on Callbacks.                                                                                                                                                                                         |
| Ability Mod Calculation          | Javascript code may be provided to determine how the ability modifiers are calculated in an Ability Mods table. See [[Fantasy Statblocks/Proficient Topics/Ability Modifier Callbacks|Ability Modifier Callbacks]].                                                                                                                                                                                   |
| Text to Show                     | This field will allow you                                                                                                                                                                                                                                                          to specify text to always display regardless of what property it is linked to. |
