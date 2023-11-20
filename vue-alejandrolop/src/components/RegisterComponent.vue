<template>
  <div>
    <h1>Registrar usuario</h1>
    <hr class="border border-success opacity-100" />
    <form @submit.prevent="registerUser()">
      <div class="mt-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" v-model="user.nombre" />
      </div>
      <div class="mt-3">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" v-model="user.email" />
      </div>
      <div class="mt-3">
        <label class="form-label">Contraseña</label>
        <input type="text" class="form-control" v-model="user.pass" />
      </div>
      <button class="btn btn-primary w-100 mt-3">Registrarse</button>
    </form>
  </div>
</template>

<script>
import Global from "@/Global";
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: " RegisterComponent",
  data() {
    return {
      user: {
        idUsuario: 0,
        nombre: "",
        email: "",
        pass: "",
      },
    };
  },
  mounted() {
    if (Global.tokenUser.length != 0) this.$router.push("/perfil"); // no puede registrarse si ya está logueado
  },
  methods: {
    registerUser() {
      service.registerUser(this.user).then((result) => {
        console.log(result);
        this.$router.push("/login");
      });
    },
  },
};
</script>
