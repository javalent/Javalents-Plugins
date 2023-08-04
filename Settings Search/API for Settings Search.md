---
aliases: [Settings Search API]
description: "Learn how to add settings dynamically to the Settings Search plugin in Obsidian using its API."
image: 
order: 3
permalink: API/settings-search
publish: true
tags: [API/Settings-Search]
---

This plugin works by rendering all the setting tabs, and grabbing any rendered setting. Sometimes settings are rendered dynamically, and thus not available when a tab is rendered. 

If you want to interface with the plugin and add your settings dynamically, you can do so using the API. 

It is available on the `window` as `window.SettingsSearch`.

```js
interface Resource {
    //Id of your settings tab. This is usually the ID of your plugin as defined in the manifest.
    tab: string;
    //Name of your settings tab. This is usually the name of your plugin as defined in the manifest. This is used to organize the settings under headers when searching.
    name: string;
    //The name of the setting to add.
    text: string;
    //An optional description string to add to the setting.
    desc: string;
}

/**
 * Add an arbitrary number of resources to the settings search.
 * Returns a function that can be used to remove the registered resources.
 */
SettingsSearch.addResources(...resources: Resource[]);

/**
 * Remove an arbitrary number of resources from the settings search.
 */
SettingsSearch.removeResources(...resources: Resource[]);

/**
 * Remove all resources associated with a particular SettingTab id.
 */
SettingsSearch.removeTabResources(id: string)

```