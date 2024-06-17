const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
  {
    nome: 'Fabiola Alves',
    imagem: 'https://avatars.githubusercontent.com/u/138211714?v=4',
    minibio: 'Designer e Desenvolvedora'
  },
  {
    nome: 'Ju Rodrigues',
    imagem: 'https://avatars.githubusercontent.com/u/136929192?v=4',
    minibio: 'Desenvolvedora'
  },
  {
    nome: 'Aline Nogueira',
    imagem: 'https://avatars.githubusercontent.com/u/136940826?v=4',
    minibio: 'Desenvolvedora'
  }
]

function mostraMulheres (request, response) {
  response.json(mulheres)
}

function mostraPorta () {
  console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)