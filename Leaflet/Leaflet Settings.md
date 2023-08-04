---
aliases:
  - Leaflet Settings
description: Configuration options for the Obsidian Leaflet plugin.
permalink: leaflet/settings
publish: true
tags:
  - Settings/Leaflet
---

# Leaflet Settings

## Export and Import of Marker Data

The plugin allows you to export your marker data in CSV format, which can be useful for backing up or sharing your data. The exported CSV file will contain the following columns:

| Column 1 | Column 2    | Column 3 | Column 4  | Column 5    | Column 6     | Column 7  |
| -------- | ----------- | -------- | --------- | ----------- | ------------ | --------- |
| Map ID   | Marker Type | Latitude | Longitude | Marker Link | Marker Layer | Marker ID |

If the Marker Type is not specified, it will default to "default". Similarly, if a map only has one layer, the Marker Layer column can be left blank.

For new markers, the Marker ID column can also be left blank.

You can then re-import your marker data from the exported CSV file. Please note that this feature is still under development and may not work as expected.

## Set Default Marker Tooltip Behavior

This setting allows you to specify the default behavior of marker tooltips. You can still override this setting for individual markers using the right-click context menu.

## Enable Draw Mode on Map Load

When enabled, the draw controller will be added to the map by default. If you disable this option, you can still enable draw mode by setting the `draw` parameter to `true` in the map block.

## Use Note Preview for Linked Markers

When hovering over a linked marker, Obsidian's note preview can be displayed.

>[!note] The Obsidian [Page Preview](https://help.obsidian.md/Plugins/Page+preview "Obsidian") Core Plugin must be enabled to use this feature.

## Displaying Overlay Tooltips

By default, overlay tooltips are displayed. You can change this behavior for individual overlays from the overlay context menu. Immutable overlays cannot have their tooltip display setting changed.

## Copying Coordinates on Shift-Click

When this setting is turned on, pressing Ctrl + Shift and clicking anywhere on the map will copy the latitude and longitude coordinates to the clipboard.

## Default Latitude and Longitude

If not provided, a real-world map will open with this default latitude and longitude.

## Default Map Marker

The default marker is used when no additional markers have been added to the map. To place this marker, right-click anywhere on the map. Additional markers will be layered on top of the default marker by default.

### Marker Icon

Select the Font Awesome Free icon to use for the default marker.

### Marker Color

Choose a color for the default marker using the color selector.

### Layer Base Marker

By default, additional markers will be layered on top of the default marker. This setting can be overridden for individual additional markers.

## Additional Markers

You can add new marker types that will be selectable from a context menu on the map.

### Creating an Additional Marker

To create a new marker, click "Add Marker" from the context menu on the map. This will open a window where you can define the new marker's parameters.

| **Parameter**       | **Description**                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| Marker Name     | Displayed in the context menu when adding a marker (e.g., Location, Event, Person)                   |
| Marker Icon     | The [Font Awesome Free](https://fontawesome.com/icons?d=gallery&p=2&s=solid&m=free) icon name to use |
| Upload Image    | Upload a custom image to use for the marker icon instead of using a Font Awesome icon                |
| Layer Icon      | Layer this icon on top of the base marker. If off, the icon itself will be used.                     |
| Icon Color      | Override the default icon color                                                                      |
| Associated Tags | Immutable markers will use this marker type if the file has this tag *and `mapmarker` is not set*.   |

If you turn on "Layer Icon," you can move the icon around the base icon by clicking and dragging to customize where the icon is layered. Holding Shift while moving the icon will snap it to the midlines.

Note: If the "mapmarker" tag is set on the file, the immutable marker will use the default marker type.

### Using an Image as a Marker Icon

When creating an additional marker, an image may be uploaded to use as the marker icon instead of selecting a Font Awesome icon.

Click the "Upload Image" button and select the image to use. The plugin will load the image and scale it to `24px x 24px`. The image used for the marker cannot be edited once it has been uploaded.

If an image has been uploaded, selecting a Font Awesome icon will remove the image.

### Associated Tags

Associate a tag with a marker type.

If a note is found using `markerFile`, `markerFolder`, or `markerTag`, the plugin will first use the frontmatter `mapmarker` parameter to determine marker type. If that is not set, it will then use the note's tags to find a marker type associated with one of the tags.

The tags are searched in order of definition on the marker type.