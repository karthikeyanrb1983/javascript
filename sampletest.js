let arr = [1,2,3,4,5,6,7,8]

// let newarr = [1,8,3,6,5,4,7,2]
let newarr = [...arr];

let last = arr.length +1;
for(let i = 1 ; i < newarr.length /2;i=i+2){
    temp = newarr[i];
    last = last -2;
    newarr[i]= newarr[last];
    newarr[last] =temp;
}

console.log(arr, newarr);


let a = newarr;

function SortArray()
{
    // var c= a.sort;
    // console.log(c);
    for(i=0;i<a.length;i++)
    {
        for(j=0;j<a.length;j++)
        {
            if (a[i]<=a[j])
            {
                sum = a[i];
                a[i]=a[j];
                a[j]=sum;    
            }
        }
    }
    console.log(a);
 
}


SortArray();