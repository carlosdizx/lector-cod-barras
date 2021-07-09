<template>
  <div>
    <v-card-title>{{ titulo }}</v-card-title>
    <v-data-table
        :headers="columnas"
        :items="lista"
        :items-per-page="5"
        :footer-props="{
				showFirstLastPage: true,
				firstIcon: 'mdi-arrow-collapse-left',
				lastIcon: 'mdi-arrow-collapse-right',
				prevIcon: 'mdi-minus',
				nextIcon: 'mdi-plus',
				rowsPerPage:'8'
			}"
        class="elevation-1"
    />
  </div>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    titulo: '',
    columnas: [],
    lista: [],
  },
}
</script>

<style scoped>

</style>
