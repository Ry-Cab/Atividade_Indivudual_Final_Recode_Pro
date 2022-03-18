
import React, { Component } from 'react';
import DestinoService from "../services/DestinoService";
import "../Layout/css/details_destino.css"

class DestinoDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            destinos: {}
        }
    }

    componentDidMount(){
        DestinoService.getDestinosById(this.state.id).then( res => {  
         this.setState({destinos: res.data});
         })
    }

    goBack(){
        this.props.history.push("/Destinos")
    }

    render() {
        return (
            <div className='container'>
                <div className="row card-0">
                    <div className="col ">
                    <img className='img_destino' src={this.state.destinos.imagemURL_destino}/>
                    </div>
                    <div className="col card-2">
                   
                            <h1>{this.state.destinos.cidade_destino}</h1>
                        <p>
                         <strong>{this.state.destinos.estado_destino}</strong>
                        </p>
                        <p>
                            Ida e volta
                        </p>
                        <p>Voo direto | bagagem de mão</p>

                        <p>
                            {
                                this.state.destinos.desconto_destino == 0 || this.state.destinos.desconto_destino == null ?
                                <p>R${this.state.destinos.preco_destino}<br /></p>

                                :
                                <p>R${(this.state.destinos.preco_destino) - (this.state.destinos.preco_destino * this.state.destinos.desconto_destino / 100)}</p>

                            }
                            
                            <small>Até 12x no cartão</small>
                        </p>
                       
                        <button className='btn'>Comprar</button>
                        <button onClick={() => this.goBack()} className="btn">Voltar</button> 
                    </div>
                </div>
  
               
                    
                    
                </div>
                  
           
        );
    }
}



export default DestinoDetails;

