# Challege-Amigo-Secreto

Este es un proyecto simple de sorteo de Amigo Secreto realizado con HTML, CSS y JavaScript. Permite a los usuarios ingresar nombres de amigos y realizar un sorteo para asignarles un amigo secreto.

## Características

- Añadir nombres de amigos a la lista.
- Sortear un amigo secreto al azar.
- Mostrar el resultado del sorteo en la pantalla.

## Uso

1. **Agregar un amigo**: Escribe el nombre de un amigo en el campo de entrada y haz clic en el botón "Añadir".
2. **Sortear amigo**: Haz clic en el botón "Sortear amigo" para elegir un nombre al azar. Se mostrará un mensaje con el nombre sorteado.

## Archivos del Proyecto

- `index.html`: Estructura del proyecto.
- `style.css`: Estilos del proyecto.
- `app.js`: Lógica de JavaScript para agregar nombres y realizar el sorteo.

## Instrucciones para Ejecutar

1. Clona este repositorio en tu máquina local.
    ```bash
    git clone https://github.com/tu-usuario/challege-amigo-secreto-.git
    ```
2. Abre el archivo `index.html` en tu navegador para ver y usar la aplicación.

## Ejemplo de Código

Aquí tienes un fragmento del código JavaScript utilizado para agregar amigos y realizar el sorteo:

```javascript
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
