// 1. What is an object?
// objects are containers that encapsulate data
// Object is a thing with methods and properties attached to it
// 2. Why are objects useful?
// allows you to create containers that carry several properties and values unlike variables that can only hold one value

// 3. How do you create an object?
//    Literal notation 
    // var nameOfObject = {
    //     property:value
    // }
// var userOne = {
//     email: 'adler@sherlock.com',
//     name: 'adler',
//     login(){
//         console.log(this.email, 'has logged in')
//     },
//     logout(){
//         console.log(this.email, 'has logged out')
//     }
// };
// console.log(userOne.name)

// 4. Accessing  methods and properties
// Dot Notation
// userOne.email
// userOne.login()
// Bracket Notation 
// userOne['name']
// userOne['speak']()

// 5. What is the advantage of using bracket notation vs dot notation?

// 6. Add/Update properties and methods to objects
// userOne.name = 'adler'
// userOne.logIn = function login(){}

// -------------------------------------------------------------------------------------------------------

// CONSTRUCTORS

// 7. What is a constructor? 
    // A constructor is the blueprint that defines an object during its creation
   8.// How to use a constructor to create an object?
    // function User(email, name){
    //     this.email = email;
    //     this.name = name;
    //     this. online = false;
    //     this.login = function(){
    //         console.log(this.email, 'has logged in')
    //    }
    // }
// 9. How do you create an instance of an object?

// Using the new keyword
// The new keyword:
// a) creates a new object.
// b) sets the value of 'this' to be the new empty object
// c) calls the constructor method

// Example:
// var userOne = new User('adler@gmail.com', 'Adler')
// var userTwo = new User('yoshi@gmail.com', 'yoshi')
// Accessing objects 
// userOne.name
// userOne.email

// --------------------------------------------------------------------------------------------------------

// 9.PROTOTYPES
// What is a prototype? which other o
// an object from which other objects inherit methods. prototypes re useful because we dont have to create new functions for every object and we dont have to create new instances with these methods
// function User(email, name){
//     this.email = email;
//     this.name = name;
//     this. online = false;
    // this.login = function(){
    //     console.log(this.email, 'has logged in')
    // }
// }


// Adding methods to prototypes
// User.prototype.login = function(){
//     this.online = true; 
//     console.log (this.email, 'has logged in');
// }

// User.prototype.logout = function(){
//     this.online = false;
//     console.log(this.email, 'has logged out');
// }
// //Prototype inheritance 
// function Admin(...args){

// }

// CLASSES
// Why do we need classes
// automate the creation of instances
// reusability of your code

// example object 
// class User{
//     constructor(email,name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(this.email, 'just logged in'); 
//         return this
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this
//     }
//     updateScore(){
//         this.score++;
//         console.log(this.email, 'score is now ', this.score)
//         return this
//     }
// }

// Extending classes
// allows you to create different kinds of classes that share similar characteristics 
// class Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email;
//         });
//     }
// }
// create a new object of an extended class
// var admin = new Admin('ashley@gmail.com', 'Ashley')

// extended classes calling objects
// admin.deleteUser(userTwo);






var userOne = new User('adler@gmail.com', 'Adler')
var userTwo = new User('yoshi@gmail.com', 'yoshi')
var admin = new Admin('ashley@gmail.com', 'ashley')



// console log the objects in the browser
console.log(userOne);
// console.log(userTwo);
userTwo.login();
// console.log(admin);


// userOne.login();
// userTwo.logout();
// userOne.login().updateScore().logout().updateScore();
// var users = [userOne, userTwo, admin]


