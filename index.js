
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendfile('index.html')
})
app.get('/blog.html', (req, res) => {
  res.sendfile('blog.html')
})
app.get('/index.html', (req, res) => {
  res.sendfile('index.html')
})
app.get('/kayitol.html', (req, res) => {
  res.sendfile('kayitol.html')
})
app.get('/ekle.html', (req, res) => {
  res.sendfile('ekle.html')
})
app.get('/girisyap.html', (req, res) => {
  res.sendfile('girisyap.html')
})
app.get('/hakkimizda.html', (req, res) => {
  res.sendfile('hakkimizda.html')
})

io.on('connection', socket => {
  console.log('a user connected', ++userCounter, socket.id)
  //idler.push(socket.id)
  io.to(socket.id).emit("yollanan", db)
  socket.on('disconnect', () => {
    console.log('user disconnected', --userCounter, socket.id)
  })

})

http.listen(3000, () => console.log('listening on *:3000'))
