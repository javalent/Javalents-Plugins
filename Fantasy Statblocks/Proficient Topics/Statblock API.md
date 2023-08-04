---
aliases: [Statblocks API, Statblock API]
cover: 
description: "This Page introduces the API to Fantasy Statblocks."
image: 
permalink: statblocks/api
publish: true
tags: [API/Statblocks]
---

Statblocks currently allows for the following items to be exposed to the global javascript within Obsidian.

```ts
export interface StatblockAPI {
    render(
        creature: Creature,
        statblockEl: HTMLDivElement,
        display?: string
    ): Component;
    saveMonsters(homebrew: HomebrewCreature[]): unknown;
    hasCreature(name: string): boolean;
    getCreatureFromBestiary(name: string): Partial<Monster> | null;
    settings: StatblockData;
    data: Map<string, Monster>;
    bestiary: Map<string, Monster>;
}
    ```

