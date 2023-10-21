<script>
    import { db } from "../../firebase1/firebaseConfig";
        import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
        import { getAuth, onAuthStateChanged } from "firebase/auth";
        import { onMount } from "svelte";
        import Radio from '../../lib/components/Radio.svelte';
        import cheme from '../../questions/lr1.json';
        let group = 0,formattedTime,i=0,correctans = 0;
        let timerloaded = 0;
        onMount(async()=>{
            let countdown = 1200;
            const timer = setInterval(() => {
                timerloaded = 1;
                if (countdown > 0) {
                    const minutes = Math.floor(countdown / 60);
                    const seconds = countdown % 60;
                    formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                    countdown -= 1;
                }
            }, 1000);
    
        })
        let handleNext = () =>{
            if(cheme[i].CorrectOption == group){
                correctans++;
            }
            i++;
        }
    </script>
    <main>
        {#if timerloaded ==1}
        <h1>{formattedTime}</h1>
        <h1>{cheme[i].Question}</h1>
        <Radio bind:group value={1}>{cheme[i].Option1}</Radio> <br>
        <Radio bind:group value={2}>{cheme[i].Option2}</Radio> <br>
        <Radio bind:group value={3}>{cheme[i].Option3}</Radio> <br>
        <Radio bind:group value={4}>{cheme[i].Option4}</Radio> <br>
        <button type="button" on:click={handleNext}>next</button>
        {/if}
    </main>
    <style>
    
    </style>