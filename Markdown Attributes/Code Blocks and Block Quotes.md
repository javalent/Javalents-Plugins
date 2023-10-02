---
aliases: [Markdown Attribute Code blocks, Markdown Attribute Block Quotes, Markdown Attribute Callouts]
description: 
permalink: 
publish: true
tags: [Markdown-Attributes/Codeblocks, Markdown-Attributes/Blockquotes, Markdown-Attributes/Callouts]
---

# Code blocks and block quotes

## Code blocks

When applying Markdown Attributes to Code blocks should have their attributes placed after the initial three ticks.

````
```python { data-python="code" .class }
nums = [x for x in range(10)]
```
````

Currently, modifying code block attributes will require you to reload the note for the changes to take effect.

## Block quotes

Block quotes can by targeted by placing the attributes directly after the last line of the quote.

```md
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{ .class }
```

## Callouts

This syntax also works for Obsidian callouts, and follows the same rules of styling as Block Quotes.

```md
> [!hint] This syntax also works for Obsidian callouts!
> { .DragonscriptFont }
```
