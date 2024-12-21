console.log("Hello World")

console.log(document.body.children)

let e = document.body.firstElementChild
console.log(e)
e.style.backgroundColor = "gray"

console.log(e.children)
e.children[1].style.backgroundColor = "green" 
e.children[1].style.color = "yellow" 

e.children[1].previousElementSibling.style.backgroundColor = "red" 
e.children[1].previousElementSibling.style.color = "blue" 

e.children[1].nextElementSibling.style.backgroundColor = "blue" 
e.children[1].nextElementSibling.style.color = "orange" 

e.lastElementChild.style.backgroundColor = "hotpink"
e.lastElementChild.style.color = "red"

e.lastElementChild.previousElementSibling.style.backgroundColor = "brown"
e.lastElementChild.previousElementSibling.style.color = "lightblue"