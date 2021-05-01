import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueSelectImage from "vue-select-image";

// Import components for routing
import Splash from '@/components/Splash.vue'
//import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Mosaic from '@/components/Mosaic.vue'
import AddMorii from '@/components/AddMorii.vue'
import TellYourStory from '@/components/addMorii/TellYourStory.vue'
import HelpUsOrganize from '@/components/addMorii/HelpUsOrganize.vue'
import SetTheTone from '@/components/addMorii/SetTheTone.vue'
import AddMedia from '@/components/addMorii/AddMedia.vue'
import Photos from '@/components/addMorii/addMedia/Photos.vue'
import Videos from '@/components/addMorii/addMedia/Videos.vue'
import Music from '@/components/addMorii/addMedia/Music.vue'

import * as THREE from "three";
import Memorii from "@/morii.js";
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueSelectImage);
Vue.config.productionTip = false


import picture1 from "@/assets/library/image1.jpg";
import picture2 from "@/assets/library/image2.jpg";
import picture3 from "@/assets/library/image3.jpg";
import picture4 from "@/assets/library/image4.jpg";
import picture5 from "@/assets/library/image5.jpg";
import picture6 from "@/assets/library/image6.jpg";
import picture7 from "@/assets/library/image7.jpg";
import picture8 from "@/assets/library/image8.jpg";
import picture9 from "@/assets/library/image9.jpg";
import picture10 from "@/assets/library/image10.jpg";
import picture11 from "@/assets/library/image11.jpg";
import picture12 from "@/assets/library/image12.jpg";
import picture13 from "@/assets/library/image13.jpg";
import picture14 from "@/assets/library/image14.jpg";
import picture15 from "@/assets/library/image15.jpg";
import picture16 from "@/assets/library/image16.jpg";
import picture17 from "@/assets/library/image17.jpg";
import picture18 from "@/assets/library/image18.jpg";
import picture19 from "@/assets/library/image19.jpg";
import picture20 from "@/assets/library/image20.jpg";
import picture21 from "@/assets/library/image21.jpg";
import picture22 from "@/assets/library/image22.jpg";
import picture23 from "@/assets/library/image23.jpg";
import picture24 from "@/assets/library/image24.jpg";
import picture25 from "@/assets/library/image25.jpg";
import picture26 from "@/assets/library/image26.jpg";
import picture27 from "@/assets/library/image27.jpg";
import picture28 from "@/assets/library/image28.jpg";
import picture29 from "@/assets/library/image29.jpg";
import picture30 from "@/assets/library/image30.jpg";
import picture31 from "@/assets/library/image31.jpg";
import picture32 from "@/assets/library/image32.jpg";
import picture33 from "@/assets/library/image33.jpg";
import picture34 from "@/assets/library/image34.jpg";
import picture35 from "@/assets/library/image35.jpg";
import picture36 from "@/assets/library/image36.jpg";
import picture37 from "@/assets/library/image37.jpg";
import picture38 from "@/assets/library/image38.jpg";
import picture39 from "@/assets/library/image39.jpg";
import picture40 from "@/assets/library/image40.jpg";








const store = new Vuex.Store({
  state: {
    title: "",
    story: "",
    date: "",
    location: "",
    who: [],
    photos: null,
    videos: null,
    songs: null,
    moriis: [],
    sampleMemory: false,
    whichMorii: null,

  },
  getters: {

  },
  mutations: {
    updateTitle(state, payload) {
      state.title = payload.title;
    },
    updateStory(state, payload) {
      state.story = payload.story;
    },
    updateDate(state, payload) {
      state.date = payload.date;
    },
    updateLocation(state, payload) {
      state.location = payload.location;
    },
    updateWho(state, payload) {
      state.who = payload.who;
    },
    updatePhotos(state, payload) {
      state.photos = payload.photos;
    },
    updateVideos(state, payload) {
      state.videos = payload.videos;
    },
    updateSongs(state, payload) {
      state.songs = payload.songs;
    },
    updateMoriis(state, payload) {
      state.moriis.push(payload)
    },
    updateSampleMemory(state, payload) {
      state.sampleMemory = payload.sampleMemory
    },
    updateWhichMorii(state, payload) {
      state.whichMorii = payload.whichMorii
    },
  }
})
export default store;

let newMaterial = new THREE.MeshNormalMaterial({
  flatShading: true
});
for (let i = 0; i < 10; i++) {



  let newMemorii = new Memorii(
    "The Time I Went To New Orleans + Sprained My Ankle",
    "March 2020",
    ["Yasiru", "Jake", "Liza", "Hannah", "Kate", "Mike"],
    "New Orleans, LA",
    "Laissez les bons temps rouler! In New Orleans the good times are always rolling down Bourbon Street, which has quite the party animal reputation during Mardi Gras. If you're lucky, you'll catch a second line parade strutting through the crowds. But this city isn't all Sazerac in a Solo cup. Take in the scenery of the historic French Quarter, tour the elegant Garden District, and eat your way across Nola's incredible restaurants and cafes—beignets are a must. If you love stories about things that go bump in the night, book a guided ghost tour that weaves through local taverns, alleyways, and cemeteries.",
    "",
    [{
        id: "1",
        src: picture1,
        alt: "Alt Image 1"
      },
      {
        id: "2",
        src: picture2,
        alt: "Alt Image 2"
      },
      {
        id: "3",
        src: picture3,
        alt: "Alt Image 3"
      },
      {
        id: "4",
        src: picture4,
        alt: "Alt Image 4"
      },
      {
        id: "5",
        src: picture5,
        alt: "Alt Image 5"
      },
      {
        id: "6",
        src: picture6,
        alt: "Alt Image 6"
      },
      {
        id: "7",
        src: picture7,
        alt: "Alt Image 7"
      },
      {
        id: "8",
        src: picture8,
        alt: "Alt Image 8"
      },
      {
        id: "9",
        src: picture9,
        alt: "Alt Image 9"
      },
      {
        id: "10",
        src: picture10,
        alt: "Alt Image 10"
      },
      {
        id: "11",
        src: picture11,
        alt: "Alt Image 11"
      },
      {
        id: "12",
        src: picture12,
        alt: "Alt Image 12"
      },
      {
        id: "13",
        src: picture13,
        alt: "Alt Image 9"
      },
      {
        id: "14",
        src: picture14,
        alt: "Alt Image 10"
      },
      {
        id: "15",
        src: picture15,
        alt: "Alt Image 11"
      },
      {
        id: "16",
        src: picture16,
        alt: "Alt Image 12"
      },
      {
        id: "17",
        src: picture17,
        alt: "Alt Image 1"
      },
      {
        id: "18",
        src: picture18,
        alt: "Alt Image 2"
      },
      {
        id: "19",
        src: picture19,
        alt: "Alt Image 3"
      },
      {
        id: "20",
        src: picture20,
        alt: "Alt Image 4"
      },
      {
        id: "21",
        src: picture21,
        alt: "Alt Image 5"
      },
      {
        id: "22",
        src: picture22,
        alt: "Alt Image 6"
      },
      {
        id: "23",
        src: picture23,
        alt: "Alt Image 7"
      },
      {
        id: "24",
        src: picture24,
        alt: "Alt Image 8"
      },
      {
        id: "25",
        src: picture25,
        alt: "Alt Image 9"
      },
      {
        id: "26",
        src: picture26,
        alt: "Alt Image 10"
      },
      {
        id: "27",
        src: picture27,
        alt: "Alt Image 11"
      },
      {
        id: "28",
        src: picture28,
        alt: "Alt Image 12"
      },
      {
        id: "29",
        src: picture29,
        alt: "Alt Image 9"
      },
      {
        id: "30",
        src: picture30,
        alt: "Alt Image 10"
      },
      {
        id: "31",
        src: picture31,
        alt: "Alt Image 11"
      },
      {
        id: "32",
        src: picture32,
        alt: "Alt Image 12"
      },
      {
        id: "33",
        src: picture33,
        alt: "Alt Image 1"
      },
      {
        id: "34",
        src: picture34,
        alt: "Alt Image 2"
      },
      {
        id: "35",
        src: picture35,
        alt: "Alt Image 3"
      },
      {
        id: "36",
        src: picture36,
        alt: "Alt Image 3"
      },
      {
        id: "37",
        src: picture37,
        alt: "Alt Image 4"
      },
      {
        id: "38",
        src: picture38,
        alt: "Alt Image 4"
      },
      {
        id: "39",
        src: picture39,
        alt: "Alt Image 5"
      },
      {
        id: "40",
        src: picture40,
        alt: "Alt Image 6"
      }
    ],
    "",
    newMaterial
  );
  let moriis = newMemorii;
  store.commit("updateMoriis", {
    moriis: moriis
  });

}

store.commit("updateSampleMemory", {
  sampleMemory: true
});







// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files(Imported above)



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [{
    path: '/',
    component: Splash
  },
  // { path: '/login', component: Login },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/mosaic',
    component: Mosaic
  },
  {
    path: '/addmorii',
    // You could also have named views at tho top
    component: AddMorii,
    children: [{
      path: 'addmedia',
      component: AddMedia,
      children: [{
        path: 'photos',
        component: Photos,
      }, {
        path: 'videos',
        component: Videos,
      }, {
        path: 'music',
        component: Music,
      }]
    }, {
      path: 'tellyourstory',
      component: TellYourStory
    }, {
      path: 'helpusorganize',
      component: HelpUsOrganize
    }, {
      path: 'setthetone',
      component: SetTheTone
    }, ]
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
//const app = new Vue({
// vuetify,
// router
//}).$mount('#app')

// Now the app has started!


new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
//import HelloWorld from '@/components/HelloWorld';