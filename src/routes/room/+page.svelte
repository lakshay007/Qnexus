<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import corrq from '../../questions/questions.json';
    import electr from '../../questions/questionse.json';
    import lr1 from '../../questions/lr1.json'
    import lr2 from '../../questions/lr2.json'
    import clus from '../../questions/clustering.json'
    import cheme from '../../questions/questionschem.json';
    import roomimg from "../../assets/room.png";
    import quizend from "../../assets/quizend.gif";
    let x11,ref1;
    let selected = [];
    let attempted = 0;
    let notattempted = 0;
    let namef1,namef2;
    let player1score ,player2score;
    let pname,high;
let l,m,n,o;
l = 0;m = 0;n=0;o=0;
let qw,we,er,rt;
qw=0;we=0;er=0;rt=0;
    let ans = 0;
    let a;
    let finished,bothfinished = 0;
    let flag = 0;
    let i = 0;
    let x,ref;
    let name1,name2;
    const auth = getAuth();
    onMount(async() => {
        
         x = doc(db,"room", "one");
     ref = await getDoc(x);
     x11 = doc(db,"topicselected", "one");
     ref1 = await getDoc(x11);

     if(ref1.data().selected == "corrosion"){
        selected = [...corrq];
        
     }
     if(ref1.data().selected == "electrochem"){
        selected = [...electr];
     }
     if(ref1.data().selected == "linear"){
        selected = [...lr1];
        console.log(selected);
     }
     if(ref1.data().selected == "logistic"){
        selected = [...lr2];
     }
     
     name1 = ref.data().player1name;
     name2 = ref.data().player2name;
     namef1 = name1+"finished";
     namef2 = name2+"finished";

     console.log(name1)
     console.log(name2)
     bothfinished = 0;
     const unsubscribe = onSnapshot(doc(db, "room", "one"), async(doc) => {
        if(ref.data().player1state==="connected" &&ref.data().player1state==="connected"){
        flag = 1;


    }
});
onAuthStateChanged(auth, (user) => {
  if (user) { 
    pname = user.displayName;
    finished = user.displayName + "finished";
     a = user.displayName + "score";
    setDoc(x, {
       [a]: ans,
       [finished]:0
},{ merge: true });
     
  } 
});  

const unsub = onSnapshot(doc(db, "room", "one"), async(doc) => {
    ref = await getDoc(x);
    if(ref.data()[namef1]==1 &&  ref.data()[namef2]==1  ){       
    bothfinished = 1;
    onAuthStateChanged(auth, async (user) => {
    player1score = await ref.data()[name1+"score"];
    player2score = await ref.data()[name2+"score"];
    console.log(player2score);})
    unsub();


}
});

unsubscribe();
setTimeout(() => {
    flag = 3;
    }, 3000);
    
    
    
	
});

let func1 = ()=>{
    high =1;
    if(attempted+notattempted<=i)
    attempted++;
    if(selected[i].CorrectOption==1 &&l==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
    l = 1;}
    qw=1;
}
let func2 = ()=>{
    high = 2;
    if(attempted+notattempted<=i)
    attempted++;
    if(selected[i].CorrectOption==2 && m==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   m = 1; }
   we=1;
}
let func3 = ()=>{
    high =3;
    if(attempted+notattempted<=i)
    attempted++;
    if(selected[i].CorrectOption==3 &&n==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   n = 1; }
   er=1;
}
let func4 = ()=>{
    high = 4;
    if(attempted+notattempted<=i)
    attempted++;
    if(selected[i].CorrectOption==4 &&o==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   o = 1; }
   rt=1;
}
let end = 0;
let cnt=1;
let handleNext = () =>{
    if(qw==0&&we==0&&er==0&&rt==0&&i<10 &&cnt<11)
    notattempted++;
    qw=0;we=0;er=0;rt=0;
    l = 0;m = 0;n = 0;o = 0;
    if(i<9)
    i++;
    countdown = 16;
    cnt++;
    if(cnt>=11){
            setDoc(x, {
                [finished]: 1
            },{ merge: true });
    }
    high = 0;
}
if(i==9) end = 1;
let countdown = 15;
onMount(() => {
		setInterval(() => {
            if(flag===3){
                if(countdown===0){
    handleNext();
}
            if(countdown>0)
			countdown -= 1;}
	  }, 1000);
	}) 
let handlehome = async()=>{
    await deleteDoc(doc(db, "room", "one"));
    window.location.href = "dashboard"
}
    
    
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Exo&family=Kaisei+Tokumin:wght@500&family=Merriweather&family=Share+Tech+Mono&display=swap');
    #roomimg {
        width: 18vw;
        height: auto;
        position:absolute;
        z-index: -1;
    }
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
    .option-selected-ans {
        background: white;
        color: black;
        border-radius: 5px;
    }
    .countdown-red {
        background-color: #ff0000;
    }
    .countdown-orange {
        background-color: #ffa500;
    }
    .countdown-green {
        background-color: #85BF7B;
    }
