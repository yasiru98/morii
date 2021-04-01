<template>

      <section>

        <v-img src="@/assets/background.png">
          <div class="center">
            <v-layout column align-center justify-center>

              <div id="name">
                <h1 class="display-4 text-center">MORII</h1>
              </div>
              <div class="title my-2 text-center  ">“Life can only be understood backwards, but it must be lived
                forwards.” – Søren Kierkegaard</div>


              <a href=""><button class="button">Get Started &#8594; </button></a>
              <p class="login">Have an account? <router-link to="/login">Log In</router-link></p>
            </v-layout>
          </div>
        </v-img>

      </section>
</template>

<script>
  export default {
    name: 'Splash',

    data: () => ({

     
    }),
  }
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