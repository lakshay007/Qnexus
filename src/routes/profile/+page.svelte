<script>
import { db } from "../../firebase1/firebaseConfig";
import { doc, setDoc,updateDoc,getDoc } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMount } from "svelte";
let year,semester,college,regno,flag = 0,name;
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
});
 flag = 1; }

});
  }
</script>
<main class="flex flex-row grow justify-center items-center">
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
        </div>
    </form>
    {#if flag == 1}
    <h1 class="">form submitted succesfully!</h1>
    {/if}
</main>
<style>

</style>