// importing a module from NodeJS
import http from 'node:http'
import fs from 'node:fs'

const port = 3000

// Configure the web http web server
const server = http.createServer((request, response) => {
  log(`${request.method} ${request.url}`)

  response.writeHead(
    200,
    {
      "Content-Type": "text/html"
    }
  )

  // Primite Routing
  switch (request.url) {
    case "/":
      response.end(returnLandingPage())   
      break;
    case "/third-party":
      thirdParyFetch(response)
      break;
  
    default:
      response.end(returnDefault())
      break;
  }
})

// Starting the web server
server.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`)
})

function returnLandingPage() {  
  return `
  <html>
    <head>
      <title>Hello World</title>
    </head>

    <body>
      <h1>Testing</h1>
    </body>
  </html>
  `
}

async function thirdParyFetch(response) {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")

  response.end(JSON.stringify(await data.json()))
}

function returnDefault() {
  return "<h1>Default Response</h1>"
}

function log(message) {
  const jsonLog = {
    type: "INFO",
    timeStamp: new Date().toISOString(),
    message: message,
  }
  fs.appendFileSync("log.json", JSON.stringify(jsonLog), {
    encoding: "utf-8"
  })
}
