---
aliases:
  - REM
description: This page explains how REM is used in CSS.
permalink: glossary/rem
publish: true
tags:
  - Glossary/CSS
---

# REM

REM stands for "root em" and is a unit of measurement in CSS. It is similar to the "em" unit but is based on the root element rather than the parent element, such as `<html>` or `body {}`. In our case, this would be the size defined within `.statblock-content`. 

By using rem, makes it easier to calculate and maintain consistent font sizes across an entire statblock as when we add more selectors, there is more sizing overrides, particularly when it comes to font sizing. 

For example, let's say the font-size of `.statblock-content`.  is set to 12 pixels (14px is default in statblocks, 16px is usually default in HTML). If you set the font size of the element `.property-line-Pseudopod`'s font-size to 1.5rem, the resulting font-size will be 18 pixels (1.5 times the font-size of `.statblock-content`. ).

