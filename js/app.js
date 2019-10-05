var amigos = new Array;

function saludarAmigos() {
	for (var i = 0; i < amigos.length; i++) {
		alert(`Hola ${amigos[i]}`);
	}
}

function agregarAmigos() {
	var nombre = prompt(`Ingresa el nombre de tu amigo`);

	amigos.push(nombre);
	alert(`Su amigo ${nombre} se ha agregado correctamente a la lista de amigos`);
}

function buscarArray(array, propiedad) {
	return array.indexOf(propiedad);
}

function eliminarAmigos() {
	var nombre = prompt(`Ingrese el nombre del amigo ha eliminar`),
		posicion = buscarArray(amigos, nombre);

	if (posicion == -1) {
		alert(`Su amigo ${nombre} no se ha encontrado en la lista de amigos`);
	} else {
		amigos.splice(posicion, 1);
		alert(`Su amigo ${nombre} se ha eliminado correctamente de la lista de amigos`);
	}
}