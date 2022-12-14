<template>
  <span class="msr-doc-tag"><slot></slot></span>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.msr-doc-tag {
  padding: 2px 5px;
  background-color: white;
  border-radius: 3px;
  display: inline-block;
  min-height: 30px;
  font-size: 15px;
}
</style>
