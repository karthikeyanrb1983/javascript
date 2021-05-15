function operators()
{
    var num1=10,num2=5,num3=8,i;
    console.log("Unary operater");
    console.log(num1 + `before and after ` + num1++);
    console.log(num2 + `before and after ` + ++num2);
    console.log("Num1 Value " + num1 + `\tNum2 Value ` + num2);
    console.log(num1 + `before and after ` + num1--);
    console.log(num2 + `before and after ` + --num2);
    console.log(num1+=num2);
    console.log("Num1 Value " + num1 + `\tNum2 Value ` + num2);
    console.log("Bitwise operater");
    console.log(~num1);
    console.log(~-num1);
    console.log("Boolean Operater with Relation Operater&& || !");
    if(num1>num2 && num1>num3)
    {
        console.log("num1 is big",num1);

    }
    if(num1==num2 || num1==num3)
    {
        console.log("num1 is not equal num2 and num3",num1);

    }
    if(!num1)
    {
        console.log("the condition 0 is also true");
    }
    if(!NaN)
    {
        console.log("the condition is true");
    }
    if(!0)
    {
        console.log("the condition 0 is also true");
    }
    
    console.log("Conditional Operator")
    var max = num1>num2 ? num1 : num2;
    console.log("max value of num1 and num2" ,max);

}
 
operators();
