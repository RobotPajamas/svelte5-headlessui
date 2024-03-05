<script lang="ts">
//   import type { Snippet } from "svelte";

  type Props = {
    checked: boolean;
    onChange: (event: Event) => void;
    // children?: Snippet<[text: string] >;
  };

  let { checked, onChange } = $props<Props>();
</script>

<h1>Hello world!</h1>
