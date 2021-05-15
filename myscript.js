var a = [];
var b = [];
var c = [];
function docdisplay(Myval,wtadd)
{
    var Myprint = document.getElementById(wtadd);
    // Myprint.innerHTML = a;
    Myprint.textContent = Myval;
 
}   

function CompareTwoArray()
{
    var FALength = a.length;
    var SALength = b.length;
    var n =0;
    var SVal = [];

    // if (FALength>SALength)
    // {
        for(i=0;i<FALength;i++)
        {
            for(j=0;j<SALength;j++)
            {
                if(a[i]==b[j])
                {
                    SVal[n++]=a[i];        
                    console.log(SVal); 
                }
            }
        }
        docdisplay(SVal,"ComValPara");
    // }
}

function AddtoArray(WicArr)
{
    if(WicArr == 1)
    {
   // var myvalue  = document.getElementById("number");
   var myvalue  = document.getElementById("number");
    //document.write(value);
    a.push(myvalue.value);
    myvalue.value = "";
    //console.log(a);
    docdisplay(a,"Arrayone");
    // var Myprint = document.getElementById("Arrayone");
    // // Myprint.innerHTML = a;
    // Myprint.textContent = a;
    }else if(WicArr == 2)
    {
         var myvalue  = document.getElementById("number");
         b.push(myvalue.value);
         myvalue.value = "";
         docdisplay(b,"Arraytwo");
    }
}

function ClearArray()
{
    a = [];
    // var Myprint = document.getElementById("Arrayone");
    // // Myprint.innerHTML = a;
    // Myprint.textContent = a;
    docdisplay(a,"Arrayone");
 }

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

    docdisplay(a,"sortpara");
}

function Midval()
{
    var val = 0;
    if(a.length%2==0)
    console.log("it's even length");
    else
    {
    val=a.length/2;
    val = parseInt(val);
    //console.log(a[val]);
    docdisplay(a[val],"MidPara");
    }
}

function display() {
    let arr = [1,2];
    console.log(arr);
}

// function createtag()
// {
//       var Newpara = document.createElement("p");
// }
