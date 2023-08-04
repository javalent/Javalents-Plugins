---
aliases: [The Code Block]
cover: 
description: "In Statblocks, the most common way to create a new statblock is to fill out a code block. This page takes you through the process step-by-step."
image: 
permalink: statblocks/readme/code-block
publish: true
tags: [Statblocks/General/code-block]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > *You Are Here*

---

To create a new entity within Fantasy Statblock via a [[Glossary/Code Block|Codeblock]], we can import existing [[JSON|.json]] or [[YAML]] data. The most common way to create a new entry, however, is to create a new code block and fill out the data.

## Config Mode

Let's create us a custom monster. We'll use the [[Basic Pathfinder 2e Layout|Basic Pathfinder 2e Layout]] code block this time around. The majority of the keys in "Config" mode are not associated with any layout blocks. 

### Layout

````yaml
layout: Basic Pathfinder 2e Layout
````

The layout key tells the Statblock which layout within your Statblock settings you should use, assuming you want to use something different than the default.

>[!note] The Statblock Layout name must match the layout name within settings ***exactly***.

### Name

>[!danger] Name is a required field. Name is a required field. Name. Is. A. Required. Field! That is all. 

Most of the time `name:` will be a [[Core Blocks#Heading Block|Heading Block]], [[Core Blocks#Property Line Block|Property Block]], or [[Core Blocks#Text Block|Text Block]].

````yaml
```statblock
# This is like.. config!
layout: Basic Pathfinder 2e Layout

# Statblock Starts
name: "Name"
```
````

Err, `Name` is boring. let's spice it up.

````yaml
```statblock
# This is like.. config!
layout: Basic Pathfinder 2e Layout

# Statblock Starts
name: "Shápsín"
```
````

> [!tip] When it doubt, quote it out. Wrap your [[String#Wrapped Strings|Strings]] will be wrapped in quotes. 

### Dice Rolls

You can integrate the dice roller plugin in your Statblocks, which will allow you to roll dice inside stat blocks. This integration requires that you install and enable the Dice Roller plugin. Furthermore, the integration requires that one of the following conditions are true:
1. Enable "Integrate Dice Roller" in [[Statblock Settings|Statblocks Configuration Settings]].
2. The `dice: true` [[Key|Key]]-[[Value|Value]] pair is added to a Statblock code block in a note.

````yaml
```statblock
# This is like.. config!
dice: true
layout: Basic Pathfinder 2e Layout

# Statblock Starts
name: "Shápsín"
```
````

#### Triggering Dice Parsing

The plugin will then parse monster properties for common types of dice rolls. The plugin will create dice rollers for the following strings:

- **Rolling to hit**: +15 to hit
- **Damage / Healing**: 19 (2d10 + 8)
- **A Save**: Strength +5

Want to change how Dice Rollers are added? Create a [Custom Layout](Custom%20CSS.md) in settings.

#### Rendered Dice

Dice rollers added to stat blocks can roll 3D dice on the screen if one of the following conditions are true:
1. If the **Render Dice Rolls** setting is turned on in [[Statblock Settings]].
2. The `render: true` parameter is added to a stat block.

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout

# Statblock Starts
name: "Shápsín"
```
````

### Columns

**Default**: 1
**Type**: Integer

I plan on ol' Shápsín to be a mighty big Statblock, so I may want to ensure that it does not end up being too long so it is readable. We have a few tools to manage that.

> [!yellow] Max Columns
> The maximum amount of default columns is currently ***2***. 
>  However, you *can* expand the columns past 2. There is no maximum column amount. You may need to set [[Statblock Codeblocks#columnWidth|columnWidth]] to something small to naturally produce more without [[Statblock Codeblocks#forceColumns|forceColumns]].
>  Your results *may vary*. 

`columns: Number`

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2

# Startblock Starts
name: "Shápsín"

```
````

#### forceColumns

**Default**: `false`
**Type**: Boolean

If you set `columns`, the plugin will *always* try to split the statblock into that many columns, regardless of height.

It will still respect the width of the note, unless `forceColumns` is set. Since I tend to constantly change the size of my Obsidian screen, I want to set this to **True.**

````yaml
```statblock
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true

name: "Shápsín"
columns: 2
forceColumns: true
```
````

#### columnHeight

**Default**: 600px
**Type**: Integer with sizing parameters (px, [[em]], vh, etc.)

Since my main concern is the Statblock being too long, I probably want to set a max column height as well. I can go over the default of 600px, but I don't want it to go much further than that in my case.

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px

# Statblock Starts
name: "Shápsín"

```
````

#### columnWidth

**Default**: 400px (per column)
**Type**: Integer with sizing parameters (px, em, vh, etc.)

Similarly with my concern with height, I ought to look at how wide the statblock may be. This is on a per-column basis. Since my screen is wider, I can afford to make it wider to help the statblock keep it's shortness.

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px
columnWidth: 550px

# Statblock Starts
name: "Shápsín"

```
````

### Source

Source tells the [[Statblock Settings#Parse Frontmatter For Creatures|Parse Frontmatter for Creatures]] setting what "bestiary" to place the statblock into. If this is changed after the initial

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px
columnWidth: 550px
source: "Pie"


# Statblock Starts
name: "Shápsín"

```
````

If this is changed later on, the parser will update the source in the Bestiary.

### Player

>[!feature] This feature was added in Fantasy Statblocks version 3.6.3.

If a statblock has `player: true`, and it is saved to the Bestiary, then [[Initiative Tracker]] will count that creature as a player. Shápsín is not at all a player, so here is an example Codeblock.

````yaml
```statblock
layout: Basic 5e Layout
player: true
monster: Black Pudding
name: An Abused Ooze
```
````

## Statblock Base Config

### Level

Some statblocks use `cr`, some use `level`. This one use Level. Most of the time they are [[Core Blocks#Property Line Block|Property Blocks]].

Shápsín not a very strong monster, so we'll make it level 6.

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px
columnWidth: 550px
source: "Pie"


# Statblock Starts
name: "Shápsín"
level: "Creature 6"
```
````

### Rarity

However, it is also not a very common monster, so we're going to give it a `Rare` rarity. As of writing, the PF2E Statblock uses rare_01-rare_04 to list out rarity. Each one is a [[Core Blocks#Property Line Block|Property Block]]. 

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px
columnWidth: 550px
source: "Pie"


# Statblock Starts
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
```
````

### Alignment and Size

`alignment` and `size` are next. Each of these is a [[Core Blocks#Property Line Block|Property Block]].

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px
columnWidth: 550px
source: "Pie"


# Statblock Starts
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
```
````

### Traits

Traits is currently handled by offering seven [[Core Blocks#Property Line Block|Property Blocks]], labeled `trait_01-trait_07` to allow multiple traits to be listed.

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 2
forceColumns: true
columnHeight: 750px
columnWidth: 550px
source: "Pie"


# Statblock Starts
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
```
````

## Statblock Combat Config

Because our examples are going to start getting long, we're going to condense the example statblock from here on out. The total example will be posted at the end.

### Perception and Modifier

`perception` and `modifier` are both listed. Modifier is for use for Initiative Tracker if this statblock is placed into frontmatter. Elsewise, `perception` is a [[Core Blocks#Trait Block|Trait Block]]. 

Here, Perception is written out manually, and the additional perceptive traits added as subkeys. Underscores are used to italicize and bold in the finished statblock.

````yaml
```statblock
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"
```
````

### Languages

`languages:` is a [[Core Blocks#Property Line Block|Property Block]] which lists out the entity's known languages in a [[String]].

````yaml
```statblock
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"
languages: "Common, Draconic; "
```
````

### Skills

`skills` is usually a [[Core Blocks#Saves Block|Saves Block]] or a [[Core Blocks#Trait Block|Trait Block]]. In our [[Basic 5e Layout|Basic 5e Layout]] it is a saves block, and in our [[Basic Pathfinder 2e Layout]] it is a trait block. We'll show both examples here.

````yaml
```statblock
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"
languages: "Common, Draconic; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +9 (1d20+9); __Intimidation__: +9 (1d20+9); __Nature__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +7 (1d20+7); "
```
````


Because it was required that the skills be rollable and functionality had not been added, PF2E uses a trait block to create the lovely mix above.

#### 5e Version of Skills

```yaml
skillsaves:
  - perception: 16
  - stealth: 9
```

### Ability Mods

`abilitymods` is your attribute and modifier scores. STR, INT, DEX, etc. It uses a [[Core Blocks|Table Blocks]] and has the ability to be altered by [[Fantasy Statblocks/Proficient Topics/Ability Modifier Callbacks|Abilitiy Modifier Callbacks]]. The Ability mods are always in a bracketed array.

````yaml
```statblock
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"
languages: "Common, Draconic; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +9 (1d20+9); __Intimidation__: +9 (1d20+9); __Nature__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +7 (1d20+7); "
abilityMods: [8, 5, 6, 4, 5, 5]
```
````

### Fantasy Age

If you are using Fantasy Age within your campaign, you can set the nine stats by using the `fage_stats` field.

````yaml
```statblock
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"
languages: "Common, Draconic; "
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +9 (1d20+9); __Intimidation__: +9 (1d20+9); __Nature__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +7 (1d20+7); "
abilityMods: [8, 5, 6, 4, 5, 5]
fage_stats: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
````

We're going to skip ahead, because this next part is more trait blocks and you are well introduced to those. Same for property blocks.

## Statblock Extras Config

### Spellcasting

In the Pathfinder 2E Layout, spellcasting is currently a [[Fantasy Statblocks/Intermediate Topics/The Layout Editor/Core Blocks#Trait Block|Trait Block]] due to the complexity of the layout of spells in the standard block. However, if you are looking for 5e Style of displaying spells, then we want to default to the [[Fantasy Statblocks/Intermediate Topics/The Layout Editor/Core Blocks#Spells Block|Spells Block]].

````yaml
```statblock
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"

languages: "Common, Draconic; "

skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +9 (1d20+9); __Intimidation__: +9 (1d20+9); __Nature__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +7 (1d20+7); "
abilityMods: [8, 5, 6, 4, 5, 5]

fage_stats: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Statblock Traits Here
actions:
 - name: "Dance"
   desc: "The Shápsín is a proficient dancer and gets groovy!"

# Statblock Extras
spellcasting:
- "The Shápsín is a natural spellcaster and is able to cast 6th-level spells. It uses Charisma as its spellcasting trait."
- "3/Day: Publish, Write, Backspace"
- "1/Day: Erase"
- "6th Level Spells: Statblock, Admonition, Cake"
- "5th Level Spells: Initiative, Maps, Steak"
- "3rd Level Spells: Potato, Broccoli*, Vitamin"
- "* The Shápsín casts these at the start of combat"
```
````

### Token

For the final example we will use, because anything more is redundant, a token.

Token is an [[Fantasy Statblocks/Intermediate Topics/The Layout Editor/Core Blocks#Image Block|Image Block]]. We also added the option to include a [[Fantasy Statblocks/Intermediate Topics/The Layout Editor/Core Blocks#Text Block|Text Block]] that is linked to `token` so that any text displayed in the name is also displayed, for [[Second Window/Second Window|Second Window]] purposes.

````yaml
```statblock
# This is like.. config!
dice: true
render: true
layout: Basic Pathfinder 2e Layout
columns: 3
forceColumns: true
columnHeight: 250px
columnWidth: 175px
source: "Pie"
layout: Basic Pathfinder 2e Layout
name: "Shápsín"
level: "Creature 6"
rare_03: "Rare"
alignment: "N"
size: "Huge"
trait_01: "Cold"
trait_02: "Dragon"
trait_03: "Undead"
# Statblock Combat
perception:
  - name: "Perception"
    desc: "Perception +15; __darkvision__, __imprecise scent 60__;"

languages: "Common, Draconic; "

skills:
  - name: "Skills"
    desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +9 (1d20+9); __Intimidation__: +9 (1d20+9); __Nature__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +7 (1d20+7); "
abilityMods: [8, 5, 6, 4, 5, 5]

fage_stats: [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Statblock Traits Here
actions:
 - name: "Dance"
   desc: "The Shápsín is a proficient dancer and gets groovy!"

# Statblock Extras
spellcasting:
- "The Shápsín is a natural spellcaster and is able to cast 6th-level spells. It uses Charisma as its spellcasting trait."
- "3/Day: Publish, Write, Backspace"
- "1/Day: Erase"
- "6th Level Spells: Statblock, Admonition, Cake"
- "5th Level Spells: Initiative, Maps, Steak"
- "3rd Level Spells: Potato, Broccoli*, Vitamin"
- "* The Shápsín casts these at the start of combat"

token: [[apple-touch-icon.png|Show to Players]]
```
````

## The Result

Below is the final result to get you going on and your way. Anything further is more advanced, but for now as a beginner, you should be easily able to navigate the Core Blocks. 

> [!code]- Shápsín Code Block
> ````yaml
> ```statblock
> # This is like.. config!
> dice: true
> render: true
> layout: Basic Pathfinder 2e Layout
> columns: 3
> forceColumns: true
> columnHeight: 250px
> columnWidth: 175px
> source: "Pie"
> layout: Basic Pathfinder 2e Layout
> name: "Shápsín"
> level: "Creature 6"
> rare_03: "Rare"
> alignment: "N"
> size: "Huge"
> trait_01: "Cold"
> trait_02: "Dragon"
> trait_03: "Undead"
> # Statblock Combat
> perception:
>   - name: "Perception"
>     desc: "Perception +15; __darkvision__, __imprecise scent 60__;"
> 
> languages: "Common, Draconic; "
> 
> skills:
>   - name: "Skills"
>     desc: "__Acrobatics__: +9 (1d20+9); __Athletics__: +11 (1d20+11); __Deception__: +9 (1d20+9); __Intimidation__: +9 (1d20+9); __Nature__: +7 (1d20+7); __Stealth__: +9 (1d20+9); __Survival__: +7 (1d20+7); "
> abilityMods: [8, 5, 6, 4, 5, 5]
> 
> fage_stats: [1, 2, 3, 4, 5, 6, 7, 8, 9]
> 
> # Statblock Traits Here
> 
> # Statblock Extras
> spellcasting:
> - "The Shápsín is a natural spellcaster and is able to cast 6th-level spells. It uses Charisma as its spellcasting trait."
> - "3/Day: Publish, Write, Backspace"
> - "1/Day: Erase"
> - "6th Level Spells: Statblock, Admonition, Cake"
> - "5th Level Spells: Initiative, Maps, Steak"
> - "3rd Level Spells: Potato, Broccoli*, Vitamin"
> - "* The Shápsín casts these at the start of combat"
> 
> token: [[apple-touch-icon.png|Show to Players]]
> ```
> ````

We also have a showing of Shápsín who is absolutely **Not**. **A**. **Dragon**. or **Undead**, but he wishes he was. :) 

> [!Note] In the screenshot below, the extra bars above Shápsín's Icon are where Statblock Traits usually go. To keep a smaller screenshot, I have removed them.

> [!screenshot]- Shápsín the… Shapeshifter? 
> ![Shapsin](https://github.com/javalent/fantasy-statblocks/blob/main/publish/images/shapsin-final-codeblock.png?raw=true)