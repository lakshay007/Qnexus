<script>
    import { db } from "../../firebase1/firebaseConfig";
    import { doc, setDoc, updateDoc, addDoc, getDoc, onSnapshot, deleteDoc } from "firebase/firestore";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { onMount } from "svelte";
  
    let val = "",sub= 0;
  
    let onclick = (subject) => {
      val = subject;
      if (val === "Chemistry") {
        console.log("Chemistry!!");
      }
      sub = 1;
    };
  </script>
  
  <main>
    {#if sub ==0}
    <h1>your subjects: <br></h1>
    <a href="#" on:click={() => onclick("Chemistry")}>chemistry <br></a>
    <a href="#" on:click={() => onclick("Ml")}>Ml <br></a>
    <a href="#" on:click={() => onclick("Physics")}>physics <br></a>
    {/if}
    {#if sub == 1}
    <h1>select your topic:</h1>
    {#if val === "Chemistry"}
    <a href="#">corrosion <br></a>
    <a href="#">electrochemistry <br></a>
    <a href="#">battery Tech <br></a>
    {/if}
    {/if}
  </main>
  