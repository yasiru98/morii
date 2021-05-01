

<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Set The Tone</h1>
        </div>

        <v-text-field label="Give your memory a title" placeholder outlined v-model="memoryName"></v-text-field>
        <div id="name">
          <!-- <h1 class="display-1 text-center">Choose a visual to represent the mood of your memory</h1> -->
        </div>
        <router-link to="/home">
          <v-btn href v-on:click="submit" id="submitStory" sm text color="black">Done</v-btn>
        </router-link>
      </v-layout>
    </div>
  </section>
</template>

<script>
import Memorii from "@/morii.js";
import { mapState } from "vuex";
import store from "@/main.js";
export default {
  name: "SetTheTone",
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  }),
  props: { memoryName: { type: String } },
  components: {},
  methods: {
    submit: function() {
      let title = this.memoryName;
      //console.log(title);
      store.commit("updateTitle", {
        title: title
      });

      let newMemorii = new Memorii(
       this.moriiTitle,
        this.moriiDate,
        this.moriiWho,
        this.moriiLocation,
        this.moriiStory,
        this.moriiVideos,
        this.moriiPhotos,
        this.moriiSongs,
        null,

      );

      let moriis = newMemorii;
      store.commit("updateMoriis", {
        moriis: moriis
      });

      console.log(this.moriisArray);

    }
  },

  computed: mapState({
    moriiTitle: "title",
    moriiStory: "story",
    moriiLocation: "location",
    moriiWho: "who",
    moriiDate: "date",
    moriiPhotos: "photos",
    moriiVideos: "videos",
    moriiSongs: "songs",
    moriisArray: "moriis"
  })
};
</script>


<style>
/* Hide scroll and center content vertically */
body {
}
.v-application .align-center {
  align-items: baseline !important;
}
</style>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>