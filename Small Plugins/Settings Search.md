---
aliases:
  - Obsidian Settings Search
  - Settings Search API
  - Settings Search
description: Settings Search adds a global search to Obsidian's settings
permalink: settings-search
publish: true
tags:
  - Settings-Search
  - API/Settings-Search
---


[GitHub Repo](https://github.com/valentine195/obsidian-settings-search "Repo") [Changelog](https://github.com/valentine195/obsidian-settings-search/blob/master/CHANGELOG.md "Changelog") [Issues](https://github.com/valentine195/obsidian-settings-search/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc "Issues")

---

*This plugin adds global search to the Obsidian settings.*

That's it. That's the plugin. 😐 How about a short song for your time?

```text
Of searching high and searching low, 
This plugin augments my work flow. 
To Obsidian's settings, oh so grand, 
A tool to help me take command.

No longer must I hunt and peck,
For settings buried deep in a wreck.
With trusty plugin at my side,
The search for settings will subsi-i-i-i-i-i-ide!

Oh settings search, you're so profound,
Oh settings search, how you astound.
Obsidian's settings, now clear and true,
Obsidian's settings, how I love yooooouuuuuu!

- Sigrunixia
```


> [!bug] **Development Status**: Maintenance Mode
> Due to a glut of high priority Javalent plugin projects, this plugin is now entering maintenance mode for the time being. This is **not** a permanent status.
> - PR's will be reviewed.
> - *Yay* bugs will be reviewed and worked if able.
> - Feature Requests **will not** be worked.
> #Status/Maintenance 


>[!screenshot]- Screenshot of Settings Search Added to Obsidian
>![Setting Search Bar](https://raw.githubusercontent.com/valentine195/obsidian-settings-search/master/assets/ui.png)

## Keyboard Navigation

In addition to standard mouse functionality, this plugin is fully keyboard enabled in that you can use the keyboard to navigate the search results. 

> [!screenshot]- Gif of Up/Down key Usage
> ![Settings Search Up and Down|500](https://github.com/javalent/settings-search/blob/main/publish/gif/settings-search-up-down.gif?raw=true)

The **Up** (↑) and **Down** (↓) arrow keys can be used to move through the results, and the **Enter/Return** (↳) button will take you to the setting.

> [!screenshot]- Gif of Enter/Return
> ![Settings Search Enter Gif|500](https://github.com/javalent/settings-search/blob/main/publish/gif/settings-search-enter.gif?raw=true)


Once you hit **Enter/Return**, the Settings Search Bar will remain in focus (or Highlighted) until you navigate away from it. 

> [!screenshot]- Gif of Settings Search Highlight
> ![Settings Search Enter Gif|500](https://github.com/javalent/settings-search/blob/main/publish/gif/settings-search-settings-search-highlight.gif?raw=true)


> [!tip] Looking for a Complementary Plugin?
> Check out [Obsidian Surfing Key](https://github.com/Quorafind/Obsidian-Surfing-Key). This makes the entirety of Obsidian able to be navigated by keyboard. 

## API for Settings Search

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