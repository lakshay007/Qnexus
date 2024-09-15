<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import GoogleIcon from 'svelte-icons-pack/bs/BsGoogle';
  import sayali from '../assets/sayali.jpg';
  import akash from '../assets/akash.jpg';
  import lakshay from '../assets/lakshay.jpg';
  import yashyas from '../assets/yashas.jpg';
  import zaid from '../assets/zaid.jpg';
  import discoverbg from '../assets/discoverbg.png';
  import Participant from '../lib/components/participant.svelte';
  import QnexusColor from '../assets/q-nexus-logo-light-transparent.png'
  import Discover from '../lib/components/discover.svelte';

  import bg1 from "../assets/bg1.jpg";
  import { GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
  import { auth } from "../firebase1/firebaseConfig";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  let visi1 = [];
  let visi2 = [];
  const auth1 = getAuth();
  onAuthStateChanged(auth1, (user) => {
    if (user) {
      window.location.href = "dashboard";  
      const uid = user.uid;  
    } 
  });  
  const handlegoogle = (e) =>{
    const provider =  new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=K2D&family=Kaisei+Tokumin&family=Merriweather&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=K2D&family=Kaisei+Tokumin&family=KoHo:wght@500&family=Merriweather&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&display=swap');

  #ani2 {
    opacity: 0;
    filter: blur(2.5px);
    transform: translateY(100%);
    transition: all 1s;
  }
  #ani2.visi2 {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
  .ellipse-1 {
    background: rgba(120, 53, 205, 0.46);
    border-radius: 50%;
    width: 35.8vw;
    height: 35.8vw;
    left: 14.2vw;
    top: 110vh;
    position: absolute;
  }
  #discover {
    background-color: black;
  }
  #discoverimg {
    position:relative;
    width: auto;
    height: 100vh;
  }
  .q-n-e-x-u-s {
    color: #ffffff;
    text-align: left;
    font: 600 5vw "K2D", sans-serif;
    position: absolute;
    left: 3.45vw;
    top: 130vh;
    text-shadow: 0 0 7px black;
  }
  .an-alternate-reality-an-alternate-vision {
    color: #ffffff;
    text-align: left;
    font: 600 1.667vw "K2D", sans-serif;
    position: absolute;
    left: 3.45vw;
    top: 145vh;
    text-shadow: 0 0 7px black;
  }
  .learn {
    color: #d0f4ff;
    text-align: left;
    font: 600 4.1667vw "KoHo", sans-serif;
    position: absolute;
    left: 60.677vw;
    top: 122.5vh;
  }
  .compete {
    color: #d0f4ff;
    text-align: left;
    font: 600 4.1667vw "KoHo", sans-serif;
    position: absolute;
    left: 77.2916vw;
    top: 143.88vh;
  }
  .climb {
    color: #d0f4ff;
    text-align: left;
    font: 600 4.1667vw "KoHo", sans-serif;
    position: absolute;
    left: 69.0625vw;
    top: 167.5vh;
  }
  .browse-extensive-course-material {
    color: #ffffff;
    text-align: left;
    font: 600 2.0833vw "Karma", sans-serif;
    position: absolute;
    left: 64.1667vw;
    top: 135vh;
  }
  .race-against-time {
    color: #ffffff;
    text-align: left;
    font: 600 2.0833vw "Karma", sans-serif;
    position: absolute;
    left: 70.9375vw;
    top: 156.3vh;
  }
  .earn-league-points {
    color: #ffffff;
    text-align: left;
    font: 600 2.0833vw "Karma", sans-serif;
    position: absolute;
    left: 76.71875vw;
    top: 180vh;
  }
  #about_us {
    background: linear-gradient(rgba(31,41,55,.5), rgba(31,41,55,.5)), url("../assets/team_bg.jpeg");;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center center;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .q-n-e-x-u-s {
      font-size: 8vw;
      left: 5vw;
      top: 130vh;
    }
    .an-alternate-reality-an-alternate-vision {
      font-size: 3vw;
      left: 5vw;
      top: 140vh;
    }
    .learn, .compete, .climb {
      font-size: 6vw;
      left: 10vw;
      top: auto;
    }
    .browse-extensive-course-material, .race-against-time, .earn-league-points {
      font-size: 4vw;
      left: 10vw;
      top: auto;
    }
    .ellipse-1 {
      width: 50vw;
      height: 50vw;
      left: 25vw;
      top: 100vh;
    }
    #discoverimg {
      height: 50vh;
    }
    #discover, #about_us {
      display: none;
    }
    .h-screen {
      height: 100vh;
    }
    .text-8xl {
      font-size: 4rem;
    }
    .text-4xl {
      font-size: 2rem;
    }
    .btn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
    }
  }
</style>
<div id="main" class="grid grid-rows-3">
  <div class="h-screen flex flex-col items-center justify-center gap-y-4 bg-fixed" style="background-image:url({bg1}); background-size: auto 100%;">
      <div class="flex gap-5 items-center">
        <img src={QnexusColor} alt="" class="w-20 h-20"/>
        <p style="font-family: Merriweather" class="text-8xl text-white">QNexus</p>
      </div>
      <div class="text-4xl font-bold font-sans">Game Hard, Learn Harder</div>
      <button class="btn btn-primary" on:click={handlegoogle}>
        <Icon src={GoogleIcon} /> Sign In With Google
      </button>
  </div>
  <div id="discover" class="flex flex-row justify-center items-center">
      <div class="ellipse-1"></div> 
      <img id="discoverimg" class="justify-items-center" src="{discoverbg}" alt=""/>
      <div class="q-n-e-x-u-s"><p style="">Q N E X U S</p></div>
      <div class="an-alternate-reality-an-alternate-vision">
        An Alternate Reality. An Alternate Vision.
      </div>
      <div class="learn">LEARN</div>
      <div class="compete">COMPETE</div>
      <div class="climb">CLIMB</div>
      <div class="browse-extensive-course-material">
        Browse Extensive Course Material
      </div>
      <div class="race-against-time">Race Against Time</div>
      <div class="earn-league-points">Earn League Points</div>
       <!-- <div class="bg-slate-400" id="disc1">h</div> -->
      <!-- <div class="bg-blue-400" id="disc2"></div>
      <div class="bg-red-400" id="disc3"></div>
      <div class="bg-green-400" id="disc4"></div> -->
  </div>
  <div id="about_us" class="flex flex-col items-center gap-14 justify-center">
    <div>
      <p class="font-sans text-5xl font-semibold text-white">Meet the team</p>
    </div>
    <div id="ani2"
    class:visi2
    use:inView
    on:intersect={({ detail }) => {
      visi2 = detail;
    }}>
        <div class="flex flex-wrap gap-10">
          <Participant src={sayali} name="Sayali" />
          <Participant src={lakshay} name="Lakshay" />
          <Participant src={zaid} name="Zaid" />
          <Participant src={yashyas} name="Yashas" />
          <Participant src={akash} name="Akash" />
        </div>
      </div>
      <div id="footer" class="text-2xl text-white font-semibold">
        Project made by Team Bit Lords, Manipal Hackathon
      </div>
  </div>
</div>