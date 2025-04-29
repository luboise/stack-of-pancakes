<script lang="ts">
  import Pancake from "./Pancake.svelte";
  import { type PancakeData } from "./Types";
  import Plate from "./Plate.svelte";

  const { ...rest } = $props();

  const DEFAULT_PANCAKES: PancakeData[] = [
    { description: "test pancake :)", size: 1 },
    { description: "test pancake :)", size: 1 },
    { description: "test pancake :)", size: 1 },
    { description: "test pancake :)", size: 1 },
    { description: "test pancake :)", size: 1 },
    { description: "test pancake :)", size: 1 },
  ];

  const pancakes: PancakeData[] = $state(DEFAULT_PANCAKES);
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

  .button-set {
    position: fixed;

    top: 10em;
    right: 10em;
  }
</style>
