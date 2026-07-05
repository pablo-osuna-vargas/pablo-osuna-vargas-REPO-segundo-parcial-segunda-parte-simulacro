// pagina 1 //
// bloque mostrar dato curioso //
let arrayDatos = [
				"Refik Anadol utilizó ondas cerebrales reales para crear visualizaciones en su obra Melting Memories",
				"Su serie Machine Hallucinations fue generada a partir de más de 100 millones de imágenes procesadas por inteligencia artificial",
				"Transformó el archivo digital del MoMA en una instalación artística generativa basada en obras históricas del museo",
				"Proyectó arte generativo en la emblemática Ópera de Sídney durante el festival Vivid Sydney",
				"Explora cómo las máquinas 'recuerdan' utilizando datos y redes neuronales como material creativo",
				"Dirige un estudio interdisciplinario en Los Ángeles que reúne artistas, ingenieros y científicos de datos",
				"Considera que los datos son el nuevo pigmento para crear arte en el siglo XXI",
				"Muchas de sus obras se actualizan en tiempo real con datos climáticos, cerebrales o del entorno",
				"Ha colaborado con empresas como Google, Microsoft y NVIDIA para desarrollar proyectos artísticos innovadores",
				"Fue el primer artista de medios digitales en exponer una obra generativa en la sede de la ONU"
				];

let datoCurioso = "";
let divDato = document.querySelector("#datoCurioso");

let clickBody = document.querySelector("body");
clickBody.addEventListener("click", function(){
	let datoElegido = Math.floor(Math.random() * arrayDatos.length);
	datoCurioso = arrayDatos[datoElegido];
	divDato.style.display = "block";
	divDato.style.background = "rgba(0, 100, 0, 0.6)";
	divDato.style.color = "whitesmoke";
	divDato.style.margin = "4rem";
	divDato.style.textAlign = "center";
	divDato.innerHTML = `<p>${datoCurioso}</p>`;
});