<template>
  <svg id="barcode"></svg>
</template>
<script>
const JsBarcode = require('jsbarcode');
const { Canvas } = require("canvas");

export default {
  name: "Escaneo",
  data:()=>({
    producto:{
      id: 10,
      nombre:'Cafe con leche',
      precio:5000
    }
  }),
  methods:{
    convertirString(){
      return this.producto.nombre+'||'+this.producto.precio
    }
  },
  mounted() {
    console.log(JSON.stringify(this.producto))
    JsBarcode("#barcode", this.convertirString(), {
      text: this.producto.nombre,
      background: "#FFF",
      lineColor: "#000",
      font: "fantasy",
    });
  }
}
</script>

