// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido.");
    } else {
        amigos.push(nombreAmigo);
        actualizarLista();
        inputAmigo.value = "";
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Necesitas al menos 1 amigo para realizar el sorteo.");
        return;
    }

    // Seleccionar un amigo al azar
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Mostrar el resultado del sorteo en el HTML
    mostrarResultado(amigoSorteado);
}

// Función para mostrar el resultado del sorteo en el HTML
function mostrarResultado(amigoSorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    listaResultado.appendChild(li);
}
