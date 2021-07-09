<template>
  <div>
    <canvas :id="'barcode'+id+'-'+nombre"/>
  </div>
</template>

<script>
const JsBarcode = require('jsbarcode');

export default {
  name: "CodigoBarras",
  props:{
    id:null,
    nombre:String,
    precioVenta:null,
    codigo:null
  },
  methods:{
    convertirString(){
      return (this.nombre + '||' + this.precioVenta+'||'+this.codigo);
    }
  },
  mounted() {
     JsBarcode("#barcode"+this.id+'-'+this.nombre, this.convertirString(), {
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
