<template>
  <div v-if="compras">
    <h1>Tus compras</h1>
    <hr class="border border-success opacity-100" />
    <table class="table">
      <thead>
        <tr>
          <th>Núm. Pedido</th>
          <th>ID Cubo</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido of compras" :key="pedido">
          <td>{{ pedido.idPedido }}</td>
          <td>{{ pedido.idCubo }}</td>
          <td>{{ pedido.fechaPedido }}</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-6">
        <router-link class="btn btn-primary w-100 mt-3" to="/perfil">
          Volver al perfil
        </router-link>
      </div>
      <div class="col-6">
        <router-link class="btn btn-primary w-100 mt-3" to="/pedido">
          Realizar pedido
        </router-link>
      </div>
    </div>
  </div>
  <img v-else class="mx-auto d-block" src="../assets/images/loading.gif" />
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "ComprasUser",
  data() {
    return {
      compras: [],
    };
  },
  mounted() {
    if (Global.tokenUser.length == 0) this.$router.push("/");
    service.getCompras().then((result) => {
      this.compras = result;
    });
  },
};
</script>
