const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.send({"msg": "This is a sample response from the server"})
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`)
})