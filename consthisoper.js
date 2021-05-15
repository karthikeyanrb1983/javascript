// This prg is explained constructor and this operater

var shop = function(myDate, name)
{
 this.myDate = myDate;
 this.myName = name;
 
 this.opener = function( )
 {
     //Here is myDate is taken constrocator function of myDate not taken by this.myDate
     //Why i am using is this.Myname here because of this.Myname and name is different variable
     console.log(myDate + " This date is opended by " + this.myName);
     console.log ("This operater differ");
    //Here i am using this.myDate is differ variable in funcction Mydate
     console.log(this.myDate + " This date is opended by " + this.myName);
     
 }
}

var shop1 = new shop(17,"Nirmal");
var shop2 = new shop(15,"Karthi");
var shop3 = new shop(18,"Karunya");

shop1.opener();
shop2.opener();
shop3.opener();

