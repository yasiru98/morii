<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Help us organzie</h1>
        </div>
        <v-text-field label="Where were you?" placeholder outlined v-model="place"></v-text-field>
    <v-text-field label="When was this?" placeholder outlined v-model="date"></v-text-field>
    
        <v-combobox
          v-model="chips"
          chips
          clearable
          label="Who were you with?"
          multiple
          prepend-icon="mdi-filter-variant"
        
          
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong>
              &nbsp;
            </v-chip>
          </template>
        </v-combobox>

        <v-btn v-on:click="submit" id="submitStory" sm text color="black">Next</v-btn>
      </v-layout>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import store from "@/main.js";
export default {
  name: "HelpUsOrganize",
  data() {
    return {
      chips: ["John"],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      date:"",
      menu: false,
      place:"",
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  components: {},
  methods: {
    submit: function() {
      let location = this.place;
      let who = this.chips;
      let moriiDate = this.date;
      console.log(who);
      store.commit("updateLocation", {
        location: location
      });
      store.commit("updateWho", {
        who: who
      });
      store.commit("updateDate", {
        date: moriiDate
      });

       this.$router.push('/addmorii/setthetone'); 
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    save(date) {
      this.$refs.menu.save(date);
      console.log(date);
    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    //name: state => state.title,
    // passing the string value 'count' is same as `state => state.count`
    //countAlias: 'title',
  })
};
</script>


<style>
/* Hide scroll and center content vertically */
body {
}
.v-application .align-center {
    align-items: baseline!important;
}

</style>

<style scoped>
 .v-text-field{
      width: 400px;
}
</style>