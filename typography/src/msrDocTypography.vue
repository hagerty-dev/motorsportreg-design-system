<template>
  <div class="msr-doc_typography">
    <div class="msr-doc_typography__content">
      <div class="msr-doc_typography__sample msr-doc_typography__col">
        {{ sample }}
      </div>
      <div class="msr-doc_typography__sample-text msr-doc_typography__col">
        <span
          class="msr-doc_typography__sample-specimen"
          v-html="swatch"
        ></span>
      </div>
      <div class="msr-doc_typography__weight msr-doc_typography__col">
        <slot name="label">{{ weight }}</slot>
      </div>
      <div class="msr-doc_typography__token msr-doc_typography__col">
        <slot name="token">{{ token }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    sample: {
      type: String,
      default: 'Ab',
    },
    token: {
      type: String,
      default: '',
    },
    swatch: {
      type: String,
      default: `ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          1234567890`,
    },
  },
};
</script>

<style lang="scss" scoped>
.msr-doc_typography {
  border: solid 1px var(--msr-color-gray-300);
  border-radius: var(--msr-border-radius-200);
  margin-bottom: 24px;
  &__content {
    display: flex;
    flex-wrap: nowrap;
  }

  &__col {
    vertical-align: middle;
    padding: 16px 24px;
  }

  &__sample {
    min-width: 100px;
    padding: 16px 24px;
    width: auto;
    border-right: 1px solid var(--msr-color-gray-300);
    font-size: 60px;
  }

  &__sample-specimen {
    max-width: 377px;
  }

  &__weight {
  }
}
</style>
