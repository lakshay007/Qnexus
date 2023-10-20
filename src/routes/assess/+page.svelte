<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import corrq from '../../questions/questions.json';
    import electr from '../../questions/questionse.json';
    import cheme from '../../questions/questionschem.json';
    import Bars from "../../lib/components/bars.svelte";
    import Radio from '../../lib/components/Radio.svelte';

    let formattedTime = "20:00"; // Initialize formattedTime with the starting time
    let i = 0;
    let group = 0;

    let val = "";
    let sub = 0;
    let valtop = "";
    

    let starttimer = ()=>{
        let countdown = 1200;
        const timer = setInterval(() => {
            if (countdown > 0) {
                const minutes = Math.floor(countdown / 60);
                const seconds = countdown % 60;
                formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                countdown -= 1;
            }
        }, 1000);
    }
    

    let onclick = (subject) => {
        val = subject;
        if (val === "Chemistry") {
            console.log("Chemistry!!");
        }
        sub = 1;
    };

    let onclicktop = (topic) => {
        valtop = topic;
        sub = 2;
        let countdown = 1200;
        const timer = setInterval(() => {
            if (countdown > 0) {
                const minutes = Math.floor(countdown / 60);
                const seconds = countdown % 60;
                formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                countdown -= 1;
            }
        }, 1000);
    }
    let handleNext = ()=>{
        group = 0;
        i++;
    }
</script>

<main>
    {#if sub == 0}
    <h1>your subjects: <br></h1>
    <a href="#" on:click={() => onclick("Chemistry")}>chemistry <br></a>
    <a href="#" on:click={() => onclick("Ml")}>Ml <br></a>
    <a href="#" on:click={() => onclick("Physics")}>physics <br></a>
    {/if}
    {#if sub == 1}
    <h1>select your topic:</h1>
    {#if val === "Chemistry"}
    <a href="#" on:click={() => onclicktop("corrosion")}>corrosion <br></a>
    <a href="#" on:click={() => onclicktop("electro")}>electrochemistry <br></a>
    <a href="#" on:click={() => onclicktop("battech")}>battery Tech <br></a>
    {/if}
    {#if val === "Physics"}
    <a href="#">ray optics <br></a>
    <a href="#">hmm <br></a>
    <a href="#">hmmmm <br></a>
    {/if}
    {#if val === "Ml"}
    <a href="#">Linear Regression <br></a>
    <a href="#">Logistic regression <br></a>
    <a href="#">Clustering <br></a>
    {/if}
    {/if}
    {#if sub === 2}
    {#if valtop === "corrosion"}
    <h1>{formattedTime}</h1>
    <h1>{corrq[i].question}</h1>
    <Radio bind:group value={1}>{corrq[i].option1}</Radio> <br>
    <Radio bind:group value={2}>{corrq[i].option2}</Radio> <br>
    <Radio bind:group value={3}>{corrq[i].option3}</Radio> <br>
    <Radio bind:group value={4}>{corrq[i].option4}</Radio> <br>
    <button type="button" on:click={handleNext}>next</button>
    {/if}
    {#if valtop === "electro"}
    <h1>{formattedTime}</h1>
    <h1>{electr[i].Question}</h1>
    <Radio bind:group value={1}>{electr[i].Option1}</Radio> <br>
    <Radio bind:group value={2}>{electr[i].Option2}</Radio> <br>
    <Radio bind:group value={3}>{electr[i].Option3}</Radio> <br>
    <Radio bind:group value={4}>{electr[i].Option4}</Radio> <br>
    <button type="button" on:click={handleNext}>next</button>
    {/if}
    {#if valtop === "battech"}
    <h1>{formattedTime}</h1>
    <h1>{cheme[i].Question}</h1>
    <Radio bind:group value={1}>{cheme[i].Option1}</Radio> <br>
    <Radio bind:group value={2}>{cheme[i].Option2}</Radio> <br>
    <Radio bind:group value={3}>{cheme[i].Option3}</Radio> <br>
    <Radio bind:group value={4}>{cheme[i].Option4}</Radio> <br>
    <button type="button" on:click={handleNext}>next</button>
    {/if}
    {/if}
</main>
