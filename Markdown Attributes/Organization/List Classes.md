---
aliases: [Markdown Attributes Lists]
cover: 
description: 
image: 
permalink: attributes/organization/lists
publish: true
tags: [Markdown-Attributes/Lists]
---

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

