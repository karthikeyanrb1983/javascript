let arr = [10,20,10,30,40,30,50,40];
console.log(arr.filter((item,index)=>{
     return arr.indexOf(item) != index;
}))

let uset =  new Set(arr);

let backtoarray = [...uset];

console.log(uset);




