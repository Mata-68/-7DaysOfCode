// Desafío DIA 01:

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


//Desafío DIA 02:
//¿Sabes cuando te registras en un site y, justo después, al iniciar sesión, te llama por tu nombre? Eso es lo que harás en el desafío de hoy.
// Desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:
// - ¿Cuál es tu nombre?
//- ¿Cuántos años tienes?
//- ¿Qué lenguaje de programación estás estudiando?
//A medida que se hagan las preguntas, la persona que esté usando el programa debe responder cada una de ellas.
//Al final, el sistema mostrará el mensaje:
//"Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!"

// Desafío adicional:
//Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:
//¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
//Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
//1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
//2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

let nombre = prompt('¿Cuál es tu nombre?');
let edad = Number(prompt('¿Cuántos años tienes?'));
let lenguajeProgramación = prompt('¿Qué lenguaje de programación estás estudiando?');

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramación}`);
console.log(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguajeProgramación}`);

let consultaLenguaje = prompt(`¿Te gusta estudiar ${lenguajeProgramación}?. Responde con el número 1 para SÍ o 2 para NO`);

if(Number(consultaLenguaje) === 1){
    alert('¡Muy bien!  Sigue estudiando y tendrás mucho éxito');
} else if(Number(consultaLenguaje === 2)){
    alert('Oh, que pena... ¿Ya intentaste aprender otros lenguajes?');
} else{
    alert('Por favor, ingresa sólo el número 1 o el 2');
}


//Desafío DIA 03:
//Tu desafío de hoy es crear los destinos posibles de un juego, en el que el usuario pueda elegir:
//Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
//Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.
//Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
//Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo sobre la tecnología ingresada.
//Lo importante es que la persona que esté jugando siempre pueda elegir qué decisión tomar para aprender y desarrollarse en el área de programación.
//Además, también es esencial que, al final del juego, pueda ingresar tantas tecnologías como desee en la lista de aprendizaje.

//CONSEJO 
//Ya tienes una idea de cómo hacer que toda esta historia suceda, ¿verdad? ¡Principalmente recordando cómo usar estructuras condicionales y bucles en Javascript!
//Si aún no sabes cómo imprimir y recibir valores en páginas web con HTML y CSS, puedes usar console.log, prompt y alert para desarrollar tu juego, como ya has visto en los últimos días.
//Recuerda que siempre puedes personalizar el juego de la forma que desees.

//EXTRA 
//Ya has visto estructuras condicionales en Javascript anteriormente, pero vamos a recapitular. El if se usa para verificar si una determinada condición es verdadera.

//Ejemplo:

if (ciudad === "Roma") {

    // muestra la foto del "Coliseo"

}

//Además, también puede usarse con uno o varios else if, que verificará si la condición anterior era falsa y comprobará si la actual es verdadera.
//Finalmente, existe el else solo, sin ninguna condición, y el código dentro de él se ejecutará siempre que todas las condiciones anteriores encadenadas sean falsas.

if (ciudad === "Roma") {

    // muestra la foto del "Coliseo"

} else if (ciudad === "París") {

    // muestra la foto de la "Torre Eiffel"

} else {

    // da la respuesta "No escribiste una ciudad válida"

}

//Desarrollo de la respuesta:

let primeraEleccion = Number(prompt('Si prefieres Front-End digita 1, pero si prefieres Back-End digita 2'));

