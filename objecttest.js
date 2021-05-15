// var obj={
//     id1:{
//        name:"adf",
//        cost:10,
//        disc:20
//     },
//     id2:{
//        name:"lkfd",
//        cost:20,
//        disc:10,
//        items:{
//           id3:{
//              name:"sfd",
//              cost:10,
//              disc:20
//           }
//        }
//     }
//  }
 

// let result = {
//     cost : 0,
//     disc : 0
// };

// function tree(obj,result){
//     let keys = Object.keys(obj);
//     for(let i=0;i<keys.length;i++){
//         if(obj[keys[i]].hasOwnProperty('items')){
//             // console.log('test',obj[keys[i]])
//             result.cost += obj[keys[i]].cost;
//             result.disc += obj[keys[i]].disc
//             tree(obj[keys[i]].items,result);
//         }else{
//             result.cost += obj[keys[i]].cost;
//             result.disc += obj[keys[i]].disc
//         }
     
       
//     }
// }

// tree(obj,result);

// console.log("result =",result)
 
// //  Write a function to find total cost and discount
// //  Expected result : {cost:40, disc:50}
 

// inputArray= [2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6];
// let arrobj ={}
// for(let i=0;i<inputArray.length;i++){
//     if(arrobj.hasOwnProperty((inputArray[i]))){
//         arrobj[inputArray[i]] += 1;
//     }else{
//         arrobj[inputArray[i]] = 1;
//     }
// }


// console.log(arrobj);

// // Q4. Given a sorted array with the duplicates, move all the distinct elements to the front.
// sortedarr= [1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6]

// // output:
// // arr[] = [1, 2, 3, 4, 5, 6, ..........]
// let arrayset = new Set(sortedarr);
// console.log([...arrayset]);


// Given an array of integers return all pairs of the number whose sum is equal to given number k.
// 	Input : [4,5,6,3], k = 7

//    Output = (4,3), (3,4)

let inputarray =  [1,4,5,6,3,2], k = 7
let outputpair=[];

for(let i= 0; i<inputarray.length;i++){
    for(let j=0;j<inputarray.length;j++){
        if(inputarray[i]+inputarray[j]===k){
            outputpair.push(`(${inputarray[i]},${inputarray[j]})`);
        }
    }
}

console.log("outputpair=",outputpair);



// const car = {
//   // this.name= name;
//   // this.model= model;
//   // start :  function() {
//   //   console.log(`started... ${this.model}`)
//   // },
 
// }

const car = function (name,model){
    this.name= name;
    this.model= model;
       start=()=> {
      console.log(`started... ${this.model}`)
    };
   
  }
  
  let rd = new car('rd','rdx');
  
  // car.prototype.start =  ()=>{
  //   console.log(`started... ${this.name} ---${this.model}`)
  // }
  
  rd.start();
  // const audi = {
  //   model : 'Audi Rx 100',
  //   name : 'Audi Rx'
  //   // setModel : ()=> {
  //   //   // console.log('test');
  //   //   this.model = 'Audi Rx 100';
  //   //   this.name = 'Audi Rx',
  //   //   this.name  = this.name
  //   // }
  // }
  
  // car.start.call(audi);
  // car.start();
  
  // let audiStart = new car(audi);
  // audi.setModel();
  // // audiStart.setModel()
  // audiStart.start();
  // console.log()


//   var person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
//   var person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//   }
//   person.fullName.call(person1);  // Will return "John Doe"