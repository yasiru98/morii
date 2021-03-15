
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
            <div class="title my-2 text-center  ">“Life can only be understood backwards, but it must be lived forwards.” – Søren Kierkegaard</div>
          

            <a href="app.html" ><button class="button">Get Started &#8594; </button></a>
            <p class="login">Have an account? <a href="login.html">Log In</a></p>
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
