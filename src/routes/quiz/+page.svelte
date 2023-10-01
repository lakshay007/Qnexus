<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc } from "firebase/firestore"; 
    
 setDoc(doc(db, "gamestate", "one"), {
  gamestate: 0,
  playercount: 0
});
let flag = 0;
const state = doc(db,"gamestate", "one");
const click = async() =>{
   await updateDoc(state, {
  gamestate:1,
  playercount:flag+1
});
flag++;
}



</script>
<main>
    <a href="#" on:click={click} >
        play
    </a>
</main>

<style>

</style>