<template>
  <div>
    <svg :id="'barcode'+id"/>
    <canvas :id="'code39'+id"/>
  </div>
</template>

<script>
import barcodejs from  '../../assets/barcode'
const JsBarcode = require('jsbarcode');
//const barcode = require('barcode');

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
     JsBarcode("#barcode"+this.id, this.convertirString(), {
      text: this.nombre,
      background: "#FFF",
      lineColor: "#000",
      font: "fantasy",
    });
    /**
    const code39 = barcode('code39', {
      data: "it works",
      width: 400,
      height: 100,
    });
    code39.getStream(function (err, readStream) {
      if (err) throw err;

      // 'readStream' is an instance of ReadableStream
      readStream.pipe(barcodejs);
    });
     */
  }
}
</script>

<style scoped>

</style>
