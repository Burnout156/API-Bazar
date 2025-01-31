const express = require('express');
const cors = require('cors');
const app = express();

app.use('*', cors());
app.use(express.json());

const Produto = require('./models/produtos');//Esse comando irá criar a tabela
process.env.PORT = 8090
const porta = process.env.PORT || 8080;

app.get("/", async (req, res) => {
    res.send('Inicial!');
})

app.post("/cadastrar", async (req, res) => {
    req.body.dataCriacao = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(),
                                  new Date().getMinutes(), new Date().getSeconds()))
    req.body.ultimaAtualizacao = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(),
                                  new Date().getMinutes(), new Date().getSeconds()))

    await Produto.create(req.body)
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro inserido!"
            });
        }).catch((erro) => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao inserir!" + erro 
            });
        });
});

app.get("/listar", async (req, res) => {
    await Produto.findAll({})
        
        .then((produtos) => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro Lido!",
                produtos: produtos
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao Ler Registro!"
            });
        });
});

app.get("/listarPorId/:id", async (req, res) => {
    await Produto.findAll({ where: {id: req.params.id}})
        
        .then((produto) => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro Único Lido!",
                produto: produto
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao Ler Registro!"
            });
        });
});

app.delete("/deletar/:id", async (req, res) => {
    const _id = req.params.id
    console.log("req.params: " + _id)
    
    await Produto.destroy({
        where: { id: _id }

        }).then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro deletado!"
            });
        }).catch((error) => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao deletar! " + error
        });
    });
});

app.put("/atualizar", async (req, res) => {
    const _id = req.body.id
    const nome = req.body.nome
    console.log("REQ.BODY: " + req.body.Produto)

    req.query.nome = req.body.nome
    req.query.preco = req.body.preco
    req.query.descricao = req.body.descricao
    req.query.ultimaAtualizacao = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours(),
                                  new Date().getMinutes(), new Date().getSeconds()))
    

    console.log("req.params: " + _id)   
    console.log("req.body.nome: " + nome)
    console.log("req.query.dataAtt: " + req.query.ultimaAtualizacao)

    await Produto.update(req.query ,{ where: { id: _id } }
        ).then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: "Registro atualizado!"
            });
        }).catch((error) => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro ao atualizar! " + error
            });
         });
})

app.listen(porta, () => {
    console.log('Server start port: ' + porta);
})