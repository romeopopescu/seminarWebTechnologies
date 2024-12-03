// npm init -y
// npm install express body-parser sequelize cors sqlite3

const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const cors = require('cors')

const sequelize = new Sequelize('my-db', 'app', 'welcome123', {
    dialect: 'sqlite',
    storage: 'db.sqlite'
})

let Bus = sequelize.define('bus', {
    registration: {
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            is:/^[A-Z]{1,2}[0-9]{2}[A-Z]{3}$/
        },
        capacity: {
            type:Sequelize.INTEGER,
            allowNull:false,
            validate:{
                isInt:true,
                min:15
            }
        }
    }
}) 

let Driver = sequelize.define('driver', {
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            len:[3,30]
        }
    },
    shift:{
        type:Sequelize.ENUM,
        allowNull:false,
        values:['MORNING', 'AFTERNOON', 'NIGHT']
    }
})

Bus.hasMany(Driver)
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/sync', async(req, res, next) => {
    try{
        await sequelize.sync({force:true})
        res.status(201).json({message:'db created'})
    }catch(err) {
        next(err)
    }
})

app.get('/drivers', async(req,res,next) => {
    try{
        let drivers = await Driver.findAll()
        res.status(200).json(drivers)
    }catch(err) {
        next(err)
    }
})
app.post('/drivers', async(req,res,next) => {
    try{
        await Driver.create(req.body)
        res.status(201).json({message: 'driver inserted'})
    }catch(err) {
        next(err)
    }
})

app.listen(3001, () => console.log('Server is running on port 3000'))