async function getAllData() {
let ID= await getListOfIds(); // 100 id are returning
for(let i=0; i <ID.length ; i++ ){
   let details = await getAllDetailsById(ID[i]); // takes 1 sec for each execution
}
}

//=======================================
setImmediate(() => {
    console.log("first");
  })
process.nextTick(() => {
    console.log("second");
  })
  console.log("third");

//======================================================

  console.log('1')
setTimeout(()=>console.log('2'),0)
new Promise((resolve,reject)=> resolve(console.log('3')))
console.log('4')