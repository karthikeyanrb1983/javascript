function simple() {
    console.log("This is function is user with out arguments and return statement");
}

function add(num1, num2) {
    console.log(num1 + num2);
}

function multi(num1, num2) {
    return num1 * num2
}

function diff(num1, num2) {
    if (num1 > num2)
        return num1 - num2;
    else
        return num2 - num1;
}

// simple();
// console.log("call with the arguments");
// add(20,30);
// console.log(multi(10,40));
// console.log("Function using the two Return Statement")
// console.log("This is my Different  = " + diff(10,40));


// var globX=20,globY=50;
// function globalAsscess()
// {
//     console.log("gloabal X Value " + globX);
//     console.log("gloabal X Value " + globY);
// }

// globalAsscess();


function argCheck() {
    console.log("Function Argments");
    // console.log("This is Arg1 value =" + arguments[0]);
    // console.log("This is Arg2 value =" + arguments[1]);    
    // len = arguments.length;
    // console.log("This is ArgLast value =" + arguments[len-1]);
    console.log("__________________________________");
    argType = typeof arguments[0];
    console.log(argType);
    if (argType == "object") {
        objLen = Object.length;
        for (obj in arguments[0]) {
            console.log(obj);
            console.log()
        }

    }
}

// argCheck();
// argCheck("hi....");
// argCheck(10,20);
// argCheck(10,20,30,40,50);
// argCheck({"Hi":"how are u","ooi":"dai....."});






// console.log("Nested Function and Scope");
// function fun1()
// {
//     var fun1X=30,fun1Y=50;
//     var fun2X,fun2Y;
//     var allfunX =" i am the veriable(allfunX) fun1 Function",allfunY=" i am the veriable(allfunY) fun1 Function";
//     function fun2()
//     {
//         var fun2X="karthi",fun2Y="karu";
//         var allfunX =" i am the veriable(allfunX) fun2 Function",allfunY=" i am the veriable(allfunY) fun2 Function";
//         console.log("Inside the Finction two");
//         console.log(`fun1X= ${fun1X}, fun1Y= ${fun1Y}`);
//         console.log(`fun2X= ${fun2X}, fun2Y= ${fun2Y}`); 
//         console.log("+++++++++++++++++++++++");
//         console.log(`${allfunX}   &&   ${allfunY}`);  
//         console.log(`${this.fun1X}   &&   ${this.fun1Y}`);  
//         console.log('--------------------------------------');

//     }
//     fun2();
//     console.log("Inside the Finction one and outside the function2");
//     console.log(`fun1X= ${fun1X}, fun1Y= ${fun1Y}`);
//     console.log(`fun2X= ${fun2X}, fun2Y= ${fun2Y}`);
//     console.log("+++++++++++++++++++++++");
//     console.log(`${allfunX}   &&   ${allfunY}`);  

// }

// fun1();


// var general = function(){
//     console.log("Hi This is Inside the Function");
// }
// general();

// var argFunction = function(fName,lName){
//     console.log(`First Name = ${fName} \t Last Name = ${lName}`);
//     console.log(` ${fName}  ${lName}`);

// }
// argFunction("karunya","karhtikeyan");

// Default Paramaters
// var myGust = function(gustName = "no Name", gustCount = 0)
// {
//     console.log(`Gust Name = ${gustName} \t Gust Count = ${gustCount}`);
// }

// myGust();
// myGust("karthi",1);

// var weakDays = ["Mon", "Tus", "Wen", "Tha", "Fri", "Sat", "Sun"]
// weakDays.forEach(function (day, index) {
//     console.log(`index = ${index + 1},  day=${day}`)
// });

// console.log("---------------------------");
// for (index = 0; index < weakDays.length; index++) {
//     console.log(`index = ${index + 1},  day=${weakDays[index]}`);
// }


let getMyGrade = function (mark, totalMark) {
    myPercentage = (mark/totalMark)* 100;
    var myGrade;
    switch (myPercentage) {
        case myPercentage > 90:
            myGrade = 'A';
            break;
        case myPercentage > 80:
            myGrade = 'B';
            break;
        case myPercentage >= 70 && myPercentage < 70:
            myGrade = 'C';
            break;
        case myPercentage >= 60 && myPercentage < 60:
            myGrade = 'D';
            break;
        case myPercentage >= 50 && myPercentage < 50:
            myGrade = 'E';
            break;
        default :
            myGrade = 'F';

    }
    return `myPercentage = ${myPercentage} ---- myGrade = ${myGrade}`;
}

myResult = getMyGrade(70,100);
console.log(myResult);
