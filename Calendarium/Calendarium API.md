---
aliases: [The Calendarium API, Calendarium API]
description: This page details how to access the API within The Calendarium plugin.
permalink: calendarium/api
publish: true
tags: [API/Calendarium]
---

# Calendarium API

>[!warning] This page is under construction due to a Calendar rewrite.

The plugin has an API that can be used to get information for the calendars that you have created. This allows you to, for example, easily use data from your calendar in Dataview, CustomJS, Templater, or other plugins which access obsidian's Global Javascript.

The full API can be referenced in [/src/@types/api.d.ts](https://github.com/javalent/the-calendarium/blob/534dcdeb46f35d47ea6ec986e67114be4274f2d5/src/%40types/api.d.ts "Github")

## Accessing the API

The plugin API is available on the global window object as `FantasyCalendarAPI`.

```js
const day = FantasyCalendarAPI.getDay({ year: 2022, month: 11, day: 25 });
```