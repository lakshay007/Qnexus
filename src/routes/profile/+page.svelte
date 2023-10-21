<script>
import { db } from "../../firebase1/firebaseConfig";
import { doc, setDoc,updateDoc,getDoc,onSnapshot } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMount } from "svelte";
let year,semester,college,regno,flag = 0,name,coins,credits;
let flag4 = 0;
import profile from "../../assets/profile.gif";
const auth = getAuth();
onMount(async()=>{
    
    onAuthStateChanged(auth, async(user) => {
        if(user){
            let x =doc(db,"playerprofiles", user.uid);
     let ref = await getDoc(x);
     let id = user.uid;
            const unsub = onSnapshot(doc(db, "playerprofiles", user.uid), async(doc) => {
        
    if(ref.data().playercoins>0){
        flag4 = 1;
        ref  =await getDoc(x);
        name = ref.data().playername;
        year = ref.data().year;
        semester = ref.data().semester;
        regno = ref.data().regno;
        coins = ref.data().playercoins;
        college = ref.data().college;

    }
    

})
            
}
        })
    })

            
        
let handlesubmit = async()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, async(user) => {
  if (user) { 
    await setDoc(doc(db, "playerprofiles",user.uid), {
        playername: [name],
        college: [college],
        semester: [semester],
        year: [year],
        regno: [regno],
        playercoins:1,
        credits:1
});
flag4 = 1;
if(!alert('Profile Created Succesfully!!')){window.location.reload();} }

});
  }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
</style>
<main class="flex flex-row grow justify-center items-center">
    
    <form action="submit_form.php" method="post" enctype="multipart/form-data" class="grow mx-16 my-0">
        
        <div class="space-y-[2rem] flex flex-row m-5 bg-gray-900 shadow rounded p-8 sm:p-12 items-center gap-x-6">
            
            <img src={profile} class="h-[70vh] rounded-lg" alt="" />
            <div class="flex flex-col grow gap-6">
                <div class="flex flex-col">
                    <label for="name" class="label font-semibold leading-none text-gray-300">Name</label>
                    {#if flag4 == 0}
                    <input type="text" class="grow input input-bordered" bind:value = {name} id="name" name="name" required>
                    {:else}
                        <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">{name}</p>
                    {/if}
                </div>
                    
                <div class="flex gap-4">
                    <div class="flex flex-col grow">
                        <label for="year" class="label font-semibold leading-none text-gray-300">Year</label>
                        {#if flag4 == 0}
                        <select id="year" class="select select-bordered" bind:value={year} name="year" required>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                        {:else}
                        <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">{year}</p>
                        {/if}
                    </div>
                    <div class="flex flex-col grow">
                        <label for="semester" class="label font-semibold leading-none text-gray-300">Semester</label>
                        {#if flag4 == 0}
                        <select id="semester" class="select select-bordered" bind:value={semester} name="semester" required>
                            <!-- <option disabled selected>SEMESTER</option> -->
                            <option value="1">Odd Semester</option>
                            <option value="2">Even Semester</option>
                        </select>
                        {:else if {semester} == "1"}
                            <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">Odd Semester</p>
                        {:else if {semester} == "2"}
                            <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">Even Semester</p>
                        {:else}
                        <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">{semester}</p>
                        {/if}
                    </div>
                </div>
    
                <div class="flex flex-col">
                    <label for="college" class="label font-semibold leading-none text-gray-300">College</label>
                    {#if flag4 == 0}
                    <select id="college" class="select select-bordered" bind:value={college} name="college" required>
                        <option value="MIT">Manipal institute of technology</option>
                        <option value="KMC">KMC</option>
                    </select>
                    {:else}
                        <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">{college}</p>
                    {/if}
                </div>
    
                <div class="flex flex-col">
                    <label for="regNumber" class="label font-semibold leading-none text-gray-300">Registration Number</label>
                    {#if flag4 == 0}
                    <input class="input input-bordered" type="text" id="regNumber" bind:value={regno} name="regNumber" required>
                    {:else}
                        <p class="font-['MerriWeather'] bg-gray-400 text-black rounded-md text-center text-xl">{regno}</p>
                    {/if}
                </div>
    
    
                <!-- <label for="userImage">User Image:</label>
                <input type="file" id="userImage" name="userImage" accept="image/*"><br><br> -->
                <div class="flex flex-row justify-center gap-3">
                    {#if flag==1 || flag4 == 1} 
                        <p class="capitalize text-3xl font-semibold"></p>
                    {:else}
                        <button type="button" class="btn btn-success w-[20vh]" on:click={handlesubmit}>submit</button>
                    {/if}
                </div>
            </div>
        </div>
    </form>
</main>