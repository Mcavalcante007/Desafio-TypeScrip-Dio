// Como podemos melhorar o esse código usando TS? 

enum profissao {
    advogado,
    engenheiro,
    desenvolvedor,
    medico,
    Padeiro,
    Atriz
}

type pessoa = {
    nome: string,
    idade: number,
    profissao: profissao,
    casado?:boolean

}
const pessoa1: pessoa = {
   nome:" Mateus",
   idade: 29,
   profissao: profissao.desenvolvedor,
   casado:true

}

const pessoa2: pessoa = {
   nome: "roberto",
   idade: 19,
   profissao:  profissao.Padeiro
}

const pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz,
    casado:true

}

const pessoa4: pessoa = {
    nome: "carlos",
    idade:  19,
    profissao: profissao.Padeiro
}