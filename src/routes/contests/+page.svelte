<script>
    import Radio from '../../lib/components/Radio.svelte';
import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import questions2 from "../../questions/questions2.json"
    const auth = getAuth();
    let use, x,ref,countdown = 1200,formattedTime,timerloaded = 0,i=0,attempted = 0,notatte=0,correctans = 0,end = 0;
    let l,m,n,o;
l = 0;m = 0;n=0;o=0;
let qw,we,er,rt;
qw=0;we=0;er=0;rt=0;
    onMount(async()=>{
        onAuthStateChanged(auth, async(user) => {
            const timer = setInterval(() => {
                timerloaded = 1;
      if (countdown > 0) {
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
         formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        countdown -= 1;
      }
    
  }, 1000);
            if(user){
                use = user.uid
        await setDoc(doc(db, "contest1",user.uid), {         
});
            }
    })
    })
    let group=0;
    let handleNext = async()=>{
        if(questions2[i].CorrectOption == group){
            correctans++;
            await setDoc(doc(db, "contest1",use), {
                "correctans":correctans        
});
        }
        i++;
        group = 0;
        if(i>=15){
        end = 1;
    }

    }
    

</script>
<main>
    {#if end == 0}
{#if timerloaded == 1}
<h1>{formattedTime}</h1>
<h1>{questions2[i].Question}</h1>
<Radio bind:group value={1}>{questions2[i].Option1}</Radio> <br> 
<Radio bind:group value={2}>{questions2[i].Option2}</Radio> <br> 
<Radio bind:group value={3}>{questions2[i].Option3}</Radio> <br> 
<Radio bind:group value={4}>{questions2[i].Option4}</Radio> <br>
{#if i==14} 
<button type="button" on:click={handleNext}>submit</button>
{:else}
<button type="button" on:click={handleNext}>next</button>
{/if}

{/if}
{/if}
{#if end==1}
<h1>quiz has ended</h1>
{/if}

</main>
<style>

</style>