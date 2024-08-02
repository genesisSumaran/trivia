const preguntas = [
    {
        pregunta: "¿Cómo se llama la actriz del personaje 'Cady Heron'?",
        respuestas: ["Lindsay Lohan", "Linsay Lojan", "Emma Stone"],
        correcta: 0,
    },
    {
        pregunta: "¿Cómo se llama la actriz que interpreta a 'Regina George'?",
        respuestas: ["Rachel M. Adams", "Rachel McAdams", "Rachel Seyfried"],
        correcta: 1,
    },
    {
        pregunta: "¿Por qué el pelo de Gretchen Wiener es tan grande?",
        respuestas: ["Porque está lleno de secretos", "Porque su papá inventó el shampoo", "Por su genética"],
        correcta: 0,
    },
    {
        pregunta: "Según Regina, ¿Qué palabra nunca se pondrá de moda?",
        respuestas: ["Fetsh", "Fatch", "Fetch"],
        correcta: 2,
    },
    {
        pregunta: "¿Qué día de la semana las Plásticas se visten de rosa?",
        respuestas: ["lunes", "Miércoles", "Viernes"],
        correcta: 1,
    },
    {
        pregunta: "¿Quién es el interés amoroso de Cady y Regina?",
        respuestas: ["Damien", "Aaron", "Josh"],
        correcta: 1,
    },
    {
        pregunta: "¿Cómo se llamaba el club de matemáticas?",
        respuestas: ["Matemáticos", "MateRap", "MateAtletas"],
        correcta: 2,
    },
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
        window.location.href = "/HTML/resultadoMeanGirls.html";
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
