---
aliases: [Encounter Builder API]
description: This page contains the basic API used for Encounter Builder
permalink: it/builder/API
publish: true
tags: [API/Initiative-Tracker]
---

# Encounter builder api

> [!missing]  This is currently a work in progress.

## How encounter builder makes fields

### Derived fields

All the fields within the Encounter Builder are derived from the YAML or JSON data within your Bestiary. 

Below is the code that controls the handling of these derivatives. 

```js
  {
        type: FilterType.Options,
        text: "Type",
        fields: ["type"],
        options: [],
        id: getId(),
        derive: true
    }
```

### Name

The encounter builder features the ability to search for name based on the [[String]] input. It [[Fuzzy Search|Fuzzy Searches]] based on that string, and returns the exact and closest values. 


```js
const NAME_FILTER: StringFilter = {
    type: FilterType.String,
    text: "Name",
    fields: ["name"],
    options: "",
    id: "ID_DEFAULT_NAME_FILTER",
    derive: false
};
```