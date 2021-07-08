<template>
  <div>
  <v-container>
    <v-btn @click="agregarProducto">Agregar</v-btn>
    <div v-for="producto in productos" :v-key="producto.id" >
      {{producto.id}}
      <br>
      <CodigoBarras :id="producto.id" :nombre="producto.nombre" :precioVenta="producto.precioVenta"/>
    </div>
  </v-container>
  </div>
</template>
<script>
import CodigoBarras from "../components/general/CodigoBarras";
export default {
  name: "Escaneo",
  data:() => ({
    productos:[
      {id:1,nombre:'Cafe',precioVenta:1000},
      {id:2,nombre:'Azucar',precioVenta:2000},
      {id:3,nombre:'Sal',precioVenta:3000},
      {id:4,nombre:'Panela',precioVenta:4000},
    ]
  }),
  components:{
    CodigoBarras
  },
  methods:{
    agregarProducto(){
      this.productos.push({id:10,nombre:'xd',precioVenta:4000})
    }
  }
}
</script>

