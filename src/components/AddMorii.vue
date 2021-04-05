<template>
  <section>
    <v-app-bar elevation="1" height="100" color="white">
      <v-btn sm text color="black" href disabled>
      <v-icon left></v-icon>
      </v-btn>
      <v-toolbar-title class="black--text">morii</v-toolbar-title>
      <v-btn sm text color="black" href disabled>
      <v-icon left></v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn sm text href="#js" color="black">
          <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-btn sm text href="#unity" color="black">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn sm text color="black" href="#contact">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
        <v-btn sm text color="black" href disabled>
          <v-icon left></v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <div>
      <v-container class="mt-10">
        <v-row   cols="12" no-gutters>
          <v-col lg="3"><p></p></v-col>
          <v-col lg="1.5"><router-link to="/addmorii/addmedia"><v-btn sm text color="black">add media</v-btn></router-link></v-col>
          <v-col lg="1.5"><router-link to="/addmorii/tellyourstory"><v-btn sm text color="black">tell us your story</v-btn></router-link> </v-col>
          <v-col lg="1.5"><router-link to="/addmorii/helpusorganize"><v-btn sm text color="black">help us organize</v-btn></router-link></v-col>
          <v-col lg="1.5"><router-link to="/addmorii/setthetone"><v-btn sm text color="black">set the tone</v-btn></router-link> </v-col>
          <v-col lg="3"><p></p></v-col>
        </v-row>
          <v-row  cols="12" no-gutters>
          <v-col lg="3"><p></p></v-col>      
          <v-col lg="6"><router-view></router-view></v-col>
          <v-col lg="3"><p></p></v-col>
        </v-row>
      </v-container>
    </div>


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
