<template>
  <div class="msr-doc-nav-cards">
    <div
      :class="['msr-doc-nav-cards__row', 'msr-doc-nav-cards__row_' + column]"
    >
      <slot></slot>
    </div>
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
    &_2 {
      grid-template-columns: 1fr 1fr;
    }
    &_3 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
