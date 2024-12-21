//  Exercise - 10
//  Create Buissness Name Generator from the given list
/*

Adjectives --> Crazy, Amazing, Fire
Shop Names --> Engine, Food, Granments
Another Words --> Gross, Limited, Hub

*/


let adj = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}

let shops = {
    1:"Engine",
    2:"Food",
    3:"Granments"
}

let words = {
    1:"Gross",
    2:"Limited",
    3:"Hub"
}


let a = Math.floor(Math.random()*3) + 1
let b = Math.floor(Math.random()*3) + 1
let c = Math.floor(Math.random()*3) + 1

console.log(`${adj[a]} ${shops[b]} ${words[c]}`)
