import React, { Component } from 'react';
import ClienteService from "../../services/ClienteService"
import "../../layout/css/form.css"

class CreateClientes extends Component {
    constructor(props) {
        super(props);
        this.state={
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
    
    saveCliente  = (e) =>{
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
        console.log("Clientes => " + JSON.stringify(cliente));

        ClienteService.postClientes(cliente).then(res => {
            this.props.history.push("/clientes");
        })
       
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
                     <h1 className="text-center">Adicionar Cliente</h1> 
                     <div className="card-body">
                        <form>
                        <div className="form-group">
                        <label>Nome completo:</label>  
                        <input type="text" className="form-control" placeholder='nome completo' name='fisrtName' value={this.state.nome_cliente} onChange={this.changeNomeClienteHandler} />
                        </div>
                        <div className="form-group">
                        <label>Data de nascimento:</label>  
                        <input type="text" className="form-control" placeholder='data de nascimento' name='lastName' value={this.state.data_nascimento} onChange={this.changeDataNascimentoClienteHandler} />
                        </div> 
                        <div className="form-group">
                        <label>E-mail:</label>  
                        <input type="text" className="form-control" placeholder='e-mail' name='emailid' value={this.state.email_cliente} onChange={this.changeEmailClienteHandler} />
                        </div>  
                        <div className="form-group">
                        <label>Data de ida:</label>  
                        <input type="date" className="form-control" placeholder='data de ida' name='emailid' value={this.state.data_ida} onChange={this.changeDataIdaClienteHandler} />
                        </div>  

                        <div className="form-group">
                        <label>Data de volta:</label>  
                        <input type="date" className="form-control" placeholder='data de volta' name='emailid' value={this.state.data_volta} onChange={this.changeDataVoltaClienteHandler} />
                        </div>
                        <div className="form-group">
                        <label>Cidade de origem:</label>  
                        <input type="text" className="form-control" placeholder='cidade de origem' name='emailid' value={this.state.cidade_cliente} onChange={this.changeCidadeClienteHandler} />
                        </div>
                        <div className="form-group">
                        <label>Estado de origem:</label>  
                        <input type="text" className="form-control" placeholder='estado de origem' name='emailid' value={this.state.estado_cliente} onChange={this.changeEstadoClienteHandler} />
                        </div>

                       <div style={{marginTop: "15px"}}>
                           <button className="btn btn-success" onClick={this.saveCliente}>Save</button>
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

export default CreateClientes;