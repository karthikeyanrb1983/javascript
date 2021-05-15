// 1)
let obj = {
    test : 'objvalue',
    arrowfun : ()=>{ console.log('arrowfun',this.test)},
    funfuc : function (){ console.log('funfuc',this.test)},
    funfunfuc : function (){ 
        
       return function (){ 
           console.log('funfunfuc',this.test)
         }  
    },
    funfunfucthat : function (){ 
        that = this;
        return function (){ 
            console.log('funfunfucthat',that.test)
          }  
     },
     funfunfucbind : function (){ 
        let funbind = function (){ 
            console.log('funfunfucbind',this.test)
        } 
        funbind.bind(obj);
        return funbind
     },
    funArrowfuc : function (){
        return ()=>{ 
            console.log('funArrowfuc',this.test)
          }  
     },
}


obj.arrowfun();
obj.funfuc();
obj.funfunfuc()();
obj.funfunfucthat()();
obj.funfunfucbind()();
obj.funArrowfuc()();


//2)
// function funfunObject(){
//     let letVariable = 'letvariable'
//     var varVariable = 'varvariable'
//     otherVariable ='otherVariable'
//     return function(){
//         console.log('funfunObject',this.otherVariable,this.letVariable,varVariable)
//     }
// }

// function funarrowObject(){
//     let letVariable = 'letvariable'
//     var varVariable = 'varvariable'
//     otherVariable ='otherVariable'
//     return ()=>{
//         console.log('funarrowObject',this.otherVariable,letVariable,varVariable)
//     }
// }

// funfunObject()();
// funarrowObject()();