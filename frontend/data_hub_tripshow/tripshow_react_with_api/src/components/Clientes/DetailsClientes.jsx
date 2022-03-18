import React, { Component } from 'react';
import ClienteService from '../../services/ClienteService';
import "../../layout/css/details.css"

class DetailsClientes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            clientes: {}
        }
    }

    componentDidMount(){
        ClienteService.getClientesById(this.state.id).then( res => {  
         this.setState({clientes: res.data});
         })
     }

    goBack(){
        this.props.history.push("/clientes");
    }
    render() {
        return (
            <div>
               <div className="card col-md-6 offset-md-3">
                  <h4 className='text-center'>Cliente</h4> 
                    <h2 className='text-center'> {this.state.clientes.nome_cliente}</h2>
                    <div className="card-body">
                    <form>

                        <div className="form-group">
                        <label><strong>Nome completo:</strong></label>  
                        <span className="span_details"> {this.state.clientes.nome_cliente}</span> 
                        </div>

                        <div className="form-group">
                        <label><strong>Data de nascimento:</strong></label>  
                       <span className="span_details"> {this.state.clientes.data_nascimento}</span> 
                        </div>

                        <div className="form-group">
                        <label><strong>E-mail:</strong></label>  
                       <span className="span_details"> {this.state.clientes.email_cliente}</span> 
                        </div>  
                        <div className="form-group">
                        <label><strong>Data de ida:</strong></label>  
                        <span className="span_details"> {this.state.clientes.data_ida}</span>
                        </div>  

                        <div className="form-group">
                        <label><strong>Data de volta:</strong></label>  
                        <span className="span_details"> {this.state.clientes.data_volta}</span>
                        </div>
                        <div className="form-group">
                        <label><strong>Cidade de origem:</strong></label>  
                        <span className="span_details"> {this.state.clientes.cidade_cliente}</span> 
                        </div>
                        <div className="form-group">
                        <label><strong>Estado de origem:</strong> </label>  
                        <span className="span_details"> {this.state.clientes.estado_cliente}</span> 
                        </div>
                    </form>
                    
                    <button onClick={() => this.goBack()} className="btn btn-info">Voltar</button> 
                    </div>
                </div>
                  
            </div>
        );
    }
}

export default DetailsClientes;