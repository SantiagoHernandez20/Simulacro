function getIpAddress() {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
      // Utiliza una API pública para obtener la dirección IP del usuario
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          const ipAddress = data.ip;
          console.log('Esta es su IP:', data.ip)
          // Procedimiento para asociar la dirección IP con el correo electrónico
          // En este ejemplo, se asume que tienes una función que devuelve el correo electrónico asociado a una dirección IP
          //const email = getEmailFromIp(ipAddress);
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

// Definición de la función para obtener la dirección IP
/*function getIpAddress() {
    // Utiliza una API pública para obtener la dirección IP del usuario
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            console.log('Tu ip publica es:', data.ip);
            // Aquí puedes realizar cualquier operación adicional con la dirección IP obtenida
        })
        .catch(error => {
            console.error('Error al obtener la IP:', error);
        });
}

// Función de inicialización que se ejecuta automáticamente al cargar el script
function init() {
    // Llama a la función para obtener la dirección IP
    getIpAddress();
}

// Llama a la función de inicialización
init();*/
