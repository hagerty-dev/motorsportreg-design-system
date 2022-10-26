<template>
  <button class="primary">Hi</button>
</template>

<style lang="scss" scoped>
@import '../../tokens/variables.scss';

button {
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid $figma-global-button-primary-background;
  text-transform: uppercase;

  &.primary {
    background-color: $figma-global-button-primary-background;
  }
}
</style>
