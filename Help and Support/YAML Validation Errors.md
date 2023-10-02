---
aliases: [YAML Validation]
description: "This page describes common YAML issues when using Javalent's Plugins."
permalink: support/yaml
publish: true
tags: [Support/YAML]
---

# Yaml validation errors

The most common reason why a [[Fantasy Statblocks|Fantasy Statblock]]  and [[Leaflet|Leaflet]] map will not render, is due to YAML syntax errors. 

The following is a list of common syntax errors in alphabetical order.

## Asterisks

````yaml
```statblock
Defense: "Plate Armor"
Hit Points: "**200**" 
Hit Dice: "200 (20d20)"
```
````

Asterisks are used in Obsidian by default to **bold** and italic *words*. However, asterisks are also a symbol for mathematical properties in most programming languages. We've all used (3 x 5) and (3 \* 5) at some point. 

In YAML, an asterisk takes on an even weirder form by acting as an alias for an already defined set of data. 

Since this behaviour is undesired, we need to use underscores when making bold and italic data to remain compliant.

The corrected YAML will be:

````yaml
```statblock
Defense: "Plate Armor"
Hit Points: "__200__" 
Hit Dice: "200 (20d20)"
```
````

## Escaping characters

Another, very common reason for rendering issues, is a lack of unescaped characters. An unescaped character is a character that has not been properly encoded to be interpreted by the system.

YAML syntax requires specific special characters to be escaped to be interpreted correctly. For example, the ampersand symbol "&" is a special character in YAML syntax that needs to be escaped with a backslash "`\`" if it is used as a regular character in a string.

```yaml
name: Lenny & Diario's House Hunting Adventures
```

In the above example, the ampersand symbol "&" and an apostrophe "'" is used as a regular character in a string without being escaped, which will result in a YAML syntax error and prevent the statblock from rendering. To fix this, you would need to escape the both symbols like this:

```yaml
name: Lenny \& Diario\'s House Hunting Adventures
```

For good measure, you may want to give it the [[String#Wrapped Strings|Wrapped Strings]] treatment as well.

## New lines

Inappropriate newlines in the YAML can also result in a partial or full collapse of the render view. In non-docu speak: half or none of the statblock may show up. Here are three common forms of creating new-lines, each with their own strengths and weaknesses.

### Backslash n

YAML defaults to this in normal programming (along with scalars, but we are NOT GOING THERE!), but as you can see, its messy. Incorrectly placed, however, and you will cause a rendering issue. This is a good one to check with [YAML Lint](https://www.yamllint.com).

````yaml
```statblock
actions:
  - name: Potato Cannon
    desc: "You fire a high-velocity potato at your target, dealing massive damage on impact.\n__Attack Roll__:1d20 + Dexterity modifier + proficiency bonus.\n __Damage Roll__: 3d8 + Strength modifier.\n__Special Effect__: On a critical hit, the potato explodes on impact, dealing an additional 2d8 fire damage to the target and all creatures within 5 feet of the target."
```
````

### Spaced descriptions

A brute-force, but also clean way to create a new line, particularly when working with [[Fantasy Statblocks/Editing Layouts/Core Blocks#Trait Block|Trait Blocks]], is use descriptions as newlines. For example:

````yaml
```statblock
actions:
  - name: Potato Cannon
    desc: "You fire a high-velocity potato at your target, dealing massive damage on impact."
  - name: ""
    desc: "__Attack Roll__:1d20 + Dexterity modifier + proficiency bonus. __Damage Roll__: 3d8 + Strength modifier"
  - name: ""
    desc: "__Special Effect__: On a critical hit, the potato explodes on impact, dealing an additional 2d8 fire damage to the target and all creatures within 5 feet of the target."
```
````

This method creates more space within the codeblock. A large benefit of this is that information is neatly and tidily formatted into individual lines. Secondarily, each line can be individually targeted via css for those so include to delve into child selectors.

### Indented newlines

Suppose you have a D&D character sheet Statblock you are trying to build with following content:

```yaml
name: Trollolin Saruman
race: Wizard
    class: Wizard
    level: 5
```

When you indent lines in YAML, each level of indentation should be indented by the same number of spaces or tabs. In the example I provided, the `class` and `level` keys are indented by one extra level of indentation compared to the `race` key. This is incorrect and can cause a YAML validation error because the YAML parser expects `class` and `level` to be values for the `race` key, but instead encounters them at an unexpected level of indentation.

To fix the error, you need to make sure that each level of indentation is consistent, and that `class` and `level` are at the same level of indentation as `race`. You can do this by removing the extra indentation for `class` and `level` like so:

```yaml
name: Trollolin Saruman
race: Wizard
class: Wizard
level: 5
```

>[!question] But Sigrunixia dragon lady ma'am… thing. What about when I have to indent?

When you need to make sure you indent **consistently**. It is common to find indentations of 2 or 4 spaces. Our recommendations for Statblocks is **2 Spaces**.

```yaml
name: Trollolin Saruman
race: Wizard
class: Wizard
level: 5
spells:
  - magic missile
  - grow beard
  - fireball
equipment:
  - staff
  - robes
  - creepy orb
```

## Quotation marks

Quotation Marks are the secondary protectors against special characters, besides the backslash. Suppose you are adapting a Pathfinder Layout to be more akin to a Character Sheet:

```yaml
- name: Amiri
  class: barbarian
  level: 3
  abilities:
    strength: 18
    dexterity: 14
    constitution: 16
  feats:
    - Power Attack
    - Cleave
    - Weapon Focus: Greatsword
  inventory:
    - 50 gold pieces
    - Masterwork Greatsword
    - Studded Leather Armor
  spells:
    1:
      - Magic Missile
      - Shield
    2:
      - Bull's Strength
      - Rage
```

In YAML, values that contain special characters or spaces must be enclosed in quotes. In the example given, the spell names are not enclosed in quotes, which can cause a YAML validation error if any of the spell names contain special characters or spaces.

To fix the error, you can enclose each spell name in quotes to ensure that the YAML parser recognizes the spell names as strings. As we see below, Bull's Strength no longer throws off a Syntax issue. 

```yaml
- name: Amiri
  class: barbarian
  level: 3
  abilities:
    strength: 18
    dexterity: 14
    constitution: 16
  feats:
    - Power Attack
    - Cleave
    - Weapon Focus: Greatsword
  inventory:
    - 50 gold pieces
    - Masterwork Greatsword
    - Studded Leather Armor
  spells:
    1:
      - "Magic Missile"
      - "Shield"
    2:
      - "Bull's Strength"
      - "Rage"
```
