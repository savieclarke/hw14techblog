const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require('express-session');
const routes = require('./controllers');
const helper = require('./utils/helpers');


const app = express()


const hbs = exphbs.create({ helpers });
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    
  };
  
  app.use(session(sess));





app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.get('/', function (req,res) {
    res.render('home', {
        content: 'leave',
        published: false
    })
});


app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

const Sequelize = require('sequelize');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');



//port set up

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server Started');
});
