<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import GoogleIcon from 'svelte-icons-pack/bs/BsGoogle';
  import sayali from '../assets/sayali.jpg';
  import akash from '../assets/akash.jpg';
  import lakshay from '../assets/lakshay.jpg';
  import yashyas from '../assets/yashas.jpg';
  import zaid from '../assets/zaid.jpg';
  import question from '../assets/question.png';
  import search from '../assets/search.png';
  import stairs from '../assets/stair.png';
  import Participant from '../lib/components/participant.svelte';
  import QnexusColor from '../assets/q-nexus-logo-light-transparent.png'
  import Discover from '../lib/components/discover.svelte';
  import inView from "$lib/components/animationScroll/inView.js";
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
  #ani1 {
    opacity: 0;
    filter: blur(2.5px);
    transform: translateY(100%);
    transition: all 1s;
  }
  #ani1.visi1 {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
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
</style>
<div id="main" class="grid grid-rows-3">
  <div class="h-screen flex flex-col items-center justify-center gap-y-4 bg-fixed" style="background-image:url({bg1}); background-size: auto 100%;">
      <div class="flex gap-5">
        <img src={QnexusColor} alt=""/>
        <p style="font-family: Merriweather" class="text-8xl text-white">QNexus</p>
      </div>
      <div class="text-4xl font-bold font-sans">Game Hard, Learn Harder</div>
      <button class="btn btn-primary" on:click={handlegoogle}>
        <Icon src={GoogleIcon} /> Sign In With Google
      </button>
  </div>
  <div id="discover" class="flex flex-col items-center justify-center">
      <div id="ani1"
      class:visi1
      use:inView
      on:intersect={({ detail }) => {
          visi1 = detail;
      }}>
        <div class="flex flex-wrap uppercase gap-9">
            <Discover src={search} text="search course material"/>
            <Discover src={question} text="compete with your peers"/>
            <Discover src={stairs} text="CLIMB THE LEADERBOARD"/>
        </div>
      </div>
  </div>
  <div id="about us" class="m-10 flex flex-col items-center gap-14">
      <div>
        <p class="font-sans text-5xl font-semibold">Meet the team</p>
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
  </div>
</div>