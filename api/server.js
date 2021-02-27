const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Contact = require('./models/contact')

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/myDB', { 
  useNewUrlParser: true 
})

app.use(express.json())


app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find({})
  res.json(contacts)
})

app.get('/contacts/:id', (req, res) => {
  const { id } = req.params
  const result = contacts.find(contact => contact.id === id)
  res.json(result)
})

app.post('/contacts', async (req, res) => {
  const payload = req.body
  console.log(req.body);
  const contact = new Contact(payload)
  await contact.save()
  res.status(201).end()
})

app.put('/contacts/:id', (req, res) => {
  const { id } = req.params
  res.json({ id })
})
app.delete('/contacts/:id', (req, res) => {
  const { id } = req.params
  res.json({ id })
})
app.listen(9000, () => {
  console.log('Application is running on port 9000')
})