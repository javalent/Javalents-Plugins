---
aliases: [The Calendarium API, Calendarium API]
created: 2023-08-04
description: This page details how to access the API within The Calendarium plugin.
permalink: calendarium/api
publish: true
tags: [API/Calendarium]
updated: 2024-04-26
---

# Calendarium api

The plugin has an API that can be used to get information for the calendars that you have created. This allows you to, for example, easily use data from your calendar in Dataview, CustomJS, Templater, or other plugins which access obsidian's Global Javascript. 

The full API can be referenced in [/src/api/calendar.ts](https://github.com/javalent/calendarium/blob/main/src/api/calendar.ts "Github")

## Accessing the api

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

