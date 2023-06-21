function soma() {
    return 2 + 2;
}


// console.log(somador(5, 5));
//  console.log(somador(245, 20));
// console.log(somador(-500, 60));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade('Gustavo', 18));

//2   //2
function somador(num1, num2) {
    resutaldo = num1 + num2;
    return resutaldo
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}
                               //9
console.log(multiplica(somador(4, 5)));