let arrayObras = [];

let captura = document.querySelector("#form");
let salida = document.querySelector("#resumen");

let botonCantidad = document.querySelector("#cargarCantidad");
let botonCargarObra = document.querySelector("#cargarObra");
let botonCargarVisitas = document.querySelector("#cargarVisitas");
let botonEnviarForm = document.querySelector("#enviarFormulario");
let botonRecargarPag = document.querySelector("#reset");

let cantidad;

// 1.botón cargar cantidad, habilita obra //
botonCantidad.addEventListener("click", function(e){
	e.preventDefault();
	cantidad = Number(document.querySelector("#cantidad").value);
	document.querySelector("#obra").disabled = false;
})

// 2.botón cargar obra, habilita visitas //
botonCargarObra.addEventListener("click", function(e){
	e.preventDefault();
	let titulo = document.querySelector("#titulo").value;
	let cantPantXdia = Number(document.querySelector("#cantPantXdia").value);
	let costoPantXdia = Number(document.querySelector("#costoPantXdia").value);

	if(titulo === "" || !isNaN(titulo)) {
		alert("ingrese un nombre válido");
		return;
	}

	if(cantPantXdia <= 0 || isNaN(cantPantXdia)) {
		alert("ingrese un número válido");
		return;
	}

	if(costoPantXdia <= 0 || isNaN(costoPantXdia)) {
		alert("ingrese un número válido");
		return;
	}

	// Validación de título repetido
	for (let i = 0; i < arrayObras.length; i++) {
	    if (arrayObras[i].titulo === titulo) {
	        alert("Ya existe una obra con ese título");
	        return;
	    }
	}

	let objetoObra = {
		titulo: titulo,
		cantPantXdia: cantPantXdia,
		costoPantXdia: costoPantXdia
		}

	arrayObras.push(objetoObra);
	console.log(arrayObras);

	document.querySelector("#titulo").value = "";
	document.querySelector("#cantPantXdia").value = "";
	document.querySelector("#costoPantXdia").value = "";

	if(arrayObras.length === cantidad){
		alert("se han cargado todas las obras");
		document.querySelector("#visitas").disabled = false;
		return;
	}
});

// 3.botón cargar visitas, habilita envío formulario //
botonCargarVisitas.addEventListener("click", function(e){
e.preventDefault();
let visitasXdia = Number(document.querySelector("#visitasXdia").value);
let precioEntrada = Number(document.querySelector("#precioEntrada").value);

	if(visitasXdia <= 0 || isNaN(visitasXdia)) {
		alert("ingresá una cantidad de visitantes esperada por día");
		return;
	}

	if(precioEntrada <= 0 || isNaN(precioEntrada)) {
		alert("ingresá un precio válido");
		return;
	}

	document.querySelector("#enviarFormulario");
});

// 4.botón enviar formulario //
// aqui las variables para operar //
botonEnviarForm.addEventListener("click", function (){
	calcular();
	salida.style.display = "block";
})

// aqui la definicion de function //
function calcular() {
	// aqui las operaciones //
salida.innerHTML = `//aqui todo el HTML porque es un <div>`;
}