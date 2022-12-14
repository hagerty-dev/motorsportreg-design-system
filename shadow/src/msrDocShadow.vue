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
        <tr v-for="shadow in data">
          <td>{{ shadow.token }}</td>
          <td>
            {{ shadow.value }}
            <span v-if="shadow.value2"
              >,<br />
              {{ shadow.value2 }}</span
            >
          </td>
          <td>
            <div
              class="msr-doc-swatch__sample"
              :style="{ boxShadow: shadow.value }"
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
    border-radius: var(--msr-border-radius-200);
    width: 100px;
    height: 50px;
    display: block;
    border: 1px solid var(--dockit-swatch-color);
  }
}
</style>
