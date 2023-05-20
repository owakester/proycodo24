const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      datos: [] // Inicializar la propiedad 'datos' como un arreglo vacío
    }
  },
  mounted() {
    this.obtenerDatosDeServidor();
  },
  methods: {
    async obtenerDatosDeServidor() {
      try {
        const respuesta = await fetch('https://script.google.com/macros/s/AKfycbxn20MAs64ZsNLiAvXljnv5ZzYexE-GDc7RhV6U1E8SQWkZRSlLaoRpe7RWv8WjW7ek4Q/exec');
        const datos = await respuesta.json();
        console.log(datos);
        this.datos = datos; // Asignar los datos obtenidos a la propiedad 'datos'
      } catch(error) {
        console.error('Error al obtener los datos:', error);
      }
    }
  }
}).mount('#app');
