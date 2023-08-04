---
aliases: [Basic Pathfinder 2e Layout]
description: This page provides a basic code block for the Basic Pathfinder 2e
permalink: statblock/layouts/integrated/pf2e
publish: true
tags: [Statblocks/Layout/PF2e]
---

# Basic Pathfinder 2e Layout

This page provides a basic code block for the Pathfinder 2e layout included within Fantasy Statblocks.

The layout includes all the essential [[Key|Key]] information needed to create a creature, now it is up to you and your imagination to do the rest. Make it's abilities, attacks, and skills. Give it spells, or an image. Turn your favorite character into a statblock, or even the building across the street.

## Sample Image

>[!screenshot]- Screenshot of a Seething Umbral Dragon
> ![Seething Umbral Dragon](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/pf2e.png?raw=true)

### Seething Umbral Dragon Codeblock

> [!code]- The Filled Codeblock
> ````yaml
> ```statblock
> layout: Basic Pathfinder 2e Layout
> source: "B2"
> name: "Seething Umbral Dragon"
> level: "Creature 20"
> rare_03: "Rare"
> alignment: "NE"
> size: "Gargantuan"
> trait_04: "Dragon"
> trait_05: "Shadow"
> modifier: 36
> perception:
>   - name: "Perception"
>     desc: "Perception +36; __greater darkvision__, __imprecise scent 60__, __imprecise [[tremorsense]] 60__;"
> languages: "Common, Daemonic, Draconic, Necril, Shadowtongue; "
> skills:
>   - name: "Skills"
>     desc: "__Acrobatics__: +33 (1d20+33); __Athletics__: +38 (1d20+38); __Deception__: +34 (1d20+34); __Intimidation__: +36 (1d20+36); __Nature__: +34 (1d20+34); __Stealth__: +35 (1d20+35); __Survival__: +34 (1d20+34); "
> abilityMods: [10, 5, 7, 12, 8, 6]
> 
> abilities_mid:
>   - name: "Frightful Presence"
>     desc: " ([[aura]], [[emotion]], [[fear]], [[mental]]);  90 feet, DC 40."
>   - name: "Attack of Opportunity"
>     desc: "⬲  Jaws only."
> abilities_bot:
>   - name: "Breath Weapon"
>     desc: "⬺  The umbral dragon breathes in one of two ways. They can't use Breath Weapon again for 1d4 (1d4) rounds.<ul class='inner-bullet-list'><li>__Negative__ (necromancy, negative, primal) The dragon breathes a blast of darkness in a 50-foot cone that deals 21d6 (21d6) negative damage (DC 42 basic Reflex save). Undead creatures take 25d6 (25d6) force damage instead of the negative damage.</li><li>__Shadows__ (necromancy, primal, shadow) The dragon breathes a blast of shadows in a 50-foot cone. Each creature within the cone must attempt a DC 42 Fortitude save.\n__Critical Success__ The creature is unaffected.\n__Success__ The creature is [[enfeebled|enfeebled 3]] for 1 round.\n__Failure__ The creature is [[enfeebled|enfeebled 3]] for 1 minute.\n__Critical Failure__ The creature is [[enfeebled|enfeebled 3]] for 1 minute and [[blinded]] for 1 round.</li></ul>"
>   - name: "Draconic Frenzy"
>     desc: "⬺  The dragon makes two claw [[Strike|Strikes]] and one wing [[Strike]] in any order."
>   - name: "Draconic Momentum"
>     desc: "  The dragon recharges their Breath Weapon whenever they score a critical hit with a [[Strike]]."
>   - name: "Drain Vigor"
>     desc: " ([[primal]], [[necromancy]]);  When the dragon deals negative damage to a living creature with its jaws [[Strike]], the umbral dragon gains 20 temporary Hit Points and the creature must succeed at a DC 41 Fortitude save or become [[enfeebled|enfeebled 2]]. Further damage dealt by the dragon's jaws [[Strike]] increases the [[enfeebled|enfeebled]] condition value by 2 on a failed save, to a maximum of [[enfeebled|enfeebled 4]]."
>   - name: "Ghost Bane"
>     desc: "  An umbral dragon's [[Strike|Strikes]] affect incorporeal creatures with the effects of a ghost touch property rune, and an umbral dragon's jaws deal an additional 8d6 (8d6) force damage to undead."
> 
> speed: 60 feet, fly 200 feet
> 
> ac: "45"
> 
> hp: 375
> health:
>   - name: HP
>     desc: "375;  __Immunities__ negative, paralyzed, sleep;"
> 
> attacks:
>   - name: Melee Jaw
>     desc: "⬻ +38 ([[negative]], [[magical]], [[reach|reach 20 feet]]); __Damage__ 4d10+18 (4d10+18) piercing plus 4d6 (4d6) negative and drain vigor"
>   - name: Melee Claw
>     desc: "⬻ +38 ([[agile magical]], [[reach|reach 15 feet]]); __Damage__ 4d10+18 (4d10+18) slashing"
>   - name: Melee Tail
>     desc: "⬻ +36 ([[magical]], [[reach|reach 25 feet]]); __Damage__ 4d12+18 (4d12+18) slashing"
>   - name: Melee Wing
>     desc: "⬻ +36 ([[agile]], [[magical reach|magical reach 20 feet]]); __Damage__ 3d10+18 (3d10+18) slashing"
> 
> sourcebook: "Altered from Ancient Umbral Dragon. _Bestiary 2_, page 97."
> ```
> ````

