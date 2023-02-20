<template>
  <a :href="href" class="msr-doc-nav-card">
    <span v-if="title" class="msr-doc-nav-card__title">{{ title }}</span>
    <span class="msr-doc-nav-card__content">
      <slot name="content">{{ content }}</slot></span
    >
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    content: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.msr-doc-nav {
  &-card {
    background-color: var(--msr-color-gray-200);
    padding: var(--msr-space-400);
    border-radius: var(--msr-border-radius-400);
    text-decoration: none;
    transition: background-color 300ms ease-in-out;
    height: 100%;
    color: var(--msr-color-base-dark);
    font-weight: var(--msr-font-weight-regular);

    &__title {
      display: block;
      font-size: var(--msr-font-size-300);
    }

    &__content {
      display: block;
      line-height: var(--msr-font-line-height-tight);
      margin-top: var(--msr-space-50);
      font-size: var(--msr-font-size-200);
    }

    &:hover {
      background-color: var(--dockit-navigation-location-hover);
      color: var(--msr-color-base-dark);
    }
  }
}
</style>
