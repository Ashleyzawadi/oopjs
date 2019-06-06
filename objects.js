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