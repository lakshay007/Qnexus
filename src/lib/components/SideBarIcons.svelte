<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BsPlus  from 'svelte-icons-pack/bs/BsPlus';
    export let styleid = BsPlus;
    export let text = 'tooltip 💡';
</script>
<div class="relative flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-100 ease-linear cursor-pointer group">
    <Icon src={styleid} size="4vh">
    </Icon>

    <span class="absolute w-auto p-4 m-5 min-w-max left-20 rounded-md shadow-md bg-gray-900 text-white text-xl font-bold transition-all duration-0 scale-0 origin-left group-hover:scale-100">
        {text}
    </span>
</div>