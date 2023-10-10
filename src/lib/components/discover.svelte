<script>
    export let src;
    export let text;
</script>
<div>
    <div class="w-50 bg-transparent shadow-xl flex flex-col items-center">
        <figure><img src={src} alt="" /></figure>
        <div class="m-10">
          <p class="card-title text-xl uppercase font-semibold">{text}</p>
        </div>
      </div>
</div>