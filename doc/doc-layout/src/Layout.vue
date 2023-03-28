<template>
  <DefaultLayout :docContext="docContext">
    <slot></slot>
  </DefaultLayout>
</template>

<script setup lang="ts">
import '@divriots/dockit-vue/style.css';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import DefaultLayout from './msrLayout.vue';
import './doc-theme.scss';
// import logoSvg from './assets/logo.svg?raw';
// @ts-ignore
import * as docContext from '~doc-context';
</script>
