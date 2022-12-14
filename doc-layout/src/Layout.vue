<template>
  <DefaultLayout :docContext="docContext">
    <template #logo>
      <div class="logo" aria-label="dockit-vue" v-html="logoSvg"></div>
    </template>
    <slot></slot>
    <div class="msr-doc-footer">
      <div>🏎️ By Hagerty Motorsports, LLC</div>
      <div>MotorsportReg Design System 2022</div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import '@divriots/dockit-vue/style.css';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './doc-theme.scss';
import { DefaultLayout } from '@divriots/dockit-vue';
import logoSvg from './logo.svg?raw';
// @ts-ignore
import * as docContext from '~doc-context';
</script>

<!-- https://github.com/divriots/dockit-vue/blob/20851255f54341e9bf3c1cc6d2dc8e6272b18427/layout/src/DefaultLayout.vue -->

<style lang="scss" scoped>
.logo {
  > :first-child {
    height: 100%;
  }
}
.msr-doc-footer {
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 0 0;
  margin-bottom: -16px;
  display: flex;
  width: 100%;
  font-size: 14px;
}
</style>
