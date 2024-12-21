class Animal{
    constructor(name){
        this.name = name
        console.log('Object is created');

    }
    eats(){
        console.log('Kha rha hu');
        
    }
    jumps(){
        console.log('khood rha hu');
        
    }

}

let a = new Animal("Bunny");
console.log(a.jumps());
console.log(a.eats());

// console.log(a.run()); --> error

console.log(a.name);

class Lion extends Animal{
    constructor(naam){
        super()
        this.name = naam
        console.log('Object is created and he is a Lion');    
    }
    // override0
    eats(){
        // super.eats()
        console.log('Kha rha hu roar');
    }
}


let l = new Lion("Shera")
console.log(l.name);

console.log(l.eats());



console.log(l instanceof Lion);
console.log(l instanceof Animal);
console.log(a instanceof Lion);


