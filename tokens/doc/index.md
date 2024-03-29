# Tokens

Design tokens are all the values needed to construct and maintain a design system
— spacing, color, typography, object styles, animation, etc. — represented as data.
These can represent anything defined by design: a color as a RGB value, an opacity as
a number, an animation ease as Bezier coordinates.
Design Tokens help us create a
unified design language.

## Border width

```css
--msr-border-width-100: 1px;
--msr-border-width-200: 2px;
```

## Border radius

```css
--msr-border-radius-100: 3px;
--msr-border-radius-200: 8px;
--msr-border-radius-300: 16px;
--msr-border-radius-400: 32px;
--msr-border-radius-circle: 1000px;
--msr-border-radius-pill: 9999px;
--msr-border-radius-none: 0px;
```

## Font size

```css
--msr-font-size-50: 15.008px;
--msr-font-size-100: 16px;
--msr-font-size-200: 18px;
--msr-font-size-250: 20px;
--msr-font-size-300: 24px;
--msr-font-size-350: 28px;
--msr-font-size-400: 32px;
--msr-font-size-500: 36px;
--msr-font-size-600: 40px;
--msr-font-size-700: 48px;
--msr-font-size-800: 56px;
--msr-font-size-900: 64px;
--msr-font-size-base: 16px;
```

## Font weight

```css
--msr-font-family-gt-america: GT America;
--msr-font-weight-regular: Regular;
--msr-font-weight-medium: Medium;
--msr-font-weight-bold: Bold;
--msr-font-weight-extended-medium: Extended Medium;
--msr-font-weight-extended-regular: Extended Regular;
--msr-font-weight-extended-bold: Extended Bold;
```

## Line height

```css
--msr-font-line-height-tight: 110%;
--msr-font-line-height-none: 100%;
--msr-font-line-height-extra: 120%;
--msr-font-line-height-standard: 125%;
--msr-font-line-height-loose: 150%;
```

## Text transform

```css
--msr-font-text-case-capitalize: capitalize;
```

## Text style

```css
--msr-font-text-decoration-underline: underline;
--msr-font-text-decoration-none: none;
```

## Color

```css
--msr-color-gray-200: #f4f6f8;
--msr-color-gray-300: #dee0e2;
--msr-color-gray-400: #c8cacb;
--msr-color-gray-500: #b1b5b9;
--msr-color-gray-600: #8e949a;
--msr-color-gray-700: #6f757c;
--msr-color-gray-800: #545c63;
--msr-color-gray-900: #484c51;
--msr-color-base-light: #fff;
--msr-color-base-dark: #000;
--msr-color-yellow-medium: #e6c005;
--msr-color-yellow-light: #fdfaba;
--msr-color-blue-medium: #008cb8;
--msr-color-blue-light: #d6f5ff;
--msr-color-red-medium: #bd2d00;
--msr-color-red-light: #ffe2e0;
--msr-color-green-medium: #00ad82;
--msr-color-green-light: #d6fff5;
--msr-color-brand-primary-default: #007bb3;
--msr-color-brand-primary-bright: #0089c7;
--msr-color-brand-primary-light: #eaf9ff;
--msr-color-brand-secondary-default: #000;
--msr-color-brand-secondary-medium: #484c51;
--msr-color-brand-secondary-light: #f4f6f8;
```

## Gradient

```css
--msr-color-gradient-dark: linear-gradient(90deg, #000 0%, #484c51 100%);
--msr-color-gradient-blue: linear-gradient(90deg, #007bb3 0%, #0089c7 100%);
--msr-color-gradient-gray: linear-gradient(90deg, #dee0e2 0%, #c8cacb 100%);
```

## Transparency

```css
--msr-color-transparency-3: rgba(0, 0, 0, 0.03);
--msr-color-transparency-5: rgba(0, 0, 0, 0.05);
--msr-color-transparency-8: rgba(0, 0, 0, 0.08);
--msr-color-transparency-10: rgba(0, 0, 0, 0.1);
--msr-color-transparency-16: rgba(0, 0, 0, 0.16);
--msr-color-transparency-18: rgba(0, 0, 0, 0.18);
--msr-color-transparency-70: rgba(0, 0, 0, 0.7);
--msr-color-transparency-90: rgba(0, 0, 0, 0.9);
--msr-color-transparency-00: rgba(0, 0, 0, 0);
```

## Size

```css
--msr-size-16: 16px;
--msr-size-24: 24px;
--msr-size-32: 32px;
--msr-size-48: 48px;
--msr-size-56: 56px;
```

## Space

```css
--msr-space-25: 8px / 4;
--msr-space-50: 8px / 2;
--msr-space-100: 8px;
--msr-space-150: 12px;
--msr-space-200: 16px;
--msr-space-300: 24px;
--msr-space-400: 32px;
--msr-space-500: 40px;
--msr-space-600: 48px;
--msr-space-700: 56px;
--msr-space-800: 64px;
--msr-space-900: 72px;
--msr-space-1000: 80px;
--msr-space-1100: 88px;
--msr-space-1200: 96px;
--msr-space-none: 0px;
--msr-space-base: 8px;
```

## Shadow

```css
--msr-shadow-100: 0px 1px 2px 0px rgba(0, 0, 0, 0.03);
--msr-shadow-200: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
--msr-shadow-300: 0px 4px 8px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -2px rgba(0, 0, 0, 0.03);
--msr-shadow-400: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);
--msr-shadow-500: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);
--msr-shadow-600: 0px 24px 48px -12px rgba(0, 0, 0, 0.18);
--msr-shadow-700: 0px 32px 64px -12px rgba(0, 0, 0, 0.16);
```

## Opacity

```css
--msr-opacity-zero: 0;
```
