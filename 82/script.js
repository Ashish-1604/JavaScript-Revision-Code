async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 3000)
    })
}

// IIFF syntax
/*
    (function(){
       ....
       ....
    })()
*/

// (async function main() {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })()


// Destructing

let [x, y] = [4, 5, 7]
console.log(x, y);

let [a, b, ...rest] = [2,4,5,10,13,14]
console.log(a,b,rest);

let obj = {
    u:1,
    v:2,
    w:3
}

let {u,v} = obj
console.log(u);
console.log(v);

function sum(a,b,c){
    return a+b+c
}

let arr = [1,4,6]

console.log(sum(arr[0],arr[1],arr[2]));

// spread operator
console.log(sum(...arr));

 

