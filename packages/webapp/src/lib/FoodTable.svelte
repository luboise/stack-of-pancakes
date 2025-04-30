<script lang="ts">
</script>

<div class="container">
  <div class="tablecloth"></div>
</div>

<style>
  .container {
    position: fixed;

    width: 100%;

    overflow: hidden;

    left: 0;
    bottom: 0;

    height: 40vh;
    perspective-origin: top center;
    perspective: 34vh;
  }

  .tablecloth {
    overflow: hidden;
    /* left: -200%; */
    /* width: 100%; */
    height: 100%;

    pointer-events: none;

    background-position:
      0px 0px,
      var(--tile-size) var(--tile-size);
    background-size: calc(var(--tile-size) * 2) calc(var(--tile-size) * 2);
    background-image:
      linear-gradient(
        45deg,
        var(--color1) 25%,
        transparent 25%,
        transparent 75%,
        var(--color1) 75%,
        var(--color1) 100%
      ),
      linear-gradient(
        45deg,
        var(--color1) 25%,
        var(--color2) 25%,
        var(--color2) 75%,
        var(--color1) 75%,
        var(--color1) 100%
      );
    /* transform: rotateX(85deg) translateZ(-500px); */

    transform-style: preserve-3d;
    transform-origin: top;
    transform: rotateX(45deg);

    z-index: -1;
  }
</style>
