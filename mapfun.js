let data = [
    {a:1,b:5,c:9}, {a:2,b:6,c:10},
    {a:3,b:7,c:11}, {a:4,b:8,c:12}
];
          
let result = data.map(({a,b }) => ({x : a, y : b}));

console.log(result);