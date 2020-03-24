const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()

app.use(express.static(__dirname + 'src/app/nav'))
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + 'src\app\nav\nav.component.html')))

app.get('/', (req, res) => res.sendFile('src/app/nav/nav.component.html',{root:__dirname}))
// app.get('/', (req, res) => res.send('Hello Krishna'))

app.use('/',router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))