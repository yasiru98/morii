
<template>
  <section>
    <v-app-bar elevation="1" height="60px" color="white">
      <v-icon size="70">$vuetify.icons.logo</v-icon>
      <v-btn sm text color="black" href disabled>
        <v-icon left></v-icon>
      </v-btn>
      <router-link to="/addmorii/addmedia/photos">
        <v-btn sm text color="black" class="moriiAdd"
          >add a new memorii +</v-btn
        >
      </router-link>
      <v-spacer></v-spacer>

      <v-text-field
        label="search"
        prepend-inner-icon="mdi-magnify"
        dense
        clearable
        class="mt-6"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn sm text href="#js" color="black">
          <v-icon size="20">$vuetify.icons.home</v-icon>
        </v-btn>
        <v-btn sm text href="#unity" color="black">
          <v-icon size="20">$vuetify.icons.collabs</v-icon>
        </v-btn>
        <v-btn sm text color="black" href="#contact">
          <v-icon size="20">$vuetify.icons.bell</v-icon>
        </v-btn>
        <v-btn sm text color="black" href="#contact">
          <v-icon size="20">$vuetify.icons.profile</v-icon>
        </v-btn>
        <v-btn sm text color="black" href disabled>
          <v-icon left></v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-img src="@/assets/nbackground.png">
      <div
        id="container"
        @mousemove="onDocumentMouseMove"
        @mousedown="mouseIsDown"
        @mouseup="mouseIsUp"
      >
        <v-icon size="50" class="pan">$vuetify.icons.pan</v-icon>

        <v-icon class="ui">$vuetify.icons.zoomIn</v-icon>
        <v-icon class="ui">$vuetify.icons.zoomOut</v-icon>
      </div>
    </v-img>
  </section>
</template>

