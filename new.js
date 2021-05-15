function findNumber(arr, k) {
    // Write your code here

    for(let i=0;i<arr.length;i++){
        if(arr[i]==k)
            return "Yes";
        return "No"
        
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = findNumber(arr, k);

    ws.write(result + '\n');

    ws.end();
}

main();