function b()
{
    console.log(myvar);
}

function a()
{
    var myvar = 'function a';
    function c()
    {
        console.log(myvar);
    }
    console.log("invoke the function b");    
    b();
    console.log("invoke the function c");
    c();
    
}

var myvar = 'this is main function'
// a();


console.log("======================");


function myScope(num1,num2)
{
    var funSum = num1 + num2;  // This is treat like local context of myScope Function
    globalSum = num1 + num2;  // this will take automatic as  a Gloabal context
    
    if(num1>num2)
    {
        let letBig = num1;
        var varBig = num1;

    }else
    {
        let letBig = num2;
        var varBig = num2;
    }
    console.log("Outside the if Statement");
    // console.log(letBig); // here variable is assign the if statement using let keyword the scope is within the "{}"
    console.log(varBig);
    console.log("===============");
    return funSum;
}
// console.log("OutSide of the myScope Function")
console.log(myScope(10,20));
console.log(globalSum);
// console.log(funSum);  // Here the funSum is not defined error is through

