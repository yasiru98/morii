<template>
  <section>
    <v-app-bar elevation="1" height="60px" color="white">
      <v-icon size="70">$vuetify.icons.logo</v-icon>
      <v-btn sm text color="black" href disabled>
        <v-icon left></v-icon>
      </v-btn>
      <router-link to="/addmorii/addmedia/photos">
        <v-btn sm text color="black" class="moriiAdd">add a new memorii +</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field label="search" prepend-inner-icon="mdi-magnify" dense clearable class="mt-6"></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn sm text color="black">
          <router-link to="/home">
            <v-icon size="20">$vuetify.icons.home</v-icon>
          </router-link>
        </v-btn>

        <v-btn sm text color="black">
          <router-link to>
            <v-icon size="20">$vuetify.icons.collabs</v-icon>
          </router-link>
        </v-btn>
        <v-btn sm text color="black">
          <router-link to>
            <v-icon size="20">$vuetify.icons.bell</v-icon>
          </router-link>
        </v-btn>
        <v-btn sm text color="black" @click="printmorii">
          <router-link to="/home">
            <v-icon size="20">$vuetify.icons.profile</v-icon>
          </router-link>
        </v-btn>
        <v-btn sm text color="black" href disabled>
          <v-icon left></v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-img src="@/assets/nbackground.png">
      <v-switch
        v-model="switch1"
        inset
        @change="toggle()"
        color="black"
        style="right: 1; bottom: 1"
        class="ui-switch"
      ></v-switch>

     <div id="listView">
         <v-flex d-flex>
          <v-layout wrap>
            <v-flex md12 v-for="index in this.arrayOfMoriis.length" :key="index">
              <v-card class="card-container">
                  {{this.arrayOfMoriis[index].title}}             
              </v-card>
            </v-flex> 
          </v-layout>
        </v-flex>
      </div>

      <div id="container">
        <v-icon size="50" class="pan">$vuetify.icons.pan</v-icon>

        <v-slider
          v-model="zoomValue"
          @change="zoomInput()"
          append-icon="$vuetify.icons.zoomin"
          prepend-icon="$vuetify.icons.zoomout"
          max="200;"
          min="0;"
          vertical
          color="grey darken-4"
          class="ui"
        ></v-slider>
      </div>
    </v-img>
  </section>
</template>

<script>
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

