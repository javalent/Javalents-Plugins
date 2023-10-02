---
aliases: [Creating a Calendar]
description: This page details how to create a new calendar within Calendarium Settings
permalink: calendarium/create-calendar
publish: true
tags: [Calendarium/Create]
---

# Creating a calendar

To create and modify calendars, navigate to the [Create New Calendar](Calendarium/Settings.md#Create%20New%20Calendar) within [Settings](Calendarium/Settings.md).

## Presets

Choose from a selection of common presets, including popular TTRPG settings and the Gregorian calendar, to quickly apply predefined configurations to your created calendar.

## Basic info

### Name and description

Provide a name and description for your calendar in this section.

### Display day number

Toggle this to display the day of the year when in [Day View](Calendarium/Day%20View.md).

### Auto-increment day

Enable this feature to automatically advance the calendar day by one for every real day that has passed.

### Date format

This setting is used to control how the Calendar formats dates. This includes how dates are parsed from notes to create events and how the [[Calendarium API]] returns dates.

This format supports `Y`, `M`, and `D` as tokens:
* `Y` - any number of Y will bring the full year.
	* If your calendar uses named years, you'll get the name.
* `M` - the month as a number.
* `MM` - the month as a number, zero padded, minimum of two digits.
* `MMM` - the month name, abbreviated (if available).
* `MMMM` - the full month name
* `D` - the day of the month, unpadded.
* `DD` - the day of the month, zero padded, minimum of two digits.

### Parse files for events

When toggled, this will allow you to specify a folder for Calendarium to search for [Event creation](Calendarium/Event%20creation.md) within notes.  Else, it will look in all files, which increases load times. 

#### Events folder

This is the specific folder (and all subfolders) chosen for Calendarium to parse from for this calendar.

#### Support for inline events

If you wish to use [Span Tag Event Creation](Calendarium/Event%20creation.md#Span%20Tag%20Event%20Creation) instead Frontmatter event creation, this will need to be enabled.

#### Default inline events tag

Further scopes the selection of inline events to only notes that contain your specified `#tag`.

> [!warning] This is a setting which is being tested and may not remain in future builds. 

## Weekdays

Create and manage weekdays in this section. Each weekday must be assigned a unique name.

### Overflow weeks

Toggle this option to determine whether every month starts on the first weekday or begins with the weekday following the last weekday of the previous month.

### Add weeks

Use the `+` button to add a list of weekday names. 

### First day

Specify the weekday that serves as the first day of the calendar's first year.

## Months

Manage months in this section by creating and customizing their names and lengths (in days).

### Add months

Use the `+` button to add a list of month names. 

### Intercalary or month?

Designate months as intercalary if they are standalone single-day periods that do not align with regular months or weekdays. Else, leave at the default designation of `month`.

## Years

In this section, you can define custom years by assigning them unique names.

If custom years are created, the calendar will only include the specified years.

## Current date

Set's the first starting date for this Calendar here. 

## Events

Create and manage events within this section. Below the events header, you will see the current list of synced notes in the format of `displaying xxx/xxx events.`

### Delete all events

Want all the events to magically.. disappear? Select the trash can to the right, and pray you backed up. 😬

### Filter events

Do you have a very long list of events? You can filter them down with the embedded `🔍        (x)` in settings. You also have the option of deleting filtered events by selecting the 🗑️ to the right of the search bar. 

### Add events

If you wish to manually add events, select the `(+)` button to create a new pop-up. The settings for these events 

## Event categories

Organize and manage event categories in this section.

## Leap days

Manage leap days within this section.

Leap days must be associated with a specific month and assigned a condition.

### Offset

The leap day conditions will be shifted by the specified number of years during calculations. For example, a leap day occurring every 4 years with an offset of 1 will fall on year 1, year 5, year 9, and so on.

### Conditions

Leap day conditions consist of three components: the interval, whether it's an "exclusive" condition, and whether the leap day offset should be ignored during calculations.

Exclusive conditions mean that the leap day **does not** apply when the condition is met.

If a non-exclusive condition follows an exclusive one, it will override the exclusive condition.

#### Intercalary leap days

A leap day can be marked as intercalary, meaning it disrupts the regular flow of the month. The week will be interrupted by the leap day and continue on the next weekday as if the leap day hadn't occurred.

Enabling a leap day as intercalary introduces two additional settings:

1. **Numbered**: If selected, the leap day will follow the usual day numbering sequence.
2. **After**: The leap day will be inserted into the month after the specified day.

### Real world example

The leap day for the Gregorian calendar has three conditions:

1. Interval 4, non-exclusive, non-offset.
2. Interval 100, exclusive, non-offset.
3. Interval 400, non-exclusive, non-offset.

This means the leap day occurs every 4 years, except if the year is divisible by 100, **unless** the year is divisible by 400.

## Moons

Create and manage moons in this section.

### Display moons

Toggle this setting to show moons by default. Moons can always be toggled on or off in the Calendar Settings menu of a view.

### Moon creation

Define moons by specifying a name, cycle, and offset. Additionally, customize the appearance of the moon graphic by adjusting the face and shadow color.

#### Cycle

Set the number of days required for the moon to complete a full rotation.

#### Offset

Shift the start of the moon cycle by the specified number of days.