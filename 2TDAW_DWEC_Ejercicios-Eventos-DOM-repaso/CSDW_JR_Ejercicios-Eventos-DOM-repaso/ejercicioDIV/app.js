window.addEventListener("load",
	()=>{
		document.addEventListener('click', function(e) {
			// Obtener las coordenadas del clic
			const x = event.clientX;
			const y = event.clientY;
		
			// Seleccionar el div con id "info" y mostrar las coordenadas
			const infoDiv = document.querySelector('#info');
			infoDiv.textContent = `Posición del clic: X: ${x}, Y: ${y}`;
		});
	})