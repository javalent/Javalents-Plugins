---
aliases: [The Calendarium API, Calendarium API]
description: This page details how to access the API within The Calendarium plugin.
permalink: calendarium/api
publish: true
tags: [API/Calendarium]
---
# Calendarium API

The plugin has an API that can be used to get information for the calendars that you have created. This allows you to, for example, easily use data from your calendar in Dataview, CustomJS, Templater, or other plugins which access obsidian's Global Javascript. 

The full API can be referenced in [/src/@types/api.d.ts](https://github.com/javalent/the-calendarium/blob/534dcdeb46f35d47ea6ec986e67114be4274f2d5/src/%40types/api.d.ts "Github")

## Accessing the API

The plugin API is available on the global window object as `Calendarium`.

```js
Calendarium.getAPI("<calendar-name>");
```

> [!tip]- Always maintain clean and consistent Javascript practices.
> Typically you would want to assign an static name to this using `const`.
>
> ```js
> const calendarAPI = Calendarium.getAPI("calendar-name");
> ```


### Accessing the calendar by name



## Dates
### Retrieving a date

```js
const calendarAPI = Calendarium.getAPI("calendar-name");
const currentDate = calendarAPI.getCurrentDate(); // this is an object { year: number, month: number, day: number }
```

### Translating a date to another format

```js
const calendarAPI = Calendarium.getAPI("calendar-name");
const currentDate = calendarAPI.getCurrentDate(); // this is an object { year: number, month: number, day: number }

const someOtherCalendarAPI = Calendarium.getAPI("other-calendar-name");

Calendarium.translate(currentDate, calendarAPI, someOtherCalendarAPI);
```

