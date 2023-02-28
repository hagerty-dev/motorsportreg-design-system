<template>
  <span class="msr-doc-tag"
    ><slot>{{ content }}</slot></span
  >
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'In progress',
    },
  },
};
</script>

<style lang="scss" scoped>
.msr-doc-tag {
  padding: 2px var(--msr-space-150);
  background-color: var(--msr-color-green-light);
  border-radius: var(--msr-border-radius-pill);
  display: inline-block;
  min-height: 18px;
  font-size: 13px;
  margin-bottom: 4px;
  color: var(--msr-color-gray-900);
}
</style>
