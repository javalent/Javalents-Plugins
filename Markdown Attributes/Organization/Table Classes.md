---
aliases: [Markdown Attribute Tables]
cover: 
description: 
image: 
permalink: attributes/organization/tables
publish: true
tags: [Markdown-Attributes/Tables]
---

Attributes can be added to the `.Table` element by placing the attribute on the line below it.

```markdown
| header1 | header2 |
|---------|---------|
| column1 | column2 |
{ .table-class}
```

Attributes can be added to individual table cells (`.th`, `.td`) as follows :

```markdown
| header1 { .class} | header2               |
|-------------------|-----------------------|
| column1           | column2 { .class-two} |
```

It is not currently possible to add attributes to `Tr` or `Thread` elements.
