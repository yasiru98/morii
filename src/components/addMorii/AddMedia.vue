

<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Add media</h1>

          <vue-select-image
            :dataImages="dataImages"
            :is-multiple="true"
         
          ></vue-select-image>
        </div>

        <div id="name"></div>
        <router-link to="/">
          <v-btn v-on:click="submit" id="submitStory" sm text color="black">Done</v-btn>
        </router-link>
      </v-layout>
    </div>
  </section>
</template>

<script>



// add stylesheet
require("vue-select-image/dist/vue-select-image.css");

import { mapState } from "vuex";
export default {
  name: "AddMedia",
  props: { story: { type: String } },
  components: {},
  methods: {
    submit: function() {
      console.log(this.story);
    }
  },
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    dataImages: [
      {
        id: "1",
        src: "https://unsplash.it/200?random",
        alt: "Alt Image 1"
      },
      {
        id: "2",
        src: "https://unsplash.it/200?random",
        alt: "Alt Image 2"
      },
      {
        id: "2",
        src: "https://unsplash.it/200?random",
        alt: "Alt Image 2",
        disabled: true
      }
    ]
  }),
  computed: mapState({
    // arrow functions can make the code very succinct!
    //name: state => state.title,
    // passing the string value 'count' is same as `state => state.count`
    //countAlias: 'title'
  })
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
}
</style>