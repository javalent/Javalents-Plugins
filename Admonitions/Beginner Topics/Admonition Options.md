---
aliases: [Using Admonitions, Admonitions Options]
cover: 
description: "This page details some of the options available within an Admonition codeblock."
image: 
permalink: admonition/beginner/codeblocks
publish: true
tags: [Admonitions/Usage, Admonitions/Settings/Options]
---

[![Admonitions](https://github.com/javalent/admonitions/blob/main/publish/gifs/all.gif?raw=true)

Placing a code block with the admonition type:

```ad-note
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```

Becomes:

![Default Admonition Note](https://github.com/javalent/admonitions/blob/main/publish/images/default.png?raw=true)

## Options

```ad-<type> # Admonition type. See below for a list of available types.
title:                  # Admonition title.
collapse:               # Create a collapsible admonition.
icon:                   # Override the icon.
color:                  # Override the color.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.

```

> [!yellow] Be Advised:
> Please note that as of **4.4.1**, the `title`, `collapse`, `icon` and `color` parameters must be at the *top* of the block, in any order.

### Title

The admonition will render with the type of admonition by default. If you wish to customize the title, you can do so this way:

```ad-note
title: Title
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```

Custom titles are rendered as Markdown, so they support the full Markdown syntax available to Obsidian.

````yaml
```ad-note
title: $\sum\frac{\pi}{\sigma}$
```
````

Becomes….

![](https://github.com/javalent/admonitions/blob/main/publish/images/rendered-title-markdown.png?raw=true)

Leave the title field blank to only display the admonition.

````md
```ad-note
title:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```
````

![](https://github.com/javalent/admonitions/blob/main/publish/images/no-title.png?raw=true)

### Collapsible

To create a collapsible admonition, add the `collapse` parameter to it. 

Setting `collapse: open` will make the admonition open on render and collapsible on click. 

If the admonition's title is left blank, the `collapse` parameter will have no effect. 

You can set all admonitions to be collapsible by default in the settings.

![](https://github.com/javalent/admonitions/blob/main/publish/gifs/collapse.gif?raw=true)

### Icon

To change the default icon of an admonition, you can use the `icon` parameter. 

Please note that the icon name you provide must be the exact name of an icon from either **FontAwesome** or **RPGAwesome**, otherwise it will not work.

````md
```ad-note
icon: triforce

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.
```
````

### Color

To change the color of an admonition, you can use the `color` parameter followed by an RGB triad value. Please note that the RGB triad should be entered as three integers separated by commas, and must be between 0 and 255. 

**For example**: `color: 255, 0, 0` sets the color to red, and `color: 0, 128, 0` sets the color to green.

````md
```ad-note
color: 200, 200, 200

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla.

```
````

### No Content

If an admonition is created without any content, only the title block will be rendered when the admonition is displayed.

````md
```ad-note
```
````

