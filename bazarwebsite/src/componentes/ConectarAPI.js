import http from "./RotaAPI";

class ConectarAPI {
  listar() {
    return http.get("/listar");
  }

  cadastrar(data) {
    return http.post("/cadastrar", data);
  }

  atualizar(id, data) {
    return http.put(`/atualizar/${id}`, data);
  }

  deletar(id) {
    return http.delete(`/deletar/${id}`);
  }

}

export default new ConectarAPI();