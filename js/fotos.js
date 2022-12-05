window.onload =  function() {
	const fotos = document.querySelector("div");

	fotos.addEventListener("click",(e)=>{
		if(e.target.tagName==="IMG"){
			
			const fondoNegro = document.createElement("div");
			fondoNegro.id = "fondo";
			document.body.appendChild(fondoNegro);

			
			fondoNegro.style.position = "absolute";
			fondoNegro.style.top = 0;
			fondoNegro.style.backgroundColor = "rgba(0,0,0,0.5)";
			fondoNegro.style.cursor = "pointer";

			
			fondoNegro.style.width = window.innerWidth+"px";
			fondoNegro.style.height = window.innerHeight+"px";
			fondoNegro.style.top = window.pageYOffset+"px";
			fondoNegro.style.left = window.pageXOffset+"px";

			
			const imagenMini = e.target.src;
			const archivo = imagenMini.substr(imagenMini.length-10,10);
			const imagenGrande = "imagenes/fondos/"+archivo;
			const imagen = document.createElement("img");
			imagen.id = "imagen";
			imagen.src = imagenGrande;
			imagen.style.display = "block";
			imagen.style.position = "absolute";
			
			
			imagen.addEventListener("load",function(){
				centrar(this);
				fondoNegro.appendChild(imagen);
			},false);
			
			imagen.addEventListener("click",(e)=>{
				if(fondoNegro){
					fondoNegro.parentNode.removeChild(fondoNegro);
				}
			}, false)
		} else {
			console.log("Lo sentimos, no seleccionaste una imagen");
		}
	},false);
}
const centrar = (imagen) => {
	const xx = (window.innerWidth - imagen.width) /2;
	const yy = (window.innerHeight - imagen.height) /2;
	imagen.style.top = yy+"px";
	imagen.style.left = xx+"px";
	return imagen;
}