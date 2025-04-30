<script lang="ts">
  import Pancake from "./Pancake.svelte";
  import { type PancakeData } from "./Types";
  import Plate from "./Plate.svelte";

  interface Props {
    pancakes: PancakeData[];
  }

  const { pancakes, ...rest }: Props = $props();
</script>

<div class="pancake-stack" {...rest}>
  <Plate>
    {#each pancakes as pancake, i}
      <Pancake
        {...pancake}
        --vertical-offset={`${i * 15 + 20}px`}
        onhover={() => console.log("test")}
      />
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
