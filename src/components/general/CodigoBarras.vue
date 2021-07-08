<template>
  <svg id="barcode"></svg>
</template>

<script>
const JsBarcode = require('jsbarcode');

export default {
  name: "CodigoBarras",
  props:{
    nombre:String,
    precioVenta:null
  },
  methods:{
    convertirString(){
      return this.nombre+'||'+this.precioVenta
    }
  },
  mounted() {
    JsBarcode("#barcode", this.convertirString(), {
      text: this.nombre,
      background: "#FFF",
      lineColor: "#000",
      font: "fantasy",
    });
  }
}
</script>

<style scoped>

</style>
