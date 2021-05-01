<template>
  <section>
    <v-app-bar elevation="1" height="60px" color="white">
      <v-icon size="70">$vuetify.icons.logo</v-icon>
      <v-btn sm text color="black" href disabled>
        <v-icon left></v-icon>
      </v-btn>
      <router-link to="/addmorii/addmedia/photos">
        <v-btn sm text color="black" class="moriiAdd">add a new memorii +</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field label="search" prepend-inner-icon="mdi-magnify" dense clearable class="mt-6"></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn sm text color="black">
          <router-link to="/home">
            <v-icon size="20">$vuetify.icons.home</v-icon>
          </router-link>
        </v-btn>

        <v-btn sm text color="black">
          <router-link to>
            <v-icon size="20">$vuetify.icons.collabs</v-icon>
          </router-link>
        </v-btn>
        <v-btn sm text color="black">
          <router-link to>
            <v-icon size="20">$vuetify.icons.bell</v-icon>
          </router-link>
        </v-btn>
        <v-btn sm text color="black" @click="printmorii" >
          <router-link to="/home">
            <v-icon size="20">$vuetify.icons.profile</v-icon>
          </router-link>
        </v-btn>
        <v-btn sm text color="black" href disabled>
          <v-icon left></v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-img src="@/assets/nbackground.png">
      <div>
        <v-container class="mt-10">
          <v-row cols="12" no-gutters>
            <v-col lg="3">
              <p></p>
            </v-col>
            <v-col lg="1.5">
              <router-link to="/addmorii/addmedia/photos">
                <v-btn sm text color="black">add media</v-btn>
              </router-link>
            </v-col>
            <v-col lg="1.5">
              <router-link to="/addmorii/tellyourstory">
                <v-btn sm text color="black">tell us your story</v-btn>
              </router-link>
            </v-col>
            <v-col lg="1.5">
              <router-link to="/addmorii/helpusorganize">
                <v-btn sm text color="black">help us organize</v-btn>
              </router-link>
            </v-col>
            <v-col lg="1.5">
              <router-link to="/addmorii/setthetone">
                <v-btn sm text color="black">set the tone</v-btn>
              </router-link>
            </v-col>
            <v-col lg="3">
              <p></p>
            </v-col>
          </v-row>
          <v-row cols="12" no-gutters>
            <v-col lg="1">
              <p></p>
            </v-col>
            <v-col lg="10">
              <router-view></router-view>
            </v-col>
            <v-col lg="1">
              <p></p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "AddMorii",
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
