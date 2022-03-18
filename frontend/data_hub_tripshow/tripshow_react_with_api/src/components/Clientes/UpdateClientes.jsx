import React, { Component } from 'react';
import ClienteService from '../../services/ClienteService';

class UpdateClientes extends Component {
    constructor(props) {
        super(props);
        this.state={
            id_cliente: this.props.match.params.id,
            nome_cliente: '',
            email_cliente: '',
            data_nascimento: '',
            estado_cliente: '',
            cidade_cliente: '',
            data_ida: '',
            data_volta: ''
        }  
        this.changeNomeClienteHandler = this.changeNomeClienteHandler.bind(this);
        this.changeEmailClienteHandler = this.changeEmailClienteHandler.bind(this);
        this.changeDataNascimentoClienteHandler = this.changeDataNascimentoClienteHandler.bind(this);
        
        this.changeEstadoClienteHandler = this.changeEstadoClienteHandler.bind(this);
        this.changeCidadeClienteHandler = this.changeCidadeClienteHandler.bind(this);
        this.changeDataIdaClienteHandler = this.changeDataIdaClienteHandler.bind(this);
        this.changeDataVoltaClienteHandler = this.changeDataVoltaClienteHandler.bind(this);  
    }
    componentDidMount(){
        console.log(this.state.id_cliente);

        ClienteService.getClientesById(this.state.id_cliente).then((res) => {
            let cliente = res.data;
            this.setState({
                nome_cliente: cliente.nome_cliente,
                email_cliente: cliente.email_cliente,
                data_nascimento: cliente.data_nascimento,
                estado_cliente: cliente.estado_cliente,
                cidade_cliente: cliente.cidade_cliente,
                data_ida: cliente.data_ida,
                data_volta: cliente.data_volta
            })
        })
    }

    updateCliente = (e) => {
        e.preventDefault();
        let cliente = {
            nome_cliente: this.state.nome_cliente,
            email_cliente: this.state.email_cliente,
            data_nascimento: this.state.data_nascimento,
            estado_cliente: this.state.estado_cliente,
            cidade_cliente: this.state.cidade_cliente,
            data_ida: this.state.data_ida,
            data_volta: this.state.data_volta
        };

        console.log("cliente => " + JSON.stringify(cliente) + this.state.id_cliente);
        console.log("id => " + JSON.stringify(this.state.id_cliente))
        ClienteService.putClientes(cliente, this.state.id_cliente).then( res => {
            this.props.history.push("/clientes");
        });
    }

    changeNomeClienteHandler=(event)=>{
        this.setState({nome_cliente: event.target.value})
    }
    
    changeEmailClienteHandler=(event)=>{
        this.setState({email_cliente: event.target.value})
    }

    changeDataNascimentoClienteHandler=(event)=>{
        this.setState({data_nascimento: event.target.value})
    }
    
    changeEstadoClienteHandler=(event)=>{
        this.setState({estado_cliente: event.target.value})
    }

    changeCidadeClienteHandler=(event)=>{
        this.setState({cidade_cliente: event.target.value})
    }

    changeDataIdaClienteHandler=(event)=>{
        this.setState({data_ida: event.target.value})
    }

    changeDataVoltaClienteHandler=(event)=>{
        this.setState({data_volta: event.target.value})
    }

    cancel(){
        this.props.history.push("/clientes");
    }

    render() {
        return (
            <div>
            <div className="container" style={{marginTop: "30px"}}>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                     <h1 className="text-center">Atualizar Cliente</h1> 
                     <div className="card-body">
                        <form>
                        <div className="form-group">
                        <label>Nome:</label>  
                        <input type="text" className="form-control"  name='fisrtName' value={this.state.nome_cliente} onChange={this.changeNomeClienteHandler} />
                        </div>
                        <div className="form-group">
                        <label>Data de nascimento:</label>  
                        <input type="text" className="form-control"  name='lastName' value={this.state.data_nascimento} onChange={this.changeDataNascimentoClienteHandler} />
                        </div> 
                        <div className="form-group">
                        <label>E-mail:</label>  
                        <input type="text" className="form-control"  name='emailid' value={this.state.email_cliente} onChange={this.changeEmailClienteHandler} />
                        </div>  
                        <div className="form-group">
                        <label>Data de ida:</label>  
                        <input type="text" className="form-control"  name='emailid' value={this.state.data_ida} onChange={this.changeDataIdaClienteHandler} />
                        </div>  

                        <div className="form-group">
                        <label>Data de volta:</label>  
                        <input type="text" className="form-control"  name='emailid' value={this.state.data_volta} onChange={this.changeDataVoltaClienteHandler} />
                        </div>
                        <div className="form-group">
                        <label>Cidade de origem:</label>  
                        <input type="text" className="form-control"  name='emailid' value={this.state.cidade_cliente} onChange={this.changeCidadeClienteHandler} />
                        </div>
                        <div className="form-group">
                        <label>Estado de origem:</label>  
                        <input type="text" className="form-control"  name='emailid' value={this.state.estado_cliente} onChange={this.changeEstadoClienteHandler} />
                        </div>
                       <div style={{marginTop: "15px"}}>
                           <button className="btn btn-success" onClick={this.updateCliente}>Save</button>
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

export default UpdateClientes;