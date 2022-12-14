<template>
  <header :class="`header ${colorTheme}`">
    <div class="logo">
      <slot name="logo"></slot>
    </div>
    <div class="content-top">
      <button
        class="navigation-toggle"
        @click="toggleMenu"
        aria-label=""
        v-html="menuOpen ? xSvg : menuSvg"
      ></button>
      <button
        class="color-switch"
        @click="toggleColorTheme"
        aria-label="Color switch"
        v-html="colorTheme === 'dark' ? sunSvg : moonSvg"
      ></button>
    </div>
  </header>
  <aside :class="`navigation ${colorTheme}`">
    <div class="prose dark:prose-invert">
      <ul
        v-for="group in pagesGraph.filter(
          (group) => !group.children || group.children.length > 0
        )"
      >
        <li>
          <span v-if="group.children" class="package">{{ group.key }}</span>
          <ul v-for="child in group.children || [group]">
            <li>
              <a
                :href="getPageUrlWithoutOrigin(child.page)"
                :aria-current="
                  currentPage === getPageUrlWithoutOrigin(child.page)
                    ? 'location'
                    : undefined
                "
                >{{ child.key }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <main :class="`content-container ${colorTheme}`">
    Xxxx
    <article class="prose dark:prose-invert">
      <slot></slot>
    </article>
  </main>
</template>

<script setup lang="ts">
import 'https://cdn.jsdelivr.net/npm/dark-tailwindcss-typography@0.5.0-dark.0/typography.min.css';
import 'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-vsc-dark-plus.min.css';
import '@divriots/dockit-core/style.css';
import type { Page, Context } from '@divriots/studio-doc-compiler';
import { setupSpeedyLinks } from '@divriots/dockit-core/speedy-links';
import moonSvg from './moon.svg?raw';
import sunSvg from './sun.svg?raw';
import menuSvg from './menu.svg?raw';
import xSvg from './x.svg?raw';
import { computed, provide, ref } from 'vue';
import { ColorThemeKey } from './LayoutConstants';

const props = defineProps<{
  docContext: Context & {
    mapPageUrlToRenderModuleUrl: any;
  };
}>();

const { pagesGraph, base, mapPageUrlToRenderModuleUrl } = props.docContext;

setupSpeedyLinks({
  mapLinkUrlToModuleUrl: (url) => {
    return mapPageUrlToRenderModuleUrl(url);
  },
});
const getPageUrlWithoutOrigin = (page: Page) => base + page.url;
const currentPage = location.pathname;
const colorTheme = ref(
  localStorage.getItem('colorScheme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
);
const toggleColorTheme = () => {
  colorTheme.value = colorTheme.value === 'dark' ? 'light' : 'dark';
  localStorage.setItem('colorScheme', colorTheme.value);
};
const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);
const displayNav = computed(() => (menuOpen.value ? 'block' : 'none'));

provide(ColorThemeKey, colorTheme);
</script>

<style lang="scss">
@import './dockit-core.scss';
@import './markdown.scss';

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  overflow-y: scroll;
}

:root {
  --dockit-vue-spacer: 1rem;
  --dockit-vue-header-height: calc(
    var(--dockit-vue-header-content-height) + 2 * var(--dockit-vue-spacer)
  );
  --dockit-vue-nav-width: calc(12rem + 2 * var(--dockit-vue-spacer));
  --dockit-vue-header-content-height: 3rem;

  --navigation-group-heading-color: #808080;
}

html {
  scroll-padding-top: calc(
    var(--dockit-vue-header-height) + var(--dockit-vue-spacer)
  );
}
</style>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: inherit;
}

ul {
  margin: 0px;
  padding: 0px;
}

.header,
.content-container {
  background-color: var(--dockit-layout-bg);
}

.header {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  height: var(--dockit-vue-header-height);
  z-index: 10000;
  border-bottom: 1px solid #e5e5e5;

  .logo {
    padding: var(--dockit-vue-spacer);
    display: flex;
  }

  .content-top {
    margin-left: calc(2 * var(--dockit-vue-spacer));
    margin-right: var(--dockit-vue-spacer);
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .color-switch,
    .navigation-toggle {
      border: none;
      color: white;
      cursor: pointer;
      height: var(--dockit-vue-header-content-height);
      width: var(--dockit-vue-header-content-height);
      background-color: gray;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: calc(var(--dockit-vue-spacer) / 4);

      svg {
        height: 100%;
      }
    }

    @media screen and (min-width: 1024px) {
      .navigation-toggle {
        display: none;
      }
    }
  }
}

.navigation {
  display: v-bind(displayNav);

  @media screen and (min-width: 1024px) {
    display: block;
  }

  background-color: var(--dockit-layout-bg);
  padding: 1rem;
  position: fixed;
  z-index: 9999;
  top: var(--dockit-vue-header-height);
  height: calc(100vh - var(--dockit-vue-header-height));
  width: var(--dockit-vue-nav-width);
  box-sizing: border-box;
  overflow-y: auto;

  a[aria-current='location'] {
    font-weight: 600;
    background-color: rgba(128, 128, 128, 0.15);
    padding-left: calc(var(--dockit-vue-spacer) / 2);
    margin-left: calc(-1 * var(--dockit-vue-spacer) / 2);
    border-radius: 0.25rem;
  }

  .package {
    color: var(--navigation-group-heading-color);
    text-transform: uppercase;
    opacity: 0.8;
  }

  ul {
    list-style: none;

    a {
      display: flex;
      padding: 0.25rem 0rem;
    }

    li {
      margin: calc(var(--dockit-vue-spacer) / 2) 0;
    }
  }

  > ul {
    margin-top: calc(2 * var(--dockit-vue-spacer));
  }
}

.content-container {
  position: relative;
  min-height: 100vh;
  padding: calc(2 * var(--dockit-vue-spacer));
  padding-top: calc(
    var(--dockit-vue-header-height) + 2 * var(--dockit-vue-spacer)
  );
  padding-left: calc(3 * var(--dockit-vue-spacer));

  @media screen and (min-width: 1024px) {
    padding-left: calc(
      var(--dockit-vue-nav-width) + 3 * var(--dockit-vue-spacer)
    );
  }
}
</style>
