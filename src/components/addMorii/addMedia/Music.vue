<template>
  <section>
    <!--  <div>
        <button @click="simulateAjax">Simulate Server Call</button> | <button @click="clear">Clear</button>
    </div>-->

    <v-list two-line>
      <v-list-item-group multiple>
        <template v-for="(item) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-icon class="pr-5">mdi-album</v-icon>

              <v-list-item-content>
                <h6>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </h6>

                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                <v-spacer></v-spacer>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox :input-value="active" @change="handleTasks(item)"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </section>
</template>

    <script>
import store from "@/main.js";
export default {
  data() {
    return {
      songArray: [],
      item: null,
      items: [
        {
          action: false,
          headline: "Frankie Valli & The Four Seasons",
          id: "0",
          title: "December, 1963 (Oh, What a Night)"
        },
        {
          action: false,
          headline: "Jack Johnson",
          id: "1",
          title: "Better Together"
        },
        {
          action: false,
          headline: "The Foundations",
          id: "2",
          title: "Build Me Up Buttercup"
        },
        {
          action: false,
          headline: "Bennie And The Jets",
          id: "3",
          title: "Elton John"
        },
        {
          action: false,
          headline: "Electric Light Orchestra",
          id: "4",
          title: "Mr. Blue Sky"
        },
        {
          action: false,
          headline: "Fergie, Ludacris",
          id: "5",
          title: "Glamorous"
        },
        {
          action: false,
          headline: "ABBA",
          id: "6",
          title: "Mamma Mia"
        },
        {
          action: false,
          headline: "*NSYNC",
          id: "7",
          title: "Tearin’ up My Heart - Radio Edit"
        },
        {
          action: false,
          headline: "Smash Mouth",
          id: "8",
          title: "All Star"
        },
        {
          action: false,
          headline: "Tom Cochrane",
          id: "9",
          title: "Life is a Highway"
        },
        {
          action: false,
          headline: "Doja Cat, Gucci Mane",
          id: "10",
          title: "Like That (feat. Gucci Mane)"
        },
        {
          action: false,
          headline: "Meghan Trainor, John Legend",
          id: "11",
          title: `Like I'm Gonna Lose You`
        },
        {
          action: false,
          headline: "Lizzo",
          id: "12",
          title: "Like a Girl"
        },
        {
          action: false,
          headline: "Valley",
          id: "13",
          title: "Like 1999"
        },
        {
          action: false,
          headline: "Madonna",
          id: "14",
          title: "Like a Prayer"
        },
        {
          action: false,
          headline: "Brett Young",
          id: "15",
          title: "Like I Loved You"
        },
        {
          action: false,
          headline: "Hozier",
          id: "16",
          title: "Like Real People Do"
        },
        {
          action: false,
          headline: "Bruno Mars",
          id: "17",
          title: `That's What I Like`
        }
      ]
    };
  },

  /* 1 - You can 'handle' the changes to selectedUsers with a custom watcher: */
  watch: {
    selectedUsers: function(newVal) {
      // Do what you want with the selected objects:
      console.log(newVal);
    }
  },
  methods: {
    /* 2 - or... you can handle the change with the @change handler. */
    handleTasks(item) {
      let songs;
      if (item.action === false) {
        item.action = true;
        this.songArray.push(item);

        songs = this.songArray;
        store.commit("updateSongs", {
          songs: songs
        });
        console.log(this.songArray);
      } else if (item.action === true) {
        this.songArray.splice(item.id, 1);
        item.action = false;
        console.log(this.songArray);
        songs = this.songArray;
        store.commit("updateSongs", {
          songs: songs
        });
      }

      //console.log(this.songArray);
    },
    simulateAjax() {
      this.selectedUsers = [{ name: "Patrick" }, { name: "Evan" }];

      this.selectedTasks = [
        { title: "Clean the house" },
        { title: "Learn Vue.js" }
      ];
    },
    clear() {
      this.selectedUsers = [];
      this.selectedTasks = [];
    }
  }
};
</script>
    
