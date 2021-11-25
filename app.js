//Todas las dependencias incluidas
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

//Carga nuestra env if si esta en development 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



//Inicializar Passport 
const initializePassport = require('./public/config-pass.js')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

//Stores users
const users = []

//Sets ejs as view engine
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

//Set up secret key located in the .env file
app.use(flash())
app.use(session({
    secret: 'somevalue',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//Sets view route for our index page
app.get('/', forwardAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name })
})

//Sets view route for our login page
app.get('/login', (req, res) => {
    res.render('login.ejs')
});

//Sets view route for our register page
app.get('/register', (req, res) => {
    res.render('register.ejs')
});


//manejo de register
app.post('/register', async(req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
})

//Manejo de Login
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

//Manejo de Logout
app.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

//Comprueba si el usuario esta autenticado antes de permitir el acceso a la pagina
function forwardAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

app.listen(3000)
console.log("Server running on port 3000...")