import http from "./RotaAPI";
import axios from "axios";

class ConectarAPI {
  listar() {
    return http.get("/listar");
  }

  cadastrar(data) {
    console.log("Info: " + data[0].nome)
    return axios.post('http://localhost:8080/cadastrar',{
        nome: data[0].nome,
        descricao: data[0].descricao,
        preco: data[0].preco
    });

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