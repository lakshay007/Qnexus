<script>
 let val = "",sub= 0;
  let chem = 0,ml = 0,phy = 0;
  let onclick = (subject) => {
    val = subject;
    if (val === "Chemistry") {
        window.location.href = "chemcourse";
    }
    else if(val === "Ml"){
        window.location.href = "mlmat";
    }
    else if(val === "Physics"){
        window.location.href = "phycourse";
    }
    sub = 1;
  };
</script>
<main class="">
    {#if sub == 0}
<h1>your subjects</h1>
    <a href="#" on:click={() => onclick("Chemistry")}>chemistry <br></a>
    <a href="#" on:click={() => onclick("Ml")}>Ml <br></a>
    <a href="#" on:click={() => onclick("Physics")}>physics <br></a>
    {/if}
</main>
<style>

</style>