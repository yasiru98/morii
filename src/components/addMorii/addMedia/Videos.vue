<template >
  <section>
    <div>
      <vue-select-image :dataImages="dataImages" :is-multiple="true"  @onselectmultipleimage="onSelectMultipleImage"></vue-select-image>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import thumb1 from "@/assets/library/videos/thumb1.jpg";
import thumb2 from "@/assets/library/videos/thumb2.jpg";
import thumb3 from "@/assets/library/videos/thumb3.jpg";
import thumb4 from "@/assets/library/videos/thumb4.jpg";
import thumb5 from "@/assets/library/videos/thumb5.jpg";
import thumb6 from "@/assets/library/videos/thumb6.jpg";
import thumb7 from "@/assets/library/videos/thumb7.jpg";
import thumb8 from "@/assets/library/videos/thumb8.jpg";
import thumb9 from "@/assets/library/videos/thumb9.jpg";
import thumb10 from "@/assets/library/videos/thumb10.jpg";
import thumb11 from "@/assets/library/videos/thumb11.jpg";
import thumb12 from "@/assets/library/videos/thumb12.jpg";


import store from '@/main.js'
export default {
  name: "SetTheTone",
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    dataImages: [
      {
        id: "1",
        src: thumb1,
        alt: "video1"
      },
      {
        id: "2",
        src: thumb2,
        alt: "video2"
      },
      {
        id: "3",
        src: thumb3,
        alt: "video3"
      },
      {
        id: "4",
        src: thumb4,
        alt: "video4"
      },
      {
        id: "5",
        src: thumb5,
        alt: "video5"
      },
      {
        id: "6",
        src: thumb6,
        alt: "video6"
      },
      {
        id: "7",
        src: thumb7,
        alt: "video7"
      },
      {
        id: "8",
        src: thumb8,
        alt: "video8"
      },
      {
        id: "9",
        src: thumb9,
        alt: "video9"
      },
      {
        id: "10",
        src: thumb10,
        alt: "video10"
      },
      {
        id: "11",
        src: thumb11,
        alt: "video11"
      },
      {
        id: "12",
        src: thumb12,
        alt: "video12"
      },
      
    ]
  }),
  props: {},
  components: {},
  methods: {
    submit: function() {},
    onSelectMultipleImage: function (data) {
      //console.log('fire event onSelectMultipleImage: ', data)
      this.imageMultipleSelected = data
      let videos = this.imageMultipleSelected;
        store.commit('updateVideos', {
        videos:videos
      })
  console.log(videos)

    }
  },

  computed: mapState({
    // arrow functions can make the code very succinct!

    name: state => state.title,

    // passing the string value 'count' is same as `state => state.count`
    countAlias: "title"
  })
};
</script>

<style>
body {
}
img {
  height: 132px;
  width: 132px;
}
</style>