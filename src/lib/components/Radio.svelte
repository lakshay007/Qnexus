<script>
    export let group = undefined;
      export let value = undefined;
  </script>
  <label class="">
    <input type="radio" bind:group value={value} class="my-super-special-classname radio">
    <slot />
  </label>
  
  