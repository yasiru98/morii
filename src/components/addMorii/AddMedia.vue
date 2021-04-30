

<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <!--  <vue-select-image :dataImages="dataImages" :is-multiple="true"></vue-select-image> -->
        </div>
        <v-card id="addmediacard" class="mt-16" rounded>
          <v-row class="mb-10 mt-6">
            <v-col lg="3">
              <h1 class="display-1 text-center pr-5">Add media</h1>
            </v-col>
            <v-spacer></v-spacer>
            <v-col lg="3">
              <router-link to>
                <v-btn @click="print" sm text color="black">done</v-btn>
              </router-link>
            </v-col>
          </v-row>
          <v-row class="mb-6 mt-6 d-flex flex-row" no-gutters>
            <v-col lg="3">
              <router-link to="/addmorii/addmedia/photos">
                <v-btn sm text color="black">Photos</v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <router-link to="/addmorii/addmedia/videos">
                <v-btn sm text color="black">Videos</v-btn>
              </router-link>
              <router-link to="/addmorii/addmedia/music">
                <v-spacer></v-spacer>
                <v-btn sm text color="black">Music</v-btn>
              </router-link>
            </v-col>
            <v-col lg="9">
              <v-card elevation="0" class="imageCard" height="45vh"  width="45vw">
                <router-view></router-view>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
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
    },
    print: function() {
      console.log(this.$router.history.current.path);
    }
  },
  setup() {

  },
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
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
.center {
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
}
.imageCard {
  overflow-y: scroll;
}
</style>