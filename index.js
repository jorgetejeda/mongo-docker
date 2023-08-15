import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  name: String,
  type: String
}))

mongoose.connect('mongodb://jtejeda:123456@monguito:27017/miapp?authSource=admin')

const app = express()

app.get('/', async (req, res) => {
  console.log('Listando ...')
  const animals = await Animal.find()
  return res.send(animals)
})

app.get('/crear', async (req, res) => {
  console.log('Creando animal')
  await Animal.create({ name: 'Lion', type: 'Mammal' })
  res.send('Animal creado')
})

app.listen(3000, () => console.log('Server ready on localhost:3000'))
