import React, { Component } from 'react';
import DestinoService from '../../services/DestinoService';
import "../../layout/css/details.css"


class DetailsDestino extends Component {
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
        this.props.history.push("/destinos");
    }

    render() {
        return (
            <div>
               <div className="card col-md-6 offset-md-3">
                  <h2 className='text-center'>Detalhes</h2> 
                    <div className="card-body">
                    <div className="row">
                        <img className='img_details' src={this.state.destinos.imagemURL_destino}/>
                    </div> 
                    <div className="row">
                        <label><strong>Cidade:</strong></label>    
                        <span className='span_details'>
                            {this.state.destinos.cidade_destino}
                        </span>
                    </div> 
                    <div className="row">
                        <label><strong>Estado:</strong></label>    
                        <span className='span_details'>
                            {this.state.destinos.estado_destino}
                        </span>
                    </div>  
                    <div className="row">
                        <label><strong>Preço:</strong></label>    
                        <span className='span_details'>
                            {this.state.destinos.preco_destino}
                        </span>
                    </div>
                    <div className="row">
                        <label><strong>Desconto:</strong></label>    
                        <span className='span_details'>
                            {this.state.destinos.desconto_destino}
                        </span>
                    </div>
                    <button className="btn btn-primary" onClick={() => this.goBack()}>Voltar</button> 
                    </div>
                </div>
                  
            </div>
        )
    }
}

export default DetailsDestino;