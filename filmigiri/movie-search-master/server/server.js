const cors = require("cors")
const express = require("express")
const dbConn = require('./config/db')
require('dotenv').config()
const userRouter = require('./routes/userRouter')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)
app.use(errorHandler)
app.use(notFound)


const start = async ()=>{
  try{
      // await dbConn(process.env.MONGO_URI)
      console.log('Db connected')
      app.listen(process.env.Port||8080, () => console.log("Server running on port "+process.env.Port))
  }catch(err){
      console.log(err)
  }
  
}

start()