### Explanatory Code Block

> [!code]- Explanation of What Each Line Needs for Formatting
> ````yaml
> ```statblock
> columns: Number
> forcecolumns: Boolean
> layout: Layout
> source: "Source in String"
> name: "Name in String"
> level: "Creature 16"
> rare_01: "Rarity in String"
> rare_02: "Rarity in String"
> rare_03: "Rarity in String"
> rare_04: "Rarity in String"
> alignment: "Alignment in String"
> size: "Size in String"
> trait_01: "Trait in String"
> trait_02: "Trait in String"
> trait_03: "Trait in String"
> trait_04: "Trait in String"
> trait_05: "Trait in String"
> trait_06: "Trait in String"
> trait_07: "Trait in String"
> modifier: Perception Modifier # Used for Initiative Tracker
> perception:
>   - name: "Perception or Name in String"
>     desc: "Description in String"
> languages: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> skills:
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> abilityMods: [8, 5, 6, 4, 5, 5]
> 
> abilities_mid:
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> abilities_bot:
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> 
> speed: Speed in no string
> 
> ac: Number
> armorclass:
>   - name: Name
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> hp: Number # Used for Initiative Tracker
> health:
>   - name: Name
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> 
> 
> attacks:
>   - name: Name
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: Name
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: Name
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
>   - name: Name
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> 
> spellcasting:
>   - name: "Name in String"
>     desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
> sourcebook: "Name in String"
> ```
> ````

### Empty Code Block

> [!code]- An Empty Codeblock for Pathfinder 2e
> ````yaml
> ```statblock
> columns: 
> forcecolumns: 
> layout: Basic Pathfinder 2e Layout
> source: 
> name: 
> level: 
> rare_01: 
> rare_02: 
> rare_03: 
> rare_04: 
> alignment: 
> size: 
> trait_01: 
> trait_02: 
> trait_03: 
> trait_04: 
> trait_05: 
> trait_06: 
> trait_07: 
> modifier: 
> perception:
>   - name: 
>     desc: 
> languages: 
> skills:
>   - name: 
>     desc: 
> abilityMods: [, , , , , ]
> 
> abilities_mid:
>   - name: 
>     desc: 
>   - name: 
>     desc: 
> abilities_bot:
>   - name: 
>     desc: 
>   - name: 
>     desc: 
>   - name: 
>     desc: 
>   - name: 
>     desc: 
> 
> speed: Speed in no string
> 
> ac: Number
> armorclass:
>   - name: 
>     desc: 
> hp: 
> health:
>   - name: 
>     desc: 
> 
> 
> attacks:
>   - name: 
>     desc: 
>   - name: 
>     desc: 
>   - name: 
>     desc: 
>   - name: 
>     desc: 
> 
> spellcasting:
>   - name: 
>     desc: 
> sourcebook: 
> ```
> ````

## Attributions

> [!quote] Legal Notice
> "Fantasy Statblocks uses trademarks and/or copyrights owned by Paizo Inc., used under [Paizo's Community Use Policy](http://www.paizo.com/communityuse).  
> We are expressly prohibited from charging you to use or access this content.  
> Fantasy Statblocks is not published, endorsed, or specifically approved by Paizo.  
> For more information about Paizo Inc. and Paizo products, visit paizo.com.