---
aliases:
  - Add Translations to Admonitions
description: This page briefly explains what is needed to localize Admonitions.
permalink: admonitions/localizing
publish: true
tags:
  - Translations/Admonitions
---

# Localizing Admonitions

New locales can be added by creating a pull request. These are the overarching things which need accomplished in this pull request:

1.  Create the locale in the `/src/locales/` folder by copying the `en.ts` file. This file should be given a name matching the string returned by `moment.locale()`.
2.  Create the translation by editing the value of each property.
3.  Add the import in `locales.ts`.
4.  Add the language to the `localeMap` variable.

