<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BsPlus  from 'svelte-icons-pack/bs/BsPlus';
    export let styleid = BsPlus;
    export let text = 'tooltip 💡';
</script>
<div class="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 text-blue-400 hover:bg-blue-500 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-100 ease-linear cursor-pointer group">
    <Icon src={styleid}>
    </Icon>

    <span class="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md bg-gray-900 text-white text-xs font-bold transition-all duration-0 scale-0 origin-left group-hover:scale-100 transition-all">
        {text}
    </span>
</div>