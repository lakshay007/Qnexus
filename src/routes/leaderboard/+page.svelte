<script>
import { db } from "../../firebase1/firebaseConfig";
import { doc , setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc,collection, query, where,getDocs, increment, orderBy, limit } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import { writable } from 'svelte/store'
    let docref,x,yoid,yocoins,ref;
    let dataArray = writable([]); 
const auth = getAuth();
    onMount(async()=>{
        const data = [];
         docref = collection(db, "playerprofiles");
         onAuthStateChanged(auth, async(user) => {
            if(user){
                ref = doc(db,"playerprofiles",user.uid)
                x = await getDoc(ref);
                yoid = x.data().playername;
                yocoins = x.data().credits;
                
            }})
        const q = query(docref,orderBy("playercoins", "desc"),limit(100));
        await getDocs(q)
        .then(async(querySnapshot) => {
        querySnapshot.forEach(async(docreff) => {
        data.push( docreff.data());
    });
        

      
   
   dataArray.set(data);
})

})
import leader from "../../assets/leadervord.png";
import coin from "../../assets/coin.png";
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Overpass+Mono&family=Ruslan+Display&display=swap');
    #challenges {
        background-image: url("../../assets/leaderboard.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center center;
        font-family: "Acme";
    }
</style>
<main class="grow flex flex-col items-center">
    {#await $dataArray}
    <p class="text-6xl">Your data is loading</p>
    <span class="loading loading-spinner loading-lg"></span>
    {:then data}
        
    <div id="challenges" class=" flex flex-row h-[12.222vh] my-[4vh] w-[72vw] justify-center items-center">
        <div class="font-medium text-4xl text-grey-800">
            LEADERBOARD
        </div>
    </div>
    <div class="grow flex flex-row gap-x-4 place-self-start ml-[4vw] bg-[#03050d] mb-4">
        <div class="grow flex flex-col justify-end ml-[2vw]">
            {#if typeof yoid == 'undefined' || typeof yocoins == 'undefined'}
            <div class=" flex flex-col text-center my-4">
                <p class="text-white font-bold font-['MerriWeather']">Please create your profile!</p>
            </div>
            {:else}
            <div class=" flex flex-col mx-2 my-3 gap-2">
                <div class="flex flex-row">
                    <p class="text-white font-bold font-['MerriWeather']">Name: </p>
                    <div class="grow"></div>
                    <div class="text-white font-bold font-['MerriWeather']">{yoid}</div>
                </div>
                <div class="flex flex-row">
                    <p class="text-white font-bold font-['MerriWeather']">Vault: </p>
                    <div class="grow"></div>
                    <p class="text-white font-bold font-['MerriWeather']">{yocoins}</p>
                </div>
            </div>
            {/if}
            
            <div class="grow">

            </div>
            <img src={leader} class="w-[18.02vw]" alt="" />
        </div>
        <div class=" grow flex flex-col w-[60vw] jutsify-center text-center max-h-[67.5vh]">
            <div class="flex flex-row text-black bg-[#F88379]" style="font-family:'Overpass Mono';">
                <div class="m-4">
                    RANK
                </div>
                <div class="grow m-4">
                    PLAYER
                </div>
                <div class="m-4">
                    COIN
                </div>
            </div>
            <div class="grow flex flex-col" style="overflow-y: auto;">
                {#each data as { playername, credits }, i}
                <div class="flex flex-row" style="font-family:'Overpass Mono';">
                    <div class="m-4">
                        {i+1}
                    </div>
                    <div class="grow m-4">
                        {playername}
                    </div>
                    <div class="m-4">
                        {credits}
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
    {/await}
</main>