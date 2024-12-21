//  Promises
/*
.then() & .catch()

promise.then((res)=>{....})

promise.catch((err)=>{...})
 */

const getPromise = ()=>{
    return  new Promise((resolve, reject)=>{
        console.log("I am Promise");
        // resolve("success")
        reject("networks error")
    })
}

let promise = getPromise();

promise.then((res)=>{
    console.log("Promise fulfilled: ", res)
})

promise.catch((err)=>{
    console.log("error: ", err)
})