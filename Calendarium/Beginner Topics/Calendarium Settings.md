---
aliases: [Calendarium Settings]
cover: 
description: "This page goes over all of the settings available within The Calendarium"
image: 
permalink: calendarium/settings
publish: true
tags: [Calendarium/Settings]
---

>[!warning] This page is under construction due to a Calendar rewrite.

### Default Calendar

The Default Calendar feature allows you to specify a particular calendar that will open automatically when new views are opened in the plugin.

### Display Event Previews

By enabling the Display Event Previews option, events that are linked to notes will display a preview of the linked note. 

>[!warning] The core [Page Preview](https://help.obsidian.md/Plugins/Page+preview "Obsidian") plugin must be enabled for this feature to work.

### Parse Note Titles for Dates

Enabling the Parse Note Titles for Dates setting allows the plugin to parse note titles for dates, automatically creating events based on those dates, instead of solely relying on the `fc-date` notation.

### Date Format

The Date Format setting allows you to customize the expected format of date strings used in the plugin. By default, the date format is set to the UTC formatted date (`YYYY-MM-DD`).

Be aware that the provided character limit does not allow for reducing the number of characters. The plugin will create the event on the **exact date specified**.

### Folder to Watch

By specifying a folder in the Folder to Watch setting, the plugin will only monitor that particular folder for automatic event creation. 

This setting applies to all calendars.

### Default Config Directory

The Default Config Directory setting provides the option to change the directory where the plugin stores its data.

### Import Calendar

The Import Calendar feature allows you to import a `calendar-name.json` from the [Fantasy Calendar](https://fantasy-calendar.com) website.

### Calendars

The Calendars section is where you can create and manage your created calendars within the plugin. It provides a centralized location to organize and keep track of your calendars.