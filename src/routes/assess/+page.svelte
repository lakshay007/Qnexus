<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import corrq from '../../questions/questions.json';
    import electr from '../../questions/questionse.json';
    import lr1 from '../../questions/lr1.json'
    import lr2 from '../../questions/lr2.json'
    import clus from '../../questions/clustering.json'
    import cheme from '../../questions/questionschem.json';
    import Bars from "../../lib/components/bars.svelte";
    import Radio from '../../lib/components/Radio.svelte';
    import physics from "../../assets/physics.jpeg";
    import chem from "../../assets/chem.jpeg";
    import ml from "../../assets/ML.jpeg";
    import corrosion from "../../assets/corrosion.jpg";
    import electro from "../../assets/electrochemistry.jpg";
    import battery from "../../assets/battery.jpg";
    import SubjectButton from "../../lib/components/subjectButton.svelte";
    let correctans;

    let formattedTime = "20:00"; 
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
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Ruslan+Display&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
    #material {
        background: url("../../assets/material.png"), linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1));
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: center left;
        font-family: "Acme";
    }
    #counter {
        height: 11.66666vw;
        width: 11.66666vw;
        border-radius: 9999px;
        font-family: 'Share Tech Mono';
        font-size: 3vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        --tw-text-opacity: 1;
        color: rgb(0 0 0 / var(--tw-text-opacity));
        background-color: #D0F3FF;
        z-index: 0;
    }
</style>

{#if sub == 0}
<main class="grow flex flex-col items-center gap-y-8">
    <div id="material" class="flex flex-row h-[12.222vh] my-[2vh] w-[72vw] justify-center items-center">
        <div class="font-medium text-4xl text-grey-800 text-center">
            ASSESS YOURSELF
        </div>
    </div>
    <p class="text-center text-white font-['MerriWeather'] text-4xl">Select your subject</p>
    <div class="flex flex-row gap-x-7">
        <button on:click={() => onclick("Chemistry")}><SubjectButton src={chem} title="chemistry"/></button>
        <button on:click={() => onclick("Ml")}><SubjectButton src={ml} title="ML - I"/></button>
        <button on:click={() => onclick("Physics")}><SubjectButton src={physics} title="physics"/></button>
    </div>
</main>
{/if}
{#if sub == 1}
<main class="grow flex flex-col items-center gap-y-8">
    <div id="material" class="flex flex-row h-[12.222vh] my-[2vh] w-[72vw] justify-center items-center">
        <div class="font-medium text-4xl text-grey-800 text-center">
            ASSESS YOURSELF
        </div>
    </div>
    <p class="text-center text-white font-['MerriWeather'] text-4xl">Select your topic</p>
    {#if val === "Chemistry"}
    <a href="/corrosion" >corrosion <br></a>
    <a href="/electro" >electrochemistry <br></a>
    <a href="/battech" >battery Tech <br></a>
    {/if}
    {#if val === "Physics"}
    <div class="flex flex-row gap-x-7">
        <button>ray optics </button>
        <button>hmm </button>
        <button>hmmmm </button>
    </div>
    {/if}
    {#if val === "Ml"}
    <a href="/lr" >Linear Regression <br></a>
    <a href="/lr2">Logistic regression <br></a>
    <a href="/cluster" >Clustering <br></a>
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
    {#if valtop === "lr"}
    <h1>{formattedTime}</h1>
    <h1>{lr1[i].Question}</h1>
    <Radio bind:group value={1}>{lr1[i].Option1}</Radio> <br>
    <Radio bind:group value={2}>{lr1[i].Option2}</Radio> <br>
    <Radio bind:group value={3}>{lr1[i].Option3}</Radio> <br>
    <Radio bind:group value={4}>{lr1[i].Option4}</Radio> <br>
    <button type="button" on:click={handleNext}>next</button>
    {/if}
    {#if valtop === "lr2"}
    <h1>{formattedTime}</h1>
    <h1>{lr2[i].Question}</h1>
    <Radio bind:group value={1}>{lr2[i].Option1}</Radio> <br>
    <Radio bind:group value={2}>{lr2[i].Option2}</Radio> <br>
    <Radio bind:group value={3}>{lr2[i].Option3}</Radio> <br>
    <Radio bind:group value={4}>{lr2[i].Option4}</Radio> <br>
    <button type="button" on:click={handleNext}>next</button>
    {/if}
    {#if valtop === "cluster"}
    <h1>{formattedTime}</h1>
    <h1>{clus[i].Question}</h1>
    <Radio bind:group value={1}>{clus[i].Option1}</Radio> <br>
    <Radio bind:group value={2}>{clus[i].Option2}</Radio> <br>
    <Radio bind:group value={3}>{clus[i].Option3}</Radio> <br>
    <Radio bind:group value={4}>{clus[i].Option4}</Radio> <br>
    <button type="button" on:click={handleNext}>next</button>
    {/if}
    {/if}
</main>
{/if}

