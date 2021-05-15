function myPromise(val){
    return new Promise((resolve,rejected)=>{
        if(val > 0) resolve("Accept");
        rejected("Not Accept")
    })
}

async function myTest(value){
    try{
        let test = await myPromise(value);
        console.log(test)
    }catch(err){
        console.log("err-----",err)
    }
   
}

myTest(-1)