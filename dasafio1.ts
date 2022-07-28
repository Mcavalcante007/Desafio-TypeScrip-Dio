// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*
let funcionario = {};
funcionario.codigo = 10;
funcionario.nome = "John";
*/

// resposta 1

const funcionario = {
    Codigo: 10,
    nome: "João"
}

// resposta 2

const funcionario2: { codigo: number , nome: string }  = {
    codigo: 25,
    nome: "Mateus"
}

// resposta 3

interface funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as funcionario; 
funcionarioObj.codigo = 30;
funcionarioObj.nome = "Mateus";


const funcionarioObj2 : funcionario = {
    codigo: 40,
    nome: "Mateus"
}