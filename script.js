let filaActual = null;

function agregarFila() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const matricula = document.getElementById('matricula').value;
    const nota = document.getElementById('nota').value;

    const tabla = document.getElementById('tbody');
    const nuevaFila = tabla.insertRow();

    nuevaFila.insertCell(0).innerHTML = nombre;
    nuevaFila.insertCell(1).innerHTML = apellido;
    nuevaFila.insertCell(2).innerHTML = matricula;
    nuevaFila.insertCell(3).innerHTML = nota;
    nuevaFila.insertCell(4).innerHTML = `
        <button onclick="editarFila(this)">Editar</button>
        <button onclick="eliminarFila(this)">Eliminar</button>
    `;

    document.getElementById('form').reset();
}

function editarFila(boton) {
    filaActual = boton.parentElement.parentElement;
    document.getElementById('nombre').value = filaActual.cells[0].innerHTML;
    document.getElementById('apellido').value = filaActual.cells[1].innerHTML;
    document.getElementById('matricula').value = filaActual.cells[2].innerHTML;
    document.getElementById('nota').value = filaActual.cells[3].innerHTML;
}

function actualizarFila() {
    if (filaActual) {
        filaActual.cells[0].innerHTML = document.getElementById('nombre').value;
        filaActual.cells[1].innerHTML = document.getElementById('apellido').value;
        filaActual.cells[2].innerHTML = document.getElementById('matricula').value;
        filaActual.cells[3].innerHTML = document.getElementById('nota').value;
        filaActual = null;
        document.getElementById('form').reset();
    }
}

function eliminarFila(boton) {
    const fila = boton.parentElement.parentElement;
    fila.parentElement.removeChild(fila);
}
