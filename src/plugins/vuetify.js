import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Logo from '@/components/Icons/Logo.vue'
import Bell from '@/components/Icons/Bell.vue'
import Profile from '@/components/Icons/Profile.vue'
import Home from '@/components/Icons/HomeScreen.vue'
import Collabs from '@/components/Icons/Collabs.vue'
import ZoomIn from '@/components/Icons/ZoomIn.vue'
import ZoomOut from '@/components/Icons/ZoomOut.vue'
import Pan from '@/components/Icons/Pan.vue'
import PurpleLogo from '@/components/Icons/PurpleLogo.vue'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
            logo:{
                component: Logo,
            },
            profile:{
                component: Profile,
            },
            bell:{
                component: Bell
            },
            home:{
                component: Home
            },
            collabs:{
                component: Collabs
            },
            zoomin:{
                component: ZoomIn
            },
            zoomout:{
                component: ZoomOut
            },
            pan:{
                component: Pan
            },
            plogo:{
                component: PurpleLogo
            }
        },
      },
});
