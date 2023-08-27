<script>
    import {GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
    import {auth} from "../firebase1/firebaseConfig";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    
    const auth1 = getAuth();
    onAuthStateChanged(auth1, (user) => {
  if (user) {
    window.location.href = "dashboard";  
    const uid = user.uid;  
  } 
});  
const handlegoogle = (e) =>{
    const provider =  new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
}
</script>
<main>
    <div class="container" id="box">
        <h1 class="login">Login to your account</h1>
        <h2>login using social networks</h2>
        <a href="#" class="icon1" on:click={handlegoogle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16" id="icon1">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
          </svg>
        </a>
        <a href="#" class="icon2">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>

        </a>
        </div>
</main>
<style>
     @import url(https://fonts.googleapis.com/css?family=Bungee);
    :global(body){
        background-color: #e5e5f7;
        opacity: 0.8;
        background-image: radial-gradient(circle at center center, #444cf7, #e5e5f7), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 10px, transparent 20px, transparent 10px);
        background-blend-mode: multiply;
    }
    #box {
        margin-top: 13%;
        margin-left: 30%;
        width: 40%;
        padding-top: 0%;
        height: 30vw;
  background-color: #fff;
  border-radius: 6px;
  min-height: 160px;
  --shadow: 1px 1px 1px 1px rgb(0 0 0 / 0.25);
  box-shadow: var(--shadow);
  counter-increment: item;
  display: flex;
  justify-content: center;
  align-items: center;

  


  }

.login{
    width: -moz-fit-content;
  width: fit-content;
  display: table;
    left: 31.5%;
    font-family: bungee;
    position: absolute;
    bottom: 63%;
    padding: 0%;
    font-size: 2.7vw;
    

}
#box h2{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.7vw;
    font-weight: lighter;
    display: inline-block;
    position: relative;
    right: -6%;
    bottom: 19%;
    width: fit-content;
}
.icon1{
    position: relative;
    top: 5%;
    right: 30%;
}
.icon2{
    position: relative;
    top:5%;
    right:22%
}
</style>

