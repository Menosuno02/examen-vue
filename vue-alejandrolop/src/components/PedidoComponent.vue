<template>
  <div v-if="cubos.length > 0">
    <h1>Realizar pedido</h1>
    <hr class="border border-success opacity-100" />
    <form @submit.prevent="comprarCubo()">
      <div class="mt-3">
        <label class="form-label">Elige un cubo</label>
        <select v-model="cubo" class="form-select">
          <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">
            {{ cubo.nombre }}
          </option>
        </select>
      </div>
      <button class="btn btn-primary w-100 mt-3">Comprar cubo</button>
    </form>
  </div>
  <img v-else class="mx-auto d-block" src="../assets/images/loading.gif" />
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "PedidoComponent",
  data() {
    return {
      cubos: [],
      cubo: 1,
    };
  },
  mounted() {
    if (Global.tokenUser.length == 0) this.$router.push("/login");
    service.getCubos().then((result) => {
      this.cubos = result;
    });
  },
  methods: {
    comprarCubo() {
      service.comprarCubo(this.cubo).then((result) => {
        console.log(result);
        this.$router.push("/compras");
      });
    },
  },
};
</script>
