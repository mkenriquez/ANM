const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
const topics = document.querySelectorAll('#topics .topic');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let topicActiva = null;

preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){

			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}


		preguntas.forEach((elemento) => {

			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});



topics.forEach((topic) => {
	topic.addEventListener('click', (e) => {
		topics.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		topicActiva = topic.dataset.topic;

		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.topic ===topicActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});