function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500)
    })
}

console.log('Loding Modues');

console.log('Do something else');

console.log('Load data');

let data = getData()

// data.then((v)=>{
//     console.log(data);

//     console.log('process data');
    
//     console.log('task 2'); 
// })

console.log(data);

console.log('process data');

console.log('task 2');


