---
aliases: [Automatic Event Creation, Calendarium Automatic Event Creation, Event Creation]
description: 
permalink: calendarium/events/automatic
publish: true
tags: [Calendarium/Events]
---

# Event creation

Calendarium allows the 'automation' of event creation through the use of frontmatter keys, or inline `<span>` HTML elements.


>[!warning] Frontmatter based functionality for event creation is currently unpredictable within the BRAT release. The span-tag functionality is currently working.

## Frontmatter creation

With frontmatter events, automatic event creation uses `fc-date` and `fc-category`, as well as an additional property: `fc-calendar`.

| Property                      | Description                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| [`fc-calendar`](#fc-calendar) | Calendar name or array of calendar names to the event should be added to.                    |
| [`fc-date`](#fc-date)         | Date string, date object or array of date objects with `year`, `month` and `day` parameters. |
| `fc-category`                 | Name of the event category you want the event assigned to.                                                                  |
| `fc-display-name`             | An optional display name for the event. Otherwise, the file name is used.                    |
| `fc-end`                      | Date string, date object or array of date objects with `year`, `month` and `day` parameters. |

Once this setting is turned on, the calendar will look through its specified folder for events it should add to itself. When it finds them, they will be added - **unless an event with that exact date linked to that note is already on the calendar.**

The calendar will additionally watch for changes to notes and update itself accordingly. **The plugin should never automatically delete an event once created. Once they are added, they must manually be removed from the note.**

A note can be registered to a single calendar like so:

```
---
fc-calendar: My Custom Calendar
fc-date: 837-02-28                  # 28th day of the second month of the 837th year.
fc-category: Event Category 1
---
```

### Fc-calendar

The `fc-calendar` field is used to specify **which** calendar the event will be added to.

This field optional, and if not provided alongside an `fc-date`, the plugin will add the event to the **default calendar.**

### Fc-date

Frontmatter dates can be supplied two ways - as a date string or as a date object.

Date strings **must** be formatted as specified in settings.

If you need the event to repeat (such as every year or every month), a date object can be supplied instead. The only value that *must* be supplied for a date object is the day, and the plugin will repeat the event for the unsupplied values. Please note that months may be supplied as the month *name* or the month *number* (ie, 2 for February).

```
---
fc-date:        # Event will repeat on the 2nd day of every month of every year.
  day: 3
---

---
fc-date:        # Event will repeat on the 3rd day of the 2nd month of every year.
  day: 3
  month: 2
---

---
fc-date:        # Event will repeat on the 3rd day of every month of the 2021st year.
  day: 3
  year: 2021
---

---
fc-date:        # Event will repeat on the 3rd day of the month of February of the 2021st year.
  day: 3
  month: February
  year: 2021
---

```

Turning on the [Parse Note Titles for Dates](Calendarium/Settings.md#Parse%20Note%20Titles%20for%20Dates) will make this field optional, if a date matching the format specified in [Date Format](Calendarium/Settings.md#Date%20Format) setting is in the title.

## Event display name

By default, the calendar view displays automatically-created events with titles based on the event file name. To override this behavior, use the `fc-display-name` frontmatter field.

Given the file `forecast.md`, the event's name can be overridden as follows:

```
---
fc-calendar: My Custom Calendar
fc-date: 1491-14-30
fc-category: Natural Events
fc-display-name: Weather        # The calendar displays "Weather" as the title rather than "forecast."
---

**Morning**: Cloudy
**Day**: Clear
**Night**: Apocalyptic storms

```

## Span tag event creation

>[!hint] You can use `span` or `div`. For the purposes of the documentation, we'll refer to them by their `span`,

Calendarium also supports the functionality of using HTML span tags to declare an event within a note. This is particularly useful when making events within session notes. Also, unlike frontmatter based entries, you can technically declare multiple events within one note using this functionality, with the caveat that they have to be **assigned** to the same calendar. 

The syntax for span tags are as follows.

```md
<span data-category='orange' data-date='144-Ches' data-end='144-Ches-03-07' data-img='Inline Example/Event_2.jpg' data-name='Another Event'>Event Description</span>
```

### Enabling span tags

Before span tags will work, however, they will need to be enabled within your individual calendar settings. 

> [!screenshot]- Screenshot of Span Tags within Calendar Settings
> ![span tags settings](publish/images/IMG-Event%20Creation.png)

The default inline event tag is an optional `#tag` you can set within your frontmatter to further narrow the search.

### Using span tags

Let's break down the HTML Span tag.

- `<span`: The opening of the html tag.
- `data-category='orange'`: A remnant of the timelines plugin. This is left in for now because it may be repurposed. 
- `data-date='144-Ches'`: The date of the event. Also functions as Start Date if an end date is included.
- `data-end='144-Ches-03-07'`: The end date of the event, if needed.
- `data-img='Inline Example/Event_2.jpg'`: An image to be associated with the event. A remnant of the timelines plugin. This is left in for now because it may be repurposed. 
- `data-name='Another Event'`: The name of the event within Day View.
- `>Event Description<`: The description that is contained within the note.