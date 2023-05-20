const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  if (nombre.value.trim() === '') {
    alert('Por favor, ingresa tu nombre completo');
    nombre.focus(); 
  } else if (email.value.trim() === '') {
    alert('Por favor, ingresa tu correo electrónico');
    email.focus(); 
  } else if (mensaje.value.trim() === '') {
    alert('Por favor, ingresa tu mensaje');
    mensaje.focus();
  } else {

    form.submit();
  }
});


