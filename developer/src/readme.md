# Developer workflow

## Introduction

This UI library is made up of Vue `2.x` and Scss components. The Vue components are modular and their styling is scoped and imported internally. There are also SCSS components which provide mixins, tokens and reset styling to extend or use as is.

## NPM

### Installation

To get access to our MSRDUI make sure to install our NPM package:

```js
npm i @backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp
```

This will provide you with our base tokens that contain color, spacing, typography etc in your `node_modules` directory

### Usage

Once installed, configure it's import in either your `vue.config.js` file, or if you ❤️ Nuxt like we do, add the dependencies to your `nuxt.config.js` as outlined below.

When adding SASS/SCSS to your project make sure to have the correct SCSS loaders installed. We use `sass-loader` and `node-sass`

```js
npm install --save-dev sass-loader
npm install --save-dev node-sass
```

To access the tokens globally add them like this,

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

#### Import the core token css tokens in Nuxt:

```js
// nuxt.config.js
export default {
  css: ['@backlight-dev/debt-squeal-u99rm.vue3-l4zu8jbp/core.css'],
},
```

In this way, our tokens are accessible from and in any components or `.vue` file. Classes declared in global files are accessible in Vue template tags and can be overwritten within your Vue `<style></style>` tag

## Dependencies

Not included in the UI distribution is [GT America](https://www.gt-america.com) from GilliType. For licensing and speciments [visit them here](https://www.grillitype.com/typeface/gt-america)

If you are a offical Hagerty partner or developer who has access to our platform, you can add this dependencies to your Vue project:

#### Import GT America in Vue:

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

#### Import GT America in Nuxt:

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

## Tokens

### How to use the tokens _in the Code_

Make sure you are running the latest version of the Design system before using the tokens to ensure you have access to the latest changes. To do this, update the version in the `package.json` file and run `npm i`.

#### CSS Tokens

All of the tokens are available in our app as CSS variables. To use them, simply use `var(--token-name)` when writing your CSS:

```css
p {
  color: var(--msr-color-gray-900);
}
```

## Components

Coming soon...
