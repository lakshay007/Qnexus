<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BsPlus  from 'svelte-icons-pack/bs/BsPlus';
    export let styleid = BsPlus;
    export let text = 'tooltip 💡';
</script>
<style>
    #container:hover > #subtext {
        transform: translateX(40vw);
    }
</style>
<div id="container" class="relative flex items-center justify-center h-[10vh] w-[10vh] mt-2 mb-2 mx-auto bg-gray-800 text-blue-400 hover:bg-blue-700 hover:text-white rounded-xl transition-all duration-100 group">
    <Icon src={styleid}>
    </Icon>

    <div id="subtext" class="absolute w-auto p-2 m-2 min-w-max rounded-md shadow-md bg-gray-900 text-white text-xs font-bold transition-all duration-150 origin-left left-[-20vw]">
        {text}
    </div>
</div>