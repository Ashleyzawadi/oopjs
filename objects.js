    var nameOfObject = {
        property:value
    }
    var userOne = {
        email: 'adler@sherlock.com',
        name: 'adler',
        login(){
            console.log(this.email, 'has logged in')
        },
        logout(){
            console.log(this.email, 'has logged out')
        }
    };
    console.log(userOne.name)

// 4. Accessing  methods and properties
// Dot Notation
    userOne.email
    userOne.login()
// Bracket Notation 
    userOne['name']
    userOne['speak']()

// 6. Add/Update properties and methods to objects
    userOne.name = 'adler'
    userOne.logIn = function login(){}

// -------------------------------------------------------------------------------------------------------

// CONSTRUCTORS
// use a constructor to create an object

        function User(email, name){
            this.email = email;
            this.name = name;
            this. online = false;
            this.login = function(){
                console.log(this.email, 'has logged in')
        }
        }
// Create an instance of an object?

// Using the new keyword
    var userOne = new User('adler@gmail.com', 'Adler')
    var userTwo = new User('yoshi@gmail.com', 'yoshi')
// Accessing objects 
    userOne.name
    userOne.email

// --------------------------------------------------------------------------------------------------------

// 9.PROTOTYPES

    function User(email, name){
        this.email = email;
        this.name = name;
        this. online = false;
        this.login = function(){
            console.log(this.email, 'has logged in')
        }
    }


// Adding methods to prototypes
    User.prototype.login = function(){
        this.online = true; 
        console.log (this.email, 'has logged in');
    }

    User.prototype.logout = function(){
        this.online = false;
        console.log(this.email, 'has logged out');
    }

// //Prototype inheritance 
        function Admin(...args){

        }

// --------------------------------------------------------------------------------------------------------------
// CLASSES
// example object 
    class User{
        constructor(email,name){
            this.email = email;
            this.name = name;
            this.score = 0;
        }
        login(){
            console.log(this.email, 'just logged in'); 
            return this
        }
        logout(){
            console.log(this.email, 'just logged out');
            return this
        }
        updateScore(){
            this.score++;
            console.log(this.email, 'score is now ', this.score)
            return this
        }
    }

// Extending classes
    class Admin extends User{
        deleteUser(user){
            users = users.filter(u => {
                return u.email != user.email;
            });
        }
    }
// create a new object of an extended class
    var admin = new Admin('ashley@gmail.com', 'Ashley')

// extended classes calling objects
    admin.deleteUser(userTwo);


var userOne = new User('adler@gmail.com', 'Adler')
var userTwo = new User('yoshi@gmail.com', 'yoshi')
var admin = new Admin('ashley@gmail.com', 'ashley')



// console log the objects in the browser
console.log(userOne);
console.log(userTwo);
userTwo.login();
console.log(admin);


userOne.login();
userTwo.logout();
userOne.login().updateScore().logout().updateScore();
var users = [userOne, userTwo, admin]


