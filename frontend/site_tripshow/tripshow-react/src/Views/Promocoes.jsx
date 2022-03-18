import CardDestino from '../Components/card_destino';
import Jumbotron from '../Components/jumbotron';
import React, { Component } from 'react';
import DestinoService from "../services/DestinoService.js"

class Promocoes extends Component {
    constructor(props){

        super(props)

        this.state={
            destinos:[]
       
        }
        
    }
    componentDidMount() {
        DestinoService.getDestinos().then((response) => { this.setState({ destinos: response.data})
    })
    }

    detailsDestinos(id){
        this.props.history.push(`/Destinos-details/${id}`);
    }

    render() {
        return (
            <>
            <Jumbotron titulo="Promoções feitas para você!" subtitulo="Válidas apenas para os destinos selecionados."></Jumbotron>
            
            <main className="container container_compra">
            {
               
                this.state.destinos.map(
                    
                   destinos =>
                   destinos.desconto_destino == 0 || destinos.desconto_destino == null ?
                   <></>
                   :
                   <div>
                       
                       <a style={{marginLeft: "10px"}} onClick={ () => this.detailsDestinos(destinos.id_destino)}><CardDestino key={destinos.id_destino} Estado={destinos.estado_destino} Desconto={destinos.desconto_destino} Descontado={destinos.preco_destino}  Cidade={destinos.cidade_destino} Preco={(destinos.preco_destino) - (destinos.preco_destino * destinos.desconto_destino / 100)} img={destinos.imagemURL_destino} /></a>
                   </div>
                   


                )
                            

            }
            </main>
        </>
        );
    }
}

export default Promocoes;