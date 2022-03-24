// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
// let nome = prompt("Escreva seu nome")
// alert("Seu nome é: " + nome)
// console.log(nome)

// 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.
// let num1 = parseInt (prompt("Escreva o primeiro número"))
// let num2 = parseInt (prompt("Escreva o segundo número"))
// console.log (num1 + num2)

// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.
// let nota1 = parseInt(prompt("Escreva a sua 1ª nota"))
// let nota2 = parseInt(prompt("Escreva a sua 2ª nota"))
// console.log ((nota1 + nota2)/2)

// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.
// let nascimento = prompt("Digite o seu ano de nascimento")
// console.log(2022 - nascimento) 

// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
// let granaHora = prompt("Quanto você ganha em dinheiro por hora?")
// let horaMes = prompt("Qual a sua carga horária de trabalho mensal?")
// console.log (granaHora * horaMes)

// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).
// let Fah = prompt("Diga um grau de temperatura em Fahrenheit")
// console.log (C = 5 * ((Fah-32) / 9))


// Outras questões:
// 1.	Faça um Programa que peça dois números e imprima o maior deles.
// let num1 = parseFloat(prompt("Digite o primeiro número"))
// let num2 = parseFloat(prompt("Digite o segundo número"))
//     if (num1 > num2){
//         console.log("num1 é o maior: " + num1)
//     }else {
//         console.log("num2 é o maior: " + num2)
//     }

// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
// let valor = prompt("Digite um número")
//     if(valor < 0){
//         console.log("O número é negativo")
//     }else{
//         console.log("O número é positivo")
//     }

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
// let genero = prompt("Digite o seu genero").toLocaleLowerCase()
//     if(genero === "m"){
//         console.log("Masculino")
//     }else if(genero === "f"){
//         console.log("Feminino")
//     }else{
//         console.log("Sexo Inválido")
//     }

// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: 
// a)	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// b)	A mensagem "Reprovado", se a média for menor do que sete;
// c)	A mensagem "Aprovado com Distinção", se a média for igual a dez.
// let nota1 = parseInt(prompt("Digita a sua primeira nota"))
// let nota2 = parseInt(prompt("Digita a sua segunda nota"))

// let media = ((nota1 + nota2)/2)
//   console.log(media)
//     if(media === 10){
//         console.log("Aprovado com distinção")
//     }else if(media < 7){
//         console.log("Reprovado")
//     }else if(media >= 7){
//         console.log("Aprovado")
//     }

// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// let num3 = parseInt(prompt("Digite o terceiro número"))
//     let nMaior = Math.max(num1,num2,num3)
//     let nMenor = Math.min(num1,num2,num3)
//         console.log("O maior número é: " + nMaior + ", o menor é: " + nMenor)

// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
// let num = parseInt(prompt("Digite um numero"))
//     if ( num % 2 === 0 ){
//         console.log("Este número é par")
//     }else {
//         console.log("Este número é impar")
//     }
