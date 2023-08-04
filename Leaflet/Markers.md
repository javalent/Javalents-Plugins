---
aliases: [Leaflet Markers]
description: "Learn how to interact with Markers within Obsidian Leaflet."
permalink: leaflet/markers
publish: true
tags: [Leaflet/Markers]
---

# Markers

To add a new marker to the map, simply right-click on the desired location. If additional marker types have been created in the settings, you will be presented with a list to choose from.

Once a marker has been created, you can drag it to a different location on the map.

Note that markers created on the map will be saved to the map instance, and the data associated with them will persist as long as the map is associated with a note. However, if the map blocks are removed from notes, or if all of the notes containing map blocks are removed, the data will be deleted after 7 days.

## Markers Defined in the Code Block

Markers may be defined directly in the code block using the following syntax:

`marker: <type*>,<latitude>,<longitude>,<link*>,<description*>,<minZoom*>,<maxZoom*>`

An arbitrary number of objects can be defined, but *none of these objects will be editable.* If a change needs to be made to these objects, the code block must be edited.

The marker link may be defined as an Obsidian wikilink.

> \*: These parameters are optional and can be left blank in the definition.
> For example, `marker: ,25,25,,,3` will use the default marker type, latitude and longitude 25, no link, no description, minZoom 3, no maxZoom.

**These will not be included in exported data.**

The `markerFile`, `markerFolder`, `markerTag`, `filterTag`, `linksTo`, and `linksFrom` parameters tell the plugin *where to look for notes*. The notes themselves determine how the markers are created, using note frontmatter tags.

All markers created from the note will automatically have their link set to the note.

| Frontmatter Tag | Use                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------- |
| location        | Create a marker at this location. Also used if the `coordinates` parameter points to this note. |
| mapmarker       | Use this marker type for the marker created using `location`. Optional.                         |
| mapzoom         | Marker created from this note will have its zoom breakpoint set to `[min, max]`. Optional.      |
| mapmarkers      | Array of markers to create. See below for syntax.                                               |
| mapoverlay      | Array of overlays to create. See below for syntax.                                              |

## Marker Zoom Level Breakpoints

Markers can be given zoom level breakpoints, which will cause them to be removed from the map when the map is zoomed above or below the specified range. You can set these breakpoints by right-clicking on a marker created on the map, or by using parameters for markers created in the source block (see [[Leaflet/Markers#Defined in Code Block|Defined in Code Block]] for more information).

Be careful when setting breakpoints - make sure they are within the map's zoom boundaries, otherwise the marker might never be displayed!

## Marker Coordinates

To reveal a marker's coordinates, simply Alt or Shift-click on the marker.

## Linking to Notes, Blocks, and External Websites

Markers can be linked to notes, headers, blocks, and external websites. To link a marker, right-click on it and enter the target in the popup. Here are the different ways you can link markers:

-   **Note:** Enter the name of the note as the target. If multiple notes have the same name, you should specify the direct path to the note.
-   **Header or Block:** Append the header or block ID to the note name using the `#` symbol. For example, `Note#Header1`.
-   **External Website:** Enter the URL of the website as the target. Clicking the marker will open the website in a new browser tab.

You can also create a marker by dragging a note from the file tree and dropping it on the map.

### Defined in Code Block

To define a marker that executes an Obsidian command, use the `commandMarker:` parameter instead of `marker:` in the code block.

### Created on Map

To create a marker that executes a command on click, turn on the `Command Marker` toggle in the marker settings.

## Mapmarker

The `mapmarker` parameter can be used to define the *type* of marker created. This can be one of two things:

1. The name given to the marker type in settings.
2. A definition defining the icon name, color, and whether or not to layer the icon on the default marker type.

Examples:

```
mapmarker: event    # A marker type named event has been created in settings.

# OR

mapmarker:
  icon: user        # Font Awesome icon name.
  color: 00ff00     # Hex color string. Optional.
  layer: false      # Whether or not to layer. Optional.
```

## Mapmarkers

The `mapmarkers` parameter can be used to define an arbitrary number of markers to display on the map. This does not require the `location` tag to be set.

A marker defined using `mapmarkers` should have the following syntax:

```
---
mapmarkers:
  - [<type>, [<latitude>, <longitude>], <optional description>, <optional minZoom>, <optional maxZoom>]
  - [<type>, [<latitude>, <longitude>], <optional description>, <optional minZoom>, <optional maxZoom>]
  - ...
---
```

## Filter Tag

Returned files can be filtered using the `filterTag` parameter. This parameter uses the same syntax as `markerTag`, but instead of *adding* files, it will require that each file found using `markerFile`, `markerFolder` or `markerTag` match a set of tags.

### Examples

```
markerFile: [[MarkerFile]]
```

would

1. Load the MarkerFile.md note file and, if it has the correct frontmatter fields, create a marker for it.

```
markerFile: [[MarkerFile]]
markerFolder: People and Locations
```

would

1. Load the MarkerFile.md note
2. Look through the People and Locations folder for additional notes

```
markerTag: #location, #friends
```

would

1. Find *all* notes tagged with both `#location` **and** `#friends` and create markers using their frontmatter

```
markerFolder: People and Locations
markerFolder: Interests/Maps of the World
markerTag: #people, #friends
markerTag: #Paris
```

would search for notes that

1. Are in the folders People and Locations OR Interests/Maps of the World, AND
2. Contain both tags `#people` AND `#friends` OR the tag `#Paris`

## Marker Files

### Marker File

Marker files may be defined in the code block using the following syntax:

`markerFile: [[WikiLinkToFile]]` **OR**
`markerFile: Direct/Path/To/Note`

## Marker Folders

See [[Leaflet/Folder Parameters]] for information on Marker Folders.

## Bulk Editing

> [!feature] Feature: This was added in version 3.9.0

%% #Version/3-9-0/Leaflet %%

The map includes a bulk-edit button. Clicking this button opens a modal that allows for convenient editing of all mutable markers defined on the map.

