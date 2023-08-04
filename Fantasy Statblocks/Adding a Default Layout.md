---
aliases: [Addiing a Default Layout to Fantasy Statblocks]
description: This page presents on how to add a new default layout to Fantasy Statblocks.
permalink: statblocks/layout/add-new-default
publish: true
tags: [Statblocks/layout/PR]
test: 1
---

# Adding a Default Layout

> [!success] By following these steps, you are committing to help maintain your layout and ensure that any necessary updates are made when Obsidian or Fantasy Statblocks releases new versions that may cause issues or conflicts.

Before beginning, start by reading the [Contributing.md](https://github.com/javalent/fantasy-statblocks/blob/main/CONTRIBUTING.md) file, which contains additional information on this process.

## Your Layout Folder

1.  In your own fork of [fantasy-statblocks/tree/main/src/layouts](https://github.com/javalent/fantasy-statblocks/tree/main/src/layouts "Github"), copy the **copy-me** folder and paste/rename it with your desired layout name.

> [!summary] This is Your Room
> Think of this folder as your own personal room that you are responsible for keeping clean. While we are flexible in what you keep in this folder, we encourage you to treat it as a build folder.

2. In your newly renamed folder, rename  `your-layout.ts`. For example, we can choose to have this be named `13th-age-monster.ts` or `halo-top-ice-cream.ts`. For the purposes of this guide, we will still refer to it as `your-layout.ts`.

3.  Let's explore the rest of the contents of this folder.

| Folder         | File               | Purpose                                                                                                                                                                                                                              |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /              | `your-layout.ts`   | This file is where you will end up pasting the contents of your layout.json, which you made in [[Fantasy Statblocks/The Layout Editor/The Layout Editor]].                                                                                                                                                         |
| Callbacks      |                    | This folder is where you would place your `.js` files containing the callbacks used in your layout. Soon\* you will be able to import directly from these files into your layout.                                                    |
| Other          | -                  | This folder is for other files that are unrelated to the existing folders. Build scripts, your normal `layout.json`, reference materials, etc.                                                                                                                                                           |
| Publish        | -                  | This Folder is for any documentation you need to explain on how to use your statblock. This will be posted on the [Integrated Layouts](https://plugins.javalent.com/statblock/layouts/integrated) section of the documentation site. |
| Publish        | `sample-readme.me` | This file is where you would write your readme for your layout, similar to the ones found in [[Fantasy Statblocks/Integrated Layouts/Integrated Layouts]].                                                                                                                 |
| Publish/images | -                  | This folder is for any images you need to display how your statblock looks. There should be **at least 1** with your submission.                                                                                                     |
| xCSS           | -                  | Keep your xCSS/SASS files in here. We strongly recommend including not just the finalized CSS, but the build CSS as we are constantly making updates to what CSS styling can happen to Statblocks.                                                       |

4. Now go ahead and fill out these folders and update your readme. 

5. When you are ready to get ready to edit `your-layout.ts`, move onto the next section.

## Editing Layout.ts

When your Readme is updated, your files are loaded, and all that is left is the finishing touches before submitting the PR, go ahead and open `your-layout.ts`. Inside will be the following contents:

```typescript
import { nanoid } from "src/util/util";  
import type { DefaultLayout, Layout, StatblockItem } from "../../../types/layout";  
/** "If your `your-layout.ts` file is located inside a nested folder structure, you will need to adjust the import path accordingly. */  
  
  
/** Rename layout below. */  
export const Layout: DefaultLayout = {  /** For example, export const Layout13thAgeMonster: DefaultLayout */
blocks: [ /** paste .json blocks here */],  
id: "unique-id",  /** You should choose a unique identifier for your layout and use it as the value for the `id` field. */
name: "Layout Name",  /** Basic 13th Age Monster Layout */
edited: false /** This is Optional, but we suggest leaving it. */
};
```

If your IDE is showing errors in the code, don't worry, it's normal. You can ignore the comments in the code or delete them as you work on it. Let's now move on to importing your layout.json.

### Importing Your layout.json

>[!code]- Example of Start of Pasting Json Code
> ```typescript
> export const Layout13thAgeMonster: DefaultLayout = {
>     blocks: [
>         {
>             "type": "inline",
>             "id": "2a9b58ba0ab8",
>             "properties": [],
>             "nested": [
>                 {
>                     "type": "heading",
>                     "id": "c89a2ae859f8",
>                     "properties": [
>                         "name"
>                     ],
>                     "size": 1,
>                     "fallback": "Creature"
>                 },
>                 {
>                     "type": "image",
>                     "id": "e83a48f858b8",
>                     "properties": [
>                         "image"
>                     ],
> ```

We suggest when you first paste your layout.json into `your-layout.ts` that you use one of the existing [[Fantasy Statblocks/Integrated Layouts/Integrated Layouts]] as an example. Any of them will adequately show which points of the [[JSON|.json]] file you need to copy and paste from.  Above, we have included a small sample of the start point of what it looks like when you paste in your blocks.

When all is near done, the worst thing your IDE should complain about is typos because it does not understand what a 'mook' is. If you have errors in this step that you need help with, do not hesitate to reach out to [Javalent-Plugin-Support](https://discord.com/channels/686053708261228577/932707309195493416).

## Updating Index.ts

Now for the last step, updating `index.ts`. This file tells statblocks that this is a default layout and it should be imported.

1. Navigate to `/src/layouts/index.ts` and open the file.

Inside as of writing this guide, it currently looks like below minus the extra comments:

```typescript
import { Layout5e } from "./basic 5e/basic5e";
import { LayoutFateCore } from "./fate core/fateCore";
import { LayoutPF2e } from "./pathfinder 2e/pf2e";
import { Layout13thAgeMonster} from "./13th age/monster/13th-age-monster";
/** Add your Line and Layout Here */
export * from "./basic 5e/basic5e";
export * from "./fate core/fateCore";
export * from "./pathfinder 2e/pf2e";
export * from "./13th age/monster/13th-age-monster";
/** Add your Line and Layout Here */
export const DefaultLayouts = [
    Layout5e,
    LayoutFateCore,
    LayoutPF2e,
    Layout13thAgeMonster
    /** Additional Default Layouts should be added here. */
];
```


2. To edit `import { LayoutName }`, change `Layoutname` to match the name you placed in your `export const` line on `your-layout.ts`. `import { YourLayoutName }`
3. To edit `from "./folder/"`, provide a relative path to `your-layout.ts` without adding the `.ts` extension. `from "./your-folder/your-layout"`
4. Similarly, repeat the same for the export line. `export * from "./your-folder/your-layout"`.
5. Finally, add `YourLayoutName` one more time in the list under `export const DefaultLayouts`.
6. Save the file. 

## Add Your Styles to Styles.css

Navigate to `/src/styles.css` and open the file. As of writing, the file has the following contents:

```css
@import "./main.css";
@import "./settings/settings.css";
@import "./layouts/pathfinder 2e/xCSS/pf2e.css";
@import "./layouts/13th age/monster/xCSS/13th-age-monsters.css";
```

Add your own `@import` line at the end of this file, after the last existing `@import` line.

```css
@import "./main.css";
@import "./settings/settings.css";
@import "./layouts/pathfinder 2e/xCSS/pf2e.css";
@import "./layouts/13th age/monster/xCSS/13th-age-monsters.css";
@import "./layouts/your-layout/xCSS/your-layout.css";
```

### Wrapping Up

You're about done. Dot your i's. Cross your t's. Lint your files. Do not delete any empty folders. Make some food. Play a game. Celebrate!

## Submitting a Pull Request

You don't need to create an issue thread before submitting a pull request for a new layout. Once you've finished making your changes, go ahead and submit the pull request to the main repository. Before submitting, make sure to review the contributing.md file again, as it includes instructions on how to trigger a new plugin build when your pull request is accepted.
