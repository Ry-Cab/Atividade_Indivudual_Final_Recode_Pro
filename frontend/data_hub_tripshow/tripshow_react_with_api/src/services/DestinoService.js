import axios from "axios";

const DESTINOS_API_BASE_URL = "http://localhost:8080/destinos";

class DestinoService{

    //METÓDO GET
    getDestinos(){
        return axios.get(DESTINOS_API_BASE_URL);
    }

    postDestinos(destino){
        return axios.post(DESTINOS_API_BASE_URL, destino);
    }

    putDestinos(destino, id_destino){
        return axios.put(DESTINOS_API_BASE_URL + '/' + id_destino, destino);
    }

    deleteDestinos(id_destino){
        return axios.delete(DESTINOS_API_BASE_URL + '/' + id_destino)
    }

    getDestinosById(id_destino){
        return axios.get(DESTINOS_API_BASE_URL + '/' + id_destino)
        
    }

}

export default new DestinoService();