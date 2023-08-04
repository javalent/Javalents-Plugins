---
aliases:
  - Admonition Types
  - Custom Admonitions
description: Admonitions comes with additional styling of the default Obsidian Callouts.
permalink: admonitions/beginner/types
publish: true
tags:
  - Admonitions/Types
  - Admonitions/Custom
---

# Types of Admonitions

The following admonition types are currently supported upon install:

| Type     | Aliases                     |
|----------|-----------------------------|
| note     | note, seealso               |
| abstract | abstract, summary, tldr     |
| info     | info, todo                  |
| tip      | tip, hint, important        |
| success  | success, check, done        |
| question | question, help, faq         |
| warning  | warning, caution, attention |
| failure  | failure, fail, missing      |
| danger   | danger, error               |
| bug      | bug                         |
| example  | example                     |
| quote    | quote, cite                 |

To get a visual representation of what these admonitions look like, please refer to [this link](https://squidfunk.github.io/mkdocs-material/reference/admonitions/).

It is worth noting that the default admonitions can be customised by creating a user-defined admonition with the same name.

## Custom Admonitions and Callouts

Custom admonitions may be created in settings. Creating a custom admonition will also enable it to be used as an Obsidian [callout](https://help.obsidian.md/Editing+and+formatting/Callouts).

Creating a new admonition requires three things: the type, the icon to use, and the colour of the admonition.

Only one admonition of each type may exist at any given time; if another admonition of the same type is created, it will override the previously created one.

If a default admonition is overridden, it can be restored by deleting the user-defined admonition.

Please note that by default, the background colour of the title is the **colour of the admonition** at **10% opacity**. CSS must be used to update this.

### Images as Icons

Instead of using an icon from a downloaded icon set as explained in the [[Admonitions/Admonition Options#Icon|Icon]] section, you can upload an image to use as an admonition icon. The uploaded image will be resized to 24px x 24px to fit the plugin's saved data.

If you want to remove an uploaded image icon, you can choose an icon from the icon chooser text box.

### Icon Packs

Admonitions plugin allows you to download and add additional icon packs to the existing ones through the settings.

To add a new icon pack, follow these steps:

1.  Create a new folder in the `icons` directory with the name of your icon set.
2.  Inside the newly created folder, add an `icons.json` file that defines the icons as an object. You can refer to the `Octicons json` file in the `icons/octicons/` folder for guidance.
3.  In the `Icon Packs` file in the `src/icons/` directory, update the two variables with your icon pack's information.

Note that you can contribute to Admonitions by making a pull request with your icon pack.
