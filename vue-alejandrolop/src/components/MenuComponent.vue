<template>
  <nav
    v-if="marcas.length > 0"
    class="navbar navbar-expand-md bg-success"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <span class="navbar-brand">Examen Vue</span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Cubos</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/cubos/' + marca">
                  {{ marca }}
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seguridad
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/login">
                  Iniciar sesión
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/register">
                  Registrarse
                </router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/logout">
                  Cerrar sesión
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
      tokenUser: "",
    };
  },
  mounted() {
    service.getMarcas().then((result) => {
      this.marcas = result;
    });
  },
};
</script>
