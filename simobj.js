
var myArray = new Array();
myArray[0]="ooi";
//console.log(myArray);

// First type of declation

var Mycar1 = new Object();
Mycar1.maxSpeed = 20;
Mycar1.driver = "Karthi";
Mycar1.drive = function() { console.log("This is Driving on");};

console.log(Mycar1.maxSpeed);
console.log(Mycar1.driver);
Mycar1.drive


//Second type of declaration

var Mycar2 = {
    maxSpeed : 30,
    driver : "karunya",
    drive : function()
    {
        console.log("Obj2 also driving on....");
    },
    timetravel : function(speed,time)
    {
        console.log(speed*time);
    }
};
console.log(Mycar2.maxSpeed);
console.log(Mycar2.driver);
Mycar2.drive
Mycar2.timetravel;
Mycar2.timetravel(10,4);



