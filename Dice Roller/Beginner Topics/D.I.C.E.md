---
aliases: ["D.I.C.E", "Dice Rolling: Important Common Enquiries."]
cover: 
description: This page details common questions received about Dice Roller.
image: 
permalink: dice/dice
publish: true
tags: [Dice-Roller]
---

## Dice Rolling: Important Common Enquiries

### Conditional Rolls

#### Percentage Conditional Based on Amount

How Do I… Make a Dice Roll/Result only show when more than a declared amount?

To make a result driven conditional dice roll for a treasure table use the following formula format:

`dice: 1d%<50*(4d6*100-1d100)`.

`1d%` is the percentage die.
`<50` is the conditional number that needs to be beaten.
`(4d6*100-1d100)` is the additional dice roll to be evaluated.

If the result is zero, nothing is displayed. 
`dice: 1d%<50*1d4[[note^Table]]|2nd header|nodice`

This method works well for most OSR tables that use % for treasure generation. If the treasure value is higher than the % roll, it displays 0 for gold, copper, silver, etc. on the table. If it's under the %, it shows the combined roll and nothing if it's over.

> [!screenshot]- Image of Inquiry
> Image courtesy of [Cyberlinxz#5643](https://discord.com/channels/686053708261228577/932707309195493416/1104202315721887815)
> 
> ![Dice Roller Inquiry](https://github.com/javalent/initiative-tracker/blob/main/publish/images/table-rollers/percentage-conditional.PNG?raw=true)


> [!screenshot]- Image of Inquiry Result
> Image courtesy of [Cyberlinxz#5643](https://discord.com/channels/686053708261228577/932707309195493416/1104202315721887815)
> 
> ![Dice Roller Result](https://github.com/javalent/initiative-tracker/blob/main/publish/images/table-rollers/percentage-conditional-result.PNG?raw=true)