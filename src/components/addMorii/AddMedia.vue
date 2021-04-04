

<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Add media</h1>
        </div>

        <v-text-field label="What Happened?" placeholder outlined v-model="story"></v-text-field>
        <div id="name">
    
        </div>
        <router-link to="/">
        <v-btn v-on:click="submit" id="submitStory" sm text color="black">Done</v-btn>
        </router-link>
      </v-layout>
    </div>
  </section>
</template>

<script>
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
    windowWidth: window.innerWidth
  })
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
}

</style>