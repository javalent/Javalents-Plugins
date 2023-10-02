---
aliases: [Calendarium Events, Events]
description: "This page details a general overview of Events within The Calendarium."
permalink: calendarium/events
publish: true
tags: [Calendarium/Events]
---

# Calendar events

## Events

Events can be conveniently added to a specific day by performing a right-click action on the desired day and selecting "New Event". 

- Alternatively, events can also be created by clicking on a day that currently does not have any events. 
- Furthermore, events can be created or modified through the Calendar section in the plugin settings or by utilising note frontmatter.

When viewing the [Day View](Calendarium/Day%20View.md) or the large calendar, clicking on an event flag will provide access to the event's description.

### Categories

To organise and differentiate events, they can be assigned to various categories that are created within the calendar settings of the plugin. This assignment will result in the dot and the flag associated with the event adopting the color associated with the assigned category.

### Event notes

Events have the ability to link to specific notes by specifying the note within the event creation modal or by utilising the [Event Creation](Calendarium/Event%20Creation.md Event Creation>) feature through the use of frontmatter.

If a note is selected, and the note contains relevant frontmatter (as described below), the plugin will prompt the user to confirm whether they wish to overwrite the existing event data with the frontmatter data from the note. Additionally, clicking on an event linked to a note will open the corresponding note.

### Multi-day events

For events that span across multiple days, the event creation modal provides an option to select "Add End Date". This allows the user to specify the end date of the event, effectively defining its duration.

### Event intervals

Events can be scheduled to occur at regular intervals by utilising the "Add Interval" button within the event creation modal. While a starting date is required, an end date is optional for interval-based events.