</style>
<main>
    {#if cnt<11}
        {#if flag==0}
            <div class="h-screen w-screen flex flex-col justify-center items-center gap-4">
                <span class="loading loading-spinner loading-lg"></span>
                <p class="capitalize text-4xl font-['MerriWeather']">Waiting for both players to be connected</p>
            </div>
        {/if}
        {#if flag==1}
            <div class="h-screen w-screen flex flex-col justify-center items-center gap-4">
                <p class="capitalize text-4xl font-['MerriWeather']">both players connected, starting the game</p>
            </div>
        {/if}
        {#if flag==3}
            <div class="h-screen w-screen flex flex-row grow items-center">
                <div class="flex flex-col h-screen items-start justify-end">
                    <div id="counter"
                    class:countdown-green={countdown > 7}
                    class:countdown-orange={countdown <= 7 && countdown >= 4}
                    class:countdown-red={countdown < 4}>
                        <p>{countdown}</p>
                        <p class="text-[1.75vw]">SEC</p>
                    </div>
                    <img id="roomimg" src={roomimg} alt="" class=""/>
                </div>
                <div class="grow flex flex-col items-center">
                    <div id="questionNo" class="bg-[#D0F3FF] rounded-full mb-[3vh] w-[15vw]">
                        <div class="mx-[1vw] text-center text-black text-[2vw] font-normal font-['Share Tech Mono'] ">question: {i+1}</div>
                    </div>
                    <div id="question" class="text-white font-semibold text-[3vw] max-w-3xl">{selected[i].Question}</div>
                    <div id="options" class="text-white font-medium text-[2vw] flex flex-col text-right p-8 ml-8 items-start">
                        <button id="option1" class="" on:click={func1}
                        class:option-selected-ans = {high==1}
                        >A. {selected[i].Option1}</button>
                        <button id="option2" on:click={func2} class:option-selected-ans = {high==2}>B. {selected[i].Option2}</button>
                        <button id="option3" on:click={func3} class:option-selected-ans = {high==3}>C. {selected[i].Option3}</button>
                        <button id="option4" on:click={func4} class:option-selected-ans = {high==4}>D. {selected[i].Option4}</button>
                    </div>
                    <div id="stats" class="flex flex-row gap-[3.5vw] m-5 text-[1.75vw]">
                        <div id="attempted" class="text-[#D0F3FF]">attempted: {attempted}</div>
                        <div id="not" class="text-[#D0F3FF]">skipped: {notattempted}</div>
                        {#if cnt==10}
                            <button type="button" class="btn btn-error btn-sm lowercase text-[1.75vw] w-[9.75vw]" style="font-family: 'Share Tech Mono';" on:click={handleNext}>&lt;end&gt;</button>
                        {:else}
                            <button type="button" class="btn btn-success btn-sm lowercase text-[1.75vw] w-[9.75vw]" style="font-family: 'Share Tech Mono';" on:click={handleNext}>&lt;next&gt;</button>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    {/if}
    {#if cnt>=11}
        <div class="h-screen w-screen flex flex-row grow items-center bg-[#171717] ">
            <div class="flex flex-col w-[50vw] h-screen items-center justify-center ">
                <img id="quizend" src={quizend} alt="cow" class="" />
            </div>
            <div class="grow flex flex-col h-screen items-center justify-center gap-y-5">
                <div class="w-[26.4vw] text-center text-cyan-100 text-6xl font-normal" style="font-family:'Share Tech Mono'">QUIZ HAS ENDED</div>
                <div class="text-center text-cyan-100 text-[2.08333vw] font-normal" style="font-family:'Share Tech Mono'">your results:</div>
                <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">questions attempted: {attempted}</div>
                <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">correct answers: {ans}</div>
                <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">questions unattempted: {notattempted}</div>
                {#if bothfinished==0 }
                    <div class="text-center text-[#85BF7B] text-4xl font-normal" style="font-family:'Share Tech Mono'">WAITING FOR OPPONENT TO FINISH</div>
                {/if}

                {#if bothfinished==1 }
                    <div class="text-center text-[#85BF7B] text-4xl font-normal" style="font-family:'Share Tech Mono'">BOTH PLAYERS HAVE FINISHED</div>
                    {#if pname == name1}
                        <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">your opponent has scored: {player2score}</div>
                        {#if player2score>player1score}
                            <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU LOSE!</div>
                        {:else} 
                            <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU WIN!</div>
                        {/if}
                    {/if}
                    {#if pname == name2}
                        <div class="text-center text-white text-4xl font-normal" style="font-family:'Share Tech Mono'">your opponent has scored: {player1score}</div>
                        {#if player2score<player1score}
                            <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU LOSE!</div>
                        {:else} 
                            <div class="text-center text-cyan-100 text-4xl font-extrabold" style="font-family:'Exo'">YOU WIN!</div>
                        {/if}
                    {/if}
                    <button type="button" class="btn btn-error btn-sm lowercase text-[1.75vw] w-[25vw]" style="font-family: 'Share Tech Mono';" on:click={handlehome}>GO BACK TO DASHBOARD</button>
                {/if}
            </div>
        </div>  
    {/if}
</main>