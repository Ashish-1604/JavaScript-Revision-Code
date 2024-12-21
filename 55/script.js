console.log("Hey this is tutorial 55")

var a = 6;     // global scope
// a = a+1;

{
    let a = 66       // block scope
    console.log(a)
}
console.log(a)

var b = 5;
var c = "Harry"

var _a = 2
// var 55a = 1   whch is invalid not start with number (Not Allowed)

console.log(a+b+8)
console.log(typeof(a), typeof(b), typeof(c))

// const a1 = 1;
// a1 = a1+1;   ----> invalid (Not Allowed)

let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;   // type of null is object

console.log(x,y,z,p,q,r)
console.log(typeof(x),typeof(y),typeof(z),typeof(p),typeof(q),typeof(r))

let o = {
//  key  :  value
    name : "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o)
console.log(typeof o)  // type --> Object

o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);
