const express = require("express")

const carsRouter = require('./cars/cars-router')

const server = express()

// DO YOUR MAGIC
server.use(express.json()) //<<<added this


server.use('api/cars', carsRouter)


server.use('*', (req, res, next) => {
    next({ status: 400, message: 'not found!' })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
