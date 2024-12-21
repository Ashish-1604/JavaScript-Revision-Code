// Constructor is a method:
//         - automatically invoked by new
//         - initializes object

// It ia special method of a class for creating and initializing an object instance of that class

class ToyotaCar{
    // constructor(){
    //     console.log("creating new object")
    // }

    constructor(brand){
        console.log("creating new object")
        this.brand = brand;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
}

let fortuner = new ToyotaCar("fortuner"); // constructor

// console.log(fortuner.start());
console.log(fortuner.brand);

let lexus = new ToyotaCar();
console.log(lexus.brand);   // undefined

lexus.brand = "lexus";
console.log(lexus.brand);
