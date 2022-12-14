<template>
  <div class="msr-doc-table">
    <table :class="['msr-doc-swatch', { 'msr-doc-swatch_checker': checker }]">
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
          <td
            v-if="!color.preview"
            :style="{ backgroundColor: color.value }"
          ></td>
          <td v-else :style="{ backgroundImage: color.value }"></td>
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

  &__row {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: var(--msr-space-100);
    margin-top: var(--msr-space-100);
    border-top: 1px solid var(--msr-color-gray-300);
  }

  &__heading {
    flex-grow: 1;
    padding-right: var(--msr-size-24);
  }

  &__sample {
    height: calc(var(--msr-size-16) / 2);
    width: calc(var(--msr-size-16) / 2);
    border-radius: var(--msr-border-radius-200);
    border: 1px solid var(--msr-color-gray-300);
    position: relative;
    overflow: hidden;
    .msr-doc-swatch_checker &::after {
      background: repeating-conic-gradient(#eee 0% 25%, transparent 0% 50%) 50% /
        26px 26px;
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      z-index: 1;
      opacity: 0.1;
      border-radius: var(--msr-border-radius-200);
    }
  }
}
</style>
