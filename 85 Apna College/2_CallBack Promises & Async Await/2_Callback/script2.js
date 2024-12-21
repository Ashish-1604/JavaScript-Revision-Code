function getData(dataId){
    //2s
    setTimeout(()=>{
        console.log("data", dataId);
    },2000);
}


// getData(1);   // 2s
// getData(2);  // 2s
// getData(3); //  2s    ye sab ek sath print honge after 2s


/*
but we want print 1 -->after 2s--> print 2 -->after 2s--> print 3
 */

function getData2(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);

        if(getNextData){
            getNextData();
        }
        
    }, 2000)
}

// Callback Hell
getData2(1, ()=>{
    getData2(2,()=>{
        getData2(3)
    })
})
