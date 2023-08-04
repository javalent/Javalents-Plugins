---
aliases:
  - Prominent Bookmarked Files
description: Wish your notes were a little bit more on display? Now you can with
  Prominent Bookmarked Files for Obsidian!
permalink: bookmarked
publish: true
tags:
  - Bookmarked
---


[GitHub Repo](https://github.com/valentine195/obsidian-prominent-starred-files "Repo") [Changelog](https://github.com/valentine195/obsidian-prominent-starred-files/blob/c20b10cf110192c23fd198158bf5c8e1bd76b8ac/CHANGELOG.md "Changelog") [Issues](https://github.com/valentine195/obsidian-prominent-starred-files/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc "Issues")

---

> [!tip] This plugin was previously known as Prominent **Starred** Files.

Wish your notes were a little bit more on display? Now you can! Make those Bookmarked files more prominent within the Obsidian File Explorer with Bookmarked!

> [!bug] **Development Status**: Maintenance Mode
> Due to a glut of high priority Javalent plugin projects, this plugin is now entering maintenance mode for the time being. This is **not** a permanent status.
> - PR's will be reviewed.
> - *Yay* bugs will be reviewed and worked if able.
> - Feature Requests **will not** be worked.
> #Status/Maintenance 

## Core Plugin Requirements

This plugin requires that the Core Plugin, [Files](https://help.obsidian.md/Plugins/File+explorer "Obsidian"), be enabled. 

Additionally, this plugin requires the Bookmarks Core Plugin also be enabled. 

## Using Bookmarked

If the Bookmarks core plugin is enabled, and a file is bookmarked, the file will be displayed with a bookmark icon in the File Explorer. 

Here's a screenshot of how it looks:

>[!screenshot]- Screenshot of Bookmarks Enabled
>![Bookmarks](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/starred/bookmarks.png?raw=true)

## Customizing Bookmarked

To customize the appearance of Bookmarked Files in Obsidian, you can modify the CSS class `.prominent-decorated-file`. This class controls the layout and style of the Bookmarked Files pane in the Obsidian file explorer.

```css
.prominent-decorated-file {
    display: flex;
    align-items: center;
    margin-left: auto;
}
```

### Icon

To update the icon, you will need to specifically target the content of the CSS of `.promiment-decorated-file` or the content of a `::before` or `::after` pseudoselector. 

For example, below will replace the existing icon with your own.
```css
.prominent-decorated-file {
  visibility: hidden;
}

.prominent-decorated-file {
  visibility: visible;
  content: "svg-data";
}
```

#### Changing Icon Location

#Todo/Sigrunixia 