const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.development' })

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('DB conectada')
  } catch (error) {
    console.log('Hubo un error')
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB