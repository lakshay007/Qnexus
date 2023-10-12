<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&family=Merriweather&display=swap');
  #div1{
    grid-column: 1/3;
    
  }
  #div2{
    background-size: 100% auto;
    background-image: url("../../assets/challenges.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    font-family: 'DM Sans', sans-serif;
  }
</style>
<div class="bg-black flex flex-row grow">
  <div class="grow grid grid-cols-2 grid-rows-2 m-24 mx-52 gap-5 gap-y-10 place-content-center">
    <div class="bg-slate-700">hello world</div>
    <div id="div2" class="flex flex-row-reverse items-center"><a class="font-semibold text-4xl text-white m-8" href="/quiz">CHALLENGES</a></div>
    <div id="div1" class="bg-blue-800">hello world</div>
  </div>
</div>
