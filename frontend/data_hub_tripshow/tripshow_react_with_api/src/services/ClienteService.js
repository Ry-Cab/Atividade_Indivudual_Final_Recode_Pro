import axios from "axios";

const CLIENTES_API_BASE_URL = "http://localhost:8080/clientes";

class ClienteService{

    //METÓDO GET
    getClientes(){
        return axios.get(CLIENTES_API_BASE_URL);
    }

    postClientes(cliente){
        return axios.post(CLIENTES_API_BASE_URL, cliente);
    }

    putClientes(cliente, id_cliente){
        return axios.put(CLIENTES_API_BASE_URL + '/' + id_cliente, cliente);
    }

    deleteClientes(id_cliente){
        return axios.delete(CLIENTES_API_BASE_URL + '/' + id_cliente)
    }

    getClientesById(id_cliente){
        return axios.get(CLIENTES_API_BASE_URL + '/' + id_cliente)
        
    }

}

export default new ClienteService();