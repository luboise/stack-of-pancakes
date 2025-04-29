<script lang="ts">
</script>

<div class="plate">
  <slot />
</div>

<style>
  .plate {
    position: relative;
    bottom: 0;
    width: 100%;
    aspect-ratio: 7;
    border-radius: 50% / 50%;

    background-color: grey;
  }
</style>
