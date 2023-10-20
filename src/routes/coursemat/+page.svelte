<script>
  import physics from "../../assets/physics.jpeg";
  import chem from "../../assets/chem.jpeg";
  import ml from "../../assets/ML.jpeg";
    import SubjectIcon from "../../lib/components/subjectIcon.svelte";
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Ruslan+Display&display=swap');
    #material {
        background: url("../../assets/material.png"), linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center left;
        font-family: "Acme";
    }
</style>
<main class="flex flex-col grow items-center gap-y-8">
  <div id="material" class=" flex flex-row h-[12.222vh] my-[2vh] w-[72vw] justify-center items-center">
      <div class="font-medium text-4xl text-grey-800 text-center">
          STUDY MATERIAL
      </div>
  </div>
  <div class="grow flex flex-row gap-x-[4vh] m-[4vh]">
    <SubjectIcon ref="/chemcourse" title="chemistry" src={chem}/>
    <SubjectIcon ref="/mlmat" title="ML - I" src={ml}/>
    <SubjectIcon ref="/phycourse" title="physics" src={physics}/>
  </div>
</main>