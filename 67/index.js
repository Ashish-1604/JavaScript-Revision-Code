console.log("Hello World")

console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[0])

console.log(document.body.childNodes[1])

let cont = document.body.childNodes[1]

console.log(cont.firstChild)
console.log(cont.lastChild)

console.log(cont.firstElementChild)
console.log(cont.lastElementChild)

// cont.lastElementChild.style.color = "red"
// cont.lastElementChild.style.backgroundColor = "green"

console.log(cont.lastElementChild.parentElement)




console.log(document.body.firstElementChild.childNodes)


console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)

console.log(document.body.children[1])
console.log(document.body.children[1].rows)
