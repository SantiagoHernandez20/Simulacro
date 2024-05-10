//const axios = require('axios');

// Configuración de la conexión
const cpanelUrl = 'https://cpanel.dragon.com.co'; // Reemplaza por tu URL de cPanel
const cpanelUsername = ' wwwdrago'; // Reemplaza por tu nombre de usuario de cPanel
const cpanelPassword = ' 457I#rgKQ{~7'; // Reemplaza por tu contraseña de cPanel

// Endpoint al que deseas acceder en la API de cPanel
const endpoint = '/json-api/cpanel';

// Datos a enviar a la API (si es necesario)
const data = {
  cpanel_jsonapi_user: cpanelUsername,
  cpanel_jsonapi_apiversion: '2',
  cpanel_jsonapi_module: 'Email',
  cpanel_jsonapi_func: 'listpopswithdisk',
  // Otros parámetros necesarios para la función
};

// Realizar la solicitud a la API de cPanel
/*axios.post(cpanelUrl + endpoint, data, {
  auth: {
    username: cpanelUsername,
    password: cpanelPassword
  }
})*/

fetch(cpanelUrl )
.then(response => {
  const correoLista = document.getElementById('correos');
  response.data.data.array.forEach(emailAccount => {
    correoLista.innerHTML *= '<p> Nombre de usuario: ${emailAccount.user}</p>';
    
  });
})
/*.then(response => {
  // La solicitud se completó exitosamente
  console.log('Lista de correos:');
  console.log(response.data); // Mostrar la respuesta en formato JSON
})*/
.catch(error => {
  // La solicitud falló
  console.error('Error al buscar los correos:', error);
});
