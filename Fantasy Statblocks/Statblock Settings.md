---
aliases:
  - Statblock Settings
  - Statblocks Configuration Settings
description: This page gives an overview of Fantasy Statblocks settings
permalink: statblocks/settings
publish: true
tags:
  - Settings/Statblocks
---

# Statblock Settings

## General Settings

The 'General Settings' section of the plugin settings is dedicated to Global Statblock Settings and integration with [[Dice Roller|Dice Roller]].

### Enable Export to PNG

By default, an "Export to PNG" option is added. 

Use `export: false` within a [[Glossary/Code Block]] to prevent this behavior on a per-instance basis.

> [!warning] **Update**: As of release 3.1.8, the vertical dots are now in the ***upper-left*** corner of the statblock.

>[!screenshot]- Screenshot of Enable Export Button on Statblock
> ![statblock-export-png.png|600](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/statblock-export-png.png?raw=true)

### Integrate Dice Roller

This setting enables the integration of the Dice Roller plugin with Fantasy Statblocks, allowing for on-screen dice roll effects. Note that this requires the [[Dice Roller|Dice Roller]] plugin to be installed and enabled in your Obsidian workspace.

To disable this feature for a specific instance, you can include the command `dice: false` (without the backslash) within a code block.

> [!screenshot]- Screenshot of Dice Rollers on Statblock
> ![statblock-integrate-dice-roller.png|600](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/statblock-integrate-dice-roller.png?raw=true)

### Render Dice Rolls

The "Render Dice Rolls" setting adds visual effects of dice rolls to Fantasy Statblocks using the Dice Roller plugin. Note that the [[Dice Roller|Dice Roller]] plugin must be installed and enabled for this setting to work.

If you want to prevent this setting from applying to a specific instance, you can use the `render: false` command within a code block.

>[!screenshot] Gif of Dice Rendering within a Statblock
> ![statblock-render-dice.gif|600](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/statblock-render-dice.gif?raw=true)

### Try to Render Wikilinks

When enabled, the plugin will attempt to render any wikilinks found in the text of the statblock as Obsidian links. However, please note that these links will not appear on the graph.

### Disable 5e SRD

This setting will disable access to the internal 5e SRD (System Reference Document) included with Fantasy Statblocks.

## Note Parsing

These settings control how Fantasy Statblocks reads Obsidian notes for data.

### Parse Frontmatter For Creatures

When enabled, the plugin will automatically parse the folder specified in "Bestiary Folder" for creatures. If this setting is turned off, the plugin can still be instructed to parse for creatures using the "Parse Frontmatter for Creatures" command.

### Enable Debug Messages

When enabled, debug messages will be displayed by the file parser.

### Bestiary Folders

The plugin will only parse files in the folders (and subfolders) specified in this section. Once a folder has been selected, a list will be displayed, and individual folders can be removed by selecting the (X) button.

## Advanced Settings

### Try to Save Data Atomically

Enabling this setting will cause the plugin to save data to a temporary file before saving the actual data file, in an attempt to prevent data loss due to overwrites. Please note that using sync services may cause issues with this feature.

## Layout Settings

This section of the plugin settings allows you to manage and create new statblock layouts. You can use a specific layout for a creature by specifying the `statblock` parameter.

### Import from JSON

Click this button to import a custom layout from a JSON file.

### Add New Layout

Click this button to create a new layout and add it to the Layout List.

### Default Layout

Select a default layout that the plugin will use when rendering a statblock.

### Show Advanced Options

Enabling this option will show additional advanced options when editing a layout block.

### Layout List

This section displays a list of all the installed statblock layouts.

## Import Homebrew Creatures

This section allows you to import creatures from creature files. Please note that monsters are stored by name, so only the last creature with the same name will be saved, overwriting any prior saved creatures. This feature is destructive, so use it with caution.

Fantasy Statblocks currently supports imports from the following sources:

-   DNDapp
-   Improved Initiative
-   CritterDB
-   5e.Tools
-   TetraCube

Statblocks also has support for Generic Data. JSON objects will be imported as-is, and all objects must have a `name` property.

>[!red] Disclaimer
> We are obligated to remind you that you should only import content that you own.

## Homebrew Creatures

This section allows you to access the creatures that have been added to the Bestiary. You can view a list of the current creatures in the bestiary, filter them, remove them, edit them, and preview them.

### Adding Creatures

You can create creatures directly within the Statblocks Settings using either the [[YAML]] syntax as shown in [[Fantasy Statblocks/Statblock Codeblocks]] or by using [[JSON]].

### Filtering Creatures

If you have multiple sources declared, you can select which ones you want to display in the list.

### List

This section displays the list of created monsters in the bestiary.

---

Done with Settings? Perhaps check out the [[Fantasy Statblocks/Begin Here]], [[Fantasy Statblocks/The Bestiary|The Bestiary]], or [[Fantasy Statblocks/Statblock Codeblocks|The Code Block]].
