var obj= { "title" : "pointer in c", "author" : "stalin", "price" : "100" };
// console.log(obj);
// var book = "{ \"title\" : \"pointer in c\", \"author\" : \"stalin\", \"price\" : \"100\" }";
// console.log(book);
// console.log("Here is obj is having obj value and book is having the string value");
// console.log(obj.author);
// console.log(book.author);
// console.log("This is use full for string into converting the json object using   'JSON.parse(book)'  ")
// mybook=JSON.parse(book);
// console.log(mybook);
// console.log(mybook.title);



var favoriteFruit = { "Amy": { "fruit": "Apple" }, "Ben": { "fruit": "Banana" }, "Carol": { "fruit": "Cherry" }};
 
console.log("This is for for in statement");
for (var key in favoriteFruit) {

    console.log(key + "'s favorite fruit is " + favoriteFruit[key]['fruit']);

}

console.log("This is for for each statement");
Object.keys(favoriteFruit).forEach(function (key) {
  console.log(key + "'s favorite fruit is " + favoriteFruit[key]['fruit']);
});

