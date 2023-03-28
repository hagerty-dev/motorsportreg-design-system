# Developer workflow

###### This UI library is made up of reusable Vue `2.x` and SCSS components. The Vue components are modular and their styling is scoped and imported internally. There are also SCSS components which provide mixins, tokens and reset styling to extend or use as is.

## Get started

### Installation

<!-- TODO While this is only tokens today, components are to follow, which will change installation and setup -->

To get access to our MSR Design System make sure to install our official NPM package.

Install with NPM:

```js
npm i @backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp --save
```

Install with Yarn:

```js
yarn add @backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp
```

<!-- @TODO:
--- node version required to package.json
--- import global style tokens path reference
-->

This will provide you with our base tokens that contain color, spacing, typography etc in your `node_modules` directory as `@backlight-dev`

### Usage

Once installed, configure the token import in either your `vue.config.js` file, or if you ❤️ Nuxt like we do, add the dependencies to your `nuxt.config.js` as outlined below.

_Note: Before adding SASS/SCSS to your project make sure to have the correct SCSS loaders installed. We use `sass-loader` and `node-sass`_

```js
npm install --save-dev sass-loader
npm install --save-dev node-sass
```

Next, to access the tokens globally, add them like this,

#### Import the core token css tokens in Nuxt:

```js
// nuxt.config.js
export default {
  css: ['@backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp/core.css'],
},
```

#### Import the core token css tokens in Vue:

```js
// vue.config.js
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp/core.css";`,
      },
    },
  },;
```

In this way, our tokens are globally accessible in any component as css. Classes declared in global files are accessible in Vue template tags and can be overwritten within your Vue `<style></style>` tag

```css
// _text.scss
a {
  color: var(--msr-color-primary-link);
}
```

## Dependencies

<!-- TODO: ### Global SCSS

In progress. -->

### Fonts

Not included in the MSR design system is <a href="https://www.gt-america.com" target="_blank">GT America</a> from GrilliType. For licensing and specimens [visit them here](https://www.grillitype.com/typeface/gt-america)

If you are a offical Hagerty partner, or developer who has access to our platform, you can add this dependency to your project:

#### Import the font dependency in ❤️ Nuxt:

```js
// nuxt.config.js
head: {
  link: [
    {
      rel: 'stylesheet',
      href: 'https://apps.static.sandbox.hagerty.com/fonts/GT%20America/gt-america.css',
    },
  ];
}
```

#### Import the font dependency in Vue:

```js
// App.vue
<style>
  @import
  'https://apps.static.sandbox.hagerty.com/fonts/GT%20America/gt-america.css';
</style>
```

or alternatively in:

```js
// main.js
@import 'https://apps.static.sandbox.hagerty.com/fonts/GT%20America/gt-america.css';
```

## Tokens

### How to use the tokens in your project

Make sure you are running the latest version of the MSR Design system before using the tokens to ensure you have access to the latest changes.

For example upgrade the tokens with NPM

```js
npm update @backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp
```

Or in Yarn like so:

```js
yarn upgrade @backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp
```

#### CSS Tokens

All of the tokens are now available in your app as CSS tokens. To use them, simply use `var(--token-name)` when writing your CSS:

```css
p {
  color: var(--msr-color-gray-900);
}
```

<!-- TODO: ## Components -->
