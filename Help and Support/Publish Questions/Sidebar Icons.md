---
aliases: [Publish icons, I like your Sidebar Icons]
cover: 
description: "This Page describes how to achieve the Sidebar Icons that our Publish Site uses."
image: 
permalink: publish/xCSS/
publish: true
tags: Publish/XCSS
---

## Recreating the "animated" Sidebar Icons

This is the current SCSS code to get the Sidebar Icon styling that we have on our site.

The Icons are capped to 15px by 15px.

### Removing Old Dropdown Arrows

```scss
// Sets Proper Padding for all screen sizes
.nav-view-outer {  
  overflow: auto;  
  padding-bottom: 32px;  
  padding-top: 10px;  
  padding-left: 10px;  
  
  .tree-item-children {  
    padding-left: 0;  
    //padding-bottom: 8px;  
    //padding-top: 2px;  }  
}  
  
.tree-item-self .tree-item-icon {  
  display: none;  // Get rid of old arrows
  display: flex;  // Then flex the space
  align-items: center;  
  align-self: flex-start;  
  margin-inline-start: -22px;  
  padding-inline-start: 8px;  
  padding-inline-end: 2px;  
  flex: 0 0 auto;  
}
```

### Adding New Icons

```scss
// Screen Size Parameter
// New Icons will not show on screen sizes smaller than this
@media screen and (min-width: 800px) {  
  // Get rid of old sidebars Icons Completely. 
  .tree-item-self .tree-item-icon {  
    display: none;  
  }  
  
  
  // Make Nav Icons Different  
  .tree-item-children {  
    & .tree-item {  
      & .tree-item-self[data-path='Dice Roller'],  
      .tree-item-self[data-path='Fantasy Bestiary'],  
      .tree-item-self[data-path='Calendarium'],  
      .tree-item-self[data-path='Initiative Tracker'],  
      .tree-item-self[data-path='Leaflet'],  
      .tree-item-self[data-path='Fantasy Statblocks'] {  
        position: relative;  
  
        &::after {  
          bottom: 0.5rem;  
          content: '';  
          display: inline-block;  
          height: 1rem;  
          left: -1px;  
          position: absolute;  
          vertical-align: text-bottom;  
          width: 1rem;  
          /** SVG for when Folders are Open */  
          background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'15\' height=\'15\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23058080\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'lucide lucide-dices\'%3E%3Crect width=\'12\' height=\'12\' x=\'2\' y=\'10\' rx=\'2\' ry=\'2\'%3E%3C/rect%3E%3Cpath d=\'m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6\'%3E%3C/path%3E%3Cpath d=\'M6 18h.01\'%3E%3C/path%3E%3Cpath d=\'M10 14h.01\'%3E%3C/path%3E%3Cpath d=\'M15 6h.01\'%3E%3C/path%3E%3Cpath d=\'M18 9h.01\'%3E%3C/path%3E%3C/svg%3E');  
        }  
      }  
  
      & .tree-item-self[data-path='Admonitions'],  
      .tree-item-self[data-path='Second Window'],  
      .tree-item-self[data-path='Markdown Attributes'],  
      .tree-item-self[data-path='Notifier'],  
      .tree-item-self[data-path='Settings Search'],  
      .tree-item-self[data-path='Prominent Bookmarked Files'] {  
        position: relative;  
  
        &::after {  
          bottom: 0.5rem;  
          content: '';  
          display: inline-block;  
          height: 1rem;  
          left: -1px;  
          position: absolute;  
          vertical-align: text-bottom;  
          width: 1rem;  
          /** SVG for when Folders are Open */  
          background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'15\' height=\'15\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%239d6553\' stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'lucide lucide-wand-2\'%3E%3Cpath d=\'m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z\'%3E%3C/path%3E%3Cpath d=\'m14 7 3 3\'%3E%3C/path%3E%3Cpath d=\'M5 6v4\'%3E%3C/path%3E%3Cpath d=\'M19 14v4\'%3E%3C/path%3E%3Cpath d=\'M10 2v2\'%3E%3C/path%3E%3Cpath d=\'M7 8H3\'%3E%3C/path%3E%3Cpath d=\'M21 16h-4\'%3E%3C/path%3E%3Cpath d=\'M11 3H9\'%3E%3C/path%3E%3C/svg%3E');  
  
        }  
      }  
  
      & .tree-item-self[data-path='Glossary'] {  
        position: relative;  
  
        &::after {  
          bottom: 0.5rem;  
          content: '';  
          display: inline-block;  
          height: 1rem;  
          left: -1px;  
          position: absolute;  
          vertical-align: text-bottom;  
          width: 1rem;  
  
          /** SVG for when Folders are Open */  
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%2391a695' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-book-open'%3E%3Cpath d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'%3E%3C/path%3E%3Cpath d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'%3E%3C/path%3E%3C/svg%3E");  
        }  
      }  
  
      & .tree-item-self[data-path='Plugin Management'] {  
        position: relative;  
  
        &::after {  
          bottom: 0.5rem;  
          content: '';  
          display: inline-block;  
          height: 1rem;  
          left: -1px;  
          position: absolute;  
          vertical-align: text-bottom;  
          width: 1rem;  
  
          /** SVG for when Folders are Open */  
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%23b399ae' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-flower-2'%3E%3Cpath d='M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1'%3E%3C/path%3E%3Ccircle cx='12' cy='8' r='2'%3E%3C/circle%3E%3Cpath d='M12 10v12'%3E%3C/path%3E%3Cpath d='M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z'%3E%3C/path%3E%3Cpath d='M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z'%3E%3C/path%3E%3C/svg%3E");  
        }  
      }  
  
      & .tree-item-self[data-path='Help and Support'] {  
        position: relative;  
  
        &::after {  
          bottom: 0.5rem;  
          content: '';  
          display: inline-block;  
          height: 1rem;  
          left: -1px;  
          position: absolute;  
          vertical-align: text-bottom;  
          width: 1rem;  
  
          /** SVG for when Folders are Open */  
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%23e0b15e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-heart-handshake'%3E%3Cpath d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'%3E%3C/path%3E%3Cpath d='M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66'%3E%3C/path%3E%3Cpath d='m18 15-2-2'%3E%3C/path%3E%3Cpath d='m15 18-2-2'%3E%3C/path%3E%3C/svg%3E");  
        }  
      }  
    }  
  
    & div.tree-item {  
      &.is-collapsed {  
        & .tree-item-self[data-path='Dice Roller'],  
        .tree-item-self[data-path='Fantasy Bestiary'],  
        .tree-item-self[data-path='Calendarium'],  
        .tree-item-self[data-path='Initiative Tracker'],  
        .tree-item-self[data-path='Leaflet'],  
        .tree-item-self[data-path='Fantasy Statblocks'] {  
          position: relative;  
  
          &::after {  
            bottom: 0.5rem;  
            content: '';  
            display: inline-block;  
            height: 1rem;  
            left: -1px;  
            position: absolute;  
            vertical-align: text-bottom;  
            width: 1rem;  
            /** SVG for when Folders are Collapsed */  
            background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'15\' height=\'15\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23058080\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'lucide lucide-dice-2\'%3E%3Crect width=\'18\' height=\'18\' x=\'3\' y=\'3\' rx=\'2\' ry=\'2\'%3E%3C/rect%3E%3Cpath d=\'M15 9h.01\'%3E%3C/path%3E%3Cpath d=\'M9 15h.01\'%3E%3C/path%3E%3C/svg%3E');  
          }  
        }  
      }  
  
      &.is-collapsed {  
        & .tree-item-self[data-path='Admonitions'],  
        .tree-item-self[data-path='Second Window'],  
        .tree-item-self[data-path='Markdown Attributes'],  
        .tree-item-self[data-path='Notifier'],  
        .tree-item-self[data-path='Settings Search'],  
        .tree-item-self[data-path='Prominent Bookmarked Files'] {  
          position: relative;  
  
          &::after {  
            bottom: 0.5rem;  
            content: '';  
            display: inline-block;  
            height: 1rem;  
            left: -1px;  
            position: absolute;  
            vertical-align: text-bottom;  
            width: 1rem;  
            /** SVG for when Folders are Collapsed */  
            background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'15\' height=\'15\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%239d6553\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'lucide lucide-wand\'%3E%3Cpath d=\'M15 4V2\'%3E%3C/path%3E%3Cpath d=\'M15 16v-2\'%3E%3C/path%3E%3Cpath d=\'M8 9h2\'%3E%3C/path%3E%3Cpath d=\'M20 9h2\'%3E%3C/path%3E%3Cpath d=\'M17.8 11.8 19 13\'%3E%3C/path%3E%3Cpath d=\'M15 9h0\'%3E%3C/path%3E%3Cpath d=\'M17.8 6.2 19 5\'%3E%3C/path%3E%3Cpath d=\'m3 21 9-9\'%3E%3C/path%3E%3Cpath d=\'M12.2 6.2 11 5\'%3E%3C/path%3E%3C/svg%3E');  
  
          }  
        }  
  
        & .tree-item-self[data-path='Glossary'] {  
          position: relative;  
  
          &::after {  
            bottom: 0.5rem;  
            content: '';  
            display: inline-block;  
            height: 1rem;  
            left: -1px;  
            position: absolute;  
            vertical-align: text-bottom;  
            width: 1rem;  
            /** SVG for when Folders are Collapsed */  
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%2391a695' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-book'%3E%3Cpath d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20'%3E%3C/path%3E%3Cpath d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'%3E%3C/path%3E%3C/svg%3E");  
          }  
        }  
  
        & .tree-item-self[data-path='Plugin Management'] {  
          position: relative;  
  
          &::after {  
            bottom: 0.5rem;  
            content: '';  
            display: inline-block;  
            height: 1rem;  
            left: -1px;  
            position: absolute;  
            vertical-align: text-bottom;  
            width: 1rem;  
            /** SVG for when Folders are Collapsed */  
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='%23b399ae' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-sprout'%3E%3Cpath d='M7 20h10'%3E%3C/path%3E%3Cpath d='M10 20c5.5-2.5.8-6.4 3-10'%3E%3C/path%3E%3Cpath d='M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z'%3E%3C/path%3E%3Cpath d='M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z'%3E%3C/path%3E%3C/svg%3E");  
          }  
        }  
  
        & .tree-item-self[data-path='Help and Support'] {  
          position: relative;  
  
          &::after {  
            bottom: 0.5rem;  
            content: '';  
            display: inline-block;  
            height: 1rem;  
            left: -1px;  
            position: absolute;  
            vertical-align: text-bottom;  
            width: 1rem;  
            /** SVG for when Folders are Collapsed */  
            background-image: url("data:image/svg+xml,%3Csvg fill='none' height='15' stroke='%23e0b15e' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' viewBox='0 0 24 24' width='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m3 15 5.12-5.12a3 3 0 0 1 2.12-.88h2.76a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94a3 3 0 0 1 -2.43 1.27h-5.13a2 2 0 0 0 -1.42.59l-1.41 1.41'/%3E%3Cpath d='m2 14 6 6'/%3E%3C/svg%3E");  
          }  
        }  
      }  
    }  
  }  
}
```