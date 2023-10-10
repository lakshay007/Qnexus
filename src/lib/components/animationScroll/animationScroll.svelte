<script>
    import inView from "./inView.js";
    import InView from "./InView.svelte";
  
    let visible = [];
    const sections = [1, 2, 3];
</script>

<p
    class:visible
    use:inView
    on:intersect={({ detail }) => {
        visible = detail;
    }}
    >
    Element using an action:
    <strong>{visible ? "" : "not"} in view</strong>
</p>

{#each sections as i}
<InView let:isVisible>
    <p class:visible={isVisible}>
    Component {i} using a prop:
    <strong>{isVisible ? "" : "not"} in view</strong>
    </p>
</InView>
{/each}

<style>
p {
opacity: 0;
filter: blur(2.5px);
transform: translateY(100%);
transition: all 1s;
}
p.visible {
    background: gold;
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
}
</style>