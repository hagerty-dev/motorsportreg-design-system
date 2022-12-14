<template>
  <a href="" class="msr-doc-nav-card">
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
  },
};
</script>

<style lang="scss" scoped>
.msr-doc-nav {
  &-card {
    grid-column: span 3;
    border: 1px solid var(--msr-color-gray-300);
    padding: var(--msr-space-200) var(--msr-space-200)
      calc(var(--msr-space-200) + 8px);
    background: var(--msr-color-base-light);
    border-radius: var(--msr-border-radius-300);
    text-decoration: none;
    transition: border-color 300ms ease-in-out;
    height: 100%;

    &__title {
      display: block;
      font-size: 15px;
      font-weight: 400;
      color: var(--msr-color-gray-600);
    }

    &__content {
      display: block;
      line-height: var(--msr-font-line-height-tight);
      margin-top: var(--msr-space-50);
    }

    &:hover {
      border-color: var(--msr-color-gray-600);
    }
  }
}
</style>