if (isNaN(primeraEleccion)) {  
    alert('Por favor ingresa un número válido (1 o 2)');
} 
else if (primeraEleccion === 1) {     // Front-End  
    alert('Has elegido Front-End');

    let eleccionFrontEnd = Number(prompt('En esta área, ¿qué prefieres aprender?\n1 - React\n2 - Vue'));

    if (isNaN(eleccionFrontEnd)) {
        alert('Por favor ingresa un número válido (1 o 2)');
    } else if (eleccionFrontEnd === 1) {
        alert('Has elegido aprender React');
    } else if (eleccionFrontEnd === 2) {
        alert('Has elegido aprender Vue');    
    } else {
        alert('Por favor ingresa 1 o 2, tu elección no es válida.');
    }

    // Pregunta sobre especialización en Front-End
    let eleccionEspecializacion = Number(prompt('¿Deseas seguir especializándote en esta área (1) o desarrollarte para convertirte en Fullstack (2)?'));

    if (isNaN(eleccionEspecializacion)) {
        alert('Por favor ingresa un número válido (1 o 2)');
    } else if (eleccionEspecializacion === 1) {
        alert('¡Excelente! Seguirás profundizando en Front-End.');
    } else if (eleccionEspecializacion === 2) {
        alert('¡Genial! Ampliarás tu conocimiento para convertirte en Fullstack.');
    } else {
        alert('Por favor ingresa 1 o 2, tu elección no es válida.');
    }

} 
else if (primeraEleccion === 2) {    // Back-End 
    alert('Has elegido Back-End');

    let eleccionBackEnd = Number(prompt('En esta área, ¿qué prefieres aprender?\n1 - C#\n2 - Java'));

    if (isNaN(eleccionBackEnd)) {
        alert('Por favor ingresa un número válido (1 o 2)');
    } else if (eleccionBackEnd === 1) {
        alert('Has elegido aprender C#');
    } else if (eleccionBackEnd === 2) {
        alert('Has elegido aprender Java');
    } else {
        alert('Por favor ingresa 1 o 2, tu elección no es válida.');
    }

    // Pregunta sobre especialización en Back-End
    let eleccionEspecializacion = Number(prompt('¿Deseas seguir especializándote en esta área (1) o desarrollarte para convertirte en Fullstack (2)?'));

    if (isNaN(eleccionEspecializacion)) {
        alert('Por favor ingresa un número válido (1 o 2)');
    } else if (eleccionEspecializacion === 1) {
        alert('¡Excelente! Seguirás profundizando en Back-End.');
    } else if (eleccionEspecializacion === 2) {
        alert('¡Genial! Ampliarás tu conocimiento para convertirte en Fullstack.');
    } else {
        alert('Por favor ingresa 1 o 2, tu elección no es válida.');
    }

} 
else {
    alert('Por favor ingresa 1 o 2, tu elección no es válida.');
}

// Integraciòn tecnologìas

let tecnologias = [];
let respuesta = 'ok';

while (respuesta.toLowerCase ().trim() === 'ok') {
    let tecnologiaIngresada = prompt('¿Hay alguna otra tecnología que te gustaría aprender?');

    // Validar si el usuario no ingresó nada o presionó "Cancelar"
    if (tecnologiaIngresada !== null && tecnologiaIngresada.trim() !== "") {
        tecnologias.push(tecnologiaIngresada.trim());
    } else {
        alert("Por favor ingresa una tecnología válida.");
    }

      respuesta = prompt('Si deseas ingresar otra tecnología escibe "ok", de lo contrario escribe "no"').toLowerCase().trim();
    }

    // Mostrar la lista de tecnologías ingresadas
if (tecnologias.length > 0) {
    alert("Has ingresado las siguientes tecnologías: " + tecnologias.join(", "));
} else {
    alert("No ingresaste ninguna tecnología.");

    
//Deasfìo 04
//¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!
//Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
//A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
//Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
//Después de que el programa esté funcionando, intenta usar un número aleatorio en lugar de uno predefinido.

//CONSEJO 
//Piensa muy bien en qué estructura de repetición utilizarás para hacer que tu programa se ejecute hasta que se agoten las 3 oportunidades o hasta que la persona acierte el número.

//Desarrollo del desafìo:

// Solicitar el rango máximo para adivinar
let rangoNumero = parseInt(prompt('Por favor, ingresa el número máximo del rango (Ej: 10, 20, 50):'));

while (isNaN(rangoNumero) || rangoNumero <= 0) {
    rangoNumero = parseInt(prompt('⚠️ Error: Ingresa un número válido mayor que 0:'));
}

// Generar el número secreto aleatorio entre 1 y el rango ingresado
let numeroSecreto = Math.floor(Math.random() * rangoNumero) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;

// Mensaje inicial
alert(`🔢 ¡Bienvenido al juego de adivinanza! \nTienes ${maximoIntentos} intentos para adivinar un número entre 1 y ${rangoNumero}.`);

// Bucle para los intentos
while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Intento ${intentos}/${maximoIntentos}: Ingresa un número entre 1 y ${rangoNumero}:`));

    // Validar que el usuario ingrese un número válido
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > rangoNumero) {
        alert(`⚠️ Ingresa un número válido entre 1 y ${rangoNumero}.`);
        continue; // Evita que cuente como intento fallido
    }

    // Verificar si el usuario acertó
    if (numeroUsuario === numeroSecreto) {
        alert(`🎉 ¡Felicidades! Acertaste el número secreto (${numeroSecreto}) en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        break;
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert(`❌ Incorrecto. El número secreto es MENOR. ❄️`);
        } else {
            alert(`❌ Incorrecto. El número secreto es MAYOR. 🔥`);
        }

        intentos++;

        // Si alcanza el máximo de intentos, termina el juego
        if (intentos > maximoIntentos) {
            alert(`😢 ¡Lo siento! Has agotado tus ${maximoIntentos} intentos. El número secreto era: ${numeroSecreto}.`);
            break;
        }
    }
}