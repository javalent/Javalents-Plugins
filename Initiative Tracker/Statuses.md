---
aliases:
  - Initiative Tracker Statuses
  - Conditions
  - Statuses
description: Learn how to set up and use statuses within Initiative tracker.
permalink: it/beginner/statuses
publish: true
tags:
  - IT/Statuses
---

# Statuses

One of the features included in Initiative Tracker is the ability to track statuses along with initiative. The plugin comes with a default list of statuses, which are based on the statuses listed in the Dungeons & Dragons 5th edition rulebook.


> [!hint] These statuses can also be called `Conditions` or `Tags`. The words are used interchangeably. 

## Default Statuses

These statuses include things like blinded, charmed, frightened, and more. These default statuses can be edited or deleted as needed to customize the plugin to your specific game system. The list of included statuses in detail is below.

| Condition     | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Blinded       | A blinded creature can’t see and automatically fails any ability check that requires sight.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Charmed       | A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects. The charmer has advantage on any ability check to interact socially with the creature                                                                                                                                                                                                                                                                                                                                                                                                          |
| Concentrating | Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. A creature loses concentration when: it casts another spell that requires concentration, is incapacitated, or dies. When a creature takes damage, it must make a constitution saving throw with a DC of 10 or half the damage it took, whichever is higher. On a failure, concentration is lost.                                                                                                                                                                      |
| Deafened      | A deafened creature can’t hear and automatically fails any ability check that requires hearing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Frightened    | A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within Line of Sight. The creature can’t willingly move closer to the source of its fear.                                                                                                                                                                                                                                                                                                                                                                                                         |
| Grappled      | A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the Grappler is incapacitated. The condition also ends if an Effect removes the grappled creature from the reach of the Grappler or Grappling Effect, such as when a creature is hurled away by the Thunderwave spell.                                                                                                                                                                                                                                                                        |
| Incapacitated | An incapacitated creature can’t take Actions or Reactions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Invisible     | An invisible creature is impossible to see without the aid of magic or a Special sense. For the Purpose of Hiding, the creature is heavily obscured. The creature’s Location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.                                                                                                                                                                                                                                                            |
| Paralyzed     | A paralyzed creature is incapacitated and can’t move or speak. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.                                                                                                                                                                                                                                                                                                                |
| Petrified     | A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated, can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity Saving Throws. The creature has Resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized. |
| Poisoned      | A poisoned creature has disadvantage on Attack rolls and Ability Checks.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Prone         | A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on Attack rolls. An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.                                                                                                                                                                                                                                                                                                     |
| Reacted       | A creature, unless otherwise specified, gets one reaction per round of combat. A reaction is an instant response to a trigger of some kind, which can occur on your turn or on someone else’s. A reaction can be spent to make an opportunity attack, do a readied action, or use an ability that requires a reaction. A creature that has already reacted cannot use a reaction until the start of its turn.                                                                                                                                                                                                |
| Restrained    | A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage. The creature has disadvantage on Dexterity Saving Throws.|
| Stunned       |  A stunned creature is incapacitated, can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Unconscious   | An unconscious creature is incapacitated, can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |


> [!tip] Looking for some premade Pathfinder 2E statuses? Check out [this submission on the TTRPG Share](https://github.com/ObsidianTTRPGProject/ObsidianTTRPGShare/blob/main/TTRPGShare-Pathfinder-2E-Vault/Initiative_Tracker/Using-statuses.md "Github"). 

### Adding a Status

To add a condition status in the Initiative Tracker Right-Hand Sidebar Modal Window, follow these steps:

1.  Click on the three vertical dots beside the entity to which you want to add the status. This will cause the window to expand vertically.
2.  Select '**Set Health/Status'**.
3.  In the second input box, which has a clothes-tag like icon beside it, type the name of the status you want to set.
    1.  Please note that the status can already be pre-set in the Initiative Tracker settings to display here.
    2.  As you type, the status types will appear and become clickable. Elsewise, ==it will accept any input you type==.
4.  Once you have typed the status name, click the **(+)** icon to the right of the input box.
5.  At the bottom of the expanded window, click the checkmark (✓).
6.  The expanded window will close, and the entity will now display the status name under its name.

![gif of adding status](https://github.com/javalent/fantasy-statblocks/blob/gh-pages/images/initiative-tracker/adding-status.gif?raw=true)

### Deleting a Condition Status

To remove a status from an entity in the Initiative Tracker Right-Hand Sidebar Modal Window:

1.  Identify the entity that has the status you want to remove.
2.  Locate the status you want to delete under the entity's name.
3.  Click the ⌧ icon on the right side of the status.
4.  The status should be removed from the entity's name.

## Setting Statuses to Expire after One Round

To make a status automatically expire after one round, follow these steps:

![removing status](https://github.com/javalent/fantasy-statblocks/blob/gh-pages/images/initiative-tracker/removed-after-round.png?raw=true)

1. Open the Initiative Tracker Settings and go to the Statuses section.
2.  Choose the status you want to modify and click on the edit icon (pen/pencil) on the right.
3.  In the edit window, enable the "**Remove Each Round**" toggle.
4. Close the window as the changes should save automatically. 

In the settings, the status will now appear with a *stopwatch* next to the name. 

Now, whenever the status is newly applied, it will expire at the end of the round and be automatically removed at the start of the next round.

## Statuses with Numbers

> [!feature] **Feature**: Introduced in Initiative Tracker Version 9.7.0

%% #Version/9-7-0/IT %%

Some condition and status systems, like Pathfinder, have statuses that include numbers, such as Blinded 1, Blinded 2, and so on. Initiative Tracker can track these numbered statuses and increase or decrease them as required, as long as they are set up in the settings in advance.

#Todo/Initiative  - Add Image

To configure a status to accept numbered increments, follow these steps:

1.  Open the Initiative Tracker Settings and navigate to the Statuses section.
2.  Select the status you want to modify and click the edit icon (pen/pencil) on the right.
3.  In the edit window, enable the "**Has Amount**" toggle.
    1.  A new box will appear asking if there is a starting amount for this status.
    2.  If there is, enter an integer (number) at this time.
4.  Close the window, and the changes should save automatically.

In the settings, the status will now appear with a (*#*) next to the name.

Whenever the status is newly applied, it will appear with a (**-**) and (*+*) symbol beside it to decrease or increase it as required.


