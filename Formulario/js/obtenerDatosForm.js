document.addEventListener('DOMContentLoaded', function() {
  // Asignar el evento de 'submit' al formulario
  document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el envío del formulario por defecto
    obtenerDatos();  // Llamar a tu función de envío personalizada
  });
});

function obtenerDatos() {
  // Recoger los valores del formulario
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let ciudad = document.getElementById("ciudad").value;
  let direccion = document.getElementById("direccion").value;
  let comentarios = document.getElementById("comentarios").value.trim();
  
  // Crear el objeto JSON con JS.
  let datos = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      ciudad: ciudad,
      direccion: direccion,
      comentarios: comentarios
  };

  // Convertir el objeto a una cadena JSON
  let datosJSON = JSON.stringify(datos);

  fetch('http://localhost:3000/guardar', {
    method: 'POST', // Usamos el método POST
    headers: {
      'Content-Type': 'application/json' // Indicamos que estamos enviando JSON
    },
    body: datosJSON // Enviamos el objeto JSON
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al guardar los datos');
    }
  
    // Verificar si la respuesta es JSON antes de intentar parsearla
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      return response.json(); // Convertir la respuesta a JSON si es el tipo esperado
    } else {
      return response.text(); // Si no es JSON, tratamos la respuesta como texto
    }
  })
  .then(data => {
    if (typeof data === 'string') {
      console.log(data); // Si la respuesta es texto plano
      alert('Datos guardados correctamente');
    } else {
      console.log(data); // Si la respuesta es un objeto JSON
      alert('Datos guardados correctamente');
    }
  })
  .catch(error => {
    console.error('Error al enviar los datos:', error);
    alert('Hubo un error al guardar los datos');
  });
}