import axios from "axios";

const PASSAGENS_API_BASE_URL = "http://localhost:8080/passagens";

class PassagemService{

    //METÓDO GET
    getPassagem(){
        return axios.get(PASSAGENS_API_BASE_URL);
    }

    postPassagens(passagem){
        return axios.post(PASSAGENS_API_BASE_URL, passagem);
    }

    putPassagens(passagem, id_passagem){
        return axios.put(PASSAGENS_API_BASE_URL + '/' + id_passagem, passagem);
    }

    deletePassagens(id_passagem){
        return axios.delete(PASSAGENS_API_BASE_URL + '/' + id_passagem)
    }

    getPassagemById(id_passagem){
        return axios.get(PASSAGENS_API_BASE_URL + '/' + id_passagem)
        
    }

}

export default new PassagemService();