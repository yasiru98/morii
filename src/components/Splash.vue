<template>
  <section>
    <v-img src="@/assets/LoginBG.png">
      <v-container>
        <v-row></v-row>

        <v-col md="3" offset-md="1">
          <v-icon size="424" class="moriiLogo">$vuetify.icons.plogo</v-icon>
        </v-col>

        <v-col md="9" offset-md="5">
          <div class="title my-2 text-center">
            <h1 class="welcome">Welcome to the Morii Interactive demo.</h1>
          </div>
          <div class="title my-2 text-center myDiv">
            Get a glimpse of the full expereince here
          </div>
          <v-spacer></v-spacer>
          <router-link to="/home" class="mybttn">
            <v-btn class="mybttn" rounded raised width="400"
              >Get Started
            </v-btn>
          </router-link>
        </v-col>
      </v-container>
    </v-img>
  </section>
</template>

<script>
export default {
  name: "Splash",

  data: () => ({}),
};
</script>
<style lang = "scss">
/* Hide scroll and center content vertically */
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@500&display=swap");
body {
  overflow: hidden;
  height: 100vh;
  font-family: "Be Vietnam", sans-serif;
}

#app {
  font-family: "Be Vietnam", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.moriiLogo {
  position: absolute;
  padding-top: 510px;
}
.mybttn {
  margin-top: 20px;
  position: absolute;
  right: 115px;
  text-decoration: none;
}
.myDiv {
  position: absolute;
  top: 400px;
  right: 250px;
  padding-top: 20px;
}
.welcome {
  position: absolute;
  width: 420px;
  height: 350px;
  font-size: 34pt;
  text-align: left;
  top: 250px;
  right: 200px;
  line-height: 50px;
}

</style>