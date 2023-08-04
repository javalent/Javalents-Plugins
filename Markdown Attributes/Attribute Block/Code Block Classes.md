---
aliases: [Markdown Attribute Code Blocks]
cover: 
description: "Learn how to style code blocks in your Markdown notes using attributes."
image: 
permalink: attributes/blocks/codeblocks
publish: true
tags: [Markdown-Attributes/Codeblocks]
---

To add Markdown Attributes to a code block, the attributes should be placed after the initial three ticks. 

For example, in the code block below, the `data-python="code"` and `.class` attributes are added to the block using curly braces:

````python
```python { data-python="code" .class }
nums = [x for x in range(10)]
```
````

Note that any modifications to code block attributes will require the note to be reloaded before the changes take effect.
