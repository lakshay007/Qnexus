<script>
    export let src;
    export let name;
</script>
<div class="about-us">
    <div class="about-us2">
      <div class="rounded overflow-hidden shadow-lg">
        <div class="flex flex-col items-center">
          <img
            class="w-full h-48 object-cover"
            src={src}
            loading="lazy"
            alt={""}
          />
      
          <div class="flex-1 p-6">
            <div class="font-semibold text-lg">{name}</div>
          </div>
        </div>
      </div>
      
    </div>
  </div>