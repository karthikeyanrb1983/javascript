let arr1=[1,2,3,4,5,6,10];
let arr2=[2,4,6,7,8,9,13,15]

function mergearr(arr1,arr2){
    let marr =[];
    let mindex =0;
    let arrindex1 = 0;
    let arrindex2 =0;
    while(mindex < (arr1.length+arr2.length)){
        
        if(arr1[arrindex1] < arr2[arrindex2]){
            marr[mindex] = arr1[arrindex1]
            arrindex1++;
        }else{
            marr[mindex] = arr2[arrindex2]
            arrindex2++;
        }
        mindex++;
    }
    return marr;
}

console.log(mergearr(arr1,arr2));