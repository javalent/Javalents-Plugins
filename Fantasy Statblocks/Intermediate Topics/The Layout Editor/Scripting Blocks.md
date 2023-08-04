---
aliases: [Javascripting Blocks, Javascript Block, If-Else Block]
cover: 
description: This page details the Javascript Dominant blocks within Obsidian
image: 
permalink: statblocks/layout/scripting-blocks
publish: true
tags: [Statblocks/Layout/Blocks/Javascript, Statblocks/Layout/Blocks/If-Else]
---

## If-Else Block

>[!red]
> **+** **Type**: `monster.key`
> **+** **Encoding**: Javascript
> **+** **CSS**: 
> 
> This is an advanced block that requires basic knowledge of Javascript or some patience. 

The If/Else Block is a conditional grouping block. Unlike the [[Grouping Blocks|Grouping Blocks]], the grouping is done through Javascript conditionals. 

The conditionals are set by reading the value of the Statblock key it is primed for, and processing the first instance of a *true* value that matches that instance. 

## Javascript Block

> [!red]
> **+** **Type**: Embedded Javascript
> **+** **Encoding**: Javascript
> **+** **CSS**: It *makes* HTML.
>
> This is an advanced block that requires basic knowledge of Javascript or some patience. 

The Javascript Block accesses the Global JS within Obsidian. Thus, it can do some complicated features within the layout. For example, let's take a look at a callback within the 13th Age Layout.

![[Basic 13th Age Monster Layout#Create Stats Table]]

This creates a custom ability-score/HP field table within Statblocks.

### Alternatives

Sometimes, the tools available we have are just not the best tool for the job. One great example of that is images in a note that are normally placed via Dataview. Through a lot of work, they could be pulled into the Statblock via the Javascript Block, but there is this method as well.

> [!code] Dataview Infoxbox Statblock by Xentis
> ````js
> dv.span(`
> [!infobox|no-table-header]+ `=this.file.name`
> `$= dv.el("img", "test", { attr: {"src": "app://local/"+ app.vault.adapter.getBasePath() + "/Media/" + dv.current().image_filename, alt: "cover hmed"}})`
>
> |   |   |
> |---|---|
> | Campaign | `=this.campaign` |
> | Role | `=this.role` |
> | Organizations | `=this.organizations` |
> | Race | `=this.race` |
> | Age | `=this.age` (`=this.human_age_equivalent` human equivalent) |
> `$= dv.el("img", "test", { attr: {"src": "app://local/"+ app.vault.adapter.getBasePath() + "/Media/" + dv.current().token_filename, alt: "cover htiny right"}})`
> 
> ```encounter
> creatures:
>   - 1 ` + note.statblock + `
> ```
>
> ```statblock
> monster: ` + note.statblock + `
> image: ` + note.image_filelink + `
> ```
> `)
> ````
> 