const express = require("express");
const app = express();

app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(5500);

function empregados(ID,NOME,FUNÇÃO,SALARIO){
    this.ID = id;
    this.NOME = nome;
    this.FUNÇÃO = funcao;
    this.SALARIO = salario;
}

const totalE = [];

app.get("/empregados",(req,res)=>{
    return res.json(totalE);
})

app.post("/empregados",(req,res)=>{
    const{id} = req.body;
    const{nome} = req.body;
    const{funcao} = req.body;
    const{salario} = req.salario;

    const empregado = new  Empregado(id,nome,funcao,salario)

    totalE.push(empregado);
    return res.json(totalE);
});

app.put("/empregados/:index",(req,res)=>{
    const {index} = req.params;
    const{id} = req.body;
    const{nome} = req.body;
    const{funcao} = req.body;
    const{salario} = req.salario;
    empregado[index] = id;

    return res.json(totalE);
});

app.post("/empregados/deletar/:index",(req,res)=>{
    const{index} = req.params;
    totalE.splice(index,1);
    return res.send(totalE);
});
