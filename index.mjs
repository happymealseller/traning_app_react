import express from "express"

const app = express()
const PORT = 3004


app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`)
})