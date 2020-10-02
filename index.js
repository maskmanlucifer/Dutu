/* Including express.*/
let express = require('express');

/* Including controllers js.*/
let todocontroller=require('./controllers/todocontroller');

/* Giving access of all functionality of express to app.*/
let app =express();

/* Setting my template engine.*/
app.set('view engine','ejs');

/* Using static/constant files.*/
app.use(express.static('./public'));

/* Calling controller.*/
todocontroller(app);

/* Listening to server.*/
app.listen(3000);

/* Confirmation of listening of server.*/
console.log('you are listening to port 3000');