<template>
  <div class="msr-doc-nav-cards">
    <div class="msr-doc-nav-cards__row"><slot></slot></div>
  </div>
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
  display: block;
  margin-top: var(--msr-space-50);
  height: 100%;

  &-cards__row {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
