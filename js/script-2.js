// pagina 2 //
// bloque mostrar galería //
// descargar imagenes y completar titulo, año y ruta de img //
let arrayObras = [
	
	{
		titulo: "Cirrostratus",
		año: 2017,
		imagen: "img/cirrostratus.jpg"
	},

	{
		titulo: "Interconected",
		año: 2018,
		imagen: "img/interconected.jpg"
	},

	{
		titulo: "Music sculptures",
		año: 2013,
		imagen: "img/music-sculptures.jpg"
	},

	{
		titulo: "The Active Apparatus and Liminal Landscapes",
		año: 2013,
		imagen: "img/The Active Apparatus and Liminal Landscapes.png"
	},

	{
		titulo: "Virtual archive",
		año: 2017,
		imagen: "img/virtual-archive.jpg"
	},
]

let obra = "";
let divGaleria = document.querySelector("#galeria");

let botonVerGaleria = document.querySelector("#verGaleria"); // crear boton en HTML id="verGaleria" //
botonVerGaleria.addEventListener("click", function(e){
e.preventDefault();
divGaleria.innerHTML = ""; //vaciar galería para que no se pisen las imagenes //

	let obraElegida = Math.floor(Math.random() * arrayObras.length);
		obra = arrayObras[obraElegida];
		divGaleria.style.display = "block";
		divGaleria.innerHTML = `<p>${obra.titulo}, ${obra.año}</p>
								<br>
								<img src="${obra.imagen}"></img>`;
});