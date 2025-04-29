<script lang="ts">
  import Pancake from "./Pancake.svelte";
  import { type PancakeData } from "./Types";
  import Plate from "./Plate.svelte";

  const { pancakes, ...rest }: { pancakes: PancakeData[] } = $props();
</script>

<div class="pancake-stack" {...rest}>
  <Plate>
    {#each pancakes as pancake, i}
      <Pancake {...pancake} --vertical-offset={`${i * 15 + 20}px`} />
    {/each}
  </Plate>
</div>

<style>
  .pancake-stack {
    width: 400px;
    margin: auto;
    z-index: 2;
  }
</style>
