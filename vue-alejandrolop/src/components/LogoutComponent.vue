<template>
  <div>
    <h1>Sesión cerrada con éxito</h1>
  </div>
</template>

<script>
import Global from "@/Global";

export default {
  name: "LogoutComponent",
  mounted() {
    if (Global.tokenUser.length == 0) this.$router.push("/login"); // no puede desloguearse si no está logueado
    Global.tokenUser = "";
  },
};
</script>
