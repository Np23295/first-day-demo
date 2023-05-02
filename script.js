// "use strict";

// global Object - window
console.log(this);

// In a function, refers to global object
function test(){
    console.log("Testing this ", this);
}

test();


// parent object
var user = {
    firstName: 'Nimit',
    lastName: 'Patel',
    email: {
        test: 'test@test.com'
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(user.fullName());

























// var user = {
//     firstName: 'Nimit',
//     lastName: 'Patel',
//     email: {
//         test: 'test@test.com'
//     },
//     funFact: function () {
//         return "This is my fun fact";
//     }

// };

// var funFact = function (){
//     console.log("This is my fun fact");
// }

// var funFacts = () => {
    
// }

// funFact();

// console.log("Obj funFact", user.funFact());

// // dot notation
// // user.firstName

// // bracket notation
// // user['firstName']

// // console.log("Type of" , typeof user);