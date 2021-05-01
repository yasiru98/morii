
import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// Import components for routing
import Splash from '@/components/Splash.vue'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import AddMorii from '@/components/AddMorii.vue'
import TellYourStory from '@/components/addMorii/TellYourStory.vue'
import HelpUsOrganize from '@/components/addMorii/HelpUsOrganize.vue'
import SetTheTone from '@/components/addMorii/SetTheTone.vue'
import AddMedia from '@/components/addMorii/AddMedia.vue'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    title: "",
    story:"",
    date:"",
    location:"",
    who:[],
    photos:null,
    videos:null,
    songs:null,
    moriis:[],
    
  },
  getters:{

  },
  mutations: {
    updateTitle (state,payload) {
      state.title = payload.title;
    },
    updateStory (state,payload) {
      state.story = payload.story;
    },
    updateDate (state,payload) {
      state.date = payload.date;
    },
    updateLocation (state,payload) {
      state.location = payload.location;
    },
    updateWho (state,payload) {
      state.who = payload.who;
    },
    updatePhotos (state,payload) {
      state.photos = payload.photos;
    },
    updateVideos (state,payload) {
      state.videos = payload.videos;
    },
    updateSongs (state,payload) {
      state.songs = payload.songs;
    },
    updateMoriis(state,payload) {
      state.moriis.push(payload)
    },
  }
})
export default store;
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files(Imported above)



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [ 
  { path: '/', component: Splash},
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/addmorii',
  // You could also have named views at tho top
  component: AddMorii,
  children: [{
    path: 'addmedia',
    component: AddMedia
  },{
    path: 'tellyourstory',
    component: TellYourStory
  },{
    path: 'helpusorganize',
    component: HelpUsOrganize
  },{
    path: 'setthetone',
    component: SetTheTone
  },]
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


      
