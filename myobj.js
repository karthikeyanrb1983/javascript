// let myNewCourse = {
//     title : "Advance Java Script",
//     price : 300,
//     description : "Till Basic To Advance to learn through FUN"
// }

// // console.log(myNewCourse);

// console.log(`This is course ${myNewCourse.title} Price is ${myNewCourse.price}`);
// console.log(`Description : ${myNewCourse.description}`);

// let toDayWork = {
//     name: "Karthikeyan",
//     totalWork: 0,
//     finshedWork: 0
// }
// function addWork(toDayWork, works) {
//     toDayWork.totalWork = toDayWork.totalWork + works;
//     return toDayWork.totalWork;
// }
// completedWork = function (toDayWork, works) {
//     toDayWork.finshedWork = toDayWork.finshedWork + works;
//     return toDayWork.finshedWork
// }
// pendingWork = function (toDayWork) {
//     return toDayWork.totalWork - toDayWork.finshedWork;
// }
// console.log(addWork(toDayWork, 5));
// console.log(completedWork(toDayWork, 3));
// console.log(pendingWork(toDayWork));
// console.log(addWork(toDayWork, 5));
// console.log(completedWork(toDayWork, 3));
// console.log(pendingWork(toDayWork));

let toDaysWorks = {
    name: "Karthikeyan",
    totalWork: 0,
    finshedWork: 0,
    addWork : function(works){
        this.totalWork =this.totalWork + works;
        return this.totalWork;
    },
    completedWork : function(works){
        this.finshedWork =+ works;
    },
    pendingWork : function(){
        return this.totalWork - this.finshedWork;
    },
    sumarry : function(){
        console.log(`Total no of work is Assign ${this.totalWork} completed work ${this.finshedWork} and pending work ${this.pendingWork()}`);
    }
}
toDaysWorks.addWork(5);
toDaysWorks.completedWork(3);
toDaysWorks.pendingWork();
toDaysWorks.sumarry();

