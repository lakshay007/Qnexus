<script>
    import Radio from '../../lib/components/Radio.svelte';
    import { db } from "../../firebase1/firebaseConfig";
    import { doc , setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc,collection, query, where,getDocs, increment } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import questions2 from "../../questions/questions2.json";
    import contestbelow from "../../assets/contestbelow.png";
    import contestabove from "../../assets/contestabove.png";
    import contestend from "../../assets/contestend.gif";
    let awaitime = 0;
    const dataArray = []; 
    let cnttt=0;
  
    const auth = getAuth();
    let use, x, ref, formattedTime, timerloaded = 0, i = 0, attempted = 0, notatte = 0, correctans = 0, end = 0, onstate;
  let yoid;
    onMount(async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          use = user.uid;
          await setDoc(doc(db, "contest1", user.uid), {
            "playername": user.displayName,
            "uid": user.uid,
            "credits":0,
            "markscoef":0,
            "revrank":0,
            "relcoef":0,
            "totalcred":50
        

          });
        }
      });
  
      let unsubscribe = onSnapshot(doc(db, "contest1", "meta"), async (docrefff) => {
        onstate = docrefff.data().state;
        if (onstate == 1) {
           let countdown = 1200;
          const timer = setInterval(() => {
            timerloaded = 1;
            if (countdown > 0 ) {
              const minutes = Math.floor(countdown / 60);
              const seconds = countdown % 60;
              formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
              countdown -= 1;
            }
          }, 1000);
        }
        if(docrefff.data().state==-1){
            console.log("ended");
            let docref = collection(db, "contest1");
            const q = query(docref,where("correctans",">=",0) );
            

await getDocs(q)
  .then(async(querySnapshot) => {
    querySnapshot.forEach(async(docreff) => {
      dataArray.push( docreff.data());
      console.log("ho");
   unsubscribe(); });
})


    for(let l = 0;l<dataArray.length-1;l++){
        for(let j=0;j<dataArray.length-l-1;j++){
            if(dataArray[j].correctans<dataArray[j+1].correctans){
                let temp = dataArray[j];
                dataArray[j] = dataArray[j+1];
                dataArray[j+1] = temp;
            }


        }

    }
    
    let hiMarks = dataArray[0].correctans;
    let ranks = dataArray.length;
    for(let x = 0;x<dataArray.length;x++){
        if(dataArray[x].uid == use) yoid = x;
        dataArray[x].markscoef = dataArray[x].correctans/hiMarks;
        dataArray[x].revrank = ranks--;
    }
    for(let x = 0;x<dataArray.length;x++){
        dataArray[x].relcoef = dataArray[x].revrank/dataArray.length;
    }
    for(let x = 0;x<dataArray.length;x++){
        dataArray[x].credits = Math.floor((Math.pow(dataArray[x].markscoef,0.5)* Math.pow(dataArray[x].relcoef,0.5)*50));

    }
    console.log("All data:", dataArray);
    update();
    
        }});

      
    });
    const update = async() =>{
        cnttt++;
        if(cnttt===1){
            console.log(yoid);
            console.log(dataArray[yoid].credits);
               await setDoc(doc(db, "playerprofiles", use), {
                "credits": increment(dataArray[yoid].credits),
                "playercoins": increment(dataArray[yoid].credits)
                },{merge:true});
            
        }
    }

    let group = 0;
  
    let handleNext = async () => {
      if (questions2[i].CorrectOption == group) {
        correctans = correctans+5;
        await setDoc(doc(db, "contest1", use), {
          "correctans": correctans
        },{merge:true});
      }
      i++;
      group = 0;
      if (i >= 15) {
        end = 1;
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
    #roomimg {
        width: 22vw;
        height: auto;
        position:absolute;
        z-index: 1;
    }
    #counter {
        position: relative;
        height: 11.66666vw;
        width: 11.66666vw;
        border-radius: 9999px;
        bottom: 32vh;
        left: 3vw;
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

    .counter-text {
      position: relative;
      left: 5vw;
      bottom: 38vh;
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
  </style>
  <main>
    {#if onstate == 1}
      {#if end == 0 }
        {#if timerloaded == 1}
          <div class="h-screen w-screen flex flex-row grow items-center">
                <div class="flex flex-col h-screen items-start justify-end">
                  <img src={contestabove} class="absolute top-0 w-[22vw]" alt=""/>
                  <div class="text-white text-xl counter-text" style="font-family:'Share Tech Mono';">
                    time is ticking.
                  </div>
                    <div id="counter" class="">
                        <p>{formattedTime}</p>
                        <p class="text-[1.75vw]">MIN</p>
                    </div>
                    <img id="roomimg" src={contestbelow} alt="" class=""/>
                </div>
                <div class="grow flex flex-col items-center">
                    <div id="questionNo" class="bg-[#D0F3FF] rounded-full mb-[3vh] w-[15vw]">
                        <div class="mx-[1vw] text-center text-black text-[2vw] font-normal font-['Share Tech Mono'] ">question: {i+1}</div>
                    </div>
                    <div id="question" class="text-white font-semibold text-[3vw] max-w-3xl">{questions2[i].Question}</div>
                    <div id="options" class="text-white font-medium text-[2vw] flex flex-col text-right p-8 ml-8 items-start">
                        <Radio bind:group value={1}>{questions2[i].Option1}</Radio>
                        <Radio bind:group value={2}>{questions2[i].Option2}</Radio>
                        <Radio bind:group value={3}>{questions2[i].Option3}</Radio>
                        <Radio bind:group value={4}>{questions2[i].Option4}</Radio> 
                    </div>
                    <div id="stats" class="flex flex-row gap-[3.5vw] m-5 text-[1.75vw]">
                        {#if i==14}
                            <button type="button" class="btn btn-error btn-sm lowercase text-[1.75vw] w-[9.75vw]" style="font-family: 'Share Tech Mono';" on:click={handleNext}>&lt;submit&gt;</button>
                        {:else}
                            <button type="button" class="btn btn-success btn-sm lowercase text-[1.75vw] w-[9.75vw]" style="font-family: 'Share Tech Mono';" on:click={handleNext}>&lt;next&gt;</button>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
      {/if}
      {#if end == 1}
      <div class="h-screen w-screen flex flex-row grow items-center">
        <p class="text-white text-4xl m-4 lowercase" style="font-family:'Share Tech Mono';">quiz has ended</p>
        <a href="/dashboard">
          <button class="btn btn-error">RETURN TO DASHBOARD</button>
        </a>
        <img src={contestend} class="w-[60vw]" alt="">
      </div>
      {/if}
    {/if}
    {#if onstate == -1}
    <div class="h-screen w-screen flex flex-col grow items-center bg-black">
      <p class="text-white text-4xl m-4 lowercase text-center mt-[5vh]" style="font-family:'Share Tech Mono';">quiz has ended, results will be reflected on the leaderboard shortly</p>
      <a href="/dashboard">
        <button class="btn btn-error">RETURN TO DASHBOARD</button>
      </a>
      <img src={contestend} class="w-[60vw]" alt="">
    </div>
    {/if}
    {#if onstate == 0}
    <div class="h-screen w-screen flex flex-col grow items-center justify-center bg-black">
      <p class="text-white text-4xl m-4 lowercase text-center mt-[5vh]" style="font-family:'Share Tech Mono';">waiting for contest to start</p>
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    {/if}
  </main>
  