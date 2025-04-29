<script lang="ts">
  import type { PancakeData } from "./Types";

  // const MAX_PANCAKE_WIDTH = 500;

  const { size, description, ...other }: PancakeData = $props();
</script>

<div class="pancake" style:transform={`scaleX(${size * 100}%)`} {...other}>
  <div class="pancake-top" style:background="#ffd38b">
    <div class="pancake-top" style:background="#00ff00"></div>
  </div>
</div>

<style>
  /* Variables */
  .pancake {
    --pancake-skew: 50% / 50%;
    --pancake-dark: #ffd38b;
    --pancake-light: #f5c16c;
    --pancake-outer: #f7dfb9;
  }

  .pancake {
    z-index: 5;

    scale: 0.8;
    transform-origin: bottom;

    width: 100%;

    aspect-ratio: 7;
    background: var(--pancake-light);
    border-radius: var(--pancake-skew); /* Creates an ellipse */
    box-shadow: 0 7px 0.3px 4px var(--pancake-outer);
    position: absolute;

    bottom: var(--vertical-offset);

    transform: scaleX(50%);
  }

  .pancake-top {
    width: 90%;
    height: 80%;
    margin: auto;
    opacity: 0.5;

    filter: blur(0.2em);

    translate: -0.5% 9.5%;

    mix-blend-mode: lighten;

    border-radius: var(--pancake-skew);
  }
</style>