import Memorii from "@/morii.js";
import store from "@/main.js";
import * as THREE from "three";
import { mapState } from "vuex";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { Geometry } from "three/examples/jsm/deprecated/Geometry.js";
//import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
export default {
  name: "Home",
  //props: { moriiStory: { type: String },moriiTitle: { type: String },moriiLocation: { type: String } },
  components: {},

  data: () => ({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    zoomValue: null,
    prevVal: null,
    switch1: false,
    camera: new THREE.PerspectiveCamera(),
    scene: new THREE.Scene(),
    renderer: new THREE.WebGLRenderer(),
    mesh: null,
    raycaster: null,
    mouse: null,
    light: null,
    camLight: null,
    parent: null,
    geometryOne: null,
    material: null,
    sphere: null,
    minX: null,
    maxX: null,
    minY: null,
    maxY: null,
    minZ: null,
    maxZ: null,
    geometry: null,
    newMaterial: null,
    myMemorii: null,
    memoriis: [],
    lineMat: null,
    lineGeometry: null,
    line: null,
    bloomPass: null,
    renderScene: null,
    controls: null,
    composer: EffectComposer,
    sampleMemory: false,
    arrayOfMoriis: [],

  }),

  methods: {
    onWindowLoad() {
      console.log("window load event");
    },
    toggle: function() {
      console.log(this.switch1);
      if (this.switch1 === true) {
        document.getElementById("container").style.display = "none";
        document.getElementById("listView").style.display = "block";
      } else if (this.switch1 === false) {
        document.getElementById("container").style.display = "block";
        document.getElementById("listView").style.display = "none";
      }
    },
    fixMoriis: function(){
      //  console.log(this.moriiObjects);
      //  for(let i = 1; i <= this.moriiObjects.length; i++){
      //       //console.log(this.moriiObjects[0].moriis);
      //       this.arrayOfMoriis.push(this.moriiObjects[0].moriis);
      //        //console.log(this.arrayOfMoriis);
      //  }

    },
    printmorii() {
      //console.log("Title: " + this.moriiTitle);
      //console.log("Story: " + this.moriiStory);
      //console.log("Location: " + this.moriiLocation);
      //console.log("Who was there: " + this.moriiWho);
      //console.log("Who was there: " + this.moriiDate);
      //console.log("Photos: " + this.moriiPhotos);
      console.log(this.moriiObjects);
      console.log(this.moriiObjects.length);
      //console.log(this.moriiSongs);
    },
    init: function() {
      if (this.moriiSampleMemory === false) {
        let newMaterial = new THREE.MeshNormalMaterial({
          flatShading: true
        });
        let newMemorii = new Memorii(
          "The Time I Went To New Orleans + Sprained My Ankle",
          "March 2020",
          ["Yasiru", "Jake", "Liza", "Hannah", "Kate", "Mike"],
          "New Orleans, LA",
          "Laissez les bons temps rouler! In New Orleans the good times are always rolling down Bourbon Street, which has quite the party animal reputation during Mardi Gras. If you're lucky, you'll catch a second line parade strutting through the crowds. But this city isn't all Sazerac in a Solo cup. Take in the scenery of the historic French Quarter, tour the elegant Garden District, and eat your way across Nola's incredible restaurants and cafes—beignets are a must. If you love stories about things that go bump in the night, book a guided ghost tour that weaves through local taverns, alleyways, and cemeteries.",
          this.moriiVideos,
          [
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
            }
          ],
          this.moriiSongs,
          newMaterial
        );


        
            let newArray = [];
           this.moriiObjects.forEach(memorii => {
               console.log(memorii.moriis)
               let soloMemorii = memorii.moriis
                   console.log(soloMemorii)
               newArray.push(soloMemorii);
              
      });
        console.log(newArray);
       this.arrayOfMoriis = newArray;
       console.log(this.arrayOfMoriis);



        let moriis = newMemorii;
        store.commit("updateMoriis", {
          moriis: moriis
        });

        store.commit("updateSampleMemory", {
          sampleMemory: true
        });
        this.sampleMemory = true;
      }
      //adjust scene size
      window.addEventListener("resize", this.onWindowResize());
      /* create the scene and camera */
      let container = document.getElementById("container");

      this.camera = new THREE.PerspectiveCamera(
        80,
        container.clientWidth / container.clientHeight,
        0.1,
        10000
      );

      this.scene = new THREE.Scene();
      this.scene.add(this.camera);
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });

      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(this.renderer.domElement);
      //   this.raycaster = new THREE.Raycaster();
      //   this.mouse = new THREE.Vector2();
      /* CAMERA CONTROLS */
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.3;
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.01;
      this.controls.maxDistance = 300;
      this.controls.minDistance = 100;
      this.camera.position.set(0, 20, 300);

      /* LIGHTS */

      // const light = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
      this.light = new THREE.PointLight(0x404040, 5, 500);
      this.light.position.set(0, 0, 0);
      this.scene.add(this.light);

      this.camLight = new THREE.PointLight(0xffffff);
      this.camLight.position.set(1, 1, 2);
      this.camera.add(this.camLight);

      /*CREATE GEOMETRY */
      this.parent = new THREE.Group();
      this.scene.add(this.parent);
      this.parent.position.set(0, 0, 0);

      //sphere geometry
      this.geometryOne = new THREE.SphereGeometry(200, 32, 32);
      this.sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        wireframe: true,
        visible: false
      });
      this.sphere = new THREE.Mesh(this.geometryOne, this.sphereMaterial);
      this.sphere.transparent = false;
      this.scene.add(this.sphere);

      this.sphere.geometry.computeBoundingSphere();
      this.sphere.geometry.computeBoundingBox();

      this.minX = this.sphere.geometry.boundingBox.min.x + 80;
      this.maxX = this.sphere.geometry.boundingBox.max.x - 80;
      this.minY = this.sphere.geometry.boundingBox.min.y + 80;
      this.maxY = this.sphere.geometry.boundingBox.max.y - 80;
      this.minZ = this.sphere.geometry.boundingBox.min.z + 80;
      this.maxZ = this.sphere.geometry.boundingBox.max.z - 80;

      //Ico Geometry
      this.geometry = new THREE.IcosahedronGeometry(10, 5);
      this.geometry.computeBoundingBox();

      this.moriiObjects.forEach(memorii => {
        memorii.moriis.Ico.position.set(
          this.getMinMax(this.minX, this.maxX),
          this.getMinMax(this.minY, this.maxY),
          this.getMinMax(this.minZ, this.maxZ)
        );
        memorii.moriis.animateThis(this.scene, this.parent, this.memoriis);
        //draw lines
        this.lineMat = new THREE.LineBasicMaterial({
          color: 0x000000,
          linewidth: 30
        });
        this.points = [];
        this.points.push(this.parent.position);
        this.points.push(memorii.moriis.Ico.position);
        this.lineGeometry = new THREE.BufferGeometry().setFromPoints(
          this.points
        );

        this.line = new THREE.Line(this.lineGeometry, this.lineMat);
        this.scene.add(this.line);
      });
      // for (let i = 0; i < 25; i++) {
      //   this.newMaterial = new THREE.MeshNormalMaterial({
      //     flatShading: true,
      //   });

      //   this.myMemorii = new Memorii(
      //     "Summer2020",
      //     "4/12/21",
      //     ["Tom", "Jerry"],
      //     "Earth",
      //     "We had a great summer trip",
      //     "summer.jpg",
      //     "summer.mp3",
      //     this.newMaterial
      //   );

      //   this.myMemorii.Ico.position.set(
      //     this.getMinMax(this.minX, this.maxX),
      //     this.getMinMax(this.minY, this.maxY),
      //     this.getMinMax(this.minZ, this.maxZ)
      //   );
      //   this.myMemorii.animateThis(this.scene, this.parent, this.memoriis);
      //   //draw lines
      //   this.lineMat = new THREE.LineBasicMaterial({
      //     color: 0x000000,
      //     linewidth: 30,
      //   });
      //   this.points = [];
      //   this.points.push(this.parent.position);
      //   this.points.push(this.myMemorii.Ico.position);
      //   this.lineGeometry = new THREE.BufferGeometry().setFromPoints(
      //     this.points
      //   );

      //   this.line = new THREE.Line(this.lineGeometry, this.lineMat);
      //   this.scene.add(this.line);
      //   // console.log(this.parent.position);
      //   // console.log(this.myMemorii.Ico.position);
      // }

      //   /*Bloom Effects */
      this.renderScene = new RenderPass(this.scene, this.camera);

      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(container.clientWidth, container.clientHeight),
        1,
        0.4,
        0
      );

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(this.renderScene);
      this.composer.addPass(this.bloomPass);
      this.animate();
    },
    zoomInput: function() {
      console.log("we zoomin");
      console.log(this.zoomValue);
      console.log(this.camera.position);
      //var currentVal = this.zoomValue;
      if (this.zoomValue >= this.prevVal) {
        this.controls.zoomOut();
        this.prevVal = this.zoomValue;
      } else if (this.zoomValue < this.prevVal) {
        this.controls.zoomIn();
        this.prevVal = this.zoomValue;
      }
    },
    onMouseDown: function(e) {
      e.preventDefault();
      this.mouse.x = (e.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
      this.mouse.y =
        -(e.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      var intersects = this.raycaster.intersectObjects(this.memoriis);
      if (intersects.length > 0) {
        intersects[0].object.callback();
      }
    },
    getMinMax: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    onWindowResize: function() {
      let container = document.getElementById("container");
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.camera.aspect = width / height;

      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      //this.composer.setSize(width, height);
    },
    animate: function() {
      requestAnimationFrame(this.animate);

      this.controls.update();
      //do animations here

      //render animations
      //this.renderer.render(this.scene, this.camera);
      this.composer.render();
    }
  },

  computed: mapState({
    moriiTitle: "title",
    moriiStory: "story",
    moriiLocation: "location",
    moriiWho: "who",
    moriiDate: "date",
    moriiPhotos: "photos",
    moriiVideos: "videos",
    moriiSongs: "songs",
    moriiObjects: "moriis",
    moriiSampleMemory: "sampleMemory"
  }),
  mounted() {
    this.init();
    this.toggle();
   // this.fixMoriis();
    
  }
};

</script>

<style>
/* Hide scroll and center content vertically */

#container {
  width: 100%;
  height: 100vh;
}

.v-text-field {
  width: 100px;
}

.app {
  display: grid;
  grid-template-columns: repeat(14, 132px);
  grid-template-rows: 1fr 1fr 100px auto;
  column-gap: 24px;
  justify-items: center;
}
.ui {
  position: absolute;
  right: 50px;
  bottom: 300px;
}
.ui-switch {
  position: absolute;
  right: 30px;
}
.pan {
  position: absolute;
  left: 1810px;
  bottom: -490px;
}
</style>