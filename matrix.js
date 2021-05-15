let a = [[0, 1, 45], [0, 35, 1], [25, 0, 1]]

// console.log(a[0].length);
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a[i].length; j++) {
//         console.log(a[i][j]);
//     }
// }
// matrixmap();
function matrixmap() {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (j == 0) {
                // console.log("no Detect j");
                if(a[i][j+1] == 1 && a[i+1][j] == 1){
                    console.log("Desion");
                }else{
                    
                }

            } else {
                console.log("Detect j")
            }
            if (i == a.length) {
                console.log("i is not inc");
            } else {
                console.log("i is inc");
            }

        }
    }

}

// matrixactive();
function matrixactive() {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == 1) {
                console.log('a[' + i + '][' + j + ']');
            }

        }
    }

}

matrixDiagonal();

function matrixDiagonal(){
    if(a.length !== a[0].length){
        console.log('dioganal value not possibale');
        return;
    }
     let j= a.length-1;

    for (let i = 0; i < a.length; i++) {
        console.log(a[i][j]);
        j--;
    }

    j= 0;
    for (let i = 0; i < a.length; i++) {
        console.log(a[i][j]);
        j++;
    }
}
