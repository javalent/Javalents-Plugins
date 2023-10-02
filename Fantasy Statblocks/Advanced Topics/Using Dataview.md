---
aliases: [Dataview and Statblocks]
description: 
permalink: 
publish: true
tags: [API/Statblocks]
---

# Using dataview

Your bestiary lives on the plugin and can be accessed programmatically in plugins that can run JavaScript, such as [Dataview](https://github.com/blacksmithgu/obsidian-dataview), [Templater](https://github.com/SilentVoid13/Templater) or [CustomJS](https://github.com/samlewis0602/obsidian-custom-js).

A readonly copy of the bestiary is available on the `window` object and can be accessed in your scripts like this:

```js
const bestiary = app.plugins.getPlugin("obsidian-5e-statblocks").bestiary;
//or
const bestiary = window.bestiary;
```

This will give you a readonly JavaScript `Map`.

## Creature by name

Creatures are stored on the Bestiary by name - you could retrieve a creature from the bestiary like this:

```js
const ancient_black_dragon = bestiary.get("Ancient Black Dragon");
```

## All creature list

Or, a list of all creatures:

```js
const creatures = bestiary.values();
```