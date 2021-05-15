function xdupdata(arr) {
    let obj = {};
    
    for (i = 0; i < arr.length; i++) {
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = obj[arr[i]] + 1;
            console.log(arr[i])
        }else{
            obj[arr[i]] = 1;
            
        }
    }
    console.log(JSON.stringify(obj));
}

let a=[10,20,30,10,20,10]
xdupdata(a);