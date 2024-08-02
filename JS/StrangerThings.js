const preguntas = [
    {
        pregunta: "¿Cómo se llama el monstruo que acecha en el Mundo del Revés en la segunda temporada?",
        respuestas: ["Demogorgon", "Mind Flayer", "Dart"],
        correcta: 1,
    },
    {
        pregunta: "¿Cómo se llama el centro de investigación secreto donde trabajaba el padre de Eleven?",
        respuestas: ["Laboratorio Nacional de Hawkins", "Centro de Energía de Hawkins", "Laboratorio de Investigaciones Hawkins"],
        correcta: 2,
    },
    {
        pregunta: "¿Cuál es el nombre del hermano mayor de Will y cómo se involucra en la trama de la segunda temporada?",
        respuestas: ["Jonathan, es fotógrafo", "Jonathan, es músico", "Lucas, es deportista"],
        correcta: 0,
    },
    {
        pregunta: "¿Qué criatura es la responsable de la epidemia que azota Hawkins en la tercera temporada?",
        respuestas: ["Demodogs", "Ratas", "Mind Flayer"],
        correcta: 1,
    },
    {
        pregunta: "¿Cómo se llama el centro comercial donde gran parte de la tercera temporada tiene lugar?",
        respuestas: ["Hawkins Plaza", "Starcourt Mall", "Mall of Hawkins"],
        correcta: 1,
    },
    {
        pregunta: "¿Qué poderes psíquicos tiene Eleven y cómo los utiliza para ayudar a sus amigos?",
        respuestas: ["Telequinesis, levitar objetos y personas", "Premoniciones y control mental", "Comunicación con el Mundo del Revés"],
        correcta: 0,
    },
    {
        pregunta: "¿Cuál es el nombre completo del personaje interpretado por Winona Ryder y cuál es su relación con Will Byers?",
        respuestas: ["Joyce Byers, su madre", "Joyce Holloway, su tutora", "Joyce Harper, su vecina"],
        correcta: 0,
    }
];
var indice_aleatorio = 0;
var pregunta_texto = "";
var interval;

window.onload = iniciar;

function iniciar() {
    loadQuestion();
}

function iniciar_cronometro() {
    const tiempoInicial = 15;
    const cronometroDisplay = document.getElementById("cronometro");
    iniciarTiempo(tiempoInicial, cronometroDisplay);
}

function iniciarTiempo(duracion, componente) {
    interval = setInterval(() => {
        duracion--;
        if (duracion === 0) {
            componente.innerHTML = 'Se acabó el tiempo';
            clearInterval(interval);
            loadQuestion();
        } else {
            if (duracion < 10) {
                duracion = `0${duracion}`;
            }
            componente.textContent = `00:${duracion}`;
        }
    }, 1000);
}

function loadQuestion() {
    iniciar_cronometro();
    if (preguntas.length > 0) {
        indice_aleatorio = Math.floor(Math.random() * preguntas.length);
        pregunta_texto = "";
        pregunta_texto += `<p>${preguntas[indice_aleatorio].pregunta}</p>`;
        pregunta_texto += `<button id="opcion0" onclick="verificarRespuestaCorrecta(0, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[0]}</button>`;
        pregunta_texto += `<button id="opcion1" onclick="verificarRespuestaCorrecta(1, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[1]}</button>`;
        pregunta_texto += `<button id="opcion2" onclick="verificarRespuestaCorrecta(2, ${preguntas[indice_aleatorio].correcta})">${preguntas[indice_aleatorio].respuestas[2]}</button>`;
        document.getElementById("pregunta").innerHTML = pregunta_texto;
        preguntas.splice(indice_aleatorio, 1);
    } else {
        window.location.href = "/HTML/resultadoStrangerThings.html";
    }
}

var puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if (indice === correcta) {
        puntos += 5;
    }
    localStorage.setItem("SCORE", puntos);
    document.getElementById("option0").disabled=true;
    document.getElementById("option1").disabled=true;
    document.getElementById("option2").disabled=true;
}

function siguientePregunta() {
    clearInterval(interval);
    loadQuestion();
}
