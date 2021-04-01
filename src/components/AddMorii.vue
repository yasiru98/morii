<template>
   <section>
     
 

         <div class="center">  
          <v-layout
    
            column
            align-center
            justify-center
       
       
          >
         
          <div id="name"><h1 class="display-1 text-center" >Tell us your story</h1></div>

          <v-text-field
              label="What Happened?"
              placeholder=""
              outlined
              v-model="story"
          ></v-text-field>


          <v-btn href="home.html" v-on:click="submit" id="submitStory" sm text  color="black">Done</v-btn>
        </v-layout>
         </div>
      
      </section>
</template>

<script>
export default {
  name: 'AddMorii',
  props: {story: {type: String,}
  },
  components: {
  },
  methods: {
    submit: function() {
      console.log(this.story)
    }
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
