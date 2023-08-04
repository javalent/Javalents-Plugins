---
aliases: [Event Creation from Frontmatter, Event Creation from Frontmatter]
cover: 
description: "This page details how to create Events from Frontmatter within the Calendarium."
image: 
permalink: calendar/event/frontmatter
publish: true
tags: Calendar/Beginner/Events
---

>[!warning] This page is under construction due to a Calendar rewrite.

The following frontmatter properties are currently supported:

| Property          | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `fc-date`         | Date object with `year`, `month` and `day` parameters.                    |
| `fc-end`          | Date object with `year`, `month` and `day` parameters.                    |
| `fc-category`     | Name of the event category.                                               |
| `fc-display-name` | An optional display name for the event. Otherwise, the file name is used. |

If a note with the above frontmatter properties is added to an event, it will prompt you to parse the properties; selecting yes will set the event properties accordingly.

### Date Object

The date object must adhere to the following format, with the parameters able to be arranged in any order:

```yaml
---
fc-date:
  year: <number>                                 
  month: <name of month> OR <number of month>    
  day: <number>
---
```

- The `fc-date` property allows specifying the date for the event. 
- The `year` parameter is *optional* and, if not provided, the event will occur every year. 
- The `month` parameter can be specified using either the name of the month or the corresponding number. If not provided, the event will occur every month. 
- The `day` parameter is required and specifies the day of the event.