---
aliases: [Calendarium Settings]
description: "This page goes over all of the settings available within The Calendarium"
permalink: calendarium/settings
publish: true
tags: [Settings/Calendarium]
---

# Calendarium plugin settings

## Reset "Don't ask again Prompts"

Toggling this will reset all confirmations of `Don't Ask Again.`

## Settings sync behavior

This setting determines how conflicts from Obsidian Sync should be handled.

- **Continue Asking**: This will ask you every time there is a conflict what you want to do.
- **Always Reload**: This will accept the changes incoming from the synced device.
- **Never Reload**: This will reject the changes incoming from a synced device. 

## Load previous data file

This setting gives you the option to load a prior version of your calendar.

## Calendar management

### Show intercalary months separately

Toggle whether or not intercalary months will show integrated into the default calendar view, or as separate months. 

### Default calendar

The Default Calendar feature allows you to specify a particular calendar that will open automatically when new views are opened in the plugin.

### Import calendar

The Import Calendar feature allows you to import a `calendar-name.json` from the [Fantasy Calendar](https://fantasy-calendar.com) website.

### Create new calendar

Click the `(+)` button to create a new calendar within settings. A more in depth explanation of settings is available in [Creating a calendar](Calendarium/Creating%20a%20calendar.md).

Created Calendars will also display below this area. 

## Events

### Add events to default calendar

If this is toggled, when `fc-calendar` is not present in the note AND [Events Folder](Calendarium/Creating%20a%20calendar.md#Events%20Folder) is not defined, all events will be added to the default calendar chosen in [Default Calendar](Calendarium/Settings.md#Default%20Calendar).

> [!tip] Looking to create an event? Check [Event creation](Calendarium/Event%20creation.md).

### Display event previews

By enabling the Display Event Previews option, events that are linked to notes will display a preview of the linked note. 

>[!warning] The core [Page Preview](https://help.obsidian.md/Plugins/Page+preview "Obsidian") plugin must be enabled for this feature to work.

### Write event data to frontmatter

When toggled, if a note is linked while an event is created, the frontmatter is written to that note.

>[!warning] This feature is currently disabled.

### Parse note titles for dates

Enabling the Parse Note Titles for Dates setting allows the plugin to parse note titles for dates, automatically creating events based on those dates, instead of solely relying on the `fc-date` notation.

### Date format

The Date Format setting allows you to customize the expected format of date strings used in the plugin. By default, the date format is set to the UTC formatted date (`YYYY-MM-DD`).

Be aware that the provided character limit does not allow for reducing the number of characters. The plugin will create the event on the **exact date specified**.
