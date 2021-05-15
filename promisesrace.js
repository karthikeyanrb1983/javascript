var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(reject, 600, 'two');
});
var promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'three');
});

Promise.all([promise1, promise2,promise3]).then(function(value) {
    console.log(value); 
}).catch( err =>{
    console.log(err); 
});

// Promise.race([promise1, promise2]).then(function(value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

// Promise.any([promise1, promise2,promise3]).then(function(value) {
//     console.log(value); 
//   });

// console.log('=================================================');

// const promise6 = Promise.resolve(3);
// const promise7 = 42;
// const promise8 = new Promise((resolve, reject) => {
//   setTimeout(reject, 400, 'foo');
// });
// const promise9 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 300, 'foo');
//   });

// let pcheck = [promise6, promise7, promise8,promise9];

// Promise.all(pcheck).then((values) => {
//   console.log(values);
// }).catch(err =>{console.log('err',err)});   

// Promise.allSettled(pcheck).
//   then((results) => results.forEach((result) => console.log(result.status))).catch(err =>{console.log('err',err)});

// console.log('=================================================');