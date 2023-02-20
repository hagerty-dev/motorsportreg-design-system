<template>
  <div class="msr-doc-nav-cards">
    <div :class="['msr-doc-nav-cards__row', columns]"><slot></slot></div>
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

  // return [
  //       this.size === 'large'
  //         ? 'form-element_large'
  //         : this.size === 'small'
  //         ? 'form-element_small'
  //         : this.size === 'xsmall'
  //         ? 'form-element_xsmall'
  //         : null,
  //     ]

  computed: {
    columns() {
      return [
        this.column === '2'
          ? 'msr-doc-nav-cards__row_2'
          : this.column === '3'
          ? 'msr-doc-nav-cards__row_3'
          : null,
      ];
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
      grid-template-columns: auto auto;
    }
    &_3 {
      grid-template-columns: auto auto auto;
    }
  }
}
</style>
