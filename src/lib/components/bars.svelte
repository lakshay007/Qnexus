<script>
    import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import coin from "../../assets/coin.png";
    import logo from "../../assets/QNexus_Black-removebg-preview.png";
    import SideBarIcons from '$lib/components/SideBarIcons.svelte';
    import BsBook from 'svelte-icons-pack/bs/BsBookHalf';
    import BsJoystick from 'svelte-icons-pack/bs/BsJoystick';
    import BsHouseFill from 'svelte-icons-pack/bs/BsHouseFill';
    import BsBar from 'svelte-icons-pack/bs/BsBarChartFill';
    import BsCoin from 'svelte-icons-pack/bs/BsCoin';
    let x,ref;
    const handlesignout = () =>{ 
        signOut(auth).then(() => {     
            window.location.href = "/";
        }).catch((error) => {
            console.log("Error during signout.");
        });
    }
    const auth = getAuth();
    let coins = 0;
    onMount(async()=>{
         coins = 0;
        onAuthStateChanged(auth, async(user) => {
        x = doc(db,"playerprofiles", user.uid);
     ref = await getDoc(x);
     coins = ref.data().playercoins;
        })

    })
</script>
<style>
    #main{
        background: linear-gradient(180deg, #2F303A 0%, rgba(47, 48, 58, 0) 72.29%);
        overflow: hidden;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    #navbar1{
        flex-shrink: 1;
    }
    #sidebar{
        flex-grow: 1;
    }
</style>
<main class="">
    <div id="main" class="h-screen bg-transparent">
        <div id="navbar1" class="bg-white flex flex-row items-center p-3 shadow-2xl">
            <div class="flex-1">
                <div class="flex flex-row mx-5 group gap-4 ">
                    <img src={logo} alt="qnexus logo" class="" style="height: 36px"/>
                    <p class="normal-case font-semibold text-3xl text-black" style="font-family: Merriweather">QNexus</p>
                </div>
            </div>
            <div class="flex flex-row gap-4 mx-5 text-black" style="font-family: Merriweather">
                <a class="" href="/store">        
                    <div class="h-[6.75vh] w-[11vw] bg-black rounded-3xl flex flex-row">
                        <img src={coin} alt=""/>
                        <p class="text-white text-right grow text-[4.5vh] mx-[1vw]">{coins}</p>
                    </div>
                </a>
                <div class="btn btn-ghost"><a class="normal-case text-2xl font-semibold" href="/profile">Profile</a></div>
                <div class="btn btn-ghost"><button class="normal-case text-2xl font-semibold" on:click={handlesignout}>Sign Out</button></div>
            </div>
        </div>
        <div id="sidebar" class="bg-transparent flex flex-row flex-shrink-0">
            <div class=" w-[6.25vw] m-0 flex flex-col gap-y-[3vh] bg-transparent text-white">
                <div class="h-[3vh]"></div>
                <a href="/dashboard"><SideBarIcons styleid={BsHouseFill} text="Home"></SideBarIcons></a>
                <a href="/material"><SideBarIcons styleid={BsBook} text="Learn"></SideBarIcons></a>
                <a href="/quiz"><SideBarIcons styleid={BsJoystick} text="Compete"></SideBarIcons></a>
                <a href="/store"><SideBarIcons styleid={BsCoin} text="Store"></SideBarIcons></a>
                <a href="/leaderboard"><SideBarIcons styleid={BsBar} text="LeaderBoard"></SideBarIcons></a>
            </div>
            <slot />
        </div>
    </div>
</main>