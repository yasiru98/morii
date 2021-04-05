<template>
   <section>
     
         <v-app-bar elevation="1" height="100" color="white">
         <v-btn sm text color="black" href="" disabled><v-icon left></v-icon></v-btn>
          <v-toolbar-title class="black--text">morii</v-toolbar-title>
          <v-btn sm text color="black" href="" disabled><v-icon left></v-icon></v-btn>
          <router-link to="/addmorii/addmedia"><v-btn sm text color="black">add a new memorii +</v-btn></router-link> 
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
   <v-btn v-on:click="printmorii" id="submitStory" sm text color="black">Print Morii</v-btn>
      </div>
 
          </v-layout>
         </div>
      
      </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  //props: { moriiStory: { type: String },moriiTitle: { type: String },moriiLocation: { type: String } },
  components: {

  },
  methods:{
    printmorii(){
      console.log("Title: "+this.moriiTitle);
      console.log("Story: "+this.moriiStory);
      console.log("Location: "+this.moriiLocation);
      console.log("Who was there: "+this.moriiWho);
      console.log("Who was there: "+this.moriiDate);
    }
  },

  data: () => ({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,

    
  }),
  computed: mapState({

    moriiTitle: 'title',
    moriiStory: 'story',
    moriiLocation: 'location',
    moriiWho: 'who',
    moriiDate: 'date'

  })
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
