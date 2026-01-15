var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.text','hi' + user.username + '!' ,()=>{
    console.log('file is created')
});

// use import export foler data file number notes.js
const notes=require('./notes.js')