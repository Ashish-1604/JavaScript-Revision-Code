// Async-Await

/*
async function always return a promise

    async function myFunc(){....}

await pauses the execution of its surrounding async function until the promise is settled.
 */

function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data ", dataId);
            resolve("success");
        },2000);
    })
}

// async function getAllData(){
//     console.log("getting data1....")
//     await getData(1);
//     console.log("getting data2....")
//     await getData(2);
//     console.log("getting data3....")
//     await getData(3);
//     console.log("getting data4....")
//     await getData(4);
//     console.log("getting data5....")
//     await getData(5);
// }

// getAllData();


/*
IIFE: Immediately Invoked Function Expression

IIFE is a function that is called immediately as soon as it is defined

 */

(async function (){
    console.log("getting data1....")
    await getData(1);
    console.log("getting data2....")
    await getData(2);
    console.log("getting data3....")
    await getData(3);
    console.log("getting data4....")
    await getData(4);
    console.log("getting data5....")
    await getData(5);
}) (); // same as above