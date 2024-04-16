const prompt = require('prompt-sync')();

let alunos = {};

// Aqui é a função que adiciona alunos e armazena no objeto
function adicionarAluno() {
    const id = parseInt(prompt('Digite o ID do aluno: '));
    const nome = prompt('Digite o nome do aluno: ');
    const nota = parseFloat(prompt('Digite a nota do aluno: '));

    alunos[id] = { nome, nota };
    console.log('Aluno adicionado com sucesso!');
}

// Função que procura o aluno pelo ID
function buscarAlunoPorId() {
    const id = parseInt(prompt('Digite o ID do aluno que deseja buscar: '));
    const alunoEncontrado = alunos[id];

    if (alunoEncontrado) {
        console.log('Aluno encontrado:', alunoEncontrado);
    } else {
        console.log('Aluno não encontrado.');
    }
}

// Função que calcula a média das notas dos alunos
function calcularMedia() {
    const ids = Object.keys(alunos); // Objeto

    if (ids.length === 0) {
        console.log('Não há alunos para calcular a média.');
        return;
    }

    let totalNotas = 0;
    for (const id of ids) {
        totalNotas += alunos[id].nota;
    }

    const mediaDasNotas = totalNotas / ids.length;
    console.log('Média das notas dos alunos:', mediaDasNotas);
}

// Menu inicial para escolher a função que quer realizar
while (true) {
    console.log('\nEscolha uma opção:');
    console.log('1 - Adicionar um novo aluno');
    console.log('2 - Buscar aluno por ID');
    console.log('3 - Calcular a média das notas dos alunos');
    console.log('0 - Sair');

    const opcao = parseInt(prompt('Opção: '));

    switch (opcao) {
        case 0:
            console.log('Encerrando o programa.');
            process.exit(0);
        case 1:
            adicionarAluno();
            break;
        case 2:
            buscarAlunoPorId();
            break;
        case 3:
            calcularMedia();
            break;
        default:
            console.log('Opção inválida.');
    }
}
