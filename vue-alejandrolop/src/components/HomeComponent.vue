<template>
  <div>
    <h1>Bienvenido</h1>
    <hr class="border border-success opacity-100" />
    <div class="row" v-if="cubos.length > 0">
      <div class="col-3 mb-3" v-for="cubo in cubos" :key="cubo">
        <div class="card">
          <img class="card-img-top" :src="cubo.imagen" />
          <div class="card-body">
            <h5 class="card-title">{{ cubo.nombre }}</h5>
            <p class="card-text">{{ cubo.precio }}€</p>
            <router-link
              class="btn btn-primary w-100"
              :to="'/cubo/' + cubo.idCubo"
            >
              Detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <img v-else class="mx-auto d-block" src="../assets/images/loading.gif" />
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    service.getCubos().then((result) => {
      this.cubos = result;
    });
  },
};
</script>
