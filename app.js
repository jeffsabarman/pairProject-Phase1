const express = require('express');
const app = express();
const session = require("express-session")
const router = require('./routes/index')
const logger = require('./middleware/logger')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.use(logger)
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use('/', router)


// const port = process.env.PORT || 3000;
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
  })