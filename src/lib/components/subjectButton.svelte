<script>
    export let title="";
    export let src="";
</script>

<div class="flex flex-col justify-start items-center gap-y-9">
    <img src={src} class="rounded-full h-[200px]" alt=""/>
    <p class="text-white font-['MerriWeather'] text-2xl capitalize">{title}</p>
</div>