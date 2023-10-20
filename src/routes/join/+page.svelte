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

<main class="grow flex flex-col justify-center items-center gap-5">
    <label for="room" class=" label lowercase text-6xl text-[#FDB6B6]" style="font-family: 'Share Tech Mono';">&lt;enter your code&gt;</label>
    <div class="join shadow-3xl">
        <input class="input input-bordered join-item w-[30vw]" style="--tw-border-opacity: 0.4;" bind:value = {id} placeholder="Code">
        <button type="button" class="btn join-item" on:click={handleButtonClick}>submit</button>
    </div>
    {#if flag==true}
    <h1>success, joining the room</h1>
    {/if}
   { #if flag==false}
    <h1>enter the correct code!!!</h1>
    {/if}
    

</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
</style>