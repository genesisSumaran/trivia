const preguntas = [
    {
        pregunta: "¿Cuál es el nombre real de Lana Del Rey?",
        respuestas: ["Elizabeth Woolridge Grant", "Stephanie Lynn Grant", "Margaret Elizabeth Grant"],
        correcta: 0,
    },
    {
        pregunta: "¿En qué año lanzó Lana Del Rey su álbum debut 'Born to Die'?",
        respuestas: ["2012", "2010", "2011"],
        correcta: 2,
    },
    {
        pregunta: "¿Cuál fue el sencillo más exitoso de Lana Del Rey hasta la fecha?",
        respuestas: ["Video Games", "Summertime Sadness", "Young and Beautiful"],
        correcta: 0,
    },
    {
        pregunta: "¿En qué película de James Bond colaboró Lana Del Rey con la canción del tema principal?",
        respuestas: ["Skyfall", "Spectre", "No Time to Die"],
        correcta: 1,
    },
    {
        pregunta: "¿Qué canción de Lana Del Rey incluye la frase 'I will love you ´til the end of time'?",
        respuestas: ["Blue Jeans", "Love", "Born to Die"],
        correcta: 0,
    },
    {
        pregunta: "¿Qué canción de Lana Del Rey hace referencia al famoso actor James Dean?",
        respuestas: ["West Coast", "Ride", "National Anthem"],
        correcta: 2,
    },
    {
        pregunta: "¿En qué canción de Lana Del Rey se menciona la frase 'Money is the anthem of success'?",
        respuestas: ["National Anthem", "Ride", "High by the Beach"],
        correcta: 0,
    }
];

let indice_aleatorio = 0;
let pregunta_texto = "";
let interval;

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
        window.location.href = "/HTML/resultadoslana.html";
    }
}

var puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if (indice === correcta) {
        puntos += 5;
    }

    localStorage.setItem("SCORE", puntos);
    document.getElementById("option0").disabled = true;
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
}


function siguientePregunta() {
    clearInterval(interval);
    loadQuestion();
}
