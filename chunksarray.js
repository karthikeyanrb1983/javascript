function chunk(arr, chunkSize) {
    var R = [];
    for (var i=0,len=arr.length; i<len; i+=chunkSize)
      R.push(arr.slice(i,i+chunkSize));
    return R;
}


console.log(chunk([10,20,30,40,50,60,70],2));