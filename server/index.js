const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const path = require('path')
const emojiFavicon = require('emoji-favicon')

const app = express()
app.use(bodyParser.json())
app.use(compression())
app.use(emojiFavicon('sparkles'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.get('/404', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', '404.html'))
})

app.set('views', path.join(__dirname, 'views'))
app.set('x-powered-by', false)
app.use('/public', express.static(path.join(__dirname, '../public')))

const server = app.listen(3000, function () {
  const port = server.address().port

  console.log('Server listening at http://127.0.0.1:%s', port)
})
