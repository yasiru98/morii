

<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Set The Tone</h1>
        </div>

        <v-text-field label="Give your memory a title" placeholder outlined v-model="moriiTitle"></v-text-field>
        <div id="name">
        <h1 class="display-1 text-center">Choose a visual to represent the mood of your memory</h1>
        </div>
        <router-link to="/home">
        <v-btn href="" v-on:click="submit" id="submitStory" sm text color="black">Done</v-btn>
       </router-link>
      </v-layout>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/main.js'
export default {
  name: "SetTheTone",
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  }),
  props: { moriiTitle: { type: String } },
  components: {},
  methods: {
    submit: function() {
      let title = this.moriiTitle;
      console.log(title);
      store.commit('updateTitle', {
        title:title
      })
    }
  },
  
     computed: mapState({
    // arrow functions can make the code very succinct!

    name: state => state.title,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: 'title',

  })
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
}

</style>