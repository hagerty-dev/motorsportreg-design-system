<script setup>
  import { MSRDocTypography } from '../src/msrDocTypography.vue';
  import { typographyWeight, typographyLineHeight, typographySize, typographyType } from '../src/_type.js';
  
</script>

# Core Typography

The core font used across our products is [GT America](https://www.gt-america.com) by GrilliType. Which is modern serif which stands out and is bold and accessible.

Our design system leverages a purposeful set of typographic styles. We’ve stress-tested this typographic scale across dozens of projects to make sure it’s robust enough to use across (almost) any project, while remaining as accessible as possible for everyone.

## Font family

<MSRDocTypography>
  <template #label>GT America</template>
</MSRDocTypography>

## Font Sub-family

<div class="swatch" v-for="font in typographyType">
  <div class="swatch__row">
    <div class="swatch__heading" :style="{fontStretch: font.stretch, fontWeight: font.weight}">GT America {{font.type}}</div>
    <div :style="{fontStretch: font.stretch, fontWeight: font.weight}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
  </div>
</div>

## Font weight

<div class="msr-doc-table">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="value in typographyWeight">
      <td :style="{fontWeight: value.token}">Font weight {{value.token}}
      </td>
      <td>{{value.weight}}</td>
    </tr>
  </tbody>
  
</table>
</div>

## Line Height

<div class="swatch" v-for="value in typographyLineHeight">
  <div class="swatch__row">
    <div class="swatch__heading">{{value.token}}</div>
    <div :style="{lineHeight: value.lineHeight, fontSize: '18px'}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
  </div>
</div>

## Font size

<div class="msr-doc-table">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="value in typographySize">
    <td :style="{fontSize: value.fontSize}">Font size {{value.token}}
    </td>
    <td>{{value.fontSize}}</td>
  </tr>
  </tbody>
  
</table>
</div>

## Text Decoration

<p>Default decoration: Lorem ipsum sic dolor amet</p>
<p>Capitalized case: <span style="text-decoration: underline;">Lorem ipsum sic dolor amet</span></p>

## Text Case

<p>Default case: Lorem ipsum sic dolor amet</p>
<p>Capitalized case: <span style="text-transform: capitalize;">Lorem ipsum sic dolor amet</span></p>
