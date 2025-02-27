let numeroUn = 1
let stringUn = '1'
let numeroTreinta = 30
let stringTreinta = '30'
let numeroDiez = 10
let stringDiez = '10'

if(numeroUn == stringUn) {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}

if(numeroTreinta === stringTreinta) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}

if(numeroDiez == stringDiez){
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipo diferentes')
} else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}

//¿Sabes cuando te registras en un site y, justo después, al iniciar sesión, te llama por tu nombre? Eso es lo que harás en el desafío de hoy.
// Desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:
// - ¿Cuál es tu nombre?
//- ¿Cuántos años tienes?
//- ¿Qué lenguaje de programación estás estudiando?
//A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.
//Al final, el sistema mostrará el mensaje:
//"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

let nombre = prompt('¿Cuál es tu nombre?');
let edad = prompt('¿Cuántos años tienes?');
let lenguajeProgramación = prompt('¿Qué lenguaje de programación estás estudiando?');

console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramación}`);
