---
aliases: [SASS Variables, Dollar Variables]
cover: 
description: 
image: 
permalink: glossary/sass-variables
publish: true
tags: [Glossary/CSS/variables]
---

Dollar Variables, also known as SASS Variables, are variables in [SASS](https://sass-lang.com/documentation/) or SCSS that start with a dollar sign (`$`), followed by a name, such as `$primary-color`. These variables are used to store and reuse values throughout a stylesheet, making it faster and easier to maintain and update the design of a website or application.

## Benefits

- Sass variables can be used to define and reuse values throughout your codebase. This makes it easy to take useful values from one project and apply them to another without needing to rewrite the code to use them. 
- In using Sass variables to define consistent values for colors, font sizes, and other style properties, you can ensure that your design remains consistent across your entire site or application. 
	- While this is possible with using [[Hyphen Variables|Hyphen Variables]] as well, it is more labor-intensive to do so.
- By defining variables in a separate file, you can easily switch between different themes or design systems by simply updating the variable values.
- By giving meaningful names to your variables, you can make your code more readable and understandable, which can be especially helpful for others who may want to augment your style or help you develop it.

## Drawbacks

- Sass variables by default will not link to other Sass variables. In some rare cases, they can link to other variables directly. In most circumstances, they must rely on the use of maps to nest information, and then be unpacked in the pre-processor. 
>[!tip] This can create file bloat, so care must be taken to balance variety with efficiency.
- Using variables can sometimes have a slight impact on performance, as the Sass preprocessor needs to compile the variable values before they can be used. 
>[!info] As all the compilation happens before the final css, however, this is usually less of a major concern for most users of Obsidian. I included it for those who may have older, mobile, or slower devices.
- If you're using Sass variables with a legacy or outdated version of CSS, you may encounter compatibility issues with older browsers.
- Sass variables require some familiarity with the Sass syntax, which can be a learning curve for developers who are new to Sass or CSS preprocessors in general.
