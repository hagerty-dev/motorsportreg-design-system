<template>
  <div :class="['alert', 'alert_' + variations]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    variation: {
      /** @description of the prop ? **/
      type: String,
      default: null,
    },
  },
  computed: {
    variations() {
      return this.variation === 'success' ? '_success' : null;
    },
  },
};
</script>

<style src="./_alert.scss" scoped lang="scss"></style>
