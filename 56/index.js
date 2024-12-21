console.log("Hello I am conditional tutorial.")

/*
 I am a
 multiline
 comment
*/

let age = 3;
let grace = 2;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);

age+=grace
console.log(age)


if(age>18){
    console.log("You can drive")
}
else if(age == 0){
    console.log("Are you kidding")
}
else if(age == 1){
    console.log("Are you again kidding")
}
else{
    console.log("You cannot drive")
}


console.log("3"==3)  // (==)  it just compare value not check type

console.log("3"===3) // (===) it compare and check type of value

// logic operators
//   And operator --> &&
//   Or operator --> ||
//   Not operator --> !


// ? --> Ternary Operator
let u = 5;
let v = 6;
let w= (u>v) ?(u-v):(v-u);
/*
translate to
if(u>v){
    let w = u-v; 
}
else{
    let w = v-w;
}
*/
console.log(w);

