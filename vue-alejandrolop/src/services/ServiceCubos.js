import Global from "@/Global";
import axios from "axios";

export default class ServiceCubos {
  getCubos() {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Cubos";
      axios.get(url + request).then((response) => {
        resolve(response.data); // CUBOS
      });
    });
  }

  getCubo(idCubo) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Cubos/" + parseInt(idCubo);
      axios.get(url + request).then((response) => {
        resolve(response.data); // CUBO
      });
    });
  }

  getComentariosCubo(idCubo) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request =
        "api/ComentariosCubo/GetComentariosCubo/" + parseInt(idCubo);
      axios.get(url + request).then((response) => {
        resolve(response.data); // COMENTARIOS DE UN CUBO
      });
    });
  }

  getMarcas() {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Cubos/Marcas";
      axios.get(url + request).then((response) => {
        resolve(response.data); // MARCAS
      });
    });
  }

  getCubosMarca(marca) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Cubos/CubosMarca/" + marca;
      axios.get(url + request).then((response) => {
        resolve(response.data); //CUBOS DE UNA MARCA
      });
    });
  }

  loginUser(email, password) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Manage/Login";
      let user = {
        email: email,
        password: password,
      };
      let header = { "Content-Type": "application/json" };
      axios.post(url + request, user, { headers: header }).then((response) => {
        resolve(response.data); // TOKEN
      });
    });
  }

  registerUser(user) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Manage/RegistroUsuario";
      let header = { "Content-Type": "application/json" };
      axios.post(url + request, user, { headers: header }).then((response) => {
        resolve(response);
      });
    });
  }

  getPerfilUser() {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Manage/PerfilUsuario";
      let header = { Authorization: "bearer " + Global.tokenUser };
      axios.get(url + request, { headers: header }).then((response) => {
        resolve(response.data); // PERFIL DEL USUARIO
      });
    });
  }

  getCompras() {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Compra/ComprasUsuario";
      let header = { Authorization: "bearer " + Global.tokenUser };
      axios.get(url + request, { headers: header }).then((response) => {
        resolve(response.data); // PEDIDOS/COMPRAS DE UN USUARIO
      });
    });
  }

  comprarCubo(cubo) {
    return new Promise((resolve) => {
      let url = Global.urlApi;
      let request = "api/Compra/InsertarPedido/" + parseInt(cubo);
      let header = { Authorization: "bearer " + Global.tokenUser };
      axios.post(url + request, null, { headers: header }).then((response) => {
        resolve(response);
      });
    });
  }
}
