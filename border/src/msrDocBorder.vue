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
        <tr v-for="border in data">
          <td>{{ border.token }}</td>
          <td>
            {{ border.value }}
          </td>
          <td>
            <div
              v-if="border.token === 'circle'"
              class="msr-doc-swatch__sample"
              :style="{ borderRadius: border.value, width: '72px' }"
            ></div>
            <div
              v-else
              class="msr-doc-swatch__sample"
              :style="{ borderRadius: border.value, width: '100px' }"
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
    background-color: var(--msr-color-gray-300);
    height: 72px;
    display: block;
  }
}
</style>
