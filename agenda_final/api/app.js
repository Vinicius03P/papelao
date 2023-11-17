import express  from 'express'
import cors from 'cors'
import { Contato } from './Contato.js';

export let listaContato = [
    new Contato(1, 'carlos', "c@gmail.com", 17123),
    new Contato(2, 'luiz', "l@gmail.com", 7),
    new Contato(3, 'polyana', "ilove@gmail.com", 4),
    new Contato(4, 'marcio', "marcin@gmail.com", 9),
]

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

app.get("/produtos",(req, res)=>{
    return res.status(200).json(listaContato)
})

app.post("/produtos/novo", (req, res)=>{
    const { nome, email, tel } = req.body;
    listaContato.push(new Contato(listaContato.length + 1, nome, email, tel));
    return res.status(200).json("Cadastrado com sucesso!");
})

app.put("/produtos/alterar/:id", (req,res)=>{
    const { id } = req.params;
    const { nome, email, tel } = req.body;
    let contato = listaContato.find(p => p.id == id)
    contato.nome = nome;
    contato.email = email;
    contato.tel = tel;
    return res.status(200).json("Alterado!")
})

app.delete("/produtos/excluir/:id", (req,res)=>{
    let { id } = req.params;
    listaContato = listaContato.filter(p => p.id != id)
    return res.status(200).json("Deletado!")
})

app.listen(3000,()=>{
    console.log("running!")
})