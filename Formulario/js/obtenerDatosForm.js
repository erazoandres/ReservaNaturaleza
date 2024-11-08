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

  // Enviar los datos al backend usando fetch
  fetch('http://localhost:3000/guardar', {
    method: 'POST', // Usamos el método POST
    headers: {
      'Content-Type': 'application/json' // Indicamos que estamos enviando JSON
    },
    body: datosJSON // Enviamos el objeto JSON
  })
  .then(response => {
    if (response.ok) {
      return response.json(); // Si la respuesta es exitosa, la convertimos a JSON
    }
    throw new Error('Error al guardar los datos');
  })
  .then(data => {
    alert('Datos guardados correctamente');
    console.log(data); // Puedes mostrar el mensaje o datos que el servidor devuelva
  })
  .catch(error => {
    console.error('Error al enviar los datos:', error);
    alert('Hubo un error al guardar los datos');
  });
}