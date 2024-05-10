function getIpAddress() {
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Utiliza una API pública para obtener la dirección IP del usuario
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        console.log('Prueba II', data.ip)
        // Procedimiento para asociar la dirección IP con el correo electrónico
        // En este ejemplo, se asume que tienes una función que devuelve el correo electrónico asociado a una dirección IP
        const email = getEmailFromIp(ipAddress);
        // Mostrar el correo electrónico en un elemento HTML
        //document.getElementById('alert').innerHTML = `El correo electrónico asociado a esta dirección IP es: ${email}`;
        document.getElementById("alert").innerHTML = `El correo electrónico asociado a esta dirección IP es`;
        document.getElementById("alert").style.display = "block";

      })
      .catch(error => {
        console.error('Error al obtener la IP:', error);
      });
      
  });


}
getIpAddress();


/*function init() {
  // Llama a la función para obtener la dirección IP
  getIpAddress();
}*/

function getEmailFromIp(ipAddress) {
  // Implementa aquí la lógica para asociar la dirección IP con el correo electrónico
  // Por ejemplo, puedes consultar una base de datos o un servicio de terceros
  // En este ejemplo, se devuelve un correo electrónico aleatorio
  return 'example@example.com';
}


/*
// Función para asociar la dirección IP con el correo electrónico
function getEmailFromIp(ipAddress) {
  // Implementa aquí la lógica para asociar la dirección IP con el correo electrónico
  // Por ejemplo, puedes consultar una base de datos o un servicio de terceros
  // En este ejemplo, se devuelve un correo electrónico aleatorio
  return 'example@example.com';
}
 
// Agregar un evento de click a la dirección
document.getElementById('direction').addEventListener('click', getIpAddress);
 
 

// Simulación de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Ejemplo de código para obtener la IP del usuario
  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    // Aquí tienes la IP del usuario
    const userIP = data.ip;
    // Ahora puedes guardar esta IP en tu sistema
  })
  .catch(error => {
    console.error('Error al obtener la IP:', error);
  });

  // Aquí puedes realizar la validación de las credenciales simuladas
  // Por simplicidad, este ejemplo solo muestra un mensaje de alerta

  document.getElementById("alert").textContent = 'Inicio de sesión fallido. Esta página es solo una simulación.${UserIp}';
  document.getElementById("alert").style.display = "block";

  // Aquí registrarías la información, como la dirección IP y el correo electrónico
  // Puedes enviar esta información a tu servidor o a servicios de análisis
  // Por ejemplo:
  // fetch('https://tu-servidor.com/registrar', {
  //   method: 'POST',
  //   body: JSON.stringify({ email: email }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });
});*/