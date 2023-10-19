<script>
    let coins = 1000;
    let current = 200;
    import money from "../../assets/money.png";
    import coin from "../../assets/coin.png"

    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    let redval,notenoughcoins;
    let handleredeem = async()=>{
        onAuthStateChanged(auth, async(user) => {
  if (user) { 
        x = doc(db,"playerprofiles", user.uid);
     ref = await getDoc(x);
     if(ref.data().playercoins>=redval){
        notenoughcoins = 0;
        let newcoins=ref.data().playercoins-redval;
        setDoc(x, {
       playercoins: [newcoins]
},{ merge: true });
     }
     else{
        notenoughcoins = 1;
     }

  }
})

    }

    import StorePart from "../../lib/components/storePart.svelte";
    import coupon from "../../assets/coupon.jpg";

</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
</style>
<main class="grow flex flex-row items-center justify-evenly">
    <div class=" flex flex-col justify-center items-center gap-y-[1vh]">
        <div class="font-['MerriWeather'] font-bold text-center text-white">
            V A U L T
        </div>
        <div class="flex flex-row items-center ">
            <img src={coin} class="h-auto w-[5vw]" alt=""/>
            <p class="text-[3.333vw] font-['MerriWeather'] text-white">{current}/{coins}</p>
        </div>
        <div class="">
            <img src={money} class="w-[16vw] h-auto" alt=""/>
        </div>
    </div>
    <div class="flex flex-row flex-wrap m-[5vw] gap-[2vw]">
        <StorePart image={coupon} text="Coupon at max" price="100"></StorePart>
        <StorePart image={coupon} text="Coupon at max" price="100"></StorePart>
        <StorePart image={coupon} text="Coupon at max" price="100"></StorePart>
        <StorePart image={coupon} text="Coupon at max" price="100"></StorePart>
    </div>
</main>