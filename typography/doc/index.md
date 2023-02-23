<script setup>
  import { MSRDocTypography } from '../../index'
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

<div class="msr-doc-table">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Value</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="t in typographyType">
      <td>{{t.token}}
      </td>
      <td>{{t.weight}}</td>
      <td :style="{fontStretch: t.stretch, fontWeight: t.weight}">GT America {{t.style}}</td>
    </tr>
  </tbody>
</table>
</div>

## Font weight

<div class="msr-doc-table">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Value</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="w in typographyWeight">
      <td>{{w.token}}</td>
      <td>{{w.value}}</td>
      <td :style="{fontWeight: w.value}">Font weight {{w.preview}}</td>
    </tr>
  </tbody>
  
</table>
</div>

## Line Height

<div class="msr-doc-table">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Value</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lh in typographyLineHeight">
      <td>{{lh.token}}</td>
      <td>{{lh.value}}</td>
      <td :style="{lineHeight: lh.value}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
    </tr>
  </tbody>
  
</table>
</div>

## Font size

<div class="msr-doc-table">
<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Value</th>
      <th>Preview</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="s in typographySize">
    <td>{{s.token}}
    </td>
    <td>{{s.value}}</td>
    <td :style="{fontSize: s.value}">Abc
    </td>
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
