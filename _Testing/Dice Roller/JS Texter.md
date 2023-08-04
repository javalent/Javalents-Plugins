


```dataviewjs
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
const diceRoller1 = await diceRollerPlugin.getRoller("1d20");
const diceRoller2 = await diceRollerPlugin.getRoller("1d50");
const result1 = await diceRoller1.roll();
const result2 = await diceRoller2.roll();
dv.list([result1]);
dv.list([result2]);
```
