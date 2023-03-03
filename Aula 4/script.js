console.log('Hello world');

const pi = 3.1415;
let dez = 10;

console.log(pi + dez);

const nome = 'José';
const alergico = false;
const listaDeCompras = ['pão', 'óleo'];
const aluno = {
  nome: 'João',
  idade: 12
}

console.log('nome: ' + typeof nome);
console.log('alergico: ' + typeof alergico);
console.log('listaDeCompras: ' + typeof listaDeCompras); //Array é um object
console.log('aluno: ' + typeof aluno);

const a = true;
const b = false;

console.log(a && b); // E
console.log(a || b) // OU
console.log(!(a && b)) // Não
