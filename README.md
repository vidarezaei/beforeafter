# Image Comparison Slider

The "Image Comparison Sliderd" component allows users to compare two images or elements side by side.

## source code

https://github.com/vidarezaei/beforeafter

## Basic usage

with npm:
npm install styled-components

with yarn:
yarn add styled-components

## How to use

```jsx
import BeforeAfter from "./Component/BeforeAfter";

<BeforeAfter beforeimg="../assets/before.jpg" afterimg="../assets/after.jpg" />;
```

## Props

| Prop (\* required) | type            | default | description                                                        |
| ------------------ | --------------- | :-----: | -------------------------------------------------------------------|
| beforeimg          | string(img url) |  null   | url of before img                                                  |
| afterimg           | string(img url) |  null   | url of after img                                                   |
| isVertical         | boolean         |  true   | when isVertical is true border of slider is verticaly              |
| isHoverEnabled     | boolean         |  false  | when isHoverEnabled is false hover on slider for change is deactive|
| borderValue        | number          |   50    | \*100 diameter of slider handle                                    |
| DraggingState      | boolean         |  false  | Whether to hold the mouse down to change the line position         |

