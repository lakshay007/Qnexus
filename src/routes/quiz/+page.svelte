<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc } from "firebase/firestore"; 
    import { getAuth } from "firebase/auth";
    import ContestIcon from "../../lib/components/contestIcon.svelte";
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
    @import url('https://fonts.googleapis.com/css2?family=Acme&family=DM+Sans:opsz@9..40&family=K2D&family=Kaisei+Tokumin&family=Karma:wght@500&family=KoHo:wght@500&family=Merriweather&family=Offside&display=swap');
    #challenges {
        background: url("../../assets/challenges.jpeg"), linear-gradient(#000000 100%, #000000 100%);
        background-size: auto 300%;
        background-repeat: no-repeat;
        background-position: center left;
        font-family: "Acme";
    }
    #onevsone {
        background: url("../../assets/1v1.jpeg"), linear-gradient(#000000 100%, #000000 100%);
        background-size: auto 180%;
        background-repeat: no-repeat;
        background-position: center left;
    }
</style>
<main class="flex flex-col grow items-center">
    <div id="challenges" class=" flex flex-row h-[12.222vh] my-[4vh] w-[72vw] justify-end items-center">
        <div class="font-medium text-4xl text-grey-800 mr-[13vw]">
            CHALLENGES
        </div>
    </div>
    <div id="onevsone" class="w-[67.5vw] h-[20vh] mb-[4vh] flex flex-col justify-center items-end">
        <div class="flex flex-col items-center">
            <div>
                <div class="w-[310px] text-center">
                    <span class="text-white text-[3.33vw] font-light font-['Merriweather'] mr-5">1v1 </span>
                    <span class="text-white text-[3vw] font-light font-['Merriweather']">League</span>
                </div>
            </div>
            <div class="mb-5">
                <button on:click={click} class="btn btn-wide btn-error mr-9">
                    <p class="font-['Merriweather']">p l a y</p>
                </button>
                <button><a href="/join" class="btn btn-wide btn-success mr-9">
                    <p class="font-['Merriweather']">j o i n</p>
                </a></button>
            </div>
        </div>
    </div>
    <div id="upcoming" class="w-[67.5vw] mb-[3.25vh]">
        <div class="text-left text-white text-3xl font-normal font-['Offside']"> Upcoming Weekly Contests</div>
        <hr>
    </div>
    <div id="contests" class="grow w-[67.5vw] mb-[3.25vh] flex flex-row gap-x-[8vw]">
        <div class="">
            <ContestIcon>
                <a href="/contests" >
                    contest1
                </a>
            </ContestIcon>
        </div>
        <div class="">
            <ContestIcon>
                <a href="/contests" >
                    contest2
                </a>
            </ContestIcon>
        </div>
    </div>
</main>