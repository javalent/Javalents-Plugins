---
aliases: [Hyphen Variable, Dash Variable]
cover: 
description: "Learn what Hyphen, or CSS, Variables are."
image: 
permalink: glossary/hyphen-variable
publish: true
tags: [Glossary/CSS/variables]
---

Dash variables, also known as Hyphen Variables or Custom Properties, are variables in CSS that start with a double hyphen (`--`) followed by a name, such as `--primary-color`. These variables are often used to customize the appearance of an element, such as changing its color or font size. Some iterations of these variables may appear in single hyphen form, such as `-moz-scrollbar`.

## Benefits

- Hyphen variables can easily link to other variables. `--statblock-font: var(--default-font);`
- Hyphen variables can be changed dynamically using JavaScript, making it easier to create responsive designs that adapt to user input or device size.
- Hyphen variables can be inherited by child elements, allowing for more efficient and organized stylesheets.
- Hyphen variables allow for more flexibility and customization in CSS, as they can be used to store and reuse values throughout a stylesheet.

## Drawbacks

-   Hyphen variables are not fully supported by all browsers, especially older versions of Internet Explorer. This can lead to compatibility issues and require fallbacks to be implemented for unsupported browsers. 
	- In Obsidian, this is not an issue, but something to consider should you choose to take this into web design.
-   Hyphen variables are less performant than hardcoded values, as they require parsing and rendering by the browser.
- Hyphen variables Are the only variable of choice in CSS.
