// Data typesSection
// The latest ECMAScript standard defines seven data types:

// Six data types that are primitives:
// Boolean
// Null
// Undefined
// Number
// String
// Symbol (new in ECMAScript 6)
// and Object

// Undefine Explanation..
// function test(t) {
//   if (t === undefined) {
//      return 'Undefined value!';
//   }
//   return t;
// }
// var x;
// console.log(test(x));

// let x =10;
// if(x=="10")
// {
//     console.log("It is same");   
// }
// if(x==="10")
// {
//     console.log("It is Same");
// }else
// {
//     console.log("It is not Same")
// }

// null explanation along with match function
// function getVowels(str) {
//     var m = str.match(/[aeiou]/gi);
//     if (m === null) {
//       return 0;
//     }
//     return m.length;
//   }
//   console.log(getVowels('karu'));

function test()
{
    console.log("hi..");
    console.log(typeof("karthi"));
    var x = true;
    console.log(typeof x);
    console.log(x instanceof Boolean);
    // var y = False;
    // console.log(y);
    var msg = "karthi";
    if(msg)
        console.log("some thing is there is msg identifer");
    var inum = 10 //integer
    var fnum = 10.5;  //floating
    var hedec = 0x84a; //hexadecimal
    var onum = 050; //octal
    var num1 = "af",num2 = "af";
    var obj = new Object();
    console.log(typeof fnum);
    console.log(typeof hedec);
    console.log(typeof onum);
    console.log(onum);
    console.log(`converting into \'integer\' ${fnum}\t,`, parseInt(fnum));
    console.log(`converting into \"integer\" ${hedec},`, parseInt(hedec));
    console.log(`converting into 'integer' ${onum},`, parseInt(onum));
    console.log(`converting into "integer"  ${hedec},`, parseInt(num1));
    console.log(`converting into integer ${onum},`, parseInt(num2,16));
    console.log(`\n Floating conversation ,`);
    console.log(`converting into float ${inum},`, parseFloat(inum));
    console.log(`converting into float ${fnum},`, parseFloat(fnum));
    console.log(`converting into float ${hedec},`, parseFloat(hedec));
    console.log(`converting into float ${onum},`, parseFloat(onum));
    console.log(obj);
    
}
 
test();

function operators()
{
    var num1=10,num2=5,num3=8,i;
//     console.log("Unary operater");
//     console.log(num1 + `before and after ` + num1++);
//     console.log(num2 + `before and after ` + ++num2);
//     console.log("Num1 Value " + num1 + `\tNum2 Value ` + num2);
//     console.log(num1 + `before and after ` + num1--);
//     console.log(num2 + `before and after ` + --num2);
//     console.log(num1+=num2);
//     console.log("Num1 Value " + num1 + `\tNum2 Value ` + num2);
//     console.log("Bitwise operater");
//     console.log(~num1);
//     console.log(~-num1);
//     console.log("Boolean Operater with Relation Operater&& || !");
//     if(num1>num2 && num1>num3)
//     {
//         console.log("num1 is big",num1);

//     }
//     if(num1==num2 || num1==num3)
//     {
//         console.log("num1 is not equal num2 and num3",num1);

//     }
//     var max = num1>num2 ? num1 : num2;
//     console.log("max value of num1 and num2" ,max);

//     for(let i=0;i<num1;i++)
//     {
//         console.log(i++);
//     }
    
//     console.log("Here We Explain Label statement");
//     firstloop:for(i=0;i<5;i++)
//     {
//         secondloop:for(j=0;j<5;j++)
//         {
//         if(i===2) continue firstloop;
//         if(j===3) break secondloop;
//         console.log(`i value=${i} && j value=${j}`);
//         }
//     }


    // i=0;
    let arr =[10,20,30,40,50,60,70]
    // while(i<arr.length)
    // {
    //     console.log(arr[i]);
    //     i++
    // }
    // console.log("End OF While Loop\n Note:");
    // console.log("It's Check the Condition");
    // do
    // {
    //     console.log("Do While Statemetn Execute the Body of Atlest Once");
    // }while(0);
       
    // for(item in arr)
    // {
    //     console.log(`sarr = ${item} sarrValue = ${arr[item]}`)
    //     if(item==5)
    //     break;
    // }

    
    // console.log("Here is Explain For in Statement and object property in some object")
    let obj = {name:"karthi",age:35,sex:"male"};
    // for(var key in obj)
    // {
    //     console.log(`key = ${key} , value =${obj[key]}`);

    // }

// Here we Dissusse the For of Looping Satment
    for (var value of arr)
    {
        console.log(value);        
    }

    // for(item of obj)
    // {
    //     console.log(item);
    // }

    
    // var sarr=["karthi","karu","raman","banu","rajesh","satitha","nirmal","indhu","nikesh","kalesh","kanish"]
    // sarr.forEach(function(value)
    // {
    //     console.log(value);
    //     console.log(index);
    // });

    var familys = [{
        "name" : "karthi",
        "age" : "35",
        "homeTown" : "KPTM",
        "gender":"Male"},
        {
            "name" : "karu",
            "age" : "27",
            "homeTown" : "KPTM",
            "gender":"Male"}
    ]

    // for(i=0;i<familys.length;i++)
    // {
    //     console.log(`Name= ${familys[i].name}, age=${familys[i].age}, homeTown=${familys[i].homeTown}, gender=${familys[i].gender}`);
    // }

    // for(index in familys)
    // {

    //     console.log(`Name= ${familys[index].name}, age=${familys[index].age}, homeTown=${familys[index].homeTown}, gender=${familys[index].gender}`);        
    // }
    
}
 
// operators();


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  function Mar(xyz) {
    this.xyz =xyz
  }
  
  var auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  //expected result false
  console.log(auto instanceof Mar);
  // expected output: true
  
  console.log(auto instanceof Object);
  // expected output: true
  
  console.log(Car instanceof Function);
  console.log(typeof Car);

