---
aliases: [Section Rollers, Dice Roller Section Rollers]
description: "This page goes over how to add and edit section rollers to your notes."
permalink: dice/rollers/section
publish: true
tags: [Dice/Rollers]
---

# Section rollers

## Section rollers overview

The Section Roller is a feature that allows you to randomly select a block of text from a note or notes using a link to that note or a tag.

Please note that this feature is still under development and may not function as expected.

When a result is generated using the Section Roller, you can click on it while holding the Ctrl or Command key to open the note associated with that result.

To use the Section Roller, provide a link to a note or a tag in a dice formula, like so:

```md
[[Note Name#^Section Name]]
```

Where `Note Name` is the name of the note you want to select a section from, `Section Name` is the name of the section you want to select, and `^` is the delimiter between the note name and the section name. If you want to select a section randomly, use a `*` instead of the section name:

```md
[[Note Name#*]]
```

The Section Roller will return a randomly selected section from the specified note or notes each time the formula is evaluated.

| Example | Result |
| --- | --- |
| `` `dice: [[Note]]` `` | Returns a single random block from `Note` |
| `` `dice: 3d[[Note]]` `` | Returns 3 random blocks from `Note` |

### Block types

In Obsidian, there are different "types" of blocks. By default, the plugin excludes `thematicBreak` and `yaml` blocks from the results of a block roll.

To include a specific block type, you can add `|<type>` at the end of the block roller. Multiple types can be included by separating them with a comma.

Usage:

| Example                                         | Result                                                                                   |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `` `dice: [[Note]]\|paragraph` ``               | Return `paragraph` blocks                                                                |
| `` `dice: #tag\|paragraph,heading,yaml` ``      | Return `paragraph`, `heading`, and `yaml` blocks                                         |
| `` `dice: #tag\|-\|paragraph,heading-3,yaml` `` | Return `paragraph`, level 3 `heading`s, and `yaml` blocks from a **single, random note** |

Please note that I do not have control over how Obsidian defines each block type, and that some types may not match your expectations. For example, images may be returned as `paragraph`.

Here is a list of block types that Obsidian defines, which *we believe* to be accurate, but please use it with caution:

| Type                | Type             | Type                 | Type           |
| ------------------- | ---------------- | -------------------- | -------------- |
| Blockquote          | Break            | Callout              | Code           |
| Definition          | Delete           | Emphasis             | Footnote       |
| FootnoteReference   | Heading          | Html                 | Image          |
| ImageReference      | InlineCode       | Link                 | LinkReference  |
| List                | ListItem         | Paragraph            | Root           |
| Strong              | Table            | ThematicBreak        | Text           |
| Toml                | Yaml             |                      |                |

### Headers

You can further filter down the returned results by specifying a specific heading size. Simply append the size to the end of the `heading` type. For example, to roll a random heading of size 2 from a note, use the following syntax:

`` `dice: [[Note]]|heading-2` ``

### Line rollers

You can also roll a random line from any note using the following syntax:

`` `dice: [[Note]]|line` ``

> [!Note] The plugin will filter out zero-length lines. However, depending on the content of your notes, you may still get "blank" lines in the result.

#### Line rollers with defined spaces

You can combine rollers with defined spaces in between by using a HTML tag to create spaces. Below, we show the example submitted by *`Mikhail#2095`* 🎉 that creates custom spacing between names. 

```md
`dice:[[DwarfName^first]]|nodice`<em></em>`dice:[[DwarfName^middle]]|nodice`<em></em>`dice:[[DwarfName^last]]|nodice` `dice:[[DwarfName^first]]|nodice`<em></em>`dice:[[DwarfName^middle]]|nodice`<em></em>`dice:[[DwarfName^last]]|nodice`<em></em>son `dice:[[DwarfName^last1]]|nodice`<em></em>`dice:[[DwarfName^last2]]|nodice`, of Clan `dice:[[DwarfName^first]]|nodice`<em></em>`dice:[[DwarfName^middle]]|nodice`<em></em>`dice:[[DwarfName^last]]|nodice`
```

> [!screenshot]- Screenshot of Joining Dice Lines with EM
> ![Dice Lines](https://github.com/javalent/dice-roller/blob/main/publish/images/joining-dice-with-em.png?raw=true)