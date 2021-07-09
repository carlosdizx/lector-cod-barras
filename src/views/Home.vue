<template>
  <v-container>
    <hr>
    <v-btn @click="agregar">Agregar producto</v-btn>
    <router-link to="escaneo" v-slot="{ navigate }" custom>
      <v-btn role="link" @click="navigate">Ver codigos de barras</v-btn>
    </router-link>
    <hr>
    <Tabla titulo="Listado de productos" :columnas="columnas" :lista="productos" />
  </v-container>
</template>

<script>
  import Vue from 'vue'
  import Tabla from '../components/general/Tabla'
  import {mapActions, mapState} from 'vuex'
  export default Vue.extend({
    name: 'Home',
    components: {
      Tabla
    },
    data: () => ({
      iterable:1,
      columnas: [
        { text: 'Nombre', value: 'nombre' },
        { text: 'Precio Compra', value: 'precio' },
        { text: '||--', value: 'codigo' },
      ],
      lista :[]
    }),
    computed:{
      ...mapState(['productos'])
    },
    mounted() {
      this.lista = this.productos;
    },
    methods:{
      ...mapActions(['agregarProducto']),
      agregar(){
        this.agregarProducto({nombre:'Producto'+this.iterable,precio:parseInt(Math.random() * (10000 - 1000) + 1000),codigo:parseInt(Math.random() * (10 - 1) + 1)})
        this.iterable += 1
      }
    }
  })
</script>
