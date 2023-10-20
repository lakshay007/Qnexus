<script>
  import physics from "../../assets/physics.jpeg";
  import chem from "../../assets/chem.jpeg";
  import ml from "../../assets/ML.jpeg";
    import SubjectIcon from "../../lib/components/subjectIcon.svelte";
</script>
<style>

</style>
<main class="flex flex-col grow items-center">
  <div id="material" class=" flex flex-row h-[12.222vh] my-[2vh] w-[72vw] justify-center items-center">
      <div class="font-medium text-4xl text-grey-800 text-center">
          STUDY MATERIAL
      </div>
      <div>

      </div>
  </div>
  <div class="grow flex flex-col gap-y-[4vh]">
    <SubjectIcon></SubjectIcon>
    <a href="/chemcourse">chemistry</a>
    <a href="/mlmat">Ml</a>
    <a href="/phycourse">physics</a>
  </div>
</main>