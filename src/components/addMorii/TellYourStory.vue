

<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Tell Us Your Story</h1>
        </div>

     
     

            <v-textarea
         v-model="story"
        label="Type your story here"
        counter
      
        full-width
        single-line
      ></v-textarea>

        <v-btn v-on:click="submit" id="submitStory" sm text color="black">Next</v-btn>
     
      </v-layout>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import store from '@/main.js'
export default {
  name: "TellYourStory",
  props: { story: { type: String } },
  components: {},
  methods: {
    submit: function() {
      let story = this.story;
      console.log(story);
      store.commit('updateStory', {
        story:story
      })
         this.$router.push('/addmorii/helpusorganize'); 
    }
 
  },
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!

    name: state => state.title,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: "title"
  })
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
}
.v-application .align-center {
    align-items: baseline!important;
}

</style>
<style scoped>
 .v-text-field{
      width: 400px;
}
</style>