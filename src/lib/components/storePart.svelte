<script>
    export let image = "../../assets/coupon.jpg";
    export let text = "Hello";
    export let price = 0;
    import coin from "../../assets/coin.png";
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    let redval,notenoughcoins,x,ref;
    const auth = getAuth();
    let handleredeem = async()=>{
        onAuthStateChanged(auth, async(user) => {
  if (user) { 
        x = doc(db,"playerprofiles", user.uid);
     ref = await getDoc(x);
     if(ref.data().playercoins>=redval){
        notenoughcoins = 0;
        let newcoins=ref.data().playercoins-redval;
        setDoc(x, {
       playercoins: newcoins
},{ merge: true });
     }
     else{
        notenoughcoins = 1;
     }

  }
})

    }
    $: redval = price;
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    #productimg {
        width: 13vw;
        height: 13vw;
        object-fit: cover;
    }
</style>
<div class="flex flex-col items-center">
    <div id="product" class="mb-[2vh]"> 
        <img id="productimg" src={image} class="h-50 w-auto rounded-lg" alt="" />
    </div>
    <div>
        <p class="text-[1.5vw] font-['MerriWeather'] text-white">{text}</p>
    </div>
    <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
        <img src={coin} class="h-15 w-10" alt=""/>
        <p class="text-[1.25vw] text-white">{price}</p>
    </div>
    <div>
        <button on:click={handleredeem} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
    </div>
</div>