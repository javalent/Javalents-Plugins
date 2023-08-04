---
aliases:
  - Markdown Attributes for Organization
  - Organization Classes
  - HTML IDs
  - List Classes
  - Table Classes
description: This page provides an overview of the Organization Styling
permalink: attributes/organization
publish: true
tags:
  - Attributes/Organization
---

# Organization Classes

Markdown Attributes can be applied to individual HTML IDs, lists, and tables to enable custom styling and formatting of these elements. This approach eliminates the need to apply specific div classes to each individual table, thus allowing for more efficient organization and management of the content.

## HTML IDs

Markdown Attributes can be *applied* to HTML ID's as well.  

Currently, the ID attribute must be set using `id=value` due to Obsidian's handling of `#tags`.

```
<a href="github.com" id="items of joy">Github</a>
```

## List Classes

Lists may have attributes placed on each individual list item.

```markdown
-   item { .item}
    -   nested item { .nested}
    -   nested item 2 { id="item 2" }
```

They may also differ per each line. 

```markdown
-   item 1 { .item}
-   item 2 { id=item }
-   item 3 { data-item=3 }
    { .top-level-ul }
```

To apply attributes to the final nested/indented list, you need to place the attribute on the line directly after the last item.

```markdown
-   item { .item}
    -   nested item { .nested}
    -   nested item 2 { id="item 2" }
        { .nested-ul}
```

## Table Classes

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
