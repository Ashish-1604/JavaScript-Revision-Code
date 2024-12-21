//  Classes is a program code template for creating object.

// Those object have some state (variables) and some behavior (functions) inside it.

/*

    class MyClass{
        constructor(){...}
        myMethods(){...}
    }

 */

class ToyotaCar{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
        console.log("brandName: "+this.brandName)
    }
}

let fortuner = new ToyotaCar(); // fortuner is a object

console.log(fortuner.start());

console.log(fortuner.setBrand("fortuner"));