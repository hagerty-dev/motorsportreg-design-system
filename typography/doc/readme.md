<script setup>
  import { MSRDocTypography } from '../../index';
  const typography = [
    {
      label: "Regular",
      token: 'font.weight.regular'
    },
    {
      label: "Medium",
      token: 'font.weight.medium'
    },
    {
      label: "Bold",
      token: 'font.weight.bold'
    },
    {
      label: "Extended Medium",
      token: 'font.weight.extended.medium'
    },
    {
      label: "Extended Regular",
      token: 'font.weight.extended.regular'
    },
    {
      label: "Extended Bold",
      token: 'font.weight.extended.bold'
    },
  ]
</script>

# Core Typography

Our design system leverages a purposeful set of typographic styles. We’ve stress-tested this typographic scale across dozens of projects to make sure it’s robust enough to use across (almost) any project, while remaining as accessible as possible for everyone.

## Font Family

<MSRDocTypography>
    <template #label>GT America</template>
    <template #token>font.family.GTAmerica</template>
  </MSRDocTypography>

## Font Weights

<div v-for="x in typography">
  <MSRDocTypography>
    <template #label>{{ x.label }}</template>
    <template #token>{{ x.token }}</template>
  </MSRDocTypography>
</div>

Font size scale
