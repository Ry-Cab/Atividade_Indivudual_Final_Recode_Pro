import CardDestino from  '../Components/card_destino.jsx';
import CardDestinoCss from '../Layout/css/CardDestino.css';
import Jumbotron from '../Components/jumbotron.jsx';
import React, { Component } from 'react';
import DestinoService from "../services/DestinoService.js"

class Destinos extends Component {
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

        <Jumbotron titulo="Destinos para você!" subtitulo="Vem de Trip Show!"></Jumbotron>
        

        <link rel="stylesheet" href={CardDestinoCss}></link>
        <main className="container container_compra">
            {
                this.state.destinos.map(
                   destinos =>
                   destinos.desconto_destino == 0 || destinos.desconto_destino == null ?
                   <div>
                       
                       <a style={{marginLeft: "10px"}} onClick={ () => this.detailsDestinos(destinos.id_destino)}><CardDestino key={destinos.id_destino} Estado={destinos.estado_destino} Cidade={destinos.cidade_destino} Preco={destinos.preco_destino} img={destinos.imagemURL_destino} /></a>
                   </div>
                   :
                   <></>

                )
                            

            }
            
        </main>
        </>
        );
    }
}

export default Destinos;