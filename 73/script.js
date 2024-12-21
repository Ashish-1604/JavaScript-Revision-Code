function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let ViewStr
    if(views<1000000){
        ViewStr = views/1000 + "k"
    }
    else if(views>1000000){
        ViewStr = views/1000000 + "M"
    }
    else{
        
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${ViewStr} views . 2 months ago</p>
    </div>
</div>`

// document.querySelector(".container").innerHTML = html
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}




createCard("Introduction to Backend | Sigma Web Dev #2", "CodeWithHarry", 560000, 2, "31:22", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg")

createCard("Introduction to Backend | Sigma Web Dev #2", "CodeWithHarry", 560000, 2, "31:22", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg")