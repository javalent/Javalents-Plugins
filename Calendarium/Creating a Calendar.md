---
aliases: [Creating a Calendar]
description: This page details how to create a new calendar within the
permalink: calendarium/create-calendar
publish: true
tags: [Calendarium/Create]
---

# Creating a Calendar

>[!warning] This page is under construction due to a Calendar rewrite.


To create and modify calendars, navigate to the [[Calendarium/Calendarium Settings|Calendarium Settings]] where you'll find various options to customise your calendar experience.

### Presets

Choose from a selection of common presets, including popular TTRPG settings and the Gregorian calendar, to quickly apply predefined configurations to your created calendar.

### Basic Info

#### Name and Description

Provide a name and description for your calendar in this section.

#### Auto-increment Day

Enable this feature to automatically advance the calendar day by one for every real day that has passed.

#### Current Day

Set the current day of the calendar in this field.

### Weekdays

Create and manage weekdays in this section. Each weekday must be assigned a unique name.

#### Overflow Weeks

Toggle this option to determine whether every month starts on the first weekday or begins with the weekday following the last weekday of the previous month.

#### First Day

Specify the weekday that serves as the first day of the calendar's first year.

### Months

Manage months in this section by creating and customizing their names and lengths (in days).

#### Intercalary

Designate months as intercalary if they are standalone single-day periods that do not align with regular months or weekdays.

### Years

In this section, you can define custom years by assigning them unique names.

If custom years are created, the calendar will only include the specified years.

### Leap Days

Manage leap days within this section.

Leap days must be associated with a specific month and assigned a condition.

#### Offset

The leap day conditions will be shifted by the specified number of years during calculations. For example, a leap day occurring every 4 years with an offset of 1 will fall on year 1, year 5, year 9, and so on.

#### Conditions

Leap day conditions consist of three components: the interval, whether it's an "exclusive" condition, and whether the leap day offset should be ignored during calculations.

Exclusive conditions mean that the leap day **does not** apply when the condition is met.

If a non-exclusive condition follows an exclusive one, it will override the exclusive condition.

##### Real World Example

The leap day for the Gregorian calendar has three conditions:

1. Interval 4, non-exclusive, non-offset.
2. Interval 100, exclusive, non-offset.
3. Interval 400, non-exclusive, non-offset.

This means the leap day occurs every 4 years, except if the year is divisible by 100, **unless** the year is divisible by 400.

### Intercalary Leap Days

A leap day can be marked as intercalary, meaning it disrupts the regular flow of the month. The week will be interrupted by the leap day and continue on the next weekday as if the leap day hadn't occurred.

Enabling a leap day as intercalary introduces two additional settings:

1. Numbered: If selected, the leap day will follow the usual day numbering sequence.
2. After: The leap day will be inserted into the month after the specified day.

### Events

Create and manage events within this section.

### Event Categories

Organize and manage event categories in this section.

### Moons

Create and manage moons in this section.

#### Display Moons

Toggle this setting to show moons by default. Moons can always be toggled on or off in the Calendar Settings menu of a view.

#### Moon Creation

Define moons by specifying a name, cycle, and offset. Additionally, customize the appearance of the moon graphic by adjusting the face and shadow color.

##### Cycle

Set the number of days required for the moon to complete a full rotation.

##### Offset

Shift the start of the moon cycle by the specified number of days.