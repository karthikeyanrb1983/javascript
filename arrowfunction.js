// let gustSay = function (name){
//     return `Hi... ${name} how are u...`;
// }
// console.log(gustSay("karthi"));

// let sayHi = (name) => {
//     return `Hi... ${name} how are u...`;
// }

let sayHi = (name) => `Hi... ${name} how are u...`;
console.log(sayHi("karthi"));

let toDoos = [{
    titel: "Go to Gym",
    isDone: true
},
{
    titel: "Morning BreakFast 10.00 Am",
    isDone: true
},
{
    titel: "6.Pm Disussion is done",
    isDone: false
}]

// let index = toDoos.findIndex(function(todo,index){
//     return todo.titel === 'Morning BreakFast 10.00 Am';
// })
// console.log(index);

// let index = toDoos.find((todo,index) => todo.titel === 'Morning BreakFast 10.00 Am');

// console.log(index.titel);

// let finshedWork = toDoos.filter(function(todo,index){
//     return todo.isDone === true;
// })
// console.log(finshedWork);
// console.log(finshedWork.length);
// console.log(finshedWork[0].titel)