const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); //aqui importei a lib no formato commonjs

const app = express() //aqui estou iniciando o app
app.use(express.json()) //aqui estou dizendo que estou tratando as requisições
const porta = 3333 //aqui estou criando a porta

//aqui estou criando lista inicial de mulheres
const mulheres = [
  {
    id: '1',
    nome: 'Fabiola Alves',
    imagem: 'https://avatars.githubusercontent.com/u/138211714?v=4',
    minibio: 'Designer e Desenvolvedora'
  },
  {
    id: '2',
    nome: 'Ju Rodrigues',
    imagem: 'https://avatars.githubusercontent.com/u/136929192?v=4',
    minibio: 'Desenvolvedora'
  },
  {
    id: '3',
    nome: 'Aline Nogueira',
    imagem: 'https://avatars.githubusercontent.com/u/136940826?v=4',
    minibio: 'Desenvolvedora'
  }
]

//GET
function mostraMulheres (request, response) {
  response.json(mulheres)
}

//POST
function criaMulher(request, response) {
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio:request.body.minibio
  }

  mulheres.push(novaMulher)

  response.json(mulheres)
}

//PATCH
function corrigeMulher(request,response) {
  function encontraMulher(mulher) {
    if (mulher.id === request.params.id) {
      return mulher
    }
  }

  //criar uma constante para guardar essa mulher que foi encontrada, para que possa ser reutilizada
  const mulherEncontrada = mulheres.find(encontraMulher)

  if (request.body.nome) {
    mulherEncontrada.nome = request.body.nome
  }
  if (request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
  }
  if (request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
  }

  response.json(mulheres)
}

//DELETE
function deletaMulher(request, response) {
  function todasMenosEla(mulher) {
    if(mulher.id !== request.params.id) {
      return mulher
    }
  }

  const mulheresQueFicam = mulheres.filter(todasMenosEla)

  response.json(mulheresQueFicam)
}

//PORTA
function mostraPorta () {
  console.log('Servidor criado e rodando na porta', porta)
}

//CONFIGURAÇÕES DO APP
app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei a rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei a rota DELETE /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta