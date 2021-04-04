<template>
  <v-app>
    <v-main>
 
    <router-view></router-view>


    </v-main>
  </v-app>
</template>

<script>
  //import HelloWorld from '@/components/HelloWorld';

  export default {
    name: 'Login',

    components: {

    },  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
 computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
    data: () => ({
      //

      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,


    }),
  };
</script>

<style>
  /* Hide scroll and center content vertically */
  body {
    overflow: hidden;
    height: 100vh;
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