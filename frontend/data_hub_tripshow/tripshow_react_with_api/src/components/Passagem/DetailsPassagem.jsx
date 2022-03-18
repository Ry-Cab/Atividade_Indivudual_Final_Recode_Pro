import React, { Component } from 'react';
import DestinoService from '../../services/DestinoService';
import PassagemService from '../../services/PassagemService';
import "../../layout/css/details.css"

class DetailsPassagem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            passagens: {}
        }
    }

    componentDidMount(){
    PassagemService.getPassagemById(this.state.id).then( res => {  
        this.setState({passagens: res.data});
        console.log(res.data)
        })
        
    }

    goBack(){
        this.props.history.push("/passagens");
    }

    render() {
        return (
            <div>
               <div className="card col-md-6 offset-md-3">
                  <h2 className='text-center'>Detalhes</h2> 
                    <div className="card-body">
                    <div className="row">
                        <label><strong>Data Compra</strong></label>    
                        <p>
                        {this.state.passagens.data_compra}
                        </p>
                    </div> 
                    <div className="row">
                        <label><strong>Cliente ID</strong></label>    
                        <p>
                        {/*this.state.passagens.cliente.id_cliente*/}
                        </p>
                    </div>  
                    <div className="row">
                        <label><strong>Destino ID</strong></label>    
                        <p>
                        {/*this.state.passagens.destino.id_destino*/}
                        </p>
                    </div>
                    <button onClick={() => this.goBack()} className="btn btn-info">Voltar</button> 
                    </div>
                </div>
                  
            </div>
        )
    }
}

export default DetailsPassagem;