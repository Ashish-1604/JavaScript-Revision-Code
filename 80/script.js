let obj = {
    a:1,
    b:"Harry"
}

console.log(obj);
console.log(obj.a);
console.log(obj.b);


let animal={
    eats: true
};

let rabbit = {
    jumps: true
};

console.log(rabbit.jumps);

console.log(rabbit.eats);

rabbit.__proto__ = animal; // set rabbit.[[Prototype]] = animal
console.log(rabbit.eats);


