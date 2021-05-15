let abc= {
    a : {
        b : {
            c: {
                value : "value"
            }
        }
    },
    c:{

    }
}
console.log(getvalue(abc,"a.b.c","Not Found"));

function getvalue(obj,checkObj,notFound){

    let objsplit = checkObj.split('.');
    let returnValue = false;
    var findValue = obj;
    if(objsplit.length){
        for(let i=0;i<objsplit.length;i++){
            findValue = findObj(findValue,objsplit[i])
            if(!findValue){
                return notFound;
            } 
            returnValue = true
        }
    }else{
       findValue = findObj(obj,checkObj)
    }
    if(!findValue){
       return notFound
    }
    return 'Found the element'

}

function findObj(partobj,key){
    if(partobj.hasOwnProperty(key)){
         partobj = partobj[key];
         return partobj
    }else{
        return null;
    }

}


let a = [2, 3, 5, 6, [4, 5, [5, 7]], [5, 6], 5, 7]

let flatenarray = [];

function flatten(a){
for(let i=0;i<a.length;i++){
  let b = a[i];
  typeof b != 'number' && Array.isArray(b) ? flatten(b) : flatenarray.push(a[i])
//   if(typeof b != 'number' && Array.isArray(b) ){
//   	flatten(b)
//   }else{
//   	flatenarray.push(a[i])
//   }
}
}

flatten(a);
console.log(flatenarray);

// function getSum(a, b) {
// 	return a + b;
// }

// function getSum(a, b, c) {
// 	return a + b + c;
// }

// console.log(getSum(2, 3))

