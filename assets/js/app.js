const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('.name'); // se quita el signo de $ a las variables y se corrige a referencia por clase
const b = document.querySelector('.blog'); // se corrige a referencia por clase
const l = document.querySelector('.location');

async function displayUser(username) { // se añade el async para que el await funcione
  n.textContent = 'cargando...'; // se elimina $
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // se crea variable data y se genera una respuesta json
  n.textContent = `${data.name}`; // Se corrigen comillas para que lea las variables, se elimina $
  b.textContent = `${data.blog}`; // Se corrigen comillas para que lea las variables, se elimina $
  l.textContent = `${data.location}`; // Se corrigen comillas para que lea las variables, se elimina $
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}` // se corrige la variable n
}

displayUser('stolinski').catch(handleError);