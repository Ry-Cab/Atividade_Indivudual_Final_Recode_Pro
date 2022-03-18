
import React, { Component } from 'react';

import PassagemService from '../../services/PassagemService';
import DestinoService from '../../services/DestinoService';
import ClienteService from '../../services/ClienteService';

class CreatePassagem extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data_compra: '',
            clientes:[],
            destinos:[]
            
        }
        
        this.changeDataCompraHandler = this.changeDataCompraHandler.bind(this);
        this.changeClientePassagemHandler = this.changeClientePassagemHandler.bind(this);
        this.changeDestinoPassagemHandler = this.changeDestinoPassagemHandler.bind(this);
        this.savePassagem = this.savePassagem.bind(this);
    }
    
    componentDidMount(){
        ClienteService.getClientes().then((response) => { this.setState({ clientes: response.data})
    })
    }

    savePassagem = (e) =>{
        e.preventDefault();

        let passagem = {
            data_compra: this.state.data_compra,
            cliente:{
                id_cliente: parseInt(this.state.clientes.id_cliente)
            },
            destino:{
                id_destino: parseInt(this.state.destinos.id_destino)
            }
          
        };

        console.log("Destino => " + JSON.stringify(passagem));

        PassagemService.postPassagens(passagem).then(res => {
        this.props.history.push("/passagens");
        });
    }

    changeDataCompraHandler=(event)=>{
        this.setState({data_compra: event.target.value})
    }

    changeClientePassagemHandler=(event)=>{
        this.setState({clientes:{id_cliente: event.target.value}})
    }

    changeDestinoPassagemHandler=(event)=>{
        this.setState({destinos:{id_destino: event.target.value}})
    }

    cancel(){
        this.props.history.push("/passagens");
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                         <h1 className="text-center">Criar Passagem</h1> 
                         <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label>Data da Compra:</label>  
                            <input type="date" className="form-control" placeholder='data da compra' name='lastName' value={this.state.data_compra} onChange={this.changeDataCompraHandler} />
                            </div> 
                            <div className="form-group">
                            <label>Id do cliente:</label>  
                            <input type="number" className="form-control" placeholder='id' name='emailid' value={this.state.id_cliente} onChange={this.changeClientePassagemHandler} />
                            </div>  
                            <div className="form-group">
                            <label>Id do destino</label>  
                            <input type="number" className="form-control" placeholder='id' name='emailid' value={this.state.id_destino} onChange={this.changeDestinoPassagemHandler} />
                            </div>  

                           <div style={{marginTop: "15px"}}>
                               <button className="btn btn-success" onClick={this.savePassagem}>Save</button>
                               <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                           </div>
                            </form>    
                        </div>  
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePassagem;