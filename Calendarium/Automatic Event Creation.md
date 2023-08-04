---
aliases: [Automatic Event Creation, Calendarium Automatic Event Creation]
description: 
permalink: calendarium/events/automatic
publish: true
tags: [Calendarium/Events]
---

# Automatic Event Creation

>[!warning] This functionality is currently disabled in the BRAT release.

Additionally, each calendar can automatically create events using frontmatter tags.

Optionally, you can tell the plugin to only watch for new events in a specific folder. Leaving this setting blank will watch the entire vault for new events.

Automatic event creation uses `fc-date` and `fc-category`, as well as an additional property: `fc-calendar`.

| Property                        | Description                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| [`fc-calendar`](#fc-calendar)   | Calendar name or array of calendar names to the event should be added to.                    |
| [`fc-date`](#fc-date) | Date string, date object or array of date objects with `year`, `month` and `day` parameters. |
| `fc-end`                        | Date string, date object or array of date objects with `year`, `month` and `day` parameters. |
| `fc-category`                   | Name of the event category.                                                                  |
| `fc-display-name`               | An optional display name for the event. Otherwise, the file name is used.                    |

Once this setting is turned on, the calendar will look through its specified folder for events it should add to itself. When it finds them, they will be added - **unless an event with that exact date linked to that note is already on the calendar.**

The calendar will additionally watch for changes to notes and update itself accordingly. **The plugin should never automatically delete an event once created. Once they are added, they must manually be removed.**

## Fc-calendar

The `fc-calendar` field is used to specify **which** calendar the event will be added to.

This field optional, and if not provided alongside an `fc-date`, the plugin will add the event to the **default calendar.**

## Single Calendar

A note can be registered to a single calendar like so:

```
---
fc-calendar: My Custom Calendar
fc-date: 837-02-28                  # 28th day of the second month of the 837th year.
fc-category: Event Category 1
---
```

## Multiple Calendars

Additionally, you may specify multiple calendars for an event to be created on, like so:

```md
---
fc-calendar: 
  - My Custom Calendar
  - My Custom Calendar 2
fc-date:                        # Same date for both calendars.
  year: 837          
  month: Custom Month   
  day: 17

**OR**

fc-date:                        # Different dates for each calendar.
  - year: 837                   # Date for My Custom Calendar
    month: Custom Month   
    day: 17
  - year: 92                    # Date for My Custom Calendar 2
    month: Month of Calendar 2   
    day: 3

fc-category: Event Category 1
---
```

The plugin will assign the dates *in the same order the calendars are specified in*.

## Fc-date

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

Turning on the [Parse Note Titles for Dates](#parse-note-titles-for-dates) will make this field optional, if a date matching the format specified in [the date format](#date-format) setting is in the title.

## Event Display Name

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





