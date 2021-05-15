function userDetails(username) {
    if(username) {
      console.log('sal',salary); // undefined(due to hoisting)
      console.log('age',age); // error: age is not defined
      let age = 30;
      var salary = 10000;
    }
    console.log(salary); //10000 (accessible to due function scope)
    // console.log(age); //error: age is not defined(due to block scope)
 }

 userDetails(1);