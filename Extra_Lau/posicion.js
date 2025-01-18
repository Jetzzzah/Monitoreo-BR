 // Función para simular datos de posición
 function simulateData() {
    // Generar valores aleatorios para las coordenadas X, Y, Z
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const z = Math.random() * 100;

    // Mostrar los valores simulados en la página
    document.getElementById('position').innerText = `(${x.toFixed(2)}x, ${y.toFixed(2)}y, ${z.toFixed(2)}z)`;

    // Agregar un log con la nueva posición
    addLog(`Nueva posición: (${x.toFixed(2)}x, ${y.toFixed(2)}y, ${z.toFixed(2)}z)`);
  }

  // Función para agregar mensajes al log
  function addLog(message) {
    // Seleccionar el contenedor de logs
    const logs = document.getElementById('logs');

    // Crear un nuevo elemento de lista
    const logItem = document.createElement('li');
    logItem.textContent = message; // Asignar el mensaje al nuevo elemento

    // Agregar el nuevo log a la lista
    logs.appendChild(logItem);

    // Desplazar automáticamente el log hacia el final
    logs.scrollTop = logs.scrollHeight;
  }

  // Simular conexión al sistema
  document.getElementById('status').innerText = 'Conectado'; // Cambiar el estado a conectado

  // Iniciar la simulación de datos cada 2 segundos
  setInterval(simulateData, 3000);