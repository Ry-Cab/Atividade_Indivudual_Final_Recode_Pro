import React, { Component } from 'react';
import PassagemService from '../../services/PassagemService';

class UpdatePassagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_passagem: this.props.match.params.id,
            data_compra: '',
            cliente:[],
            destino:[]
        }
       
        this.changeDataCompraHandler = this.changeDataCompraHandler.bind(this);
        this.changeClientePassagemHandler = this.changeClientePassagemHandler.bind(this);
        this.changeDestinoPassagemHandler = this.changeDestinoPassagemHandler.bind(this);
        this.UpdatePassagem = this.UpdatePassagem.bind(this);
    }

    componentDidMount(){
        console.log(this.state.id_passagem);

        PassagemService.getPassagemById(this.state.id_passagem).then((res) => {
            let passagem = res.data;
            this.setState({
                data_compra: passagem.data_compra,
                cliente:{
                    id_cliente: passagem.cliente.id_cliente
                },
                destino:{
                    id_destino: passagem.destino.id_destino
                }
            })
        })
    }

    UpdatePassagem = (e) => {
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

        console.log("passagem => " + JSON.stringify(passagem) + this.state.id_passagem);
        console.log("id => " + JSON.stringify(this.state.id_passagem))
        PassagemService.putPassagens(passagem, this.state.id_passagem).then( res => {
            this.props.history.push("/");
        });
    }

    changeDataCompraHandler=(event)=>{
        this.setState({data_compra: event.target.value})
    }

    changeClientePassagemHandler=(event)=>{
        this.setState({cliente:{id_cliente: event.target.value}})
    }

    changeDestinoPassagemHandler=(event)=>{
        this.setState({destino:{id_destino: event.target.value}})
    }

    cancel(){
        this.props.history.push("/");
    }

    render(){
        return (
            <div>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                         <h1 className="text-center">Atualizar Passagem</h1> 
                         <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label>Data Compra:</label>  
                            <input type="text" className="form-control"  name='fisrtName' value={this.state.data_compra} onChange={this.changeDataCompraHandler} />
                            </div>
                            <div className="form-group">
                            <label>Cliente:</label>  
                            <input type="text" className="form-control"  name='lastName' value={this.state.destino.id_destino} onChange={this.changeDestinoPassagemHandler} />
                            </div> 
                            <div className="form-group">
                            <label>Destino:</label>  
                            <input type="text" className="form-control"  name='emailid' value={this.state.cliente.id_cliente} onChange={this.changeClientePassagemHandler} />
                            </div>  
                              
                              <div style={{marginTop: "15px"}}>
                               <button className="btn btn-success" onClick={this.UpdatePassagem}>Update</button>
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
};

export default UpdatePassagem;