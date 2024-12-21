// Arrays
// Arrays are mutuable and String are immmutable
let arr = [1,2,3,4,7];
// console.log(arr)

// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

// arr[0] = 5566;
// console.log(arr[0])

// console.log(arr.toString())

// console.log(arr.join(" and "))

let a = [1,2,3,4,5,6]
// a.pop()// last element will pop out(remove)
// console.log(a)

// a.push(100)   // add element at last position
// console.log(a)
// a.push("Harry")
// console.log(a)

// a.shift()
// console.log(a) // remove first element

// a.unshift("Jack")  //  add element at first position
// console.log(a)

// delete a[6]  // delete element but space will remain allocate
// console.log(a)
// console.log(a.length)
// console.log(a[6])


// let a1 = [1,2,3]
// let a2 = [4,5,6]
// let a3 = [7,8,9]

//  a1 = a1.concat(a2,a3)
// console.log(a1)

// let a = [7,9,8]
// a.sort()
// console.log(a)

let number = [1,2,3,4,5]
number.splice(1,2)
//     splice(Index, how many element delete from given Index)
console.log(number)

number = [1,2,3,4,5]
number.splice(1,3, 222, 333)
//                 add from index 1
console.log(number)


// slice
// reverse