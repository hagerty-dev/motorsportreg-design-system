<script setup>
import { Alert } from '../../index';

const playgroundCode = '<Alert variation="success">Hi there, all is well</Alert>';
</script>

# Alert

#### Provide contextual messaging. Our alerts consist of four types: error, warning, success, or informational.

<Props :of="Alert"></Props>

## Example

<Playground 
  :code="playgroundCode"
  :components="{ Alert }">
</Playground>
