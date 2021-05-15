// // Promise used for Asynchronous handling in Javascript
// // A promise is a proxy for a value not necessarilly
// // known when the promise is created.
// // As the name suggests it is Promise to the Javascript
// // Engine that it will eventually get a value.
// // This lets asynchronous functions return value as
// // it is a synchronous function
// // It allows you to associate handlers with an aynchronous
// // action's eventual success value or failure reason.
// // Promise is in one of the states
// // 1)pending
// // 2)fulfilled
// // 3)rejected

// let promise_obj = new Promise(function(resolve1, reject1) {
//   setTimeout(function() {
//     resolve1("Success");
//     //reject1("Failure");
//     for (i = 0; i < 10; i++) {
//       console.log(i);
//     }
//   }, 1000);

//   setTimeout(function() {
//     resolve1("Success");
//   }, 2000);
// });
// console.log("Promise state", promise_obj);

// promise_obj.then(
//   function(value) {
//     console.log("Promise state fulfilled", promise_obj);
//     console.log("Success", value);
//   },
//   function(value) {
//     console.log("Promise state rejected", promise_obj);
//     console.log("Failure", value);
//   }
// );

// // for(i=0;i<1000;i++){
// //     console.log(i);
// // }


const addition = (a,b,c) =>{
    return new Promise(function(resolve1, reject1) {
        setTimeout(() => {
            if(a<0 || b<0 || c<0)
                reject1('There is nagative Number')
            let sum = a+b+c;
            resolve1(sum);
        }, 1000);

    })
}

// addition(1,2,3).then(result=>{
//     console.log(result)
//     return addition(result,4,5)
// }).then(result=>{
//     console.log(result)
//     // return addition(1,2,3)
// }).catch(e=>{
//     console.log(e)
// })

// console.log("----------------");
// const add = async ()=>{
//     let result1 =  await addition(1,2,3);
//     console.log("result1",result1);
//     let result2 =  await addition(result1,4,5);
//     return result2
// }

// console.log(add().then(result=>{console.log(result)}).catch(e=> console.log(e)));



Promise.resolve(5)
  .then((x) => 5 + 1)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 2)
  .then((x) => x + 2)
  .then((x) => console.log(x))
  .catch(console.error)