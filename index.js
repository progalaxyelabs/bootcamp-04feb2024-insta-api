const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello everyone!')
})

app.get('/posts', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(fs.readFileSync('posts.json'))
})

app.listen(port, () => {
    console.log(`Inst API app listening on port ${port}`)
})