<template>
  <div class="msr-doc-table">
    <table class="msr-doc-swatch">
      <thead>
        <tr>
          <th>Description</th>
          <th>Value</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="color in data">
          <td>{{ color.token }}</td>
          <td>{{ color.value }}</td>
          <td>
            <div
              class="msr-doc-swatch__sample"
              :style="{ width: color.value }"
            ></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
    checker: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.msr-doc-swatch {
  font-size: var(--dockit-swatch-title);
  &__sample {
    min-width: 2px;
    background-color: var(--dockit-swatch-color);
    border-radius: 3px;
    display: inline-block;
    min-height: 30px;
  }
}
</style>
