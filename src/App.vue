<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "Login",


  components: {},
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
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


.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>