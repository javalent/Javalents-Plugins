---
aliases: [Custom Layouts]
cover: 
description: "This page introduces the process of developing custom CSS for Fantasy Statblocks."
image: 
permalink: statblocks/css
publish: true
tags: [Statblocks/Layout/xCSS]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > *You Are Here*

---

In [[The Layout Editor|The Layout Editor]], we went over what each block does and how to create the layout. In this section, we'll focus on styling the custom layout. This can be considered an intermediate section, and each page broken down into two main parts: Function and Design. 

>[!warning]- CSS Knowledge Expectations
> You are expected to have some basic CSS knowledge, or the ability to read the [Mozilla CSS Reference Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) (*The Moz*). 
> 
> - Some rudimentary definitions will be given in the [[Glossary|Glossary]].
> - You are expected to ask questions instead of pounding your head against the same Moz document for three hours.
> - You are expected to know how to access the Obsidian Console.
> - You are expected to know how to turn it off and on, i.e., reset back to 0. 

In Function, we'll cover what you mechanically can get the Statblock Block to do within the limits of Obsidian and Fantasy Statblocks. 

In Design, we'll cover what CSS can do to help, and its limitations.

Each section will end with considerations to keep in mind as you commit to making a custom layout. I sometimes say that a Statblock Layout is an Obsidian Theme unto itself, and sometimes it is!

## Suggestions To Get Started

1) Invest in an IDE from the get-go, such as VSCode.
2) Consider learning about SCSS and [@use](https://sass-lang.com/documentation/at-rules/use) even if you plan to write in regular CSS. Separating out the CSS into smaller files helps makes maintenance and trouble-shooting easier. You can see how the Pathfinder2E Statblock CSS is [maintained using this method](https://github.com/mProjectsCode/obsidian-pathfinder2e-statblocks/tree/master/src/scss).
3) Start on the default theme as you develop your CSS. When you think you have a good look, switch to ITS-Theme, then EbullientWorks, then Shimmering Focus, then AnuPpuccin. Switch back to default between attempts. Each of these themes will challenge different aspects of your snippet and force you to either scale back, or become more specific. 
4) #Discord/Javalant-Support-Thread in #Discord/Tabletop-Games is going to be your resource for skinning Statblocks until this guide is finished.
5) That said, the resources for [Theme Designers](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Theme+Designers) are equally applicable here. 
6) If you use `!important`, it must be a last resort, and please document it thoroughly in your readme and snippet where to find them.

When you are ready, let's begin. We have a long way to go.

### Additional Resources

- [Tailwind CSS Color Generator]](https://uicolors.app/create): Use this to explore different shades of colors and access contrast. The colors can be exported in both [[Hyphen Variables]] and [[Sass Variables|Dollar Variables]].