
 
<template>
  <section>
    <div>
      <vue-select-image :dataImages="dataImages" :is-multiple="true"  @onselectmultipleimage="onSelectMultipleImage"></vue-select-image>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
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
import picture41 from "@/assets/library/image41.jpg";
import picture42 from "@/assets/library/image42.jpg";
import picture43 from "@/assets/library/image43.jpg";
import picture44 from "@/assets/library/image44.jpg";
import picture45 from "@/assets/library/image45.jpg";
import picture46 from "@/assets/library/image46.jpg";
import picture47 from "@/assets/library/image47.jpg";
import picture48 from "@/assets/library/image48.jpg";
import picture49 from "@/assets/library/image49.jpg";
import picture50 from "@/assets/library/image50.jpg";
import picture51 from "@/assets/library/image51.jpg";
import picture52 from "@/assets/library/image52.jpg";
import picture53 from "@/assets/library/image53.jpg";
import picture54 from "@/assets/library/image54.jpg";
import picture55 from "@/assets/library/image55.jpg";
import picture56 from "@/assets/library/image56.jpg";
import picture57 from "@/assets/library/image57.jpg";
import picture58 from "@/assets/library/image58.jpg";
import picture59 from "@/assets/library/image59.jpg";
import picture60 from "@/assets/library/image60.jpg";
import picture61 from "@/assets/library/image61.jpg";
import picture62 from "@/assets/library/image62.jpg";
import picture63 from "@/assets/library/image63.jpg";
import picture64 from "@/assets/library/image64.jpg";
import picture65 from "@/assets/library/image65.jpg";
import picture66 from "@/assets/library/image66.jpg";
import picture67 from "@/assets/library/image67.jpg";
import picture68 from "@/assets/library/image68.jpg";
import picture69 from "@/assets/library/image69.jpg";
import picture70 from "@/assets/library/image70.jpg";
import picture71 from "@/assets/library/image71.jpg";
import picture72 from "@/assets/library/image72.jpg";
import picture73 from "@/assets/library/image73.jpg";
import picture74 from "@/assets/library/image74.jpg";
import picture75 from "@/assets/library/image75.jpg";
import picture76 from "@/assets/library/image76.jpg";
import picture77 from "@/assets/library/image77.jpg";
import picture78 from "@/assets/library/image78.jpg";
import picture79 from "@/assets/library/image79.jpg";
import picture80 from "@/assets/library/image80.jpg";
import picture81 from "@/assets/library/image81.jpg";
import picture82 from "@/assets/library/image82.jpg";
import picture83 from "@/assets/library/image83.jpg";

//import store from '@/main.js'
export default {
  name: "SetTheTone",
  data: () => ({
    //
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    dataImages: [
      {
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
      },
      {
        id: "41",
        src: picture41,
        alt: "Alt Image 7"
      },
      {
        id: "42",
        src: picture42,
        alt: "Alt Image 8"
      },
      {
        id: "43",
        src: picture43,
        alt: "Alt Image 9"
      },
      {
        id: "44",
        src: picture44,
        alt: "Alt Image 10"
      },
      {
        id: "45",
        src: picture45,
        alt: "Alt Image 11"
      },
      {
        id: "46",
        src: picture46,
        alt: "Alt Image 12"
      },
      {
        id: "47",
        src: picture47,
        alt: "Alt Image 9"
      },
      {
        id: "48",
        src: picture48,
        alt: "Alt Image 10"
      },
      {
        id: "49",
        src: picture49,
        alt: "Alt Image 11"
      },
      {
        id: "50",
        src: picture50,
        alt: "Alt Image 12"
      },
      {
        id: "51",
        src: picture51,
        alt: "Alt Image 12"
      },
      {
        id: "52",
        src: picture52,
        alt: "Alt Image 12"
      },
      {
        id: "53",
        src: picture53,
        alt: "Alt Image 12"
      },
      {
        id: "54",
        src: picture54,
        alt: "Alt Image 12"
      },
      {
        id: "55",
        src: picture55,
        alt: "Alt Image 12"
      },
      {
        id: "56",
        src: picture56,
        alt: "Alt Image 12"
      },
      {
        id: "57",
        src: picture57,
        alt: "Alt Image 12"
      },
      {
        id: "58",
        src: picture58,
        alt: "Alt Image 12"
      },
      {
        id: "59",
        src: picture59,
        alt: "Alt Image 12"
      },
      {
        id: "60",
        src: picture60,
        alt: "Alt Image 12"
      },
      {
        id: "61",
        src: picture61,
        alt: "Alt Image 2"
      },
      {
        id: "62",
        src: picture62,
        alt: "Alt Image 3"
      },
      {
        id: "63",
        src: picture63,
        alt: "Alt Image 4"
      },
      {
        id: "64",
        src: picture64,
        alt: "Alt Image 5"
      },
      {
        id: "65",
        src: picture65,
        alt: "Alt Image 6"
      },
      {
        id: "66",
        src: picture66,
        alt: "Alt Image 7"
      },
      {
        id: "67",
        src: picture67,
        alt: "Alt Image 8"
      },
      {
        id: "68",
        src: picture68,
        alt: "Alt Image 9"
      },
      {
        id: "69",
        src: picture69,
        alt: "Alt Image 10"
      },
      {
        id: "70",
        src: picture70,
        alt: "Alt Image 11"
      },
      {
        id: "71",
        src: picture71,
        alt: "Alt Image 12"
      },
      {
        id: "72",
        src: picture72,
        alt: "Alt Image 9"
      },
      {
        id: "73",
        src: picture73,
        alt: "Alt Image 10"
      },
      {
        id: "74",
        src: picture74,
        alt: "Alt Image 11"
      },
      {
        id: "75",
        src: picture75,
        alt: "Alt Image 12"
      },
      {
        id: "76",
        src: picture76,
        alt: "Alt Image 12"
      },
      {
        id: "77",
        src: picture77,
        alt: "Alt Image 12"
      },
      {
        id: "78",
        src: picture78,
        alt: "Alt Image 12"
      },
      {
        id: "79",
        src: picture79,
        alt: "Alt Image 12"
      },
      {
        id: "80",
        src: picture80,
        alt: "Alt Image 12"
      },
      {
        id: "81",
        src: picture81,
        alt: "Alt Image 12"
      },
      {
        id: "82",
        src: picture82,
        alt: "Alt Image 12"
      },
      {
        id: "83",
        src: picture83,
        alt: "Alt Image 12"
      }
    ]
  }),
  props: {},
  components: {},
  methods: {
    submit: function() {},
    onSelectMultipleImage: function (data) {
      console.log('fire event onSelectMultipleImage: ', data)
      this.imageMultipleSelected = data
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