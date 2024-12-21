// Exercise - 11
// Factorial of a number using for loop and reduce method

var num = prompt("Enter a number:")
var factorial=1
if(num!=0){
    for(let i=num; i>1;i--){
        factorial=factorial*i
    }
    console.log("The factorial of a "+num+" is: "+factorial)
}
else if(num==0){
    console.log("The factorial of a "+num+" is: "+1)
}

// By reduce method

let arr = []
for(let i=num;i>0;i--){
    // arr.push(i)
    arr.unshift(i)
}

console.log(arr)
 
const fact=((a,b)=>{
    return a*b
})

console.log(`The factorial of a ${num} by using reduce method is ${arr.reduce(fact)}`)