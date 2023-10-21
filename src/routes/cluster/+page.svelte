<script>
    import { db } from "../../firebase1/firebaseConfig";
        import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
        import { getAuth, onAuthStateChanged } from "firebase/auth";
        import { onMount } from "svelte";
        import Radio from '../../lib/components/Radio.svelte';
        import cheme from '../../questions/clustering.json';
        let group = 0,formattedTime,i=0,correctans = 0,submitted=0;
        let timerloaded = 0,attempted = 0;
        let j = 0; let wrongans = [];
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
            else{
            wrongans[j++] = cheme[i];
        }
            group=0;
            i++;
        }
        let handlesubmit = () =>{
            if(cheme[i].CorrectOption == group){
                correctans++;
            }
            submitted = 1;
        }
    </script>
    <main>
        {#if submitted == 0}
            {#if timerloaded == 1}
                <div id="counter" class="">
                    <p>{formattedTime}</p>
                    <p class="text-[1.75vw]">MIN</p>
                </div>
                <div class="grow flex flex-col h-screen items-center justify-center gap-y-5">
                    <div id="question" class="text-white font-semibold text-[3vw] max-w-3xl"><p>{cheme[i].Question}</p></div>
                    <div id="options" class="text-white font-medium text-[2vw] flex flex-col text-right p-8 ml-8 items-start">
                        <Radio bind:group value={1}>{cheme[i].Option1}</Radio> <br>
                        <Radio bind:group value={2}>{cheme[i].Option2}</Radio> <br>
                        <Radio bind:group value={3}>{cheme[i].Option3}</Radio> <br>
                        <Radio bind:group value={4}>{cheme[i].Option4}</Radio> <br>
                    </div>
                    <div id="stats" class="flex flex-row gap-[3.5vw] m-5 text-[1.75vw]">
                        {#if i==13}
                            <button type="button" class="btn btn-error btn-sm lowercase text-[1.75vw] w-[9.75vw]" style="font-family: 'Share Tech Mono';" on:click={handlesubmit}>&lt;submit&gt;</button>
                        {/if}
                        {#if i<13}
                        <button type="button" class="btn btn-success btn-sm lowercase text-[1.75vw] w-[9.75vw]" style="font-family: 'Share Tech Mono';" on:click={handleNext}>&lt;next&gt;</button>
                        {/if}
                    </div>
                </div>
            {/if}
        {/if}
        {#if submitted==1}
        <div class="h-screen w-screen flex flex-col grow items-center justify-center">
            <p class="text-white text-4xl m-4 lowercase" style="font-family:'Share Tech Mono';">you were able to answer {correctans} questions correctly</p>
    
            <a href="/dashboard">
                <button class="btn btn-error">RETURN TO DASHBOARD</button>
            </a>
            <p class="text-white text-3xl m-4 lowercase" style="font-family:'Share Tech Mono';">your incorrect/unattempted questions:</p>
            <div class=" grow flex flex-col w-[80vw] jutsify-center text-center max-h-[67.5vh]">
                <div class="flex flex-row text-black bg-[#F88379] items-center" style="font-family:'Overpass Mono';">
                    <div class="grow m-4 text-center">
                        QUESTION
                    </div>
                    <div class="m-4 w-[40vw] text-center">
                        CORRECT
                    </div>
                </div>
                <div class="grow flex flex-col items-center" style="overflow-y: auto;">
                    {#each wrongans as { Question, CorrectOption }, i}
                    <div class="flex flex-row" style="font-family:'Overpass Mono';">
                        <div class="m-4 text-center w-[40vw]">
                            {Question}
                        </div>
                        <div class="m-4 w-[40vw] text-center">
                            {wrongans[i]["Option"+CorrectOption]}
                        </div>
                    </div>
                    {/each}
                </div>
            </div>
        </div>
        {/if}
    </main>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=Exo&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&family=Overpass+Mono&family=Ruslan+Display&display=swap');
    #counter {
        position: absolute;
        height: 11.66666vw;
        width: 11.66666vw;
        border-radius: 9999px;
        top: 39vh;
        left: 3vw;
        font-family: 'Share Tech Mono';
        font-size: 3vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        --tw-text-opacity: 1;
        color: rgb(0 0 0 / var(--tw-text-opacity));
        background-color: #85BF7B;
    }

    #questionNo {
        font-family: 'Share Tech Mono';
    }

    #question {
        font-family: 'Kaisei Tokumin';
    }

    #options {
        font-family: 'Kaisei Tokumin';
    }

    #stats {
        font-family: 'Share Tech Mono';
    }
    #quizend {
        width: auto;
        height: 100%;
        object-fit: cover;
    }
    </style>