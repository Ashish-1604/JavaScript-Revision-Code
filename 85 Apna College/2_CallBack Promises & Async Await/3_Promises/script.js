// Promises
/*
Promises is for "eventual" completion of task.
It is an object in JS.

It is a solution to callback hell.

let promise = new Promise((resolve, reject)=>{....})
                                 |
                        Function with 2 handlers 
                        
                        
Promises have three state
Pending     Fulfilled        Rejected
 */

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am promise");
// })    // ---> pending state

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am promise");
//     resolve("success")
// })    // ---> fulfilled state

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am promise");
//     reject("some error occured")
// })    // ---> rejected state