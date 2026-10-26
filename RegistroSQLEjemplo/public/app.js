
const formulario = document.getElementById('formRegistro');
const mensaje    = document.getElementById('mensaje');

formulario.addEventListener('submit', async (evento) => {

  evento.preventDefault();

  const nombre   = document.getElementById('nombre').value.trim();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    const respuesta = await fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, password })
    });

    const datos = await respuesta.json();

    if (datos.ok) {
      mensaje.textContent = '✅ ' + datos.mensaje + ' (ID: ' + datos.id + ')';
      mensaje.style.color = 'green';
      formulario.reset();
    } else {
      mensaje.textContent = '⚠️ ' + datos.mensaje;
      mensaje.style.color = 'orange';
    }

  } catch (error) {
    mensaje.textContent = '❌ No se pudo conectar con el servidor';
    mensaje.style.color = 'red';
    console.error(error);
  }
});