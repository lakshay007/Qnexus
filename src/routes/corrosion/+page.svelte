<script>
import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import Radio from '../../lib/components/Radio.svelte';
    import corrq from '../../questions/questions.json';
    let group = 0,formattedTime,i=0,correctans = 0,submitted = 0;
    let timerloaded = 0;
    onMount(async()=>{
        let countdown = 1200;
        const timer = setInterval(() => {
            timerloaded =1;
            if (countdown > 0) {
                const minutes = Math.floor(countdown / 60);
                const seconds = countdown % 60;
                formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                countdown -= 1;
            }
        }, 1000);

    })
    let handleNext = () =>{
        if(corrq[i].CorrectOption == group){
            correctans++;
        }
        group = 0;
        i++;
    }
    let handlesubmit = () =>{
            if(corrq[i].CorrectOption == group){
                correctans++;
            }
            submitted = 1;
        }
</script>
<main>
    {#if submitted ==0}
    {#if timerloaded ==1}
    <h1>{formattedTime}</h1>
    <h1>{corrq[i].Question}</h1>
    <Radio bind:group value={1}>{corrq[i].Option1}</Radio> <br>
    <Radio bind:group value={2}>{corrq[i].Option2}</Radio> <br>
    <Radio bind:group value={3}>{corrq[i].Option3}</Radio> <br>
    <Radio bind:group value={4}>{corrq[i].Option4}</Radio> <br>
    {#if i==9}
    <button type="button" on:click={handlesubmit}>submit</button>
    {/if}
    {#if i<9}
    <button type="button" on:click={handleNext}>next</button>
    {/if}
        {/if}
        {/if}
        {#if submitted == 1}
            <h1>you were able to answer {correctans} questions correctly</h1>
            {/if}
</main>
<style>
    
</style>