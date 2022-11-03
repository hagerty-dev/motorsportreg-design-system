<template>
  <div :class="['button', variation]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    variation: {
      type: String,
      default: null,
    },
  },
};
</script>

<style src="./_button.scss" scoped lang="scss"></style>
