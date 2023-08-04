---
aliases: [Initiative Tracker API, Tracker API]
cover: 
description: "This page details some way to use and access the API for Initiative Tracker (But Not Encounter Builder)."
image: 
permalink: initiative/tracker/api
publish: true
tags: [API/Initiative-Tracker]
---

>[!question] Looking for Encounter Builder's ? Check the [[Initiative Tracker/Proficient Topics/Encounter Builder API|Encounter Builder API]] page.

## Adding a Creature to IT via Javascript

### Exposure

Initiative Tracker currently has a rough API exposure that allows usage of one specific function. The piece of code that exposes the API right now is located in [src/main.ts](https://github.com/javalent/initiative-tracker/commit/48d7a1cb96b70144553afe2af138b9ac8e73cb13#diff-4fab5baaca5c14d2de62d8d2fceef376ddddcc8e9509d86cfa5643f51b89ce3d "Github")

```ts
export default class InitiativeTracker extends Plugin {
     public data: InitiativeTrackerData;
     public tracker = tracker;
     playerCreatures: Map<string, Creature> = new Map();
     watchers: Map<TFile, HomebrewCreature> = new Map();
     getRoller(str: string) {
```

### Parameters

The parameters that can be used when calling the function are found in [src/tracker/stores/tracker.ts](https://github.com/javalent/initiative-tracker/blob/b5b3fc233d5ea5d228351834b7b8987439d19683/src/tracker/stores/tracker.ts#L25-L37 "Github"):

```ts
type CreatureUpdate = {
    hp?: number;
    ac?: number | string;
    current_ac?: number | string;
    initiative?: number;
    name?: string;
    marker?: string;
    temp?: number;
    max?: number;
    status?: Condition[];
    hidden?: boolean;
    enabled?: boolean;
```

### Calling the Function

The function this API allows is the ability to inject the following into the Initiative Tracker right sidebar when IT is active, using Aboleth as an example.

```js
app.plugins.plugins['initiative-tracker'].tracker.updateCreatureByName("Aboleth", { hp: 30, hidden: false, enabled: true })
```


>[!hint] Full cleanup and exposure of the API will be achieved at a later date.