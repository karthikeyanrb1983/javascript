/*Data typesSection
The latest ECMAScript standard defines seven data types:

Six data types that are primitives:
Boolean
Null
Undefined
Number
String
Symbol (new in ECMAScript 6)
and Object*/

function datatype(){
    var num = 50
    var fnum = 50.10;
    var check = true;
    var empty = null;
    var nothing = undefined;
    var value = "karthi";
    var ccnum = "50";
    var ccstr = 50;
    var obj = { name: "karthi", age: 20};
    var simpleFun = function(){ return "hi...."; }
    console.log(`${num}  typeof = ${typeof num}`);
    console.log(`${fnum}  typeof = ${typeof fnum} `);
    console.log(`${check}  typeof = ${typeof check} `);
    console.log(`${empty}  typeof = ${typeof empty} `);
    console.log(`${nothing}  typeof = ${typeof nothing} `);
    console.log(`${value}  typeof = ${typeof value} `);
    console.log(`${obj}  typeof = ${typeof obj} `);
    console.log(`${simpleFun}  typeof = ${typeof simpleFun} `);
    if(simpleFun instanceof Function)
    {
        console.log("simpleFun is a function"); 
        if(simpleFun instanceof Object)
            console.log("simpleFun is also a object");                   
    }
    if(obj instanceof Object)
        console.log("obj is a object");        
    
}

datatype();
