const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')
const { response } = require('express')


const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'HP',
        password: 'test',
        database: 'smart-brain'
    }
})



const app = express();

app.use(bodyParser.json())
app.use(cors())


// app.get('/', (req, res) => {
//     res.send(db.users)
// })


app.post('/signin', signin.handlerSingin(db, bcrypt))

app.post('/register', register.handlerRegister( db, bcrypt) )

app.get('/profile/:id', profile.handlerProfile(db))

app.put('/image',Image.handlerImage(db))

app.post('/imageurl',Image.handlerApiCall(db))

app.listen(3000, () => {
    console.log('app is running')
})