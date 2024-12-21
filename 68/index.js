console.log("Harry")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

// boxes[2].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor = "red"


// querySelector

// document.querySelector(".box").style.backgroundColor = "green"  //only first box

console.log(document.querySelectorAll(".box"))
// document.querySelectorAll(".box").style.backgroundColor = "green" --> not work bcz it stores in list

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})


//getElementsByTagName
console.log(document.getElementsByTagName("div"))

let e = document.getElementsByTagName("div")

console.log(e[4].matches("#redbox"))
console.log(e[3].matches("#redbox"))

console.log(e[3].closest(".container"))

console.log(document.querySelector(".container").contains(e[3]))
