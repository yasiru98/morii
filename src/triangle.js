import * as THREE from "three";
export default class Triangle {
    //constructor
    constructor(x, x2,y,material) {
        this.x= x;
        this.x2 = x2;
        this.y = y;
        this.diff = (this.x - this.x2);
        this.shape= new THREE.Shape()
        .moveTo(this.x,this.y)
        .lineTo(this.x-this.diff,this.x)
        .lineTo(this.x+this.diff,this.x)
        .lineTo(this.x,this.y);
        this.geometry = new THREE.ShapeGeometry(this.shape);      
        this.material = material;
        this.mesh = new THREE.Mesh(this.geometry,this.material)
    }


    //methods
    animateThis(scene) {
       // console.log(this.Ico)
        scene.add(this.mesh);
    }
    test() {
      //  console.log(this.name + "is animating")
    }
    makeShape(){
        this.shape= new THREE.Shape()
        .moveTo(this.x,this.y)
        .lineTo(this.x2,this.y)
        .lineTo(this.diff,this.y+this.x);
        this.geometry = new THREE.ShapeGeometry(this.shape);     
    }
}