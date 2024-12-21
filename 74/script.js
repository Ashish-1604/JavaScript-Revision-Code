let button = document.getElementById("btn")

// List of Mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click",()=>{
//     alert("I was clicked. Yayy!")
// })


// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click"
// })

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click"
})



button.addEventListener("contextmenu",()=>{
    alert("Dont hack by Right click Please")
})


// Keyboards events
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
})