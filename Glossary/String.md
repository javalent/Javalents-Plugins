---
aliases:
  - String
  - Plain Characters
  - Wrapped String
description: This page explains how a String is used in CSS and YAML.
permalink: glossary/string
publish: true
tags:
  - Glossary/YAML
  - Glossary/CSS
---

# String

## CSS

A String, or Plain Characters, refer to regular text or characters used in CSS, such as font names, hex color codes, and other values that are not already variables form.


```css
4px
'IBM Plex Mono', 'JetBrains Mono', 'Inconsolata', monospace;
```

## Javascript

In Javascript, a string is a sequence of characters that are enclosed in single quotes (' '), double quotes (" "), or backticks ( ). It can contain any combination of letters, numbers, symbols, and spaces.

```js
"Avast!"
'Yar!'
"1d6"
'Shuttlecock'
```

Strings are a primitive data type in JavaScript, which means they are not objects and are immutable. This means that once a string is created, it **cannot** be changed. However, you can create a new string based on an existing one by using string manipulation methods such as concatenation, or slicing.

## YAML

In YAML, a string is a line of characters; akin to a sentence.

`Title: Smeller of Roses`

*Key*: *String*.

Colloquially, such as in discord, you may be asked if "your code is a string"? What is being asked in this case is: Is your String Wrapped in Quotes?

A Wrapped String is a way to force the code to parse its contents as they are written. Typically, this is done to preserve special characters:
    **+** A string wrapped by double quotes "" will parse escape characters, such as the backslash n `\n` to create a line break, or to allow an underscore `_` to be rendered to italicize a word. "I love pie.
    *Very Much*."
    **+** A string wrapped by single quotes '' will not parse escape characters. They will be presented as written. 'I love pie.\\n \_Very Much\_.'

### Wrapped Strings

You will see wrapped strings commonly within the Trait blocks. However, they can be present in all property blocks depending upon the contents.

```yaml
abilities_mid:
  - name: "Frightful Presence"
    desc: " ([[aura]], [[emotion]], [[fear]], [[mental]]);  90 feet, DC 32."
  - name: "Deflecting Cloud"
    desc: "⬲ __Requirements__ The dragon is aware of the attack and has a free wing __Trigger__ The dragon is the target of a ranged attack __Effect__  The cloud dragon flexes a wing and creates a billowing cloud of mist. The dragon is treated as if they were [[hidden|hidden]] for the purposes of resolving the triggering attack, so normally the attacker must succeed at a DC 11 flat check to target them. The dragon also gains a +4 circumstance bonus to AC against the triggering attack."
```

