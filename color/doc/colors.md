<script setup>
  import { colorBase, colorGray, colorGradient, colorTransparency, colorYellow, colorBlue, colorRed, colorGreen, colorBrand } from '../src/_color.js';
  // import colorPalette from '../../sd-input/src/figma/core.json';
  // import { MSRDocColor } from '../../index';
  // const basePalette = x

// <div v-for="x in colorPalette.color.gray">
//{{
  //x.value
//}}</div>
</script>

# Core Color

Our design system leverages a purposeful set of color styles as the perfect starting point for any project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind.

## Base

These are base black and white color styles.

<div class="swatch" v-for="base in colorBase">
  <div class="swatch__row">
    <div class="swatch__heading">{{base.token}}</div>
    <div :style="{backgroundColor: base.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Gray

Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — form fields, backgrounds, dividers — are usually gray.

<div class="swatch" v-for="gray in colorGray">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Brand

The primary color is our Hagerty "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc.

<div class="swatch" v-for="gray in colorBrand">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Gradient

<div class="swatch" v-for="gray in colorGradient">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{background: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Yellow

<div class="swatch" v-for="gray in colorGray">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Blue

<div class="swatch" v-for="gray in colorGray">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Red

<div class="swatch" v-for="gray in colorGray">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Green

<div class="swatch" v-for="gray in colorGray">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>

## Transparency

<div class="swatch" v-for="gray in colorGray">
  <div class="swatch__row">
    <div class="swatch__heading">{{gray.token}}</div>
    <div :style="{backgroundColor: gray.value, height: '100px', width: '100px', borderRadius: '5px', border: '1px solid lightGray'}"></div>
  </div>
</div>
