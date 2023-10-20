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


</script>

<main>
    {#if shh1==true}
    <h1>your invite code is:</h1>
    <h3>{uid}</h3>
    <button type="button" on:click={handleCopy}>copy</button>
    {/if}


</main>

<style>

</style>