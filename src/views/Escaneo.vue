<template>
  <div>
  <v-container>
    <CodigoBarras nombre="Cafe con leche" precioVenta="8000"/>
  </v-container>
  </div>
</template>
<script>
import CodigoBarras from "../components/general/CodigoBarras";
export default {
  name: "Escaneo",
  components:{
    CodigoBarras
  }
}
</script>

