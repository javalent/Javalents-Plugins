---
aliases: [Dataview and Statblocks, Statblocks DataviewJS]
description: "This page details the different ways Javascript enabled plugins and Statblocks can interact."
permalink: statblocks/javascript/dataview
publish: true
tags: [API/Statblocks]
---

# Using Dataview in Statblocks

>[!warning] This page is still under construction

Your bestiary lives on the plugin and can be accessed programmatically in plugins that can run JavaScript, such as [Dataview](https://github.com/blacksmithgu/obsidian-dataview), [Templater](https://github.com/SilentVoid13/Templater) or [CustomJS](https://github.com/samlewis0602/obsidian-custom-js).

## Accessing the Bestiary

A readonly copy of the bestiary is available on the `window` object and can be accessed in your scripts like this:

```js
const bestiary = app.plugins.getPlugin("obsidian-5e-statblocks").bestiary;
//or
const bestiary = window.bestiary;
```

This will give you a readonly JavaScript `Map`.

### Creature by Name

Creatures are stored on the Bestiary by name - you could retrieve a creature from the bestiary like this:

```js
const ancient_black_dragon = bestiary.get("Ancient Black Dragon");
```

### All Creature List

Or, a list of all creatures:

```js
const creatures = bestiary.values();
```

## Sample Dataviewjs Inquiries

### Table of Creature by Name

This code below will produce a list of all creatures in the Bestiary with the name 'Kobold'.

>[!hint] If you remove the word Kobold, and leave it empty as `.contains(''))`, then it will create a table of the full bestiary.

````js
```dataviewjs
const monstersAsDvArray = dv.array(Array.from(window.bestiary.values())).filter(m => m.name).where(m => m.name.toLowerCase().contains('kobold'))

dv.table(["Name", "HP", "AC", "CR"], monstersAsDvArray.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr]))
```
````

### Input Bar Search of Creatures

This code compilation is brought to you by Xentis#2747.  It is normally kept in a cards dataview callout. You can get the Cards CSS Snippet from [ITS Theme](https://github.com/SlRvb/Obsidian--ITS-Theme/tree/main/Snippets).

````js
```dataviewjs
const monstersAsDvArray = dv.array(Array.from(window.bestiary.values())).filter(m => m.name).where(m => m.name.toLowerCase().contains('')) 

dv.el("bold", "Input: ")
const inputField = dv.el('input', "input field")
inputField.focus()

/* Fake table for show */
dv.table(["Name", "HP", "AC", "CR"], [])

inputField.addEventListener('input', async (event) => {
	this.container.lastChild.remove()
	dv.table(["Name", "HP", "AC", "CR"], 
		monstersAsDvArray
			.filter(m => m.name)
			.filter(m => m.name.toLowerCase().includes(inputField.value.toLowerCase()))
		.map((monster) => [dv.fileLink(monster.name), monster.hp, monster.ac, monster.cr]))	
});
```
````

