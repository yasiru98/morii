<template>
  <section>
    <div class="center">
      <v-layout column align-center justify-center>
        <div id="name">
          <h1 class="display-1 text-center">Help us organzie</h1>
        </div>
        <v-text-field label="Where were you?" placeholder outlined v-model="place"></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="When was this?"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
        <v-combobox
          v-model="chips"
          chips
          clearable
          label="Your favorite hobbies"
          multiple
          prepend-icon="mdi-filter-variant"
          solo
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

        <router-link to="/setthetone">
          <v-btn v-on:click="submit" id="submitStory" sm text color="black">Done</v-btn>
        </router-link>
      </v-layout>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelpUsOrganize",
  data() {
    return {
      chips: [
        "Programming",
        "Playing video games",
        "Watching movies",
        "Sleeping"
      ],
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      date: null,
      menu: false
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  props: { place: String, people: Array },
  components: {},
  methods: {
    submit: function() {
      console.log(this.story);
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
}
</style>