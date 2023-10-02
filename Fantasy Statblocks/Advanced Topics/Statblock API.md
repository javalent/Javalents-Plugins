---
aliases: [Statblocks API, Statblock API]
description: This Page introduces the API to Fantasy Statblocks.
permalink: statblocks/api
publish: true
tags: [API/Statblocks]
---

# Statblock api

Statblocks currently provides access to the following elements for integration with global JavaScript functionality within Obsidian:

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

These features can be utilized by making use of the `FantasyStatblocks.getBestiary()` function call.

> [!danger] Please be aware that the usage of `window.bestiary` is being phased out.



