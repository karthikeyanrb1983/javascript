// Let and const keywords.

// console.log("a=",a);
// console.log("b=",b);
// let a = 10;
// const b = 30;

// Default Parameters.

// var show = (a, b=200) => {  
//     console.log(a + " " + b);  
// }  
// show(100);  


// Arrow functions.

// var myfun = () => {    
//     console.log("It is an Arrow Function");       
//    };  
//    myfun(); 

// Template Literals.

// let str1 = "Hello";  
  
// let str2 = "World";  
   
// let str = `${str1} ${str2}`;  
// console.log(str);  

// Object Literals.
// Rest and spread operators.

// Spread
// let num1 = [40,50,60];  
  
// let num2 = [10,20,30,...num1,70,80,90,100];  
  
// console.log(num2);  

//Rest
function show(...args) {  
    let sum = 0;  
    for (let i of args) {  
        sum += i;  
    }  
    console.log("Sum = "+sum);  
  }  
    
  show(10, 20, 30);  


  // For In 

var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}

console.log('text=',text);

// Destructuring assignment.

// let fullname =['Alan','Rickman'];  
// let [fname,lname] = fullname;  
// console.log (fname,lname);  


// Modules, Classes, Generators, and iterators.
// Promises, and many more




