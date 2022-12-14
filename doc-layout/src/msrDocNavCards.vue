<template>
  <a href="" class="msr-doc__nav-card">
    <span v-if="title" class="msr-doc__nav-card__title">{{ title }}</span>
    <span class="msr-doc__nav-card__content">
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
  },
};
</script>

<style lang="scss" scoped>
.msr-doc__nav {
  &-card {
    grid-column: span 3;
    border: 1px solid var(--msr-color-gray-300);
    padding: var(--msr-space-200);
    background: var(--msr-color-base-light);
    border-radius: var(--msr-border-radius-300);
    text-decoration: none;
    transition: background-color 300ms ease-in-out;
    height: 100%;

    &__title {
      display: block;
      font-size: 14px;
    }

    &__content {
      display: block;
      font-weight: bold;
      line-height: var(--msr-font-line-height-tight);
      margin-top: var(--msr-space-50);
    }

    &:hover {
      background: var(--msr-color-gray-200);
    }
  }
}
</style>
