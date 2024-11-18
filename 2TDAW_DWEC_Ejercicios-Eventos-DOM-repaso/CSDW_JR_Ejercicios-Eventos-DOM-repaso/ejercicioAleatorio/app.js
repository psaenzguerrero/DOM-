window.addEventListener("load",
	()=>{
		//Ejercicio 10
		// Variables 
		let timerId = null; 
		const images = ["./cascada.jpg", "./caribe.jpg", "./playa.jpg"]; // Rutas 
		const mainImage = document.getElementById("main-image");

		// Evento para manejar el clic en la imagen
		mainImage.addEventListener("click", (e) => {
			// Si el temporizador ya está activo, no hacemos nada
			if (timerId !== null) return;

			// Activar el temporizador que cambia la imagen cada 3 segundos
			timerId = setInterval(() => {
				// Seleccionar una imagen aleatoria
				const randomIndex = Math.floor(Math.random() * images.length);
				mainImage.src = images[randomIndex];
			}, 3000);
		});

		// Evento para manejar el clic fuera de la imagen
		document.addEventListener("click", (e) => {
			// Si el clic fue dentro de la imagen, no hacer nada
			if (e.target === mainImage) return;

			// Detener el temporizador si está activo
			if (timerId !== null) {
				clearInterval(timerId);
				timerId = null;
			}
		});
	})