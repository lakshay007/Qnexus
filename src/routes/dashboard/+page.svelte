<script>
    import { getAuth, signOut } from "firebase/auth";
    import {auth} from "../../firebase1/firebaseConfig";
const handlesignout = () =>{

signOut(auth).then(() => {
  window.location.href = "/";
}).catch((error) => {
  // An error happened.
});
}
</script>
<main>
<a href="#" on:click|preventDefault={handlesignout}>logout</a>
</main>

<style>

</style>