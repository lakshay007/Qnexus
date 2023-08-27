<script>
    import { getAuth, signOut } from "firebase/auth";
    import {auth} from "../../firebase1/firebaseConfig";
    
const handlesignout = () =>{ //function for signout

signOut(auth).then(() => {     
  window.location.href = "/";
}).catch((error) => {
  
});
}
</script>
<main>
  <div class="maincontainer">
    <header>
      <a href="#"
        ><img src=""/></a>

      <input type="checkbox" id="check" />
      <label for="check" class="icons">
        <i class="bx bx-menu" id="menu-icon"></i>
        <i class="bx bx-x" id="close-icon"></i>
      </label>

      <nav class="navbar">
        <a href="#" class="nav-item" style="--i: 0">Home</a>
        <a href="#" class="nav-item" style="--i: 1">Learn</a>
        <a href="#" class="nav-item" style="--i: 2">Practice</a>
        <a href="#" class="nav-item" style="--i: 3">Compete</a>
        <a href="#" on:click={handlesignout} class="nav-item" style="--i: 3">Sign Out</a>
      </nav>
    </header>

</div>
</main>

<style>
  .maincontainer{
    min-height: 100vh;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }
  header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

.logo {
  width: 40px;
}

.nav-item {
  position: relative;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: -0.13px;
  text-decoration: none;
  margin-left: 2.5rem;
  transition: all 0.5s ease;
}

.nav-item:hover {
  color:black;
}

.nav-item::after {
  content: "";
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  width: 0;
  height: 0.15rem;
  transform: translateX(-50%);
  background-color: black;
  transition: all 0.5s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.icons {
  position: absolute;
  right: 5%;
  font-size: 2.3rem;
  color: #fff;
  cursor: pointer;
  display: none;
}

#check {
  display: none;
}

</style>
