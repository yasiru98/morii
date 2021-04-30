import * as THREE from "three";
export default class Memorii {
    //constructor
    constructor(name, date, people, content, images, audio, material) {
        this.name = name;
        this.date = date;
        this.people = people;
        this.content = content;
        this.images = images;
        this.audio = audio;
        this.geometry = new THREE.IcosahedronGeometry(10, 5);
        this.material = material;
        this.Ico = new THREE.Mesh(this.geometry, this.material);
    }


    //methods
    animateThis(scene, parent, memoriis) {
       // console.log(this.Ico)
        scene.add(this.Ico);
        parent.add(this.Ico);
        memoriis.push(this.Ico);
    }
    test() {
      //  console.log(this.name + "is animating")
    }
}