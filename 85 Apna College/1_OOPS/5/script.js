
class Person {
    constructor(){
        this.species = "homo sapiens"
        console.log("species: "+this.species)
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep")
    }

    work() {
        console.log("do nothing");
    }
}


class Engineer extends Person {
    work() {
        console.log("solve problems, build something");
    }
}

let p1 = new Person();   // constructor called


let ashishObj = new Engineer;   // parent constructor called

console.log(ashishObj.work());
