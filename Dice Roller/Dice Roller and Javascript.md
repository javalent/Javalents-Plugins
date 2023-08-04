---
aliases: [Dice Roller Interactions]
cover: 
description: "This page details how to call Dice Roller API from another plugin that supports Javascript."
image: 
permalink: dice/javascript
publish: true
tags: [Javascript/Dice]
---

## Javascript Integration

If you have JavaScript plugins like [CustomJS](https://github.com/saml-dev/obsidian-custom-js "Github") or [Dataview](https://github.com/blacksmithgu/obsidian-dataview "Github") installed, you can interact with the Dice Roller plugin by accessing it through the Obsidian app object. Here's an example of how to do that:

```javascript
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
```

Once you have obtained an instance of the plugin, you can create different types of rollers, such as simple dice rollers or [[Dice Roller/Proficient Topics/Tag Rollers with Dataview|Tag Rollers]], using the `getRoller` method. Here's an example:

```javascript
//definition
getRoller(diceString: string, sourceFile: string = ""): Promise<Roller>;

//example
const diceRoller = await diceRollerPlugin.getRoller("1d3+3d8");
```

To execute a roll using the `diceRoller` object, you can invoke the `roll()` function. The outcome of the roll will be stored in the `diceRoller.result` field. Here's an example demonstrating how to access the roll result:

```js
const diceRoll = await diceRoller.roll();
```

You can utilize the `diceRoll` variable to retrieve the roll result and perform any further operations as needed.

### Rolling a Single Die

In this illustration, we'll perform a roll for a `1d3` die. Feel free to modify `1d3` with the specific die of your choice.

```javascript
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
const diceRoller = await diceRollerPlugin.getRoller("1d3");
const result = await diceRoller.roll();
dv.list([result]);
```

Note that the code snippet assumes the presence of plugins like CustomJS or Dataview and utilises the `dv.list` function to display the result. Make sure to adjust the code accordingly based on your specific desired output.


>[!faq] I read the documentation for dice roller on using it with from JS code and i was wondering if there is a way to simply roll a dice string such as `1d20+5` and get the result back as a number?
> Very simple! Use something like below.
> ```js
> const roller = await DiceRollerAPI.getRoller("1d20 + 5");
> await roller.roll();
> const result = roller.result;
> ```


### Rolling Multiple Die

In this example, we will roll two separate die, and place the results in a simple list.

```js
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
const diceRoller1 = await diceRollerPlugin.getRoller("1d20");
const result1 = await diceRoller1.roll();
const diceRoller2 = await diceRollerPlugin.getRoller("1d50");
const result2 = await diceRoller2.roll();
dv.list([result1]);
dv.list([result2]);
```

### Rolling with Flags

- [x] #Todo Add examples about rolling with some of the complicated Flags like KH. ➕ 2023-05-19 📅 2023-06-30 ✅ 2023-08-04

## Array Roller

The Dice Roller plugin provides a special type of roller known as the Array Roller. This roller allows you to directly pass in an array of options and obtain results based on rolling the array.

To create an Array Roller using the JavaScript interface, you can use the following method:

```js
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
const arrayRoller = await diceRollerPlugin.getArrayRoller(options, rolls);
```

The `options` parameter represents the array of options you want to roll, and the optional `rolls` parameter specifies the number of rolls you want to perform. By default, the number of rolls is set to 1 if not specified.

The ArrayRoller object has the following properties and methods:

### Properties

-   `containerEl`: This property holds the container element of the array roller. You can use this property to attach the Array Roller to the note's DOM.
-   `results`: This property contains the array of randomly-generated results. Each time the Array Roller is rolled, the results will change accordingly.

### Methods

-   `roll()`: This method allows you to roll the array roller and generate a new set of results. It returns a promise that resolves to the updated results array.

### Results

Here's an example demonstrating the usage of the Array Roller:

```js
const diceRollerPlugin = app.plugins.getPlugin("obsidian-dice-roller");
const arrayRoller = await diceRollerPlugin.getArrayRoller([1, 2, 3, 4, 5], 2);

// Roll the array roller
await arrayRoller.roll();

// Access the updated results
const rolledResults = arrayRoller.results;
dv.list([rolledResults]);
```

## Using Array Rollers Versus Singular Rollers

The examples we provided demonstrates rolling multiple dice using individual `Roller` instances and displaying the results in a simple list using the `dv.list()` function, as well as how to use a `getArrayRoller` to achieve multiple results.

In the individual die case, we're using separate `Roller` instances (`diceRoller1` and `diceRoller2`) to roll two different types of dice (`1d20` and `1d50`). The results of each roll are stored in `result1` and `result2`, respectively, and then displayed in separate lists. 

In the array roller case, we're specifying which numbers or values we want to roll with with more specific parameters in a set. 

When to use one approach over the other depends on your specific use case:

1. Individual `Roller` Instances:
    - Use this approach when you need separate control over each roll or if the rolls are of different types or have distinct purposes.
    - It allows you to perform operations or apply logic specific to each roll independently.
    - It is most useful, in our view, when you want to display or process the results separately for each roll. Particularly if you want to *style* the results differently.

2. Array Roller:
    - Use the array roller approach when you have a predefined set of values or options, and you want to select one or more random elements from that set only.
    - Doing this, it simplifies the process of selecting random elements from an array and rolling them together.
    - We suggest it is most beneficial for when you want to generate random results based on an array of options, such as randomising a list, selecting random items, or simulating random outcomes from a given pool of choices with more control over the results.

## Overrides

### roller.roll(true)

By default,  Dice Roller intentionally does not render the first roll (otherwise opening a note with a bunch of dice rolls will have a party and not clean up). 

To override this you can use `roller.roll(true)` to force the roll to render no matter when the note is opened.

### roller.resultEl.detach()

If you don’t want to show the result you can use roller.resultEl.detach(). That will keep the container element (which is what the tooltip is applied to) and the button to re-roll, but the element displaying the result will be removed.