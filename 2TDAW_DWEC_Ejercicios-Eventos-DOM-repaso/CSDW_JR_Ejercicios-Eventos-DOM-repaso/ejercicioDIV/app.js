window.addEventListener("load",
	()=>{
		// document.addEventListener('click', (e)=> {
		// 	// Obtener las coordenadas del clic en horizontal y vertical juntado el evento (e) con el uso de clientX que nos da las coordenadas en horizontal y los mismo para las verticales con el clientY 
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		
		// 	// Seleccionar el div con id info para mostrar las coordenadas
		// 	const infoDiv = document.querySelector("#info");
		// 	infoDiv.textContent = `Posición del clic: X: ${x}, Y: ${y}`;
		// });

		// //El ejercicio 2 es igual al uno solo cambiar la accion que activa el evento 
		// document.addEventListener('mousemove', (e)=> {
			 
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		// 	const infoDiv = document.querySelector("#info");
		// 	infoDiv.textContent = `Posición del clic: X: ${x}, Y: ${y}`;
		// });
		//El ejercicio 3
		// document.addEventListener('click', (e)=> {
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		// 	const infoDiv  = document.createElement("div");
			
		// 	//ESTO PARA CREAR EL DIV
		// 	document.body.append(infoDiv);
			
		// 	//ESTO PARA PONERLE LA CLASE
		// 	infoDiv.id = "info";
		// 	//ESTO PARA EL TEXTO
		// 	infoDiv.append("DIV INFO");
		// 	//ESTO PARA LA POSICION
		// 	infoDiv.style.left= `${x}px`;
		// 	infoDiv.style.top = `${y}px`;
		// 	console.log(x , y);
		// });
		//El ejercicio 4 duda si vale
		document.addEventListener('mousemove', (e)=> {
			const x = e.clientX;
			const y = e.clientY;
			const infoDiv  = document.createElement("div");
			
			//ESTO PARA CREAR EL DIV
			document.body.append(infoDiv);
			
			//ESTO PARA PONERLE LA CLASE
			infoDiv.id = "info";
			//ESTO PARA EL TEXTO
			infoDiv.append("DIV INFO");
			//ESTO PARA LA POSICION
			infoDiv.style.left= `${x}px`;
			infoDiv.style.top = `${y}px`;
			console.log(x , y);
		});
	})