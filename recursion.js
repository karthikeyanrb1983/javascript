// function power(base,exp){
//     if(exp==1){
//         return base
//     }
//     return base * power(base,exp-1);
// }

// console.log(power(2,4));


var nestedObject = {
    data: {
        test: "test",
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, '44'); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

function contains(object,val){
    let keys = Object.keys(object)
    for(let i=0;i<keys.length;i++){
        if(typeof object[keys[i]] == 'object'){
            return contains(object[keys[i]],val);
        }else{
            if(object[keys[i]] == val)
               return true;
        }
}
return false;
}

// function contains(obj, value){
// 	for(let key in obj){
// 		if(typeof obj[key] === 'object'){
// 			return contains(obj[key], value);
// 		}

// 		if (obj[key] === value){
// 			return true;
// 		}
// 	}
// 	return false;
// }

console.log(hasIt);

// let categories = [
//     {name: 'animal' ,parent :null},
//     {name: 'home' ,parent :'animal'},
//     {name: 'nothome' ,parent :'animal'},
//     {name: 'cat' ,parent :'home'},
//     {name: 'dog' ,parent :'home'},
//     {name: 'bird' ,parent :'home'},
//     {name: 'pig' ,parent :'nothome'},
//     {name: 'dinazore' ,parent :'nothome'},
//     {name: 'tiger' ,parent :'nothome'},
//     {name: 'sdog' ,parent :'dog'},
//     {name: 'bdog' ,parent :'dog'},
// ]

// let categorieTree = (categories,parent)=>{
//     let node = {};
//     let data = categories
//     .filter(c=> {console.log('filter',c.parent) ; return c.parent == parent})
//     console.log('-----------------');
//     console.log('\ndata',data);
//     data.forEach(e => {console.log('',e.name) ; return node[e.name] = categorieTree(categories,e.name)});
//     return node;
// }


// console.log(JSON.stringify(categorieTree(categories,null),null,2));
