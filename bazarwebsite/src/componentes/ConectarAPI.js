import http from "./RotaAPI";
import axios from "axios";

class ConectarAPI {
  listar() {
    return http.get("/listar");
  }

  listarPorId(id) {
    return http.get("/listarPorId/"+ id);
  }


  cadastrar(data) {
    console.log("Info: " + data[0].nome)
    return axios.post('http://localhost:8090/cadastrar',{
        nome: data[0].nome,
        descricao: data[0].descricao,
        preco: data[0].preco
    });
  }

  atualizar(id, data) {
    console.log("data: " + data)
    axios.put(`http://localhost:8090/atualizar`,{
      id: id,
      nome: data[0],
      preco: data[1],
      descricao: data[2]
    });

    //return http.put(`/atualizar/${id}`, data);
  }

  deletar(id) {
    axios.delete('http://localhost:8090/deletar',{
      id: id
  });
    return http.delete(`/deletar/${id}`);
  }

}

export default new ConectarAPI();