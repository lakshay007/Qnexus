<script>
import { db } from "../../firebase1/firebaseConfig";
import { doc , setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc,collection, query, where,getDocs, increment } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import { writable } from 'svelte/store'
    let dataArray = writable([]); 

    onMount(async()=>{
        const data = [];
        let docref = collection(db, "playerprofiles");
        const q = query(docref,where("playercoins",">=",0) );
        await getDocs(q)
        .then(async(querySnapshot) => {
        querySnapshot.forEach(async(docreff) => {
        data.push( docreff.data());
        for(let i = 0;i<data.length-1;i++){
            for(let j = 0;j<data.length-i-1;j++){
                if(data[j].credits<data[j+1].credits){
                    let temp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = temp;
                }
            }
        }
      
   });
   dataArray.set(data);
})

    console.log(dataArray)})

</script>
<main>
    {#await $dataArray}
        <p>Loading data...</p>
    {:then data}
        {#each data as { playername, credits }, i}
            <h1>{i+1 }. {playername} :{credits}</h1>
        {/each}
    {/await}
  </main>
<style>

</style>