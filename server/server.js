require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helemt = require('helmet')
const authRoutes = require('./routes/auth')

const app = express()
app.use(cors())
app.use(helemt())
app.use(express.json())
app.use('/api/auth', authRoutes)

app.get('/api', (req, res) => {
  res.send({"msg": "Welcome to Sihatak API"})
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`)
})