---
aliases: [Reporting a Bug]
description: "This page details how to report a bug."
permalink: support/report-bug
publish: true
tags: [Support/Report-Bug]
---

# Reporting a bug

## Report a bug overview

> [!statblock] Greetings, brave traveler! Lest thou waste thy precious time, heed these wise words!

There is a form to help you submit a bug report. The following section will guide you on providing enough information for us to investigate the bug.

### Readability and data

-   [!] Provide your code-blocks so we can easily copy and view what you are experiencing.
-   [!] Share other text that we can copy, like error codes. This helps us quickly locate the source of the error without mistakes caused by dragon fingers.
-   [!] Ensure readability. If what you show us looks like a jumbled mess, it will be difficult for us to understand.

### Raw data

To enable us to copy the raw text of your task, enclose it between two lines containing only `~~~`. For example:

~~~
```statblock
monster: Ancint Black Dragon
```
~~~

This will display as:

````yaml
```statblock
monster: Ancint Black Dragon
```
````


>[!bug] In this case, the bug is due to a typo in the Monster name.

### Steps to reproduce the bug

To report a bug, you will need to provide us with an exact and complete list of numbered steps that led to the problem. It is crucial that these steps are performed in a vault where the plugin in question is the only enabled plugin. This is unless the plugin requires a specific interaction with another Javalent Plugin.

> [!danger] Please note that if we cannot reproduce the bug, we cannot fix it. Therefore, incomplete bug reports are not helpful. We receive many bug reports, and we do not have time to follow up on incomplete ones. If your report is incomplete, it will go stale, and **we will** close it.

## Reporting bugs and interactions with non-javalent plugins

> [!warning] We do not focus on resolving problems related to Javalent Plugins interacting with other plugins, unless the **author of the plugin is willing to actively** collaborate with us to find a solution.

Acquiring knowledge of the settings, behavior, and code of another plugin would consume precious time that could otherwise be used to improve Javalent's plugin.

> [!info] If you still wish to report a bug involving another plugin, you must provide us with a minimal zipped vault, which includes:

The Javalent plugin in question, and the non Javalent plugin it is interacting with.
One or two notes that demonstrate the problem.

### Before reporting a javalent bug involving another plugin

- [ ] Create a new Obsidian vault.
- [ ] Install the Javalent Plugin, and update the settings if necessary.
- [ ] Install the non-Javalent Plugin plugin, and update its settings if necessary.
- [ ] Create a new note with the simplest possible content that demonstrates the problem.
- [ ] Confirm that you can reproduce the problem in this minimal setup.
- [ ] Note every step you took to reproduce the problem.

### Submit your minimal vault

Once you have figured out how to reproduce the problem:

- [ ] Quit Obsidian.
- [ ] Create a .zip file containing the minimal vault.
- [ ] Create a bug report in the relevant repository.
- [ ] Make sure you [[Help and Support/Reporting a Bug#Steps to Reproduce the Bug|provide us with good data]].
- [ ] Attach the zip file to the bug report by dragging it from your file browser into the bug report form.