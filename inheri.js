class user{

constructor(name,EMail)
{
    this.name = name;
    this.EMail = EMail;
}

 Loginin()
 {
    console.log("hee"+this.name + "Logged in");
 }

 Loggedout()
 {
    console.log("hee"+this.name + "Logged Out");
 }
}

// class Admin extends user
// {
//     deleteuser(user)
//     {
//         users = users.filter(u => {
//             return u.EMail != user.EMail; });

//     }
// }

var user1 = new user ("Karthi", "karthi@143.com");
var user2 = new user ("Karu", "karu@143.com");
var admin = new user ("Ark", "ark@143.com");

var users = [user1,user2,admin];
console.log(users);

var val = admin;

users=users.filter(temp => {
    return temp.name!= val.name;
 });

console.log(users);



var a=[71,3,5,33,10,55,15,33,50,21];
var val = 10;
// for(i=0;i<a.length;i++)
// {
//     if(val == a[i])
//     {
//         // a.remove(val);
        a=a.filter(temp => {
            return temp!= val;
         });
//     }else{console.log(val + "is not Array");}
    
// }
// console.log(a);
