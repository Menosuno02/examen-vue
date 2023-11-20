<template>
  <div v-if="cubos.length > 0">
    <h1>
      Cubos de la marca <span class="text-success">{{ marca }}</span>
    </h1>
    <hr class="border border-success opacity-100" />
    <div class="row">
      <div class="col-4 mb-3" v-for="cubo in cubos" :key="cubo">
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
  </div>
  <img v-else class="mx-auto d-block" src="../assets/images/loading.gif" />
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "CubosMarca",
  watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (nextVal != oldVal) this.getCubosMarca();
    },
  },
  data() {
    return {
      cubos: [],
      marca: "",
    };
  },
  mounted() {
    this.getCubosMarca();
  },
  methods: {
    getCubosMarca() {
      this.marca = this.$route.params.marca;
      service.getCubosMarca(this.marca).then((result) => {
        this.cubos = result;
      });
    },
  },
};
</script>
