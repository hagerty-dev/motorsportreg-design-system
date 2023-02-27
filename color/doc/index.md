<script setup>
  import {MSRDocColor}  from '../../index'
  import { colorBase, colorGray, colorGradient, colorTransparency, colorYellow, colorBlue, colorRed, colorGreen, colorBrand } from '../src/_color.js';

</script>

# Color

###### Our design system leverages a purposeful set of color styles as the perfect starting point for any project. When it comes to color, contrast is critical for ensuring text is legible. We've added WCAG 2.1 contrast ratios to our color system so you can make sure you're designing with accessibility in mind.

## UI color

### Base

These are base black and white color styles.

<MSRDocColor :data="colorBase" />

### Gray

Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — form fields, backgrounds, dividers — are usually gray.

<MSRDocColor :data="colorGray" />

### Brand

The primary color is our Hagerty "brand" color, and is used across all interactive elements such as buttons, links, inputs, etc.

<MSRDocColor :data="colorBrand" />

### Gradient

<MSRDocColor :data="colorGradient"/>

### Transparency

<MSRDocColor :data="colorTransparency" checker />

## Feedback color

### Yellow

<MSRDocColor :data="colorYellow" />

### Blue

<MSRDocColor :data="colorBlue" />

### Red

<MSRDocColor :data="colorRed" />

### Green

<MSRDocColor :data="colorGreen" />
