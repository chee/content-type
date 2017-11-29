const fetch = require('node-fetch')
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 80

const app = express()

app.use(cors())

app.get('/*', (request, response) => {
  const url = request.params[0]
  fetch(url, {
    method: 'HEAD'
  }).then(fetchResponse => {
    const contentType = fetchResponse.headers.get('content-type')
    response.type(contentType)
    response.end(contentType)
  })
})

app.listen(port, () => console.log(`listening on ${port} !`))
