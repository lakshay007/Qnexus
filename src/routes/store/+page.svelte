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
    import { doc, setDoc,updateDoc,addDoc,getDoc,onSnapshot,deleteDoc} from "firebase/firestore"; 
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
    
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
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">Coupon at max</p>
            </div>
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">100</p>
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else}
                    <button on:click={handleredeem} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                {/if} -->
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={food} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            <div>
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">Food Coupon FC</p>
            </div>
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">300</p>
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else}
                    <button on:click={handleredeem} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                {/if} -->
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={tshirt} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            <div>
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">MIT TShirt</p>
            </div>
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">700</p>
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else}
                    <button on:click={handleredeem} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                {/if} -->
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div id="product" class="mb-[2vh]"> 
                <img id="productimg" src={hoodie} class="h-50 w-auto rounded-lg" alt="" />
            </div>
            <div>
                <p class="text-[1.5vw] font-['MerriWeather'] text-white">MIT Hoodie</p>
            </div>
            <div class="flex flex-row items-center mb-[1.5vh] gap-x-[0.5vw]">
                <img src={coin} class="h-15 w-10" alt=""/>
                <p class="text-[1.25vw] text-white">1000</p>
            </div>
            <div>
                <!-- {#if stock == 0}
                    <p class="text-white font-['MerriWeather']">Stock is out!</p>
                {:else}
                    <button on:click={handleredeem} class="btn bg-[#FEC842] text-white btn-sm w-[16vh]">REDEEM</button>
                {/if} -->
            </div>
        </div>
    </div>
</main>