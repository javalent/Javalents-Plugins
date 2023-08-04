---
aliases: [Admonition Publish.js]
description: This page details how to add Admonitions Callouts to your Obsidian Publish.
permalink: admonitions/advanced/publish
publish: true
tags: [Admonitions/Publish, Admonitions/Publish]
---

# Publish..js And Admonitions

> [!danger]  This feature is being removed in the next release. It is recommended to utilize the callouts `> [!custom-admonition-name]` created from the Admonition instead. 

In general, plugins for Obsidian cannot currently be used on publish sites. But, starting from version 6.4.0, Admonitions has a feature to generate a JavaScript file that can be utilized on Publish sites with custom domains.

Please note that Obsidian Publish only supports the use of external JavaScript on sites with custom domains. If your Publish site is **not** hosted on a custom domain, this functionality will not be available.

>[!red] Instructions
> 1.  Go the Admonition settings tab and click the "Generate JS for Publish" button.
> 2.  Save the JavaScript file.
> 3.  Copy the contents of the JS file to your `publish.js` file.
> 4.  Add the contents of the [assets/main.css](https://github.com/valentine195/obsidian-admonition/tree/master/src/assets) file to your `publish.css` file.


It is important to keep in mind that neither Javalent nor any other contributors to the Admonitions plugin can guarantee stability on your publish site. It is possible that other JavaScript included on your site may conflict with the Admonitions plugin's generated JavaScript file.

If you encounter any issues while using the Publish.js on your publish site, please create an issue on the [Github repository](https://github.com/valentine195/obsidian-admonition/issues "Github"), and we will do our best to assist you.



