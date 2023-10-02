---
aliases: [Markdown Attribute Blocks, Attribute Blocks]
description: Discover the different form of attribute blocks.
permalink: attributes/blocks
publish: true
tags: [Attributes/Blocks]
---

# Attribute blocks

In adding attributes directly to a block, you can change the formatting and style of the text, such as its background color or font. This can be particularly useful for organizing and visually differentiating different sections of a note. The syntax for adding attributes to blocks is straightforward, and can be added directly to various types of blocks, including paragraphs, blockquotes, and code blocks.

## Block quote classes

```md
> Your base land movement speed is 30 feet or 3 Squares. 
> If you can fly, your base flying speed is 50 feet or five squares. 
> If you can swim, your base swim speed is 20 feet or 2 squares. 
{ .class }
```

To customize the appearance or behavior of a block quote, you can add Markdown attributes directly after the last line of the quote. In the example above, we've added the `.class` attribute to assign a custom class to the block quote.

## Callout classes

You can also use Markdown Attributes to style Obsidian callouts. The same syntax applies as for Block Quotes, and you can target callouts by placing the attributes after the last line of the callout. For example:

```md
> [!danger] Step away from my tail!
> { .DragonscriptFont }
```

## Code block classes

To add Markdown Attributes to a code block, the attributes should be placed after the initial three ticks. 

For example, in the code block below, the `data-python="code"` and `.class` attributes are added to the block using curly braces:

````python
```python { data-python="code" .class }
nums = [x for x in range(10)]
```
````

Note that any modifications to code block attributes will require the note to be reloaded before the changes take effect.
