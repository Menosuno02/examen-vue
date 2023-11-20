<template>
  <div v-if="perfil">
    <h1>Mi perfil (User {{ perfil.idUsuario }})</h1>
    <hr class="border border-success opacity-100" />
    <table class="table">
      <thead class="border-success">
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ perfil.nombre }}</td>
          <td>{{ perfil.email }}</td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-primary w-100 mt-3" to="/compras">
      Mostrar compras
    </router-link>
  </div>
  <img v-else class="mx-auto d-block" src="../assets/images/loading.gif" />
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "PerfilComponent",
  data() {
    return {
      perfil: null,
    };
  },
  mounted() {
    if (Global.tokenUser.length == 0) this.$router.push("/login");
    service.getPerfilUser().then((result) => {
      this.perfil = result;
    });
  },
};
</script>
