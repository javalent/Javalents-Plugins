---
aliases: [Dataview Markers]
description: "Learn how to use Markertags in Obsidian Leaflet."
permalink: leaflet/dataview/markers
publish: true
tags: [Dataview/Leaflet]
---

# Dataview in Leaflet

>[!faq] All features on this page require the [Dataview plugin](https://github.com/blacksmithgu/obsidian-dataview "Github") to be installed.

These parameters allow you to create markers directly from the specified note files.

There is no limit to how many of these parameters you can have defined in the code block; all of the files found will be parsed for defined markers.

>[!danger] Cache!
> Please note that until I implement some form of caching, having a large amount of marker files defined could impact performance.

## Marker Tags

`markerTag: <tag>, <tag>, …`

>[!note] The plugin uses YAML to parse the code block, so tags defined with `#` \*will not work\* unless wrapped in quotes (`"#tag"`).

Each `markerTag` parameter will return notes that have *all* of the tags defined in that parameter. If you are looking for files containing *any* tag listed, use separate `markerTag` parameters.

Example:

```
markerTag:
  - tag1
  - [tag2, tag3]
  - tag4
```

The above will parse:

1. Any note containing `tag1`.
2. Any notes containing *both* `tag2` **and** `tag3`.
3. Any note containing `tag4`.

>[!info] Notes are only parsed once, even if a note matches multiple criteria.

### Usage in YAML

YAML considers the `#` symbol to be a comment, so the `markerTag` or `filterTag` parameters must either be wrapped in [[String|String]] (`"#tag"`) or defined without the `#` symbol.

## Links

The `linksTo` and `linksFrom` parameters uses Dataview's link index to find notes linked to or from the notes specified in the parameter to build immutable markers, using the same syntax as above.

Multiple files can be specified using YAML array syntax:

```
linksTo: [[File]]
linksFrom:
    - [[File 1]]
    - [[File 2]]
```


