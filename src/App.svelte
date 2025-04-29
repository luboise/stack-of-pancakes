<script lang="ts">
  import PancakeStack from "./lib/PancakeStack.svelte";
  import FoodTable from "./lib/FoodTable.svelte";
  import type { PancakeData } from "./lib/Types";

  const pancakes: PancakeData[] = $state([]);
</script>

<main>
  <PancakeStack
    {pancakes}
    style="width:400px; position:absolute; bottom:0; transform:translate(-50%, -5vh);"
  />
  <FoodTable --tile-size="20px" --color1="#cc3511" --color2="white" />

  <div class="button-set">
    <button
      onclick={() => {
        pancakes.push({ description: "test pancake", size: 1 });
      }}
      >Add pancake
    </button>

    <button
      onclick={() => {
        pancakes.pop();
      }}
      >Remove pancake
    </button>
  </div>
</main>

<style>
  main {
    height: 100vh;
    position: relative;
  }

  .button-set {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    position: fixed;
    padding: 0.5em;

    background-color: gray;
    border: 0.5em solid black;

    border-radius: 0.5em;

    top: 3em;
    right: 3em;
  }
</style>
