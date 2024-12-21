function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success")
        }, 4000)
    })
}

// let p1 = asyncFunc1();

// console.log("fetching data1....");

// p1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success2")
        }, 4000)
    })
}

// let p2 = asyncFunc2();

// console.log("fetching data2....");

// p2.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

/*
it print
fetching data1....
fetching data2....

then after 4 sec it print both below four line 

data1
success
data2
success2



but we want to print first print fetching data1... data1 success
then after fetching data2.... data2 success2


 */


console.log("fetching data1....")
asyncFunc1().then((res)=>{
    // console.log(res);
    console.log("fetching data2...")
    asyncFunc2().then((res)=>{
        // console.log(res)
    })
})


// This is Promise Chaining