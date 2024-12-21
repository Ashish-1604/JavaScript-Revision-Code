function getData(dataId, getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success")
            if(getNextData){
                getNextData();
            }
        },5000)
    })
}


/*
A JavaScript Promise object can be:

    - Pending: the result is undefined
    - Resolved: the result value is (fulfilled)
    - Rejected: the result is an error
    
 */