class Memorii{
    //constructor
    constructor(name, date, people, content, images, audio){
        this.name = name;
        this.date = date;
        this.people = people;
        this.content = content;
        this.images = images;
        this.audio = audio;
    }

    //methods
    animate(){
        console.log(this.name + "is animating")
    }
}