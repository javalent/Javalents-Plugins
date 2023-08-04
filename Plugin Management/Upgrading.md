---
aliases: [Upgrading a Plugin]
description: "Learn how to upgrade Javalent's plugins for Obsidian and get access to the latest features and improvements."
image: 
order: 3
permalink: plugins/upgrading
publish: true
tags: [Plugins/Requirements/Upgrading]
---

>[!yellow] Check the Changelogs!
> It is recommended that you read the changelog for your respective plugin update before upgrading. Some updates may include [[Breaking Change|Breaking Changes]], which will be highlighted in the changelog. It is advisable to create backups of your vault before proceeding with any updates.

## Option 1 - Community Plugins

***Step 0.*** Determine if you need to back up any existing files.

***Step 1.*** Open **Obsidian Settings**.

***Step 2.*** Navigate to **Community Plugins** on the left side of the settings menu and select it.

***Step 3.*** Click the **Check for Updates** button on the right side of the settings menu.

***Step 4.*** Wait for the results.

***Step 5.*** If any updates are available, the **Check for Updates** button will change to "Update 1" or "Update All".

> Select the **Update** button. Alternatively, you may also scroll down the list on this page and confirm if a Javalent plugin needs an update.

***Step 6.*** Once the update is complete, the **Update** button will return to its former state.

***Step 7.*** Reload or restart Obsidian.

> [!success] Congratulations. You have now updated the Plugin.

## Option 2 - Updating from GitHub

***Step 0.*** Determine if you need to back up any existing files.

***Step 1.*** Go to the plugin's GitHub repository.

***Step 2.*** Navigate to the plugin's releases page.

***Step 3.*** Download the `manifest.json`, `main.js`, and (if applicable) `styles.css` files.

***Step 3.a.*** If you're prompted to overwrite any existing files, choose "Yes".

***Step 4.*** Reload or restart Obsidian.

> [!success] Congratulations. You have now updated the Plugin.

## Option 3 - Rebuilding from Source

> [!yellow] Intermediate Subject

After installing the plugin of your choice, you can use `npm` to build new `main.js` and `styles.css` files from source.

***Step 1.***  Open the source directory in your terminal and run `npm install`.

***Step 2.***  Running `npm run build` will build the `main.js` and `styles.css` files inside the source directory.

***Step 3.*** Navigate to the appropriate `javalent-plugin` folder in your vault's plugins folder, and replace the `main.js` and `styles.css` files with the newly generated ones.

***Step 4.*** Reload Obsidian to use the new files. This can be done automatically with the [Hot-Reload Plugin for Obsidian](https://github.com/pjeby/hot-reload).

## Option 4 - Building from .env

> [!red] Advanced Subject

Alternatively, you can use the `npm run dev` command for a more streamlined workflow after setting up your `.env` file:

***Step 1.*** Create a file called `.env` in the source directory.
***Step 2.***  Add the following line to the file: `OUTDIR="/absolute/path/to/your/vault/.obsidian/plugins/plugin-name"`.
***Step 3.*** Run `npm run dev` in the source directory to build the `main.js` and `styles.css` files, and place them in the folder you specified in your `.env` file.
***Step 4.*** Whenever you save changes, the dev script will automatically rebuild those files.


