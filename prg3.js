// function largerRepatString(str){
//    let strObj = new Set(str);
  
//    let strUniquerray = [...strObj];
//    console.log(strUniquerray);
//    let struni1 = strUniquerray.filter((st)=>  )  
  
// }

// console.log(largerRepatString("aabbcccccccddee")) 

// function allLongestStrings(array) {
//     const newArr=[];
//     let temp =    Math.max(...(array.map(el => el.length))); 
    
//     console.log("temp", temp);
//      array.forEach(item => {
//         if(temp == item.length){
//           newArr.push(item);
//         }
//     });
//     return newArr;
//   }

// function allLongestStrings(array) {
//   return array.reduce((x,y)=>{  console.log(x, "----",y); let data  = (x.length > y.length) ? x : y ;return data; },"t")
  
// }

function allLongestStrings(array) {
  return array.reduce((x,y)=>{   if(x.length > y.length)  return x ; return y} ,"t")
  
}


  let str = "How are karthikeyantestbbb u karthikeyan"
  let splitArr = str.split(' ')
  console.log(allLongestStrings(splitArr))



//   function printLargestConsecutiveChar(string) {
//     if(!string) return null;
//   let count = 0;
//    let repchar = string[0];
//    let maxC = 1;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == string[i+1] && i < string.length-1 )
//          maxC++;
//       else{
//          if (maxC > count){
//             count = maxC;
//             repchar = string[i];
//          }
//          maxC = 1;
//       }
//   }
  
//   let output = ``;
  
//   for(let j = 0; j < count; j++){
//     output += repchar;
//   }
//   console.log(output,output.length)
// }
// printLargestConsecutiveChar("aabbccccccdddssccccccccccdd");


function printDelay(){
  for(var i=0; i<10; i++){

    (function (i){
      setTimeout( () =>{
        console.log(i)
      },1000);
    })(i)
    
  }


  // for (var i = 1, j = 1; i <= 3; i++, j++) {
  //   setTimeout(function() {
  //     console.log(this);
  //   }.bind(i),j*1000);
  // }
}

printDelay()



// const favouriteFood = 'Rajma Masala';

// function thoughtFood(){
//   favouriteFood = 'test'
//   console.log(`I love my favouriteFood: ${favouriteFood}`);

//   // var favouriteFood = 'Chicken Curry'
// }
// thoughtFood();

// console.log('My fav food is', favouriteFood)
