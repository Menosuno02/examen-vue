<template>
  <div>
    <h1>Iniciar sesión</h1>
    <hr class="border border-success opacity-100" />
    <form @submit.prevent="loginUser">
      <div class="mt-3">
        <label class="form-label">Email</label>
        <input type="text" v-model="email" class="form-control" />
      </div>
      <div class="mt-3">
        <label class="form-label">Contraseña</label>
        <input type="text" v-model="password" class="form-control" />
      </div>
      <button @click.prevent="loginUser" class="btn btn-primary w-100 mt-3">
        Iniciar sesión
      </button>
    </form>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    if (Global.tokenUser.length != 0) this.$router.push("/");
  },
  methods: {
    loginUser() {
      service.loginUser(this.email, this.password).then((result) => {
        Global.tokenUser = result.response;
        this.$router.push("/");
      });
    },
  },
};
</script>
