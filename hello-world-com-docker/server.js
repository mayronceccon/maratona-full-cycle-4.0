const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Eu sou Full Cycle')
})

app.listen(8080, () => {
    console.log('Run server')
    console.log('Eu sou Full Cycle')
})
