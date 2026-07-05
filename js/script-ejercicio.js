let arrayObras = [];

let captura = document.querySelector("#form");
let salida = document.querySelector("#resumen");

let botonCantidad = document.querySelector("#cargarCantidad");
let botonCargarObra = document.querySelector("#cargarObra");
let botonCargarVisitas = document.querySelector("#cargarVisitas");
let botonEnviarForm = document.querySelector("#enviarFormulario");
let botonRecargarPag = document.querySelector("#reset");

let cantidad;
let visitasXdia;
let precioEntrada;

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
visitasXdia = Number(document.querySelector("#visitasXdia").value);
precioEntrada = Number(document.querySelector("#precioEntrada").value);

	if(visitasXdia <= 0 || isNaN(visitasXdia)) {
		alert("ingresá una cantidad de visitantes esperada por día");
		return;
	}

	if(precioEntrada <= 0 || isNaN(precioEntrada)) {
		alert("ingresá un precio válido");
		return;
	}

	document.querySelector("#enviarFormulario").disabled = false;
});

// 4.botón enviar formulario //
botonEnviarForm.addEventListener("click", function (e){
	e.preventDefault();
	calcular();
	salida.style.display = "block";
})

// aqui la definicion de function //
function calcular() {

	let totalPant = 0;
	let totalXdia = 0;
	let obraMayorCosto = arrayObras[0];

	arrayObras.forEach(function(objeto){
		totalPant += objeto.cantPantXdia;
		totalXdia += objeto.cantPantXdia * objeto.costoPantXdia;

		if(objeto.costoPantXdia > obraMayorCosto.costoPantXdia) {
			obraMayorCosto = objeto;
		}
	})

	let costoXmes = totalXdia * 30;
	let ganancia = ((visitasXdia * precioEntrada) * 30) - costoXmes;
	let obraMayorCostoXmes = (obraMayorCosto.cantPantXdia * obraMayorCosto.costoPantXdia) * 30;
	
	salida.innerHTML = `<h4>Resumen</h4>
						<ul>
							<li>Costo total de Pantallas x mes: $${costoXmes}</li>
							<li>Ganancia esperada x mes: $${ganancia}</li>
							<li>Obra de mayor costo x día es: ${obraMayorCosto.titulo}, con un costo mensua de: $${obraMayorCostoXmes}</li>
						</ul>`;
}

let recargar = document.querySelector("#reset");
recargar.addEventListener("click", function() {
    location.reload();
});
