<script>
import { db } from "../../firebase1/firebaseConfig";
import { doc, setDoc,updateDoc,getDoc,onSnapshot } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMount } from "svelte";
let year,semester,college,regno,flag = 0,name,coins,credits;
let flag4 = 0;
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
        regno = ref.data().refno;
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
 flag = 1; }

});
  }
</script>
<main class="flex flex-row grow justify-center items-center">
    {#if flag4==0}
    <form action="submit_form.php" method="post" enctype="multipart/form-data" class="grow mx-16 my-0">
        <div class="space-y-[2rem] form-control m-5 bg-gray-900 shadow rounded p-8 sm:p-12">
            <div class="flex flex-col">
                <label for="name" class="label font-semibold leading-none text-gray-300">Name</label>
                <input type="text" class="grow input input-bordered" bind:value = {name} id="name" name="name" required>
            </div>
                
            <div class="flex gap-4">
                <div class="flex flex-col grow">
                    <label for="year" class="label font-semibold leading-none text-gray-300">Year</label>
                    <select id="year" class="select select-bordered" bind:value={year} name="year" required>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </div>
                <div class="flex flex-col grow">
                    <label for="semester" class="label font-semibold leading-none text-gray-300">Semester</label>
                    <select id="semester" class="select select-bordered" bind:value={semester} name="semester" required>
                        <!-- <option disabled selected>SEMESTER</option> -->
                        <option value="1">1st Semester</option>
                        <option value="2">2nd Semester</option>
                        <option value="3">3rd Semester</option>
                        <option value="4">4th Semester</option>
                    </select>
                </div>
            </div>

            <div class="flex flex-col">
                <label for="college" class="label font-semibold leading-none text-gray-300">College</label>
                <select id="college" class="select select-bordered" bind:value={college} name="college" required>
                    <option value="MIT">Manipal institute of technology</option>
                    <option value="KMC">KMC</option>
                </select>
            </div>

            <div class="flex flex-col">
                <label for="regNumber" class="label font-semibold leading-none text-gray-300">Registration Number</label>
                <input class="input input-bordered" type="text" id="regNumber" bind:value={regno} name="regNumber" required>
            </div>


            <!-- <label for="userImage">User Image:</label>
            <input type="file" id="userImage" name="userImage" accept="image/*"><br><br> -->
            <div class="flex flex-row justify-center gap-3">
                <a href="/dashboard"><button type="button" class="btn btn-error">return</button></a>
                
                <button type="button" class="btn btn-success" on:click={handlesubmit}>submit</button>
                
            </div>
            {#if flag==1} <h1>profile created succesfully! refresh the page to see your profile</h1>
            {/if}
        </div>
    </form>
   
    {/if}
    {#if flag4 == 1}
    <!-- <h1>name: {name} <br>
    semester: {semester} <br>
    college: {college} <br>
    year: {year}<br>
    coins: {coins} </h1> -->
    <div class="space-y-[2rem] flex flex-col m-5 bg-gray-900 shadow rounded p-8 sm:p-12 items-center">
        <div>Name: {name}</div>
        <div>Semester: {semester}</div>
        <div>Year: {year}</div>
        <div>Coins: {coins}</div>
    </div>
    {/if}
</main>
<style>

</style>