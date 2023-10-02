---
aliases: [Admonitions Settings]
description: This page goes over the different Admonition Settings you may need to change.
permalink: admonitions/settings
publish: true
tags: [Settings/Admonitions]
---

# Admonition settings

## Admonition plugin settings

In these plugin settings, you can create and manage custom admonition types, which are also referred to as callouts.

### Export custom types as css

This button generates a CSS snippet for your custom callout types, which you can save and use as desired.

### Export custom admonitions

This option allows you to select the admonitions in your list and export them to a `.json` file, which you can then import in [[Admonitions/Import an admonition|Import an Admonition]].

### Add new

This option opens a modal window where you can create a new admonition. A visual guide on doing this is found at [[Admonitions/Create an admonition|Creating an Admonition]]

Once created, all admonitions can be used as [Obsidian callouts](https://help.obsidian.md/Editing+and+formatting/Callouts "Obsidian"). 

### Importing custom admonitions

This setting covers the process of importing custom admonitions into the plugin. A visual guide on doing this is found at [[Admonitions/Import an admonition|Import an Admonition]].

The admonitions can be imported from a JSON array of definitions in the settings. The minimum requirement for a valid admonition type is a specified "type" field. 

An example of the minimum JSON structure is as follows:

```json
[
    {
        "type": "my-custom-type"
    }
]
```

When the "icon" and "color" fields are not specified, a random color will be assigned, and the `pencil-alt` FontAwesome icon will be used. However, you can also specify both fields to customize the appearance of your admonition:

```json
[
    {
        "type": "my-custom-type",
        "icon": "globe",
        "color": "120,120,120"
    }
]
```

If you want to specify an icon pack, you can do so like this:

```json
[
    {
        "type": "my-custom-type",
        "icon": {
            "name": "globe",
            "type": "font-awesome"
        },
        "color": "120,120,120"
    }
]
```

The JSON specification defines all the possible fields. You can find the JSON specification in the [[Admonitions/Advanced topics/JSON specification|Admonitions JSON Specification]] document.

## Admonitions & callouts settings

These are settings related to the display and behavior of admonitions and the callouts they can be.

-  **Add Drop Shadow**: This setting allows you to add a drop shadow to rendered admonitions. If the setting is turned off, admonitions will receive the `.no-drop` CSS class instead.
-   **Collapsible By Default:** Determines whether all admonitions are collapsible by default, except those with `collapse: none` set in the parameters.
-   **Default Collapse Type:** This option is only available if Collapsible By Default is enabled. It sets the default collapse type for admonitions that are collapsible by default.
-   **Add Copy Button:** Adds a "Copy Content" button to the top-right corner of the admonition content.
-   **Parse Titles as Markdown:** Controls whether admonition titles are rendered as markdown.
-   **Set Admonition Colors:** Determines whether a rendered admonition is assigned a color. If turned off, you can control the color of admonitions via CSS.
-   **Hide Empty Admonitions:** Hides admonitions with no content.
	- Please note that this only works for Admonitions that have *no text content whatsoever*.

## Advanced settings

These are additional settings that can further customize and enhance the functionality of the Admonition plugin.

### Markdown syntax highlighting

This option enables syntax highlighting when editing admonition code blocks.

### Sync links to metadata cache

When enabled, the plugin attempts to synchronize links to the metadata cache so that they can be displayed in graph view.

Note that this feature is experimental and links will only be synced when rendered in an admonition. They will not persist if you close and reopen Obsidian. Please see [this issue](https://github.com/valentine195/obsidian-admonition/issues/144) for more information.

### Generate js for publish

This option generates the necessary JavaScript code to use Admonitions on custom-domain Obsidian Publish websites. For more information, see the [[Admonitions/Advanced topics/Publish.js with admonitions|Publish.js with Admonitions]] page.

