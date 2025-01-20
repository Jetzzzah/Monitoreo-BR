 // Función para obtener datos desde la API simulada
    async function fetchData() {
      try {
        const response = await fetch('./data.json'); // URL de la API o archivo local
        const data = await response.json();

        // Actualiza los datos en la página
        document.getElementById('posX').textContent = data.posX.toFixed(2);
        document.getElementById('posY').textContent = data.posY.toFixed(2);
        document.getElementById('angleZ').textContent = data.angleZ.toFixed(2);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }

    // Llama a fetchData cada 2 segundos
    setInterval(fetchData, 2000);
