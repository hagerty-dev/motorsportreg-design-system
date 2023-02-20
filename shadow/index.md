<script setup>
  import { MSRDocShadow } from '../index'
  import { shadow } from './src/_shadow.js';
  </script>

# Core Shadow

###### Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.

Our elevation system is used to visually differentiate the hierarchy in the interface. We use directional shadows as a visual cue to indicate depth and create a spacial relationship between objects.

<MSRDocShadow :data="shadow"/>
