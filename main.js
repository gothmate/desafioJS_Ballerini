const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const linguagem = document.getElementById('linguagem');
const valor = document.querySelector('#valor');
let frase = document.querySelector('#frase');

const res1 = document.querySelector('.res1');
const res2 = document.querySelector('.res2');
const res3 = document.querySelector('.res3');

function desafio1() {
    res1.innerHTML = `<p>Oi, ${nome.value}! Você tem ${idade.value} e está estudando ${linguagem.value}! Parabéns!</p>`;
}

function desafio2() {
    const valorConvertido = parseFloat(valor.value.replace(',', '.'));
    let moedasUm = parseInt(valorConvertido);
    let moedaCinq = 0;
    let moedaDez = 0;
    let moedaCinco = 0;
    let moedaVinteCinco = 0;
    let resto = valorConvertido - moedasUm;

    console.log(moedasUm);
    console.log('resto: ' + resto.toFixed(2));

    if (resto >= 0.5) {
        moedaCinq = 1;
        resto = resto - 0.5;
        console.log('resto: ' + resto.toFixed(2));
    }
    if (resto >= 0.25) {
        moedaVinteCinco = 1;
        resto = resto - 0.25;
        console.log('resto: ' + resto.toFixed(2));
    }
    if (resto >= 0.1) {
        moedaDez = resto * 10;
        console.log('moedas de 0.10: ' + Math.round(moedaDez));
        resto = resto - Math.round(moedaDez) / 10;
        console.log('resto: ' + resto.toFixed(2));
    }
    if (resto >= 0.05) {
        moedaCinco = resto * 20;
        console.log('moedas de 0.05: ' + Math.round(moedaCinco));
        resto = resto - Math.round(moedaCinco);
        console.log('resto: ' + resto.toFixed(2));
    }

    res2.innerHTML = `<p>O troco terá um mínimo de ${(
        moedasUm +
        moedaCinq +
        moedaVinteCinco +
        moedaDez +
        moedaCinco
    ).toFixed(0)} moedas.</p>`;
    res2.innerHTML += `<li>sendo ${moedasUm} moeda(s) de R$1,00</li>`;
    res2.innerHTML += `<li>${moedaCinq} moeda(s) de R$0,50</li>`;
    res2.innerHTML += `<li>${moedaVinteCinco} moeda(s) de R$0,25</li>`;
    res2.innerHTML += `<li>${parseInt(moedaDez)} moeda(s) de R$0,10</li>`;
    res2.innerHTML += `<li>${Math.round(moedaCinco)} moeda(s) de R$0,05</li>`;
}

function desafio3() {
    let cFrase = 0;
    let cPalavras = 0;

    let fraseV = frase.value;

    for (let i = 0; i < fraseV.length; i++) {
        if (fraseV[i] === '.' || fraseV[i] === '!' || fraseV[i] === '?') {
            cFrase++;
        }
    }

    fraseV.replace('.', '');
    fraseV.replace('!', '');
    fraseV.replace('?', '');

    for (let i = 0; i < fraseV.length; i++) {
        if (fraseV[i] === ' ') {
            cPalavras++;
        }
    }

    res3.innerHTML += `<h4>${frase.value}</h4>`;
    res3.innerHTML += `<p>${nome.value} escreveu ${cFrase} frases;</p>`;
    res3.innerHTML += `<p>num total de ${cPalavras + 1} palavras.</p>`;
}
