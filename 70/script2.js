console.log("Hello World")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

let boxes = document.querySelectorAll(".box")
console.log(boxes)

let arr = Array.from(boxes)
console.log(arr)

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255)
    let val2 = Math.ceil(0 + Math.random()*255)
    let val3 = Math.ceil(0 + Math.random()*255)

    return `rgb(${val1}, ${val2}, ${val3})`
}

arr.forEach(e =>{
    e.style.backgroundColor = getRandomColor()
})

arr.forEach(e =>{
    e.style.color = getRandomColor()
})