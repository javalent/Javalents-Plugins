---
aliases: [Image Window, Second Window]
description: More commonly known as Second Window, this plugin allows you to
permalink: second-window
publish: true
tags: [Image-Window]
---

# Second window

[GitHub Repo](https://github.com/valentine195/obsidian-image-window "Repo") [Changelog](https://github.com/valentine195/obsidian-image-window/blob/10fa0732c6c862e1927332af083ded127f88255c/CHANGELOG.md "Changelog") [Issues](https://github.com/valentine195/obsidian-image-window/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc "Issues")

---

Also known as **Image Window**, this plugin allows you to open a note or image file in your vault in a new pop-up Obsidian window.

> [!bug] **Development Status**: Maintenance Mode
> Due to a glut of high priority Javalent plugin projects, this plugin is now entering maintenance mode for the time being. This is **not** a permanent status.
> - PR's will be reviewed.
> - *Yay* bugs will be reviewed and worked if able.
> - Feature Requests **will not** be worked.
> #Status/Maintenance 

## Quickstart

Notes and images can be opened in this way by right-clicking on them or their links, and selecting "**Open in New window**."

Alternatively, they can be opened if the Core Plugin [Command Palette](https://help.obsidian.md/Plugins/Command+palette "Obsidian") is enabled, using the "**Open Image in New Window**" command.

## Why use the second window plugin?

The Second Window plugin is an enhancement to Obsidian's New Window functionality that adds features missing from the default behaviour. Here are a few examples:

-   When you request to "Open an Image in the Second Window," the plugin will send it to the existing Second Window that is already open. This way, you can set up the second window on a player-facing screen and leave it there.
-   The plugin stretches the images to the full size of the window, while Obsidian's "New Window" opens them in the default size. This allows you to view images more comfortably without having to adjust the zoom or window size manually.

## Window settings

>[!screenshot]- Screenshot of Second Window Settings
> ![second window settings](https://github.com/javalent/fantasy-statblocks/blob/gh-pages/images/second-window/window-settings-menu.png?raw=true)

The Second Window Settings in Obsidian provide two options. 

### Save window locations

This option saves the position of each window with a unique name. If this option is enabled, each window will open in its previous location.

> [!warning] Keep in mind that the window locations are saved per computer hostname. This means that a window saved on one computer won't be synced to another computer with a different hostname.

### Add new named window

The second option, Add New Named Window, allows you to create a new window with a custom name. 

If you click the [+] box on the right of the Add New Named Window option, a new window with a random name will be created. 

You can then edit the name of the new window within the same area you added it.

### Confirming your settings

If you are successful, when you right click or select a note you want to contextually open in a new Second Window, you should see the additional context menu options to open the window in.

>[!screenshot]- Screenshot of Second Window Context Menu
>![Second Window Context Menu](https://github.com/javalent/fantasy-statblocks/blob/gh-pages/images/second-window/window-context-menu.png?raw=true)