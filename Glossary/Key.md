---
aliases: [Key]
cover: 
description: 
image: 
permalink: glossary/key
publish: true
tags: [Glossary/YAML/Key]
---

`Aliases: Monster Property, Key-Value Pair`

A Key is a piece of data that is set. The Key should not change. It acts as an anchor for you to tell the rest of your code what to do with the data, or value, that goes next to your key.

HP: 200
*Key*: *Number*

Name: Ancient Red Dragon
*Key*: *[[String]]*

Name: "Super Ancient Red Dragon"
*Key*: *[[String#Wrapped Strings|Wrapped Strings]]*

In the case of Statblocks, a Key is what you will name your Monster Property, but it may not necessarily be the name that shows up as that property. For example:

```yaml
HP: 200
```

**Health**: 200

The Key is HP, but the block linked to HP allows for the text to render as Health.

The block can also change the value field with [Callbacks](Common%20Callback%20Functions.md).