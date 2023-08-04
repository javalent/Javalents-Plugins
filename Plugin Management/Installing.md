---
aliases: [Installing a Plugin]
description: "Learn the different ways you can install Javalent's plugins for Obsidian."
image: 
order: 2
permalink: plugins/installing
publish: true
tags: [Plugins/Requirements/Installation]
---

## Option 1: Community Plugins

***Step 1.*** Open your **Obsidian Settings**.

> [!help] Need help finding the Obsidian Settings? Check out these instructions by the [Obsidian Documentation Team](https://help.obsidian.md/How+to/Change+settings).

***Step 2.*** Select **Community Plugins** from the settings menu.

***Step 3.*** Click the **Browse** button on the right side of the screen.

If **Restricted Mode** is enabled, you may need to first select "==Turn on Community Plugins==".

***Step 4.*** Use the **Search Bar** at the top of the page to find your desired plugin. For this example, we'll search for "Fantasy Statblocks".

***Step 5.*** Select the plugin from the search results, and click **Install**.

***Step 6.*** Once the plugin has finished installing, the installation button will change to **Enable**.

***Step 7.*** When you're ready, click **Enable** and either view the plugins' settings, or **Close the Settings Menu**.

> [!success] Congratulations! You have succeeded in installing the plugin through the Obsidian Community Plugins Menu.

## Option 2: Manual Download and Install

### Method 1: Downloading a .zip or .tar.gz File

***Step 1.*** Navigate to the Releases page for the plugin you want to install on GitHub. You can find a link to this page on the plugin's GitHub repository page.

***Step 2.*** Download the most recent release as a .zip or .tar.gz file.

***Step 3.*** Extract the files from the downloaded archive.

***Step 4.*** Copy the extracted files to the `<vault>/.obsidian/plugins/` folder.


> [!hint]- On some machines, the`.obsidian` folder may be hidden.
>
> ##### MacOS
>
> 1. Open Finder
> 2. Press the `Command + Shift + Dot` keys.
>
> ##### Windows 11
>
> 1. Open File Explorer
> 2. Click on the "View" tab on the top navigation bar
> 3. Check the "Hidden items" checkbox under "Hidden files and folders"
> 4. The `.obsidian` folder should now be visible in the File Explorer.
>
> ##### NIX Systems
>
> 1. If not already in the command line, open a terminal.
> 2. Use the command `ls -a /path/to/vault` to confirm that your vault does indeed have a .obsidian directory. 
> 3. You can use the same command to explore further into the .obsidian folder.

### Method 2: Downloading Individual Files

***Step 1.*** Navigate to the Releases page for the plugin you want to install on GitHub.

***Step 2.*** Download the `manifest.json`, `main.js`, and `styles.css` files from the most recent release.

***Step 3.*** Create a new folder within the `<vault>/.obsidian/plugins/` folder and name it after the plugin.

***Step 4.*** Copy the downloaded files into the new plugin folder.

### Final Steps

***Step 5.*** Reload Obsidian.

***Step 6.*** If prompted about Safe Mode and trusting the plugin author, you can disable Safe Mode and enable the plugin.

Alternatively, you can head to Obsidian Settings, then to Community Plugins, make sure Safe Mode is off, and enable the plugin from there.

> [!success] Congratulations! You have installed the plugin from GitHub!

## Option 3: BRAT Installation (Beta-Testers Only)

> [!red] It's Dangerous To Go Alone
> We recommend that you avoid using BRAT versions unless you are explicitly prompted to do so by Javalent or another contributor, or if you have a clean and disposable vault. 
> 
> Please note that BRAT versions are not supported indefinitely. We will do our best to notify you when you should stop using a BRAT release, but it is important to keep an eye on the Release Bot for updates regarding the feature you were testing.

### Installing a BRAT Plugin

***Step 1***. Open your **Obsidian Settings**.

***Step 2***. Navigate to **Community Plugins** on the left side of the settings menu and select it.

***Step 3***. Navigate to the **Browse** button on the right side of the settings menu, and select it.

***Step 4***. Search for "BRAT" in the **Search Bar** up top.

***Step 5***. Select the "Obsidian42 - BRAT" search result, and select **Installation**.

***Step 6***. Once the plugin has installed, the installation button will change to **Enable**.

***Step 7***. Enable the Plugin.

### Adding a Plugin to BRAT

***Step 1***. Copy the GitHub link from plugin you want to have a BETA build for. 

> In this instance, we'll use Fantasy Statblocks' url.  `https://github.com/valentine195/Fantasy-Statblocks/`

***Step 2***. Open **Obsidian42 - Brat** Settings.

***Step 3***. Underneath the *Beta Plugin List* option, select **Add Beta Plugin**.

***Step 4***. A new window will pop up asking for the GitHub repository for the Beta Plugin.

> Paste the link that you copied from Step 1.
>
> Select **Add Plugin**.

***Step 5***. The pop-up window will close, and you will receive a notification that states installation complete, and that you may need to enable the plugin from Community Plugins.

***Step 6***. Check the Community Plugins page to ensure that the plugin is enabled.

> [!success] Congratulations! You now have the Beta version of the plugin. Please report any Beta Issues in the appropriate Repository Issues section.

