<script lang="ts">
  import PancakeStack from "./lib/PancakeStack.svelte";
  import FoodTable from "./lib/FoodTable.svelte";
</script>

<main>
  <PancakeStack
    style="width:400px; position:absolute; bottom:0; transform:translate(-50%, -5vh);"
  />
  <FoodTable --tile-size="20px" --color1="#cc3511" --color2="white" />

  <div class="button-set">
    <button>Add pancake </button>
  </div>
</main>

<style>
  main {
    height: 100vh;
    position: relative;
  }

  .button-set {
    position: fixed;
    padding: 0.5em;

    background-color: gray;
    border: 0.5em solid black;

    border-radius: 0.5em;

    top: 3em;
    right: 3em;
  }
</style>
