const prompt = require('prompt-sync')();

function somaAteN(N) {
    if (N === 1) {
        return 1;
    } else {
        return N + somaAteN(N - 1);
    }
}

function somaInversosAteN(N) {
    if (N === 1) {
        return 1;
    } else {
        return 1/N + somaInversosAteN(N - 1);
    }
}

function potencia(x, k) {
    if (k === 0) {
        return 1;
    } else if (k === 1) {
        return x;
    } else {
        return x * potencia(x, k - 1);
    }
}

function tribonacci(N3) {
    if (N3 === 0) {
        return 0;
    } else if (N3 === 1 || N3 === 2) {
        return 1;
    } else {
        return tribonacci(N3 - 1) + tribonacci(N3 - 2) + tribonacci(N3 - 3);
    }
}

function pell(N4) {
    if (N4 === 0) {
        return 0;
    } else if (N4 === 1) {
        return 1;
    } else {
        return 2 * pell(N4 - 1) + pell(N4 - 2);
    }
}

console.log("Escolha a função que deseja executar:");
console.log("1. Calcular a soma de 1 até N");
console.log("2. Calcular a soma dos inversos de 1 até N");
console.log("3. Calcular x elevado à potência k");
console.log("4. Calcular o N-ésimo número da sequência de Tribonacci");
console.log("5. Calcular o N-ésimo número de Pell");
const escolha = parseInt(prompt("Digite o número da função desejada: "));

switch (escolha) {
    case 1:
        const N1 = parseInt(prompt("Digite um número inteiro positivo para N: "));
        if (Number.isInteger(N1) && N1 > 0) {
            const resultado1 = somaAteN(N1);
            console.log(`A soma dos números de 1 até ${N1} é: ${resultado1}`);
        } else {
            console.log("Por favor, insira um número inteiro positivo válido.");
        }
        break;
    case 2:
        const N2 = parseInt(prompt("Digite um número inteiro positivo para N: "));
        if (Number.isInteger(N2) && N2 > 0) {
            const resultado2 = somaInversosAteN(N2);
            console.log(`A soma dos inversos dos números de 1 até ${N2} é: ${resultado2}`);
        } else {
            console.log("Por favor, insira um número inteiro positivo válido.");
        }
        break;
    case 3:
        const x = parseInt(prompt("Digite o valor de x: "));
        const k = parseInt(prompt("Digite o valor de k: "));
        if (Number.isInteger(x) && Number.isInteger(k)) {
            const resultado3 = potencia(x, k);
            console.log(`${x} elevado à potência ${k} é: ${resultado3}`);
        } else {
            console.log("Por favor, insira valores inteiros para x e k.");
        }
        break;
    case 4:
        const N3 = parseInt(prompt("Digite um número inteiro positivo para N: "));
        if (Number.isInteger(N3) && N3 >= 0) {
            const resultado4 = tribonacci(N3);
            console.log(`O ${N3}° número da sequência de Tribonacci é: ${resultado4}`);
        } else {
            console.log("Por favor, insira um número inteiro positivo válido.");
        }
        break;
    case 5:
        const N4 = parseInt(prompt("Digite um número inteiro positivo para N: "));
        if (Number.isInteger(N4) && N4 >= 0) {
            const resultado5 = pell(N4);
            console.log(`O ${N4}° número de Pell é: ${resultado5}`);
        } else {
            console.log("Por favor, insira um número inteiro positivo válido.");
        }
        break;
    default:
        console.log("Opção inválida.");
}
