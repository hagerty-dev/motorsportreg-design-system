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
          <!-- border radius token -->
          <td v-if="border.radius">
            <div
              v-if="border.token === 'circle'"
              class="msr-doc-swatch__sample_radius"
              :style="{ borderRadius: border.radius, width: '72px' }"
            ></div>
            <div
              v-else
              class="msr-doc-swatch__sample_radius"
              :style="{ borderRadius: border.radius }"
            ></div>
          </td>
          <!-- border width token -->
          <td v-if="border.width">
            <div
              class="msr-doc-swatch__sample_width"
              :style="{
                borderWidth: border.width,
              }"
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
    display: block;
  }
  &__sample_width {
    width: 100%;
    height: 72px;
    border-color: var(--dockit-swatch-color);
    border-style: solid;
    border-radius: 3px;
  }
  &__sample_radius {
    background-color: var(--dockit-swatch-color);
    height: 72px;
    width: 100%;
  }
}
</style>
