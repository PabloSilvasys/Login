//Capturando submit do formulário
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const pesoInput = e.target.querySelector('#peso');
    const alturaInput = e.target.querySelector('#altura');

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value) / 100; //Transforma em cm

    if (!peso) {
        setResultado ("Peso inválido", false);
        return;
    }

    if (!altura) {
        setResultado ("Altura inválida", false);
        return;
    }

    const imc = getIMC (peso, altura);
    const getNivelImc = nivelImc (imc);

    const msg = `Seu IMC é igual a ${imc} (${getNivelImc})`;
    setResultado (msg, true);
});

function nivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Grau III']

    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >=34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

function getIMC (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaParagrafo (){
    const p = document.createElement('p');//Criando parágrafo
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";//Limpando resultado
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add ('paragrafo-resultado');
    }else{
        p.classList.add ('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);
};
