<script setup>
  const data = [
  {
    token: 'opacity.0',
    value: '0',
    preview: '0%',
  },
  {
    token: 'opacity.50',
    value: '0.5',
    preview: '50%',
  },
  {
    token: 'opacity.100',
    value: '1',
    preview: '100%',
  },
];
</script>

# Opacity

##

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
        <tr v-for="c in data">
          <td>{{ c.token }}</td>
          <td>{{ c.value }}</td>
          <td style="position: relative">
          <span :style="[{opacity: c.value}, `
            position: absolute;
            background: black;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;`]">
          </span>
          <span style="position: relative">
            <span v-if="c.preview === '100%'" style="color: white;">{{c.preview}}</span>
            <span v-else style="opacity: 1">{{c.preview}}</span>
          </span>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
