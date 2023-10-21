<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    let handleCopy;
    const cnt = doc(db,"gamestate", "one");
    const pc = cnt.playercount;
    let uid;
    let shh1;
    const auth = getAuth();
    onAuthStateChanged(auth, async(user) => {
  if (user) { 
     uid = user.uid;  
     shh1 = true;
     await setDoc(doc(db, "room","one"), {
  roomid: uid,
  subgamestate: 0,
  player1name: user.displayName
});
const x = doc(db,"room", "one");
onSnapshot(doc(db, "room", "one"), async(doc) => {
    if(doc.data().subgamestate===1){
       setDoc(x, {
       player1state: "connected",
},{ merge: true });
window.location.href = "room";  }
});
} 
 handleCopy = ()=>{
  navigator.clipboard.writeText(user.uid);
}
});
let upload = async(topic) =>{
  await setDoc(doc(db, "topicselected","one"), {
    "selected":topic
});
console.log("subject " + topic);
}

onMount(() => upload("electrochem"));

</script>

<main class="grow flex flex-col justify-center items-center gap-5">
    {#if shh1==true}
    <p class="lowercase text-8xl text-[#FDB6B6]" style="font-family: 'Share Tech Mono';">&lt;your code&gt;</p>
    <div class="flex flex-col items-start">
      <label class="label" for="subject">
        <span class="label-text text-3xl text-white font-['MerriWeather']">Subject</span>
      </label>
      <select class="select select-bordered w-[24vw] text-white text-xl font-['MerriWeather']" style=""
      on:change={(event) => upload(event.target.value)}>
        <option disabled>Chemistry</option>
        <option selected value="electrochem">Electrochemistry</option>
        <option value="corrosion">Corrosion</option>
        <option disabled>Machine Learning</option>
        <option value="linear">Linear Regression</option>
        <option value="logistic">Logistic Regression</option>
      </select>
    </div>
    <div class="flex flex-row gap-x-10 items-center">
      <p class="bg-slate-300 p-5 text-black text-2xl">{uid}</p>
      <button type="button" class="btn btn-circle btn-outline" on:click={handleCopy}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
        </svg>
      </button>
    </div>
    {/if}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Overpass+Mono&family=Ruslan+Display&family=Share+Tech+Mono&display=swap');
</style>