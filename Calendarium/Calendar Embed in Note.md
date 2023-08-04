---
aliases: [Calendar in Note]
cover: 
description: [This page details how calendarium can be simply embedded into a note.]
image: 
permalink: calendarium/embed/note
publish: true
tags: Calendarium/Embed
---

> [!feature] This feature was added in 1.0.0-b11\*.

\* B stands for BRAT release. 

Calendarium supports a basic amount of embedding within a note using the codeblock call `calendarium`.

````yaml
```calendarium
```
````


This produces the resulting screenshot below.

> [!screenshot]- Screenshot of the Third Imperium Calendar
> ![[_images/IMG-20230804-19.png]]

## Specify the Calendar Embedded

By default, the Calendarium embed will display the active and default calendar in settings. You can specify a specific calendar to display with the `calendar` YAML key. 

````yaml
```calendarium
calendar: Borderlands
```
````

The default calendar in the test vault is the Third Imperium Traveller calendar. However, I am asking the codeblock to display a custom made Borderlands calendar, with the results in screenshot below.

> [!screenshot]- Screenshot of the month of Anshin in Borderlands Calendar
> ![[_images/IMG-20230804-20.png]]


