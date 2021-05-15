    let a =  [10,2,3,4,11,9,30,50,40,41,47,50,53,62,61,64,70];


    let des = a.sort((a,b)=> {return b - a})
    console.log(des[1]);


    let even = a.filter(x=> x%2 == 0)
    let odd = a.filter(x=> x%2 !== 0)
    console.log('even= ',even);
    console.log('odd= ',odd);