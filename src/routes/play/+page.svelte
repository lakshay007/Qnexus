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
})
}



</script>

<main class="grow flex flex-col justify-center items-center gap-5">
    {#if shh1==true}
    <p class="lowercase text-6xl text-[#FDB6B6]" style="font-family: 'Share Tech Mono';">&lt;your code&gt;</p>
    <div class="flex flex-row gap-x-10 items-center">
      <p class="bg-slate-300 p-5 text-black text-2xl">{uid}</p>
      <button type="button" class="btn btn-circle btn-outline" on:click={handleCopy}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
        </svg>
      </button>
    </div>
    <ul>
      <a on:click={() => upload("electrochem")} >Electrochemistry</a>
      <a on:click={() => upload("corrosion")}>Corrosion</a>
  </ul>

  <h3>Machine Learning</h3>
  <ul>
      <a on:click={() => upload("linear")}>Linear Regression</a>
      <a on:click={() => upload("logisitc")}>Logistic Regression</a>
  </ul>
    {/if}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
</style>