---
aliases: [Theme Collisions]
description: This page details what a Theme Collision is.
permalink: glossary/theme-collisions
publish: true
tags: [Glossary/CSS]
---

# Theme collisions

A "theme collision" refers to a situation where the CSS styles defined in a theme and a plugin overlap or conflict with each other. When this happens, the appearance of the UI elements affected by the conflicting styles may not be as intended, and the user may experience visual bugs or glitches. 

Typically, the styling of theme will take precedence over the styling of a plugin if the theme specifically styles the plugin. [[Fantasy Statblocks|Statblocks]] is particularly vulnerable to this, but it does come with an option to block outside styling. However, this comes at the cost of being unable to style it yourself. 

## Resolving theme collisions

Sometimes, you can resolve the collision yourself by writing specific CSS that increases the priority of your changes over the themes. 

However, we recommend you take another approach and ask the Theme Developer of the theme in question to utilize optional snippets, or the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings "Github") plugin, to apply their custom theming to Statblocks. 

> [!info] If you need assistance with this outreach, we'll be happy to help to help mediate. Reach out on [Javalent-Support-Plugins](https://discord.com/channels/686053708261228577/932707309195493416 "Discord") in the Obsidian Discord. 


