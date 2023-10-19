<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import questions from "../../questions/questions.json"
    let attempted = 0;
    let notattempted = 0;
    let namef1,namef2;
    let player1score ,player2score;
    let pname;
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
    if(attempted+notattempted<=i)
    attempted++;
    if(questions[i].answer==1 &&l==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
    l = 1;}
    qw=1;
}
let func2 = ()=>{
    if(attempted+notattempted<=i)
    attempted++;
    if(questions[i].answer==2 && m==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   m = 1; }
   we=1;
}
let func3 = ()=>{
    if(attempted+notattempted<=i)
    attempted++;
    if(questions[i].answer==3 &&n==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   n = 1; }
   er=1;
}
let func4 = ()=>{
    if(attempted+notattempted<=i)
    attempted++;
    if(questions[i].answer==4 &&o==0){
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
<main>
    {#if cnt<11}
{#if flag==0}
<h1>waiting for both players to be connected</h1>
{/if}
{#if flag==1}
<h1>both players connected, starting the game</h1>
{/if}
{#if flag==3}
<h1>{countdown}</h1>
<h1>question number: {i+1}</h1>
<h1>{questions[i].question}</h1>
<a href="#" on:click={func1}>a. {questions[i].option1}</a> <br> 
<a href="#" on:click={func2}>b. {questions[i].option2}</a><br>
<a href="#" on:click={func3}>c. {questions[i].option3}</a><br>
<a href="#" on:click={func4}>d. {questions[i].option4}</a><br>
{#if cnt==10}
<button type="button" on:click={handleNext}>end quiz</button>
{:else}
<button type="button" on:click={handleNext}>next</button>
{/if}
  
    <h3>attempted: {attempted}</h3>
    <h3>skipped: {notattempted}</h3>
{/if}
{/if}
{#if cnt>=11}
<h1>quiz has ended</h1>
<h1>your results:</h1>
<h2>questions attempted: {attempted}</h2>
<h2>correct answers: {ans}</h2>
<h2>question not attempted: {notattempted}</h2>
{#if bothfinished==0 }
<h1>waiting for opponent to finish</h1>
{/if}

{#if bothfinished==1 }
<h1>both players have finished</h1>
{#if pname == name1}
<h1>your opponent scored: {player2score}</h1>
{#if player2score>player1score}
<h1>you lose!!!</h1>
{:else} <h1>you win!!</h1>
{/if}
{/if}
{#if pname == name2}
<h1>your opponent scored: {player1score}</h1>
{#if player2score<player1score}
<h1>You Lost This Round!</h1>
{:else} <h1>You Won This Round!</h1>
{/if}
{/if}
<button type="button" on:click={handlehome}>go back to dashboard</button>
{/if}
{/if}

</main>
<style>

</style>