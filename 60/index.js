// Strings
// Strings are immutable
console.log("This is a String Tutorial.")

let a = "Harry"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5])  // --> Undefined (not error)

console.log(a.length)

let name = "Harry"
let friend = "Rohan"
console.log("His name is "+name+" and his friend is "+friend)
console.log(`His name is ${name} and his friend is ${friend}`)
console.log(`His name is ${name} and his friend is ${friend}`)

console.log(`Roh"an`)
// console.log("Roh"an") --> error
console.log("Roh\"an")

let b = "Shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,5))
console.log(b.slice(1))

console.log(b.replace("Sh","77"))

console.log(b.concat(a))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)
console.log(b.charAt(0))
console.log(b.indexOf("h"))
console.log(b.startsWith("b"))
console.log(b.endsWith("v"))


