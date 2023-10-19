<script>
    import Radio from '../../lib/components/Radio.svelte';
    import { db } from "../../firebase1/firebaseConfig";
    import { doc , setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc,collection, query, where,getDocs, increment } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import questions2 from "../../questions/questions2.json";
  
    const auth = getAuth();
    let use, x, ref, formattedTime, timerloaded = 0, i = 0, attempted = 0, notatte = 0, correctans = 0, end = 0, onstate;
  
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
  
      const unsubscribe = onSnapshot(doc(db, "contest1", "meta"), async (docrefff) => {
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
            const dataArray = []; 

getDocs(q)
  .then(async(querySnapshot) => {
    querySnapshot.forEach((docreff) => {
      dataArray.push(docreff.data());
    });


    for(let l = 0;l<dataArray.length-1;l++){
        for(let j=0;j<dataArray.length-l-1;j++){
            if(dataArray[j].correctans<dataArray[j+1].correctans){
                let temp = dataArray[j];
                dataArray[j] = dataArray[j+1];
                dataArray[j+1] = temp;
            }


        }

    }
    console.log("All data:", dataArray);
    let hiMarks = dataArray[0].correctans;
    let ranks = dataArray.length;
    for(let x = 0;x<dataArray.length;x++){
        dataArray[x].markscoef = dataArray[x].correctans/hiMarks;
        dataArray[x].revrank = ranks--;
    }
    for(let x = 0;x<dataArray.length;x++){
        dataArray[x].relcoef = dataArray[x].revrank/dataArray.length;
    }
    for(let x = 0;x<dataArray.length;x++){
        dataArray[x].credits = Math.floor((Math.pow(dataArray[x].markscoef,0.5)* Math.pow(dataArray[x].relcoef,0.5)*50));

    }
    for(let j = 0;j<dataArray.length;j++){

    await setDoc(doc(db, "playerprofiles",dataArray[j].uid), {
        "playercoins": increment(dataArray[j].credits),
        "credits":increment(dataArray[j].credits)
    },{merge:true})
}
    

  })
        }});

      
    });

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
  
  <main>
    {#if onstate == 1}
      {#if end == 0 }
        {#if timerloaded == 1}
          <h1>{formattedTime}</h1>
          <h1>{questions2[i].Question}</h1>
          <Radio bind:group value={1}>{questions2[i].Option1}</Radio> <br>
          <Radio bind:group value={2}>{questions2[i].Option2}</Radio> <br>
          <Radio bind:group value={3}>{questions2[i].Option3}</Radio> <br>
          <Radio bind:group value={4}>{questions2[i].Option4}</Radio> <br>
          {#if i == 14}
            <button type="button" on:click={handleNext}>submit</button>
          {:else}
            <button type="button" on:click={handleNext}>next</button>
          {/if}
        {/if}
      {/if}
      {#if end == 1}
        <h1>quiz has ended</h1>
      {/if}
    {/if}
    {#if onstate == -1}
      <h1>quiz has ended</h1>
    {/if}
    {#if onstate == 0}
      <h1>waiting for contest to start</h1>
    {/if}
  </main>
  