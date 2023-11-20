<template>
  <div v-if="cubo">
    <h1>{{ cubo.nombre }}</h1>
    <hr class="border border-success opacity-100" />
    <div class="card">
      <img class="card-img-top w-50 mx-auto" :src="cubo.imagen" />
      <div class="card-body">
        <table class="table">
          <thead class="border-success">
            <tr>
              <th>Marca y modelo</th>
              <th>Valoración</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ cubo.marca }} {{ cubo.modelo }}</td>
              <td>{{ cubo.valoracion }}</td>
              <td>{{ cubo.precio }}€</td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn btn-warning w-100 mt-3" to="/">
          Volver
        </router-link>
      </div>
    </div>
    <div v-if="comentarios.length > 0" class="mt-5">
      <h4>Comentarios</h4>
      <hr class="border border-success opacity-100" />
      <table class="table">
        <tbody>
          <tr v-for="coment in comentarios" :key="coment">
            <td>Usuario {{ coment.idUsuario }}</td>
            <td>{{ coment.comentario }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <img v-else class="mx-auto d-block" src="../assets/images/loading.gif" />
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "DetallesCubo",
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) this.getDetalles();
    },
  },
  data() {
    return {
      cubo: null,
      comentarios: [],
    };
  },
  mounted() {
    this.getDetalles();
  },
  methods: {
    getDetalles() {
      let idCubo = this.$route.params.id;
      service.getCubo(idCubo).then((result) => {
        this.cubo = result;
      });
      service.getComentariosCubo(idCubo).then((result) => {
        this.comentarios = result;
      });
    },
  },
};
</script>
