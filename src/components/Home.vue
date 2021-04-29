<template>
  <section>
    
    <v-app-bar elevation="1" height="100" color="white">
      <v-btn sm text color="black" href disabled>
        <v-icon left></v-icon>
      </v-btn>
      <v-toolbar-title class="black--text">morii</v-toolbar-title>
      <v-btn sm text color="black" href disabled>
        <v-icon left></v-icon>
      </v-btn>
      <router-link to="/addmorii/addmedia">
        <v-btn sm text color="black">add a new memorii +</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field
        label="search my memoriis"
        prepend-inner-icon="mdi-magnify"
        rounded
        dense
        outlined
        class="mt-6"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn sm text href="#js" color="black">
          <v-icon>mdi-web</v-icon>
        </v-btn>
        <v-btn sm text href="#unity" color="black">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn sm text color="black" href="#contact">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
        <v-btn sm text color="black" href disabled>
          <v-icon left></v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-img src="@/assets/nbackground.png">
    <div id="container"></div>
    </v-img>
  </section>
</template>

<script>
import Memorii from "@/morii.js";
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
    camera: new THREE.PerspectiveCamera,
    scene: new THREE.Scene(),
    renderer: new THREE.WebGLRenderer,
    mesh: null,
    raycaster: null,
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
    composer: EffectComposer
  }),

  methods: {
    onWindowLoad() {
      console.log("window load event");
    },
    printmorii() {
      console.log("Title: " + this.moriiTitle);
      console.log("Story: " + this.moriiStory);
      console.log("Location: " + this.moriiLocation);
      console.log("Who was there: " + this.moriiWho);
      console.log("Who was there: " + this.moriiDate);
    },
    init: function() {

      window.addEventListener('resize',this.onWindowResize());
       /* create the scene and camera */
      let container = document.getElementById('container');

      this.camera = new THREE.PerspectiveCamera(80, container.clientWidth/container.clientHeight, 0.1, 10000);
       
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
      this.camera.position.set(0,20,300);
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
      for (let i = 0; i < 25; i++) {
        this.newMaterial = new THREE.MeshNormalMaterial({
          flatShading: true
        });

        this.myMemorii = new Memorii(
          "Summer2020",
          "4/12/21",
          ["Tom", "Jerry"],
          "We had a great summer trip",
          "summer.jpg",
          "summer.mp3",
          this.newMaterial
        );

        this.myMemorii.Ico.position.set(
          this.getMinMax(this.minX, this.maxX),
          this.getMinMax(this.minY, this.maxY),
          this.getMinMax(this.minZ, this.maxZ)
        );
        this.myMemorii.animateThis(this.scene, this.parent, this.memoriis);
        //draw lines
        this.lineMat = new THREE.LineBasicMaterial({
          color: 0x000000,
          linewidth: 30
        });
        this.points = [];
        this.points.push(this.parent.position);
        this.points.push(this.myMemorii.Ico.position);
        this.lineGeometry = new THREE.BufferGeometry().setFromPoints( this.points );
       
        this.line = new THREE.Line(this.lineGeometry, this.lineMat);
        this.scene.add(this.line);
        console.log(this.parent.position);
        console.log(this.myMemorii.Ico.position);
     }

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
    getMinMax: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    onWindowResize: function() {
      let container = document.getElementById('container');
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.camera.aspect = width / height;
      
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      // this.composer.setSize(width, height);
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
    moriiDate: "date"
  }),
  mounted() {
    this.init();

  }
};
</script>

<style>
/* Hide scroll and center content vertically */

#container {
  width: 100%;
  height: 100vh;
}
</style>
