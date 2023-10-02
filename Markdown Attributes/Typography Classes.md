---
aliases: [Markdown Attributes Typography, Typography Classes, Header Classes, Markdown Attributes Inline Text Elements, Link Classes, Paragraph Classes]
description: Learn how to apply attributes to typography using Markdown
permalink: attributes/typography
publish: true
tags: [Attributes/Typography]
---

# Typography classes

One area where Markdown attributes can be particularly useful is in typography, where they can help you achieve better formatting and layout of your text. By using attributes such as classes, IDs, and inline styles, you can control the appearance of headings, paragraphs, and other text elements in your Markdown document beyond the normal limitation of Markdown. This is especially helpful when creating complex documents such as technical manuals, academic papers, or character sheets, where clear and consistent formatting can make a big difference in readability and impact.

## Header classes

Attributes must be added to headers at the end of the line.

`### A Header { id=header .header-class }`

## Inline text elements

Inline text elements such as *italics*, **bold**, ==highlight==, etc. should have their attributes placed *inside* the symbol:

```md
I'm normal text, but *I'm italic { class='italics' }*, **I'm bold { .bold }** and ==I'm highlighted { id=highlight }==.
```

## Link classes

Wikilinks and Markdown syntax links may have attributes placed on them.

`[link](http://example.com "example-title"){ class="foo bar" title="Some title!" }`

`[[Test 123]] { .wikilink}`

## Paragraph classes

Attributes must be added to paragraphs at the end of each paragraph as shown below. If your multiple paragraphs are wrapped into a blockquote, you would follow the rules for [[Block Quote Classes|Markdown Attribute Block Quotes]] instead. 

```md
Echo Dragons are beings of great magical power, imbued with the essence of their true dragon counterparts from other realms. They possess all the strengths and abilities of true dragons, as well as the traits and characteristics of their subspecies. However, due to the results of their endless pursuit of Apotheosis, Echo Dragons undergo a unique form of transformation that results in a form of draconic schizophrenia. { .class }

As an Echo Dragon rapidly merge with other echoes, they undergo a profound shift in their personality and alignment. They become imbued with the memories, emotions, and traits of their merged counterparts, leading to a fractured sense of core self. Over time, an Echo Dragon may shift from their typical alignment and personality, becoming more chaotic or lawful, good or evil, depending on the echoes they merge with. This can result in a form of internal conflict, as the Echo Dragon's original and habitual nature battles with the influence of their merged counterparts. { .class }
```
