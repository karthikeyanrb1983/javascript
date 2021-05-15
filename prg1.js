function anyAreSumEqualeto100(a, b) {
    if ((a == 100) || (b == 100) || (a + b == 100)) {
        return true
    }
    else {
        return false;
    }
}

console.log("1>..  ",anyAreSumEqualeto100(60, 100))


fileExt = (a) => {return a.slice(a.lastIndexOf(".")+1) }

console.log("2>..  ",fileExt("abc.xyz"));


nextCharacterDisplay = (str)=>{ 
    let newstr="";
    for(i=0;i<str.length;i++){
    newstr += String.fromCharCode(str[i].charCodeAt()+1);
} return newstr; }

console.log(nextCharacterDisplay("abc"));


dateFormater = (formatedate) =>{
    let date = new Date();
    switch(formatedate){
        case "mm/yyyy/dd" : return (date.getMonth() + 1)+"/"+ date.getFullYear() +"/"+ (date.getDate()+1);
        default : return (date.getDate()+1) +"/"+(date.getMonth() + 1)+"/"+ date.getFullYear(); 
    }
}

console.log(dateFormater());
console.log(dateFormater("mm/yyyy/dd"));


addNewString = (str)=>{
    if(str.includes("!")){
        let firststr = str.slice(0,str.indexOf("!"))
        if(firststr.toUpperCase() == 'NEW'){
            return str;
        }else{
            return "New!" + str;
        }
    }else{
        return "New!" + str;
    }
}

console.log(addNewString("new!testing"));
console.log(addNewString("testingNew"));
console.log(addNewString("string!testingNew"));


firstAndLastThreeChar = (str) =>{
    return str.length > 3 ?  str.slice(0,3) +  str.slice(str.length-3) :  str;
}

console.log(firstAndLastThreeChar('testing'));
console.log(firstAndLastThreeChar('tes'));

firstHalf = (str)=>{
    return str.slice(0,str.length/2)
}

console.log(firstHalf("karthik"));


expectFirstChar = (str1,str2) =>{
    return str1.slice(1) + str2.slice(1)
}

console.log(expectFirstChar("test","new"));


nearestHunder = (val1,val2)=>{
   return Math.abs(val1-100) >  Math.abs(val2-100) ? val2 : val1;
}

console.log(nearestHunder(100,103));
console.log(nearestHunder(33,133));


specfiedchar2to4 = (str,char)=>{
    let charcount =0;
    for(let i=0;i<str.length;i++){
        if(str[i] == char){ charcount++ }
    }
    console.log(charcount);
    if(charcount > 2 && charcount < 4) return true ; return false;
}

console.log('10...',(specfiedchar2to4("testeine","e")));
console.log(specfiedchar2to4("testine","e"));

isPalindrom = (str)=>{
    let strLength =  str.length;
    for(let i=0,j=strLength-1;i<strLength;i++,j--){
        if(str[i] !== str[j]){
            return false
        }
    }
    return true
}

console.log(isPalindrom("level"));