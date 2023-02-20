<template>
  <div :class="['msr-doc-nav-cards', 'msr-doc-nav-cards_`#{column}`']">
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
    column: {
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
    &_by3 {
      grid-template-columns: auto;
    }
  }
}
</style>