<script>
//import Memorii from "@/morii.js";
import Triangle from "@/triangle.js";
import * as THREE from "three";
import { mapState } from "vuex";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "Mosaic",

  components: {},

  data: () => ({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    zoomValue: null,
    prevVal: null,
    camera: new THREE.PerspectiveCamera(),
    cameraCenter: new THREE.Vector3(),
    scene: new THREE.Scene(),
    renderer: new THREE.WebGLRenderer(),
    loader: new THREE.TextureLoader(),
    mesh: null,
    raycaster: null,
    mouse: null,
    mouseDown: false,
    light: null,
    camLight: null,
    square: null,
    material: null,
    minX: null,
    maxX: null,
    minY: null,
    maxY: null,
    geometry: null,
    myMemorii: null,
    memoriis: [],
    controls: null,
    randX: null,
    randY: null,
    tGeometry: null,
    tMesh: null,
    tShape: null,
    triangles: [],
  }),
  methods: {
    onWindowLoad() {
      console.log("window load event");
    },
    printmorii() {
      //console.log("Title: " + this.moriiTitle);
      //console.log("Story: " + this.moriiStory);
      //console.log("Location: " + this.moriiLocation);
      //console.log("Who was there: " + this.moriiWho);
      //console.log("Who was there: " + this.moriiDate);
      //console.log("Photos: " + this.moriiPhotos);
      console.log(this.moriiObjects);
      //console.log(this.moriiSongs);
    },
    init: function () {
      //adjust scene size
      window.addEventListener("resize", this.onWindowResize());
      /* create the scene and camera */
      let container = document.getElementById("container");

      this.camera = new THREE.OrthographicCamera(
        container.clientWidth / -2,
        container.clientWidth / 2,
        container.clientHeight / 2,
        container.clientHeight / -2,
        0.1,
        100
      );

      this.scene = new THREE.Scene();
      this.scene.add(this.camera);
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.toneMapping = THREE.ReinhardToneMapping;
      container.appendChild(this.renderer.domElement);
      //   this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();
      /* CAMERA CONTROLS */
      // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // this.controls.autoRotate = false;
      // this.controls.enableDamping = true;
      // this.controls.dampingFactor = 0.01;
      // this.controls.maxDistance = 50;
      // this.controls.minDistance = 10;
      this.camera.position.set(0, 0, 25);
      this.cameraCenter.x = this.camera.position.x;
      this.cameraCenter.y = this.camera.position.y;

      /* LIGHTS */

      // const light = new THREE.AmbientLight( 0x404040, 5 ); // soft white light
      this.light = new THREE.PointLight(0x404040, 5, 500);
      this.light.position.set(0, 0, 20);
      this.scene.add(this.light);

      this.camLight = new THREE.PointLight(0xffffff);
      this.camLight.position.set(1, 1, 2);
      this.camera.add(this.camLight);

      this.moriiObjects.forEach((memorii) => {
        console.log(memorii);
      });

      //Square
      this.square = new THREE.Shape()
        .moveTo(0, 0)
        .lineTo(0, 500)
        .lineTo(1000, 500)
        .lineTo(1000, 0)
        .lineTo(0, 0);
      this.geometry = new THREE.ShapeGeometry(this.square);
      this.mesh = new THREE.Mesh(
        this.geometry,
        new THREE.MeshPhongMaterial({
          color: 0x00ffff,
          side: THREE.DoubleSide,
          visible: false,
        })
      ); //turn the shape into a mesh
      this.mesh.geometry.computeBoundingBox(); //get bounds of the box
      this.mesh.geometry.center(); //center the box
      this.mesh.position.set(0, 0, 0);
      this.minX = this.mesh.geometry.boundingBox.min.x;
      this.maxX = this.mesh.geometry.boundingBox.max.x;
      this.minY = this.mesh.geometry.boundingBox.min.y;
      this.maxY = this.mesh.geometry.boundingBox.max.y;
      this.scene.add(this.mesh);

      this.loader = new THREE.TextureLoader();

      /*
       * Make the Triangles
       */
      //  for (let i = 0; i < this.moriiObjects.length; i++) {

      //  }
      for (let i = 0; i < 1; i++) {
        this.randX = this.getMinMax(this.minX, this.maxX);
        this.randY = this.getMinMax(this.minY, this.maxY);
        console.log("image"+this.moriiObjects[0].moriis.images[0].id+".jpg");
        this.tMaterial = new THREE.MeshBasicMaterial({
          map: this.loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg'),
        });
        this.tShape = new Triangle(
          this.randX,
          this.randX + 50,
          this.randY,
          this.tMaterial
        );
        console.log(this.tShape);
        this.tShape.mesh.position.set(
          this.getMinMax(this.minX, this.maxX),
          this.getMinMax(this.minY, this.maxY),
          0
        );
        this.tShape.animateThis(this.scene);
      }

      this.animate();
    },
    zoomInput: function () {
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
    updateCamera: function () {
      this.camera.position.x = this.cameraCenter.x + 5 * this.mouse.x;
      this.camera.position.y = this.cameraCenter.y + 5 * this.mouse.y;
    },
    onDocumentMouseMove: function (event) {
      let container = document.getElementById("container");
      if (this.mouseDown == true) {
        this.mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
        this.mouse.y = (event.clientY / container.clientHeight) * 2 + 1;
      }
    },
    mouseIsDown: function () {
      this.mouseDown = true;
    },
    mouseIsUp: function () {
      this.mouseDown = false;
    },
    getMinMax: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
    onWindowResize: function () {
      let container = document.getElementById("container");
      const width = container.clientWidth;
      const height = container.clientHeight;

      this.camera.aspect = width / height;

      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
      //this.composer.setSize(width, height);
    },
    animate: function () {
      requestAnimationFrame(this.animate);

      this.updateCamera();
      //this.controls.update();
      //do animations here

      //render animations
      this.renderer.render(this.scene, this.camera);
    },
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
    moriiSampleMemory: "sampleMemory",
    mosaicMorii:"whichMorii",
  }),
  mounted() {

    this.init();
    console.log(this.mosaicMorii)
  },
};
</script>

<style>
/* Hide scroll and center content vertically */
body {
  overflow: hidden;
  height: 100vh;
}
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
