window.addEventListener("load",
	()=>{
		//Ejercicio 10
		// Variables 
		let timerId = null; 
		const images = ["./cascada.jpg", "./caribe.jpg", "./playa.jpg"]; // Rutas 
		const mainImage = document.getElementById("main-image");

		// Evento para manejar el clic en la imagen
		mainImage.addEventListener("click", (e) => {
			
			if (timerId !== null) return;

			
			timerId = setInterval(() => {
				// Seleccionar una imagen aleatoria
				const randomIndex = Math.floor(Math.random() * images.length);
				mainImage.src = images[randomIndex];
			}, 3000);
		});

		// Evento para manejar el clic fuera de la imagen
		document.addEventListener("click", (e) => {
			if (e.target === mainImage) return;

			if (timerId !== null) {
				clearInterval(timerId);
				timerId = null;
			}
		});
	})