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
import BeforeAfter from "./Component/BeforeAfter"

<BeforeAfter beforeimg="../assets/before.jpg" afterimg="../assets/after.jpg" />
```

## Props

| Prop (\* required)       | type                    |   default   | description                                                                                                           |
| ------------------------ | ----------------------- | :---------: | --------------------------------------------------------------------------------------------------------------------- |
| aspectRatio              | `'taller'` or `'wider'` | `'taller'`  | Which to choose if the aspect ratios of the images are different                                                      |
| handle                   | element                 |    null     | Custom handle element. Just pass `<React.Fragment />` if you want to remove handle.                                   |
| handleSize               | number (px)             |     40      | diameter of slider handle (by pixel)                                                                                  |
| hover                    | boolean                 |    false    | Whether to slide at hover                                                                                             |
| leftImage \*             | string                  |    null     | left image's url                                                                                                      |
| leftImageAlt             | string                  |    `''`     | alt props for left image                                                                                              |
| leftImageCss             | object                  |     {}      | Additional css for left image                                                                                         |
| leftImageLabel           | string                  |    null     | Label for the image (e.g. `before`)                                                                                   |
| onSliderPositionChange   | function                |    null     | Callback function called each time the slider changes. The position (0 to 1) of the slider is passed as arg           |
| rightImage \*            | string                  |    null     | right image's url                                                                                                     |
| rightImageAlt            | string                  |    `''`     | alt props for right image                                                                                             |



