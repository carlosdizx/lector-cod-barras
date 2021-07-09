<template>
  <div>
  <v-container>
    <div v-for="producto in productos" :v-key="producto.id" >
      <CodigoBarras :id="producto.codigo" :nombre="producto.nombre" :precioVenta="producto.precioVenta"/>
    </div>
  </v-container>
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
  mounted() {
    console.log(JSON.stringify(this.productos))
  }
}
</script>

