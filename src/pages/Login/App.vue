
<template>
  <v-app>


  <v-main>
   <section>
   
        <v-img src="@/assets/background.png"  >
         <div class="center">  
          <v-layout
    
            column
            align-center
            justify-center
       
       
          >
         
            <div id="name"><h1 class="display-4 text-center" >MORII</h1></div>
             <div class="login-container">
        <form>
            <label for="uname">Username:</label>
            <input type="text" placeholder="Username" name="username" id="user"><br>
            <label for="upass">Password:</label>
            <input type="text" placeholder="Password" name="pass" id="pass">
            <!-- <button type="submit" id="login-button"></button> -->
        </form>
      </div>
      <a href="home.html"><button  id="login-button">Log In</button></a>
          </v-layout>
         </div>
        </v-img>
      </section>

    
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'Login',

  components: {
    
  },

  data: () => ({
    //

    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,

    
  }),
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
    overflow: hidden;
    height: 100vh;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}


</style>
