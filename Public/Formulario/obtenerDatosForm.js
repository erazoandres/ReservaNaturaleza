function obtenerDatos() {
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const ciudad = document.getElementById("ciudad");
  const direccion = document.getElementById("direccion");
  const comentarios = document.getElementById("comentarios");

  if (!nombre || !correo || !telefono || !ciudad || !direccion || !comentarios) {
    console.error("Uno o más campos no existen en el formulario.");
    alert("Uno o más campos no se encontraron en el formulario.");

    
    return;
  }

  // Si existen, procedemos a obtener sus valores
  const datos = {
    nombre: nombre.value,
    correo: correo.value,
    telefono: parseInt(telefono.value),
    ciudad: ciudad.value,
    direccion: direccion.value,
    comentarios: comentarios.value.trim()
  };

  // Validamos el teléfono antes de enviar
  if (isNaN(datos.telefono)) {
    alert("El número de teléfono debe ser un valor numérico.");
    return;
  }

  // Convertir y enviar datos
  enviarDatos(datos);
}

function enviarDatos(datos) {
  const datosJSON = JSON.stringify(datos);
  fetch('http://localhost:3000/guardar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: datosJSON
  })
  .then(response => {
    if (!response.ok) throw new Error('Error al guardar los datos');
    return response.json().catch(() => response.text());
  })
  .then(data => {
    alert('Datos guardados correctamente');
    console.log(data);
  })
  .catch(error => {
    console.error('Error al enviar los datos:', error);
    alert('Hubo un error al guardar los datos');
  });
}
