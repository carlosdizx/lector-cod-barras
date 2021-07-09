<template>
  <div>
  <v-container>
    <div v-for="producto in productos" :v-key="producto.id" >
      <CodigoBarras :id="producto.codigo" :nombre="producto.nombre" :precioVenta="producto.precio" :codigo="producto.codigo"/>
    </div>
  </v-container>
    <div id="code39"></div>
  </div>
</template>
<script>

import CodigoBarras from "../components/general/CodigoBarras";
import {mapState} from 'vuex'
export default {
  name: "Escaneo",
  components:{
    CodigoBarras
  },
  computed:{
    ...mapState(['productos'])
  },
}
</script>

