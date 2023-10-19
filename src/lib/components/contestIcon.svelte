<script>
    export let title = "Maths - I";
    export let time = "5:00 PM";
    export let date = "19-04-2023";
    export let redirect = "/contests";
    import lock from "svelte-icons-pack/bs/BsLockFill";
    import unlock from "svelte-icons-pack/bs/BsUnlockFill";
    import contestImage from "../../assets/contestImage.jpeg";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    export let state = 1;
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
<a class="flex flex-col items-center" href={redirect}>
    <img id="contestImage" src={contestImage} class="" alt=""/>
    <div class="text-center text-white text-4xl font-bold font-['Merriweather'] mx-[1vw] my-[0.25vw]">{title}</div>
    <div class="flex flex-row items-center">
        <div>
            {#if state == 1}
                <Icon src={lock} size="5vh"></Icon>
            {:else}
                <Icon src={unlock}></Icon>
            {/if}
        </div>
        <div>
            <div class="text-center text-white font-light font-['Exo']">{date}</div>
            <div class="text-center text-white font-light font-['Exo']">{time}</div>
        </div>
    </div>
</a>