---
aliases: [Dataview Integration, Tag Roller, Tag Rollers, Inline Dataview Integration, Direct List Queries]
description: 
field: 2
permalink: dice/dataview
publish: true
tags: [Dataview/Dice]
---

# Dataview in dice roller

> [!warning] Usage of the features on this page requires the Obsidian plugin [Dataview](https://github.com/blacksmithgu/obsidian-dataview)

## Direct list inquiries

> [!feature] This feature was added in version 9.0.0.


Using the dice roller call `dice: Xdv` allows you to use a simple Dataview **list** query with dice roller to return X amount of blocks and notes.

```dice: 3dv(list where contains(tags, "Statblocks"))```

Will return the following results in this documentation vault.

> [!screenshot]- Screenshot of Fantasy Statblocks inquiry
> ![400](publish/images/IMG-Dataview%20in%20Dice%20Roller.png)

Please note this implementation is rudimentary, and is limited to one query filter per dice roller. I.e., you cannot currently specify FROM and WHERE in one dice roll.

## Inline dataview integration

The Dice Roller plugin has basic support for Dataview inline fields in number dice.

Note that if you have multiple inline fields with the same name, the plugin will only use **one**, and it will be the last field indexed by Dataview.

Here is an example:

```yaml
field:: 3
field2:: 5
```

``dice: field``
``dice: 1d6 + field``
``dice: 1d6*field2 + field``

## Tag rollers

By default, using the tag dice will return one random block from each note that has the tag. However, you can change this behaviour by using the optional parameters `+` and `-` as shown below.

If multiple files have the tag, you can re-roll the result from a particular file by clicking on the block. Clicking on the container or the dice icon will re-roll all returned results.

You can also use block-type parameters to filter the returned results, as described in the previous section.

| Example               | Result                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `` `dice: #tag` ``    | Return a single random block from notes with `#tag`, behavior depends on settings (default to **every**) |
| `` `dice: #tag\|-` `` | Return a single random block from **a single, random note** with `#tag`                                  |
| `` `dice: #tag\|+` `` | Return a single random block from **every note** with `#tag`                                             |

### Links

If the `Always Return Links for Tags` setting is enabled or `|link` is appended to the end of the tag, the Dice Roller will return a link to a random note instead of sections. Note that this will only return a single link regardless of the number of rolls specified. 

This behaviour may change in future releases.

## Frequently asked questions

### Can I roll a dataview table with a standard dice roller?

No. The data for the information in the table does not really exist in the table, but from elsewhere. As the information is more of a projection of data elsewhere, than an actual table, standard dice roller has nothing to roll.

You would need to integrate the [[Dice Roller/Advanced Topics/Dice Roller and Javascript|dice roller api]] into a `dataviewjs` [code block](Glossary/Code%20Block.md) to attempt to make a `dv.table`.