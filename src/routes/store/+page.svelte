<script>
    let coins = 1000;
    let current = 200;
    import money from "../../assets/money.png";
    import coin from "../../assets/coin.png"
    import StorePart from "../../lib/components/storePart.svelte";
    import coupon from "../../assets/coupon.jpg";
    import food from "../../assets/foodcoupon.jpg";
    import tshirt from "../../assets/mitTshirt.jpg";
    import hoodie from "../../assets/mitHoodie.jpg";
    import { db } from "../../firebase1/firebaseConfig";
    import { doc , setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc,collection, query, where,getDocs, increment, orderBy, limit} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    let redval,notenoughcoins,x,ref,loaded = 0,x1,ref1;
    const data = [];
    const auth = getAuth();
    onMount( async()=>{
        
        let docref = collection(db, "items");
    
    const q = query(docref, where("count", ">=",-100),limit(100));
        await getDocs(q)
        .then(async(querySnapshot) => {
        querySnapshot.forEach(async(docreff) => {
        data.push( docreff.data());

    });
    loaded  = 1;
   
})
console.log(data);
})
let handleredeem = async(itemnum)=>{
        onAuthStateChanged(auth, async(user) => {
  if (user) { 
        x = doc(db,"playerprofiles", user.uid);
     ref = await getDoc(x);
     x1 = doc(db,"items", data[itemnum].name);
     ref1 = await getDoc(x1);
     let cnt = data[itemnum].count;
     if(ref.data().playercoins>=ref1.data().price){
        alert("purchase successful");
        notenoughcoins = 0;
        let newcoins=ref.data().playercoins-ref1.data().price;
        setDoc(x, {
       playercoins: newcoins
},{ merge: true });
setDoc(x1, {
       count: cnt-1
},{ merge: true });
onAuthStateChanged(auth, async(user) => {
  if (user) { 
await setDoc(doc(db, "orders", user.uid), {
  [data[itemnum].name]:increment(1)
},{merge:true});  
  }})
}
     else{
        notenoughcoins = 1;
     }

  }
})

    }

    
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    #productimg {
        width: 13vw;
        height: 13vw;
        object-fit: cover;
    }
</style>
<main class="grow flex flex-row items-center justify-evenly">
    <div class=" flex flex-col justify-center items-center gap-y-[1vh]">
        <div class="font-['MerriWeather'] font-bold text-center text-white">
            V A U L T
        </div>
        <div class="flex flex-row items-center ">
           
            
        </div>
        <div class="">
            <img src={money} class="w-[16vw] h-auto" alt=""/>
        </div>
    </div>
    <div class="flex flex-row flex-wrap m-[5vw] gap-[2vw]">
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={coupon} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            <div>
                {#if loaded == 1}
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">{data[3].name}</p>
                {/if}
            </div>
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                {#if loaded == 1}
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">{data[3].price}</p>
                {/if}
                
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else} -->
                    <button on:click={() => handleredeem(3)} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                <!-- {/if} -->
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={food} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            <div>
                {#if loaded == 1}
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">{data[2].name}</p>
                {/if}
            </div>
            
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                {#if loaded == 1}
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">{data[2].price}</p>
                {/if}
                
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else} -->
                    <button on:click={() => handleredeem(2)} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                <!-- {/if} -->
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={tshirt} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            {#if loaded == 1}
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">{data[1].name}</p>
                {/if}
                
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                {#if loaded == 1}
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">{data[1].price}</p>
                {/if}
                
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else} -->
                    <button on:click={() => handleredeem(1)} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                <!-- {/if} -->
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={hoodie} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            {#if loaded == 1}
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">{data[0].name}</p>
                {/if}
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                {#if loaded == 1}
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">{data[0].price}</p>
                {/if}
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else} -->
                    <button on:click={() => handleredeem(0)} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                <!-- {/if} -->
            </div>
        </div>
    </div>
</main>