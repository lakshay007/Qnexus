<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,getDoc } from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    const auth = getAuth();
    let player2name;
    onAuthStateChanged(auth, (user) => {
  if (user) { 
     player2name = user.displayName;  
  } 
});  
    let id;
    let flag;
    const handleButtonClick = async() => {
    console.log("ID:", id); 
    const x = doc(db,"room", "one");
    const ref = await getDoc(x);
    const realid = ref.data().roomid;
    console.log(realid);
    if(realid===id){
        flag = true;
        const room = doc(db,"room", "one");
        await updateDoc(room, {
            player2state:"connected",
            player2name:player2name,
            subgamestate:1

});
setTimeout(() => {
    window.location.href = "room";
    }, 3000);
    
    }
    else{
        flag = false;
    }

  }
</script>

<main>
    <label>enter your code:</label><br>
    <input bind:value = {id}><br>
    <button type="button" on:click={handleButtonClick}>submit</button>
    {#if flag==true}
    <h1>success, joining the room</h1>
    {/if}
   { #if flag==false}
    <h1>enter the correct code!!!</h1>
    {/if}
    

</main>

<style>

</style>