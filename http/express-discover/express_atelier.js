const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const database = [
  {
    id: 1,
    title: 'First',
    content: 'This is my first article'
  },
  {
    id: 2,
    title: 'Second',
    content: 'This is my second article'
  },
  {
    id: 3,
    title: 'Third',
    content: 'This is my third article'
  }
]

const racine = express.Router();
const allPosts = express.Router();
const selectId = express.Router();
const newPost = express.Router();

racine.get('/', (req, res) => {
  console.log(req.params.id)
  res.status(200).send('My blog app')
})

allPosts.get('/posts', (req, res) => {
  res.status(200).send(database)
})

selectId.get('/posts/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  res.status(200).send(database[id])
})

newPost.post('/posts/new', (req, res) => {
  const query = req.query
  if (query.title && query.content) {

    const length = database.length + 1
    database.push({ id: length, title: 'fourth', content: 'This is my fourth article' })
    res.status(200).send('Les données ont bien été ajoutés')
  }
  else {
    res.status(404).send({ error: 'Post must have title and content' })
  }
})

app.use('/', racine)
app.use('/posts', racine)

app.listen(port, (err) => {
  if (err) {
    console.log(`Impossible de se connecter sur le port ${port}`)
  }
  else {
    console.log(`Tu es bien connecté au port ${port}`)
  }
})