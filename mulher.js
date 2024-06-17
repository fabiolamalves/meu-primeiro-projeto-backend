const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response) {
  response.json({
    nome: 'Fabiola Alves',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQFkS7FkFsIDCg/profile-displayphoto-shrink_400_400/0/1710507326028?e=1720656000&v=beta&t=vzbGC6QwZ-f5S3j_LuRlvvuo1YoKiVrtAbF_wk-lOVI',
    minibio: 'Designer e Desenvolvedora'
  })
}

function mostraPorta () {
  console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)

//é isso que acontece quando a gente cria um servidor, serve dados que fazem sentido <3!