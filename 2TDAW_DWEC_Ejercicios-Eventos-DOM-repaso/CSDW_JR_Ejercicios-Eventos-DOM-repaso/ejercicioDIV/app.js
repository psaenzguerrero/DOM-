window.addEventListener("load",
	() => {
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

		// const infoDiv  = document.createElement("div");	
		// //ESTO PARA CREAR EL DIV
		// document.body.append(infoDiv);	
		// //ESTO PARA PONERLE LA CLASE
		// infoDiv.id = "info";
		// //ESTO PARA EL TEXTO
		// infoDiv.append("DIV INFO");

		// document.addEventListener('mousemove', (e)=> {
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		// 	//ESTO PARA LA POSICION
		// 	infoDiv.style.left= `${x}px`;
		// 	infoDiv.style.top = `${y}px`;
		// 	console.log(x , y);
		// });

		// 4.2

		// document.addEventListener('mousemove', (e) => {
		// 	const info = document.getElementById('info');
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		  
		// 	info.style.left = `${x - info.offsetWidth / 2}px`;
		// 	info.style.top = `${y - info.offsetHeight / 2}px`;
		//   });

		//Ejercicio 5

		// const info = document.getElementById('info');
		// let isMoving = false;

		// info.addEventListener('mousedown', (e) => {
		// if (e.button === 0) {
		// 	isMoving = true;
		// }
		// });

		// document.addEventListener('mouseup', (e) => {
		// if (e.button === 2) {
		// 	isMoving = false;
		// }
		// });

		// document.addEventListener('mousemove', (e) => {
		// if (isMoving) {
		// 	const x = e.clientX - info.offsetWidth / 2;
		// 	const y = e.clientY - info.offsetHeight / 2;

		// 	info.style.left = `${x}px`;
		// 	info.style.top = `${y}px`;
		// }
		// });

		// document.addEventListener('contextmenu', (e) => e.preventDefault());

		//Ejercicio 6
		// document.addEventListener('mousemove', (e) => {
		// 	const { clientWidth, clientHeight } = document.documentElement;
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		  
		// 	if (x < 50) {
		// 	  document.body.style.backgroundColor = 'blue';
		// 	} else if (x > clientWidth - 50) {
		// 	  document.body.style.backgroundColor = 'red';
		// 	} else {
		// 	  document.body.style.backgroundColor = '';
		// 	}
		  
		// 	if (y < 50) {
		// 	  info.style.border = '2px solid green';
		// 	} else if (y > clientHeight - 50) {
		// 	  info.style.border = '2px solid aquamarine';
		// 	} else {
		// 	  info.style.border = '';
		// 	}
		//   });
		
	})