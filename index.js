const alunosDaTurmaA = [
    {
        nome: 'Helena',
        nota: 3.1
    },

    {
        nome: 'Paula',
        nota: 8.9
    },

    {
        nome: 'Gabriela',
        nota: 4.7
    },
    {
        nome: 'Isis',
        nota: 5.6
    }
]

const alunosDaTurmaB = [
    {
        nome: 'Mariana',
        nota: 5.6
    },
    {
        nome: 'Thais',
        nota: 9.0
    },
    {
        nome: 'Lúcia',
        nota: 7.3
    },
    {
        nome: 'Carol',
        nota: 3.1
    }
]


function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = (soma / alunos.length).toFixed(2)
    return media

}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media} Parabens`)
    } else {
        console.log(`A ${turma} obteve média ${media} , ou seja, não atingiram o objetivo.`)
    }
}

enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)