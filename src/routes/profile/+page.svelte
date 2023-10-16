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
  let handlereturn = ()=>{
    window.location.href = "dashboard";
  }


</script>
<main class="bg-slate-500 flex flex-row grow justify-center items-center">
    <form action="submit_form.php" method="post" enctype="multipart/form-data" class="grow bg-blue-800">
        <div class="flex flex-col space-y-2">
            <label for="name">Name:</label>
            <input type="text" bind:value = {name} id="name" name="name" required><br><br>

            <label for="year">Year:</label>
            <select id="year" bind:value={year} name="year" required>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
            </select><br><br>

            <label for="semester">Semester:</label>
            <select id="semester" bind:value={semester} name="semester" required>
                <option value="1">1st Semester</option>
                <option value="2">2nd Semester</option>
                <option value="3">3rd Semester</option>
                <option value="4">4th Semester</option>
            </select><br><br>

            <label for="college">College:</label>
            <select id="college" bind:value={college} name="college" required>
                <option value="MIT">Manipal institute of technology</option>
                <option value="KMC">KMC</option>
            </select><br><br>

            <label for="regNumber">Registration Number:</label>
            <input type="text" id="regNumber" bind:value={regno} name="regNumber" required><br><br>

            <label for="userImage">User Image:</label>
            <input type="file" id="userImage" name="userImage" accept="image/*"><br><br>
            <div class="flex flex-row justify-center gap-3">
                <button type="button" class="btn btn-error" on:click={handlereturn}>return</button>
                <button type="button" class="btn btn-success" on:click={handlesubmit}>submit</button><br>
            </div>
        </div>
    </form>
    {#if flag == 1}
    <h1>form submitted succesfully!</h1>
    {/if}
</main>
<style>

</style>