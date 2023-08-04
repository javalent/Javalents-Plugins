---
aliases: []
cover: 
description: 
image: 
permalink: 
publish: true
tags: []
---
The initial coordinates of the map can be set using the `lat` and `long` parameters. If these parameters are not provided, the map will default to the latitude and longitude defined in settings.

Alternatively, the `coordinates` parameter can be used to set the initial coordinates. This parameter can take an array of numbers or a wikilink to a note that has a `location` frontmatter tag.

```yaml
```leaflet
coordinates: [36, -89]
coordinates: [[Note with Location Frontmatter]]
```
````

