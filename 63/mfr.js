// map filter reduce in array

let arr = [1, 13, 5, 7, 11]

// let newArr = []

// for(let i=0;i<arr.length;i++){
//     const element = arr[i]
//     newArr.push(element**2)
// }

// console.log(newArr)


let newArr = arr.map((e, index, array)=>{
    return e**2
})

const greaterThanSeven = (e =>{
    if(e>7){
        return true;
    }
    return false;
})

console.log(arr.filter(greaterThanSeven))

//  reduce method -  Reduce an array to a single value

const add = ((a,b)=>{
    return a+b
})

let sum = arr.reduce(add)
console.log(sum)



let s = Array.from("Harry")
console.log(s)