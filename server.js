const express = require('express')
const path = require('path');
const expressLayouts = require('express-ejs-layouts')


const app = express()


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphb({defaultLayout: 'name'}))
app.set('view engine', 'handlebars');
app.use(express.static('public'))


app.listen(process.env.PORT || 3000)

const Sequelize = require('sequelize');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const handlebars = require('express-handlebars');
const session = require('express-session');


const indexRouter = require('./controllers/index')



app.set('view engine', 'js') 
app.set('views', __dirname + '/views')
app.set ('layout', 'view/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3001)