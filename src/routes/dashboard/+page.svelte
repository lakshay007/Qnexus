<script>
  import material from "../../assets/material.png";
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Merriweather&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Kaisei+Tokumin&family=Merriweather&display=swap');
  #div1{
    grid-column: 1/3;
    background-image: url(../../assets/leaderboard.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    font-family: 'Acme', sans-serif;
    cursor:pointer;
  }
  #div2{
    grid-row: 1/2;
    background-size: 100% auto;
    background-image: url("../../assets/challenges.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    font-family: 'Acme', sans-serif;
    cursor: pointer;
  }
  #div3{
    grid-row: 1/2;
    font-family: 'Acme', sans-serif;
    background-image: url("../../assets/material.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  #footer {
    font-family: 'Kaisei Tokumino';
  }
</style>
<div class="flex flex-row grow justify-center">
  <div class="grow flex flex-col">
    <div class="grow grid grid-cols-2 grid-rows-2 my-20 mx-32 gap-5 gap-y-10 place-content-center">
      <div id="div3" class="flex flex-row items-center" onclick="location.href='/material'">
        <div class="flex flex-row-reverse grow place-self-stretch" style="background: linear-gradient(250.98deg, #000000 13.93%, rgba(0, 0, 0, 0) 75.78%);
        ">
          <p class="font-semibold text-4xl text-base-800 m-8 uppercase self-center" style="">course material</p>
        </div>
        <!-- <img src="{material}" alt="course material"> -->
      </div>
      <div id="div2" class="flex flex-row-reverse items-center" onclick="location.href='/quiz'"><a class="font-semibold text-4xl text-base-800 m-8" href="/quiz">CHALLENGES</a></div>
      <div id="div1" class="flex justify-center" onclick="location.href='/leaderboard'"><p class="place-self-center font-semibold text-4xl text-base-800 uppercase">LeaderBoard</p></div>
    </div>
    <div id="footer" class="self-center text-xl my-3">Developed By Bit Lords</div>
  </div>
</div>
