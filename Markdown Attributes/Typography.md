---
aliases: [Markdown Attributes Headers, Markdown Attributes Paragraphs]
description: 
permalink: 
publish: true
tags: [Markdown-Attributes/Headers, Markdown-Attributes/Inline, Markdown-Attributes/Links, Markdown-Attributes/Paragraphs]
---

# Typography

## Headers

Attributes must be added to headers at the end of the line.

`### A Header { id=header .header-class }`

## Inline text elements

  
Inline text elements such as italics, bold, highlight, etc. should have their attributes placed *inside* the symbol:

```md
I'm normal text, but *I'm italic { class='italics' }*, **I'm bold { .bold }** and ==I'm highlighted { id=highlight }==.
```

## Links

Wikilinks and Markdown syntax links may have attributes placed on them.

`[link](http://example.com "example-title"){ class="foo bar" title="Some title!" }`

`[[Test 123]] { .wikilink}`

## Paragraphs

Attributes must be added to paragraphs at the end of each paragraph as shown below. If your multiple paragraphs are wrapped into a blockquote, you would follow the rules for [[Code Blocks and Block Quotes#Block Quotes|Block Quotes]] instead. 

```md
Quisque elementum non nunc sit amet sagittis. Nam at risus at ipsum aliquam imperdiet. Aenean sed mattis justo. Integer dapibus erat finibus consectetur semper. Fusce faucibus dui sit amet luctus consequat. Aenean metus eros, luctus ac quam a, iaculis scelerisque felis. Vivamus convallis porta enim sit amet interdum. Maecenas et ligula a neque ultricies interdum sed eu diam. Curabitur vel turpis vitae massa condimentum sodales. Nunc lobortis porta odio, eu ultrices est egestas quis. Praesent ac magna et ante eleifend maximus. Sed mollis diam id justo consequat fermentum. { .class }

Proin sit amet pretium arcu, vel luctus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam vel nisi ut nulla vehicula faucibus et non augue. In sed nunc sit amet augue fringilla tincidunt. Sed non nisl libero. Etiam id venenatis ligula, volutpat porta sapien. Proin viverra felis enim, in elementum risus sodales vel. Sed pellentesque erat ac diam finibus, sit amet dignissim dui convallis. Proin non mollis sapien. Curabitur cursus ligula viverra commodo consectetur. Mauris nec tristique odio. Praesent maximus iaculis libero in vulputate. { .class }
```
