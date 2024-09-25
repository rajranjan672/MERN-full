const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const createError = require('http-errors')
const cookies = require("cookie-parser")
const app = express();


// app.use('/image', express.static(path.join(__dirname, 'images')));

// importing routes

const student = require("./router/student-detail");
 const course = require('./router/courses')
 const actionPlans = require("./router/actionplans")
 const faqs = require('./router/faqs')
//  const users = require('./router/users')
const countriesStates = require("./CountrriesAndStates/CountriesAndStates..json")
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 const MongoStore = require('connect-mongo');

const dotenv = require("dotenv").config();


//mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
}).then(() => {
    console.log('Database connected sucessfully ')

    },
    error => {
        console.log("couldn't connected to db: " + error)
    }
)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
//   });

// port
const port = 3001;

// app.use(express.static('uploads'));

//middleware

app.use(cors({
    origin:'http://localhost:3000', credentials:true
}));
app.use(bodyparser.json());

// passport

require('./passport-config');
var passport = require('passport');
// var session = require('express-session');

// app.use(session({
//     name: 'myname1.sid',
//     resave: false,
//     saveUninitialized:false,
//     secret: 'secret',
//     cookie:{
//         maxAge: 36000000,
//         httpOnly:false,
//         secure: false
//     },
    
    
    
// }));
app.use(cookies())
// app.use(passport.initialize());
// app.use(passport.session());



const auth = require("./router/Users");
// const router = require('./router/Users');
//routes
app.use('/api/user' , require('./router/Users'));
app.use('/api/song' , require('./router/Music'));

app.use("/api/students", student);
app.use("/api/courses", course);
app.use("/api/actionPlans", actionPlans);
app.use('/api/faqs', faqs);
app.use('/api/article', require("./router/Articles"))

app.get('/api/countries-states', (req, res) => {
    res.json(countriesStates);
});



app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("server is running on port "+port)
});