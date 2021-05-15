// //function Statement
// function simpe(name)
// {
//     console.log(name);
// }
// //function invoke
// simpe("Function Statement Invoke \n karthi");

// var vsimple = function(name)
// {
//     console.log(name);
// } 
// vsimple("Expression Invoke \n Karthi");

// var vimsimple = function(name)
// {
//     console.log(name);
// }("Immediately invoke function expression \n karthi");


// vimsimple("suresh"); //when we IIFE u using we can't use the function again

// // we use the anonymous function using function statement IIFS
// (function (name)
// {
//     console.log("Hello " + name);
// }("karthikeyan"));




//invoke function through constractor
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
    // console.log(arg1 +' '+ arg2);
}

// This creates a new object
var x = new myFunction("karthikeyan", "ram");
var y = new myFunction("kalyan","kumar");
// console.log(x.firstName);
// console.log(y.firstName);

// myFunction("suresh","ramasamy");
      
//invoke function as method
var myObject = {
    firstName:"karunyaa",
    lastName: "karthikeyan",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
// console.log(myObject.fullName());


var randomWeights = [10,20,30];

function addToBox() {
    var weight = 0;
    for (var i = 0; i < arguments.length; i++) {
		weight += arguments[i];
	}
	this.weight = weight;
}

var redBox = {};
var blueBox = {};
// apply and call both are invoke function main diff is apply parameter is passing like array call normal parameter passing like
addToBox.apply(redBox, randomWeights);
addToBox.call(blueBox, 1,2,3,4,5);

// console.log(redBox.weight);
// console.log(blueBox.weight);

var person = {
    fname : "karthikeyan",
    lname : "ramakrishan",
    getfullName : function(){

        var fullName = this.fname + ' ' + this.lname;
        return fullName;

    }
}
// console.log(person.getfullName());

var language = function(lan1,lan2){
    // console.log("logged on : " + this.getfullName());
    console.log(this.getfullName() + `He know the language = ${lan1}, ${lan2}`);
}
// language('tamil' , 'english');
// language.call(person,'tamil','telug');
// language.call(person,['tamil','telug']);
// language.apply(person,['tamil','telug']);

// var fullNameWithLang = language.bind(person);
// fullNameWithLang('spanish','french');

// function barrowing
var person2 ={
    fname: "karunyashri",
    lname: "karthikeyan"
}
// console.log(person.getfullName.apply(person2));

// function curraying
function multiply (a,b)
{
    return a*b;
}
console.log(multiply(2,5));
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(10));
let multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(10));





