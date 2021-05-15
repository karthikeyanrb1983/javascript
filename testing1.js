// console.log("a=",a);
// console.log("b=",b);
// let a = 10;
// const b = 30;


// let obj = {
//     test : "MyTest",
//     fun : function(){
//         self= this;
//         console.log('This Key word',this.test);
//         console.log('Self Key word',self.test);
//         let myArrow = ()=>{
//             console.log('This Key word myArrow function',this.test);
//             console.log('Self Key word myArrow function',self.test);
//         }
//         myArrow();
//        (function myNormal(){
//            console.log('this',this)
//             console.log('This Key word normal function',this.test);
//             console.log('Self Key word normal function',self.test);
//         })();
//     }
// }
// obj.fun();
// console.log('------');


// console.log("Nan",NaN === NaN);

// let a =[1,2,3,4,4,5]

// console.log([...new Set(a)]);

let x = function (){
    return {
        test : "test"
    }
}

console.log(x());

