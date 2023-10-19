<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc } from "firebase/firestore"; 
    import { getAuth } from "firebase/auth";
    const auth = getAuth();
const user = auth.currentUser;
 setDoc(doc(db, "gamestate", "one"), {
  gamestate: 0,
  playercount: 0
});
let flag = 0;
const state = doc(db,"gamestate", "one");
const click = async() =>{
    await updateDoc(state, {
        gamestate:1,
        playercount:flag+1
    });
    flag++;
    window.location.href = "play";  
}
</script>
<style>
    #challenges {
        background-size: 35% auto;
        background: url("../../assets/challenges.jpeg"), linear-gradient(#000000 100%, #000000 100%);
        background-repeat: no-repeat;
        background-position: center left;
    }
</style>
<main class="flex flex-col grow items-center">
    <div id="challenges" class=" flex flex-row h-[12.222vh] my-[4vh] w-[72vw] justify-end items-center">
        <div class="font-bold text-3xl text-white mr-5">
            CHALLENGES
        </div>
    </div>
    <div id="onevsone" class="bg-green-400 w-[67.5vw] h-[20vh] mb-[4vh]">
        <button on:click={click} >
            play
        </button>
        <a href="/join" >
            join
        </a>
    </div>
    <div id="upcoming" class="bg-red-400 w-[67.5vw] mb-[3.25vh]">
        upcoming
    </div>
    <div id="contests" class="grow bg-yellow-700 w-[67.5vw] mb-[3.25vh]">
        <a href="/contests" >
            contest1
        </a>
        <a href="/contests" >
            contest2
        </a>
    </div>
</main>