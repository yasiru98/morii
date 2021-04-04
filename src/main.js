import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router'

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
Vue.config.productionTip = false

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
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
