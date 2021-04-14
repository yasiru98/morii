import * as THREE from './threejs/three.module.js';
import {
  OrbitControls
} from './threejs/OrbitControls.js'

import {
  GLTFLoader
} from './threejs/postprocessing/GLTFLoader.js';
import {
  ShaderPass
} from './threejs/postprocessing/ShaderPass.js';
import {
  RenderPass
} from './threejs/postprocessing/RenderPass.js';
import {
  EffectComposer
} from './threejs/postprocessing/EffectComposer.js';
import {
  UnrealBloomPass
} from './threejs/postprocessing/UnrealBloomPass.js';
class Memorii{
    //constructor
    constructor(name, date, people, content, images, audio,material){
        this.name = name;
        this.date = date;
        this.people = people;
        this.content = content;
        this.images = images;
        this.audio = audio;
        this.geometry = new THREE.IcosahedronGeometry(10, 5);;
        this.material = material;
        this.Ico = new THREE.Mesh(this.geometry, this.material);
    }

    
    

    //methods
    animateThis(scene, parent, memoriis){
        scene.add(this.Ico);
        parent.add(this.Ico);
        memoriis.push(this.Ico);
    }
    test(){
        console.log(this.name + "is animating")
    }
}

export{ Memorii }