<script>
    export let title = "Maths - I";
    export let time = "3:30 PM";
    export let date = "21-10-2023";
    export let redirect = "/contests";
    import lock from "svelte-icons-pack/bs/BsLockFill";
    import unlock from "svelte-icons-pack/bs/BsUnlockFill";
    import contestImage from "../../assets/contestImage.jpeg";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let state = 0;
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Exo&display=swap');
    #contestImage {
        width: 7.89vw;
        height: 7.89vw;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        margin: 0.5vh;
    }
</style>
{#if state == 1}
<a class="flex flex-col items-center" href={redirect}>
    <img id="contestImage" src={contestImage} class="" alt=""/>
    <div class="text-center text-white text-4xl font-bold font-['Merriweather'] mx-[1vw] my-[0.25vw]">{title}</div>
    <div class="flex flex-row items-center">
        <div>
            <Icon src={unlock} size="5vh"></Icon>
        </div>
        <div>
            <div class="text-center text-white font-light font-['Exo']">{date}</div>
            <div class="text-center text-white font-light font-['Exo']">{time}</div>
        </div>
    </div>
</a>
{:else}
<div class="flex flex-col items-center">
    <img id="contestImage" src={contestImage} class="" alt=""/>
    <div class="text-center text-white text-4xl font-bold font-['Merriweather'] mx-[1vw] my-[0.25vw]">{title}</div>
    <div class="flex flex-row items-center">
        <div>
            <Icon src={lock} size="5vh"></Icon>
        </div>
        <div>
            <div class="text-center text-white font-light font-['Exo']">{date}</div>
            <div class="text-center text-white font-light font-['Exo']">{time}</div>
        </div>
    </div>
</div>
{/if}