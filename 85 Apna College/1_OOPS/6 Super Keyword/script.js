// Super Keyword

/*
The super keyword is used to call the constructor of its parent class to access the
parent's properties and method.
*/


class Person {
    constructor(name){
        console.log("enter parent constructor")

        this.species = "homo sapiens"
        this.name = name;

        console.log("species: "+this.species)
        console.log("name: "+this.name)
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep")
    }
}


class Engineer extends Person {
    constructor(branch, name){
        console.log("enter child constructor")

        super(name); // to invoke parent class constructor
        this.branch = branch;
        console.log("branch: "+this.branch);

        console.log("exit child constructor")
    }
    work() {
        // eat() // throw error bcz eat is not defined
        super.eat() 
        console.log("solve problems, build something");
    }
}

let ashishObj = new Engineer("AI&DS", "Ashish");
// console.log(ashishObj.work());
