const express = require("express")
const cors = require('cors')

const connectDB = require('./config/db')

const app = express()

connectDB()

const optCors = {
	origin: process.env.FRONTEND_URL,
}

app.use(cors(optCors))

const port = process.env.PORT || 4000

app.use(express.json())

app.use('/api/users', require('./routes/usersRouter'))
app.use('/api/auth', require('./routes/authsRouter'))
app.use('/api/links', require('./routes/linksRouter'))
app.use('/api/files', require('./routes/filesRouter'))

app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`)
})