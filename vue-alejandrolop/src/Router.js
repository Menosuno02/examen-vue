import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesCubo from "./components/DetallesCubo.vue";
import CubosMarca from "./components/CubosMarca.vue";
import LoginComponent from "./components/LoginComponent.vue";
import LogoutComponent from "./components/LogoutComponent.vue";

const Routes = [
  { path: "/", component: HomeComponent },
  { path: "/cubo/:id", component: DetallesCubo },
  { path: "/cubos/:marca", component: CubosMarca },
  { path: "/login", component: LoginComponent },
  { path: "/logout", component: LogoutComponent },
];

const router = createRouter({ history: createWebHistory(), routes: Routes });
export default router;
