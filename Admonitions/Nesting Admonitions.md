---
aliases: [Nesting Admonitions, Nest an Admonition]
description: Admonitions allows for nesting of other Admonitions, as well as codeblocks.
permalink: admonitions/nesting
publish: true
tags: [Admonitions/Nesting]
---

# Nesting admonitions

You can nest admonitions by increasing the number of backticks. A nested admonition is created by enclosing a new set of backticks inside an existing admonition. 

For example, to create a nested admonition, you can use the following code block:

``````
`````ad-note
title: Nested Admonitions
collapse: open

Hello!

````ad-note
title: This admonition is nested.
This is a nested admonition!

```ad-warning
title: This admonition is closed.
collapse: close
```

````

This is in the original admonition.
`````
``````

## Rendering code blocks

To nest code blocks inside admonitions, you can use a method similar to nesting admonitions, by increasing the number of backticks. 

Alternatively, for a single layer, you can use the `~~~` markdown code block syntax.

`````
````ad-info

```ad-bug
title: I'm Nested!
~~~javascript
throw new Error("Oops, I'm a bug.");
~~~
```

```javascript
console.log("Hello!");
```

````
`````

![Nested Code](https://github.com/javalent/admonitions/blob/main/publish/images/nested-code.png?raw=true)
