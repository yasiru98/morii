
<template>
  <v-app>

  

  <v-main>
   <section>
     
         <v-app-bar elevation="1" height="100" color="white">
         <v-btn sm text color="black" href="" disabled><v-icon left></v-icon></v-btn>
          <v-toolbar-title class="black--text">morii</v-toolbar-title>
          <v-btn sm text color="black" href="" disabled><v-icon left></v-icon></v-btn>
          <v-btn sm text href="addmorii.html" color="black"> add a new memorii +</v-btn>
          <v-spacer></v-spacer>
         
            <v-text-field
              label="search my memoriis"
              prepend-inner-icon="mdi-magnify"
              rounded
              dense
              outlined
              class="mt-6"          
            ></v-text-field>
            <v-spacer></v-spacer>
          <v-toolbar-items  >
            <v-btn sm text href="#js" color="black"> <v-icon>mdi-web</v-icon></v-btn>
            <v-btn sm text href="#unity" color="black"><v-icon>mdi-bell-outline</v-icon></v-btn>
             <v-btn sm text color="black" href="#contact"><v-icon> mdi-account-outline </v-icon></v-btn>
            <v-btn sm text color="black" href="" disabled><v-icon left></v-icon></v-btn>
          </v-toolbar-items> 
          
      </v-app-bar>

         <div class="center">  
          <v-layout
    
            column
            align-center
            justify-center
       
       
          >
         
            <div id="name"><h1 class="display-1 text-center" >Three.JS</h1></div>
           
             <div class="login-container">

      </div>
 
          </v-layout>
         </div>
      
      </section>

    
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld';

export default {
  name: 'Login',
   props: [],

  components: {

  },

  data: () => ({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,

    
  }),
};
</script>

<style>
/* Hide scroll and center content vertically */
body {

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
