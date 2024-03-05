import express from 'express'


const app = express()

app.get("/", (request, response) => {
  response.send("Hello World")
})

app.listen(3000, () => {
  console.log("Server Listening on: http://localhost:3000")
})
