---
aliases: [Codeblock, Code Block, Code-Block]
description: "A code block is a section of code that is displayed in a monospaced font and is usually surrounded by a contrasting background to distinguish it from the rest of the text."
permalink: glossary/codeblock
publish: true
tags: [Glossary/Markdown]
---

# Code Block

In Markdown, a code block is a section of code that is displayed in a monospaced font and is usually surrounded by a contrasting background to distinguish it from the rest of the text.

To indicate a code block in Obsidian, you can either use backticks (\`) to surround a small inline code snippet, or use triple backticks (\`\`\`) to surround a larger block of code. 

## Inline Code Block

`dice: 1d10 - 1d10`

An inline code block is usually one line, though it may be several lines joined together as one.

## Block Code

A block code, or code block, is multiple lines. In most editors including Obsidian, this codeblock will be highlighted to indicate functions. For formatting, the text inside it can be separated by spaces. It can be indented. It can be minified (all spaces removed). It can come in all shapes and sizes. 

What primarily makes this different from an Inline Code Block is the formatting, the readability, and complexity. 

```js
//definition
getArrayRoller(options: any[], rolls: number = 1): Promise<ArrayRoller>;

ArrayRoller {
    /** Roll the array roller and generate a new set of results. */
    roll(): Promise<any>

    /** Property containing the container element of the array roller. Use this to attach it to the note's DOM */
    containerEl: HTMLElement;

    /** Property containing the array of randomly-generated results. This will change every time the array roller is rolled. */
    results: any[]
}

//example
const diceRoller = await diceRollerPlugin.getArrayRoller([1, 2, 3, 4, 5], 2);
```
