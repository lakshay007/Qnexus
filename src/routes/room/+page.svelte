<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import questions from "../../questions/questions.json"
    let ans = 0;
    let a;
    let flag = 0;
    let i = 0;
    let x,ref;
    const auth = getAuth();
    onMount(async() => {
         x = doc(db,"room", "one");
     ref = await getDoc(x);
     const unsubscribe = onSnapshot(doc(db, "room", "one"), async(doc) => {
        if(ref.data().player1state==="connected" &&ref.data().player1state==="connected"){
        flag = 1

    }
});
unsubscribe();
setTimeout(() => {
    flag = 3;
    }, 3000);
    
    
    onAuthStateChanged(auth, (user) => {
  if (user) { 
     a = user.displayName + "score"
    setDoc(x, {
       [a]: ans
},{ merge: true });
     
  } 
});  
     

	
});
let attempted = 0;
let l,m,n,o;
l = m = n = 0;
let func1 = ()=>{
    if(attempted==i)
    attempted++;
    if(questions[i].answer==1 &&l==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
    l = 1;}
}
let func2 = ()=>{
    if(attempted==i)
    attempted++;
    if(questions[i].answer==2 && m==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   m = 1; }
}
let func3 = ()=>{
    if(attempted==i)
    attempted++;
    if(questions[i].answer==3 &&n==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   n = 1; }
}
let func4 = ()=>{
    if(attempted==i)
    attempted++;
    if(questions[i].answer==4 &&o==0){
        ans++;
        setDoc(x, {
       [a]: ans
},{ merge: true });
   o = 1; }
}
let handleNext = () =>{
    l = m = n = o = 0;
    i++;
}
let handlePrev = () =>{
    if(i!=0)
    i--;

}




    
</script>
<main>
{#if flag==0}
<h1>waiting for both players to be connected</h1>
{/if}
{#if flag==1}
<h1>both players connected, starting the game</h1>
{/if}
{#if flag==3}
<h1>{questions[i].question}</h1>
<a href="#" on:click={func1}>a. {questions[i].option1}</a> <br> 
<a href="#" on:click={func2}>b. {questions[i].option2}</a><br>
<a href="#" on:click={func3}>c. {questions[i].option3}</a><br>
<a href="#" on:click={func4}>d. {questions[i].option4}</a><br>
    <button type="button" on:click={handleNext}>next</button>
    <h3>attempted: {attempted}</h3>
{/if}

</main>
<style>

</style>