---
aliases:
  - Real World Maps
description: This page describes how to use Real World Maps in Leaflet.
permalink: leaflet/maps/real
publish: true
tags:
  - Leaflet/Map/Real
---

# Real World Maps


If you do not provide the `image` parameter, a real world map is created. By default, this map loads the `OpenStreetMap` map. You can add more tile servers by using the `tileServer` parameter. However, make sure that the tile servers you use are publicly available. Please note that tile servers requiring API access are not usable at this time.

You can turn off the `OpenStreetMap` layer by setting the `osmLayer` parameter to `false`.

### Tile Servers

You can add additional tile servers by using the `tileServer` and `tileOverlay` parameters. Both have the same syntax:

`tileServer: <domain>|<alias (optional)>`

For example:

```md
tileServer: https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png|Dark

---

tileServer:

-   https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png|Dark
-   https://tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png|Hills
```

Tile servers specified in `tileServer` will be added as additional map **layers**, which can be fully toggled on or off by the user.

### Tile Overlays

On the other hand, tile servers specified in `tileOverlay` will be added as overlays that will load on top of the base map. By default, tile overlays are turned off, but they can be set to default on by appending `|on` to the end of the tile server's syntax.

```md
tileServer: https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png|Dark|on
```

### Tile Subdomains

This parameter allows you to specify the available subdomains for additional tile servers. Subdomains are used to make concurrent requests to different server instances and increase loading speed. Multiple subdomains can be added by separating them with commas.

`tileSubdomains: <domain1>,<domain2>,<domain3>`

----

````yaml
```leaflet
mapid: toodles
osmLayer: false
tileServer: https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
tileSubdomains: 1,2,3
```
````

---

So the map will load map data from below urls:
```md
https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
https://webrd03.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
```

