---
aliases: [Initiative Tracker Leaflet Integration, Leaflet Integration]
description: Learn how to integrate the Obsidian Leaflet plugin with Initiative
permalink: it/integration/leaflet
publish: true
tags: [IT/Leaflet]
---

# Leaflet integration

> [!red] This feature was removed in version [12.0.0](https://github.com/javalent/initiative-tracker/releases). It may return at a later date.

## Leaflet settings

The Initiative Tracker can work with the Obsidian Leaflet plugin to show Leaflet maps during encounters. Here's how to enable the integration:

1.  Open the Initiative Tracker settings.
2.  Scroll to the "**Plugin Integrations**" section at the bottom of the page.
3.  Toggle the "**Integrate with Obsidian Leaflet**" option.

### Default markers

Once the integration is enabled, you can choose your default markers. These markers are imported and controlled by the marker options set up in the Leaflet settings. There are two marker types:

-   Player Marker: This icon shows the players' position on the Battle Map.
-   Monster Marker: This icon shows enemies' position on the Battle Map.

![leaflet-markers](https://github.com/javalent/fantasy-statblocks/blob/gh-pages/images/initiative-tracker/IT-leaflet-settings.png?raw=true)

## The battle map

The Battle Map automatically loads active creatures in the loaded combat as markers. The Battle Map updates automatically when you make changes to the Initiative Tracker combat, such as adding or removing creatures.



