import * as THREE from "three";
export default class Memorii {
    //constructor
    constructor(title, date, people,location ,story, videos,images, songs, material) {
        this.title= title;
        this.date = date;
        this.people = people;
        this.location = location;
        this.story = story;
        this.videos = videos;
        this.images = images;
        this.songs = songs;
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