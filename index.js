const express = require("express")

const connectDB = require('./config/db')

const app = express()

connectDB()

const port = process.env.PORT || 4000

app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})