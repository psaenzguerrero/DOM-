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

		// document.addEventListener("mousemove", (e)=> {
		// 	const x = e.clientX;
		// 	const y = e.clientY;
		// 	//ESTO PARA LA POSICION
		// 	infoDiv.style.left= `${x}px`;
		// 	infoDiv.style.top = `${y}px`;
		// 	console.log(x , y);
		// });

		// 4.2

		// document.addEventListener("mousemove", (e) => {
		// 	const info = document.getElementById('info');
		// 	const x = e.clientX;
		// 	const y = e.clientY;

		// 	info.style.left = `${x - info.offsetWidth / 2}px`;
		// 	info.style.top = `${y - info.offsetHeight / 2}px`;
		//   });

		//Ejercicio 5

		// const info = document.getElementById("info");
		// let isMoving = false;

		// info.addEventListener("mousedown", (e) => {
		// if (e.button === 0) {
		// 	isMoving = true;
		// }
		// });

		// document.addEventListener("mouseup", (e) => {
		// if (e.button === 2) {
		// 	isMoving = false;
		// }
		// });

		// document.addEventListener("mousemove", (e) => {
		// if (isMoving) {
		// 	const x = e.clientX - info.offsetWidth / 2;
		// 	const y = e.clientY - info.offsetHeight / 2;

		// 	info.style.left = `${x}px`;
		// 	info.style.top = `${y}px`;
		// }
		// });

		// document.addEventListener("contextmenu", (e) => e.preventDefault());

		//Ejercicio 6
		// document.addEventListener("mousemove", (e) => {
		// 	const { clientWidth, clientHeight } = document.documentElement;
		// 	const x = e.clientX;
		// 	const y = e.clientY;

		// 	if (x < 50) {
		// 	  document.body.style.backgroundColor = "blue";
		// 	} else if (x > clientWidth - 50) {
		// 	  document.body.style.backgroundColor = "red";
		// 	} else {
		// 	  document.body.style.backgroundColor ="";
		// 	}

		// 	if (y < 50) {
		// 	  info.style.border = "2px solid green";
		// 	} else if (y > clientHeight - 50) {
		// 	  info.style.border = "2px solid aquamarine";
		// 	} else {
		// 	  info.style.border = "";
		// 	}
		//   });

		//Ejercicio 7
		// document.addEventListener("keydown", (e) => {
		// 	const info = document.getElementById('info');
		// 	const paso = 2;

		// 	const currentTop = parseInt(info.style.top || 0, 10);

		// 	const currentLeft = parseInt(info.style.left || 0, 10);

		// 	switch (e.key) {
		// 	  case 'ArrowUp':
		// 		info.style.top = `${currentTop - paso}px`;
		// 		break;
		// 	  case 'ArrowDown':
		// 		info.style.top = `${currentTop + paso}px`;
		// 		break;
		// 	  case 'ArrowLeft':
		// 		info.style.left = `${currentLeft - paso}px`;
		// 		break;
		// 	  case 'ArrowRight':
		// 		info.style.left = `${currentLeft + paso}px`;
		// 		break;
		// 	}
		//   });

		//Ejercicio 8
		//   setInterval(() => {
		// 	const info = document.getElementById("info");
		// 	const { clientWidth, clientHeight } = document.documentElement;

		// 	const randomX = Math.floor(Math.random() * (clientWidth - info.offsetWidth));
		// 	const randomY = Math.floor(Math.random() * (clientHeight - info.offsetHeight));

		// 	info.style.left = `${randomX}px`;
		// 	info.style.top = `${randomY}px`;
		//   }, 2000);

		//Ejercicio 11
		// const divInfo = document.getElementById("info");

		// // Variables 
		// let x = 0; 
		// let y = 0; 
		// let direction = "right"; 
		// const speed = 5; 

		// // Función para mover el div
		// function moveDiv() {
		// 	// Tamaño 
		// 	const windowWidth = document.documentElement.clientWidth;
		// 	const windowHeight = document.documentElement.clientHeight;

		// 	switch (direction) {
		// 		case "right":
		// 			x += speed;
		// 			if (x + divInfo.offsetWidth >= windowWidth) {
		// 				direction = "down"; 
		// 			}
		// 			break;

		// 		case "down":
		// 			y += speed;
		// 			if (y + divInfo.offsetHeight >= windowHeight) {
		// 				direction = "left"; 
		// 			}
		// 			break;

		// 		case "left":
		// 			x -= speed;
		// 			if (x <= 0) {
		// 				direction = "up"; 
		// 			}
		// 			break;

		// 		case "up":
		// 			y -= speed;
		// 			if (y <= 0) {
		// 				direction = "right"; 
		// 			}
		// 			break;
		// 	}

		// 	divInfo.style.left = `${x}px`;
		// 	divInfo.style.top = `${y}px`;

		// 	// ¿Continuar la animación?
		// 	requestAnimationFrame(moveDiv);
		// }

		// moveDiv();

		//Ejercicio 12
		// document.addEventListener("DOMContentLoaded", () => {
		// 	const divInfo = document.getElementById("info");
		// 	const TIEMPO_LIMITE = 10000;
		// 	let juegoTerminado = false;
		// 	let intervaloMovimiento;
		// 	let temporizadorJuego;

		// 	function iniciarMovimientoAleatorio() {
		// 		intervaloMovimiento = setInterval(() => {
		// 			if (juegoTerminado) return; 
		
					
		// 			const { clientWidth, clientHeight } = document.documentElement;
		// 			const posicionX = Math.floor(Math.random() * (clientWidth - divInfo.offsetWidth));
		// 			const posicionY = Math.floor(Math.random() * (clientHeight - divInfo.offsetHeight));

		// 			divInfo.style.left = `${posicionX}px`;
		// 			divInfo.style.top = `${posicionY}px`;
		// 		}, 2000);
		// 	}
		
	
		// 	divInfo.addEventListener("click", () => {
		// 		if (!juegoTerminado) {
		// 			juegoTerminado = true;
		// 			clearInterval(intervaloMovimiento);
		// 			clearTimeout(temporizadorJuego); 
		// 			alert("¡HA GANADO!");
		// 		}
		// 	});
		
		// 	// Función para iniciar el juego
		// 	function iniciarJuego() {
		// 		juegoTerminado = false;
		
				
		// 		temporizadorJuego = setTimeout(() => {
		// 			if (!juegoTerminado) {
		// 				juegoTerminado = true;
		// 				clearInterval(intervaloMovimiento); 
		// 				alert("HA PERDIDO");
		// 				divInfo.style.display ="none"; 
		// 			}
		// 		}, TIEMPO_LIMITE);
		
		// 		// Iniciar el movimiento aleatorio
		// 		iniciarMovimientoAleatorio();
		// 	}
		
		// 	// Iniciar el juego
		// 	iniciarJuego();
		// });

	})