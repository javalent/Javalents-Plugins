---
aliases: [Fuzzy Search, Fuzzy Searches]
description: This page details what a fuzzy search is.
permalink: glossary/generic/fuzzy
publish: true
tags: [Glossary]
---

# Fuzzy Search

Fuzzy search is a technique used to find approximate matches to a given search query, even if the query and the target do not match exactly.

> For example, if I type in the word `foo` and I get a list of results, those results will be any word that contains fu. This means that I could pull up search results for the wood food, for the word foot,  or even foobar. 

Where are you likely will use this search function is going to be in [[Initiative Tracker]], as well as in CSS.

## Fuzzy in Javascript

Fuzzy searching in JavaScript involves finding approximate matches of a given query string in a list of strings or a string using a fuzzy search algorithm. This is useful when you want to search for a [[string]] that might contain errors, typos, or variations in spelling, but you still want to get a relevant list of results.

## Fuzzy in CSS

In CSS `*` is used to indicate `everything` in a selector. In a fuzzy search format, you may occasionally see `[class*=foo]`, which indicates that styling should apply to all selectors that have `foo` in their selector string.