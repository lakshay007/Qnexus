<script>
 let val = "",sub= 0;
  let chem = 0,ml = 0,phy = 0;
  let onclick = (subject) => {
    val = subject;
    if (val === "Chemistry") {
      chem =1;
    }
    else if(val === "ML"){
        ml =1;
    }
    else if(val === "Physics"){
        phy = 1;
    }
    sub = 1;
  };
</script>
<main>
    {#if sub == 0}
<h1>your subjects</h1>
<a href="#" on:click={() => onclick("Chemistry")}>chemistry <br></a>
    <a href="#" on:click={() => onclick("Ml")}>Ml <br></a>
    <a href="#" on:click={() => onclick("Physics")}>physics <br></a>
    {/if}
    {#if chem === 1}
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSfKNxC250AWjH2RSp4d_ZJ0zG0Aphm_VwIw0dJG9hMx59KCfcwKa9B90lnSjxzjmLMmtoexx5eIeIo/embed?start=false&loop=false&delayms=60000" frameborder="0" width="1500" height="910" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    {/if}
</main>
<style>

</style>