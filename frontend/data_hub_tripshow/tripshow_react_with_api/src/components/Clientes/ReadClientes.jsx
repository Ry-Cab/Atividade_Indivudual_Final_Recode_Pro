import React, { Component } from 'react';
import ClienteService from '../../services/ClienteService.js';
import Jumbotron from '../Default/Jumbotron.jsx';


class ReadClientes extends Component {
    constructor(props) {
        super(props);
        this.state={
            clientes:[]
        }
        this.createCliente = this.createCliente.bind(this);
        this.editCliente = this.editCliente.bind(this);
        this.deleteCliente = this.deleteCliente.bind(this);
    }

    deleteCliente(id_cliente){
        ClienteService.deleteClientes(id_cliente).then(res => {
            this.setState({clientes: this.state.clientes.filter(clientes => clientes.id_cliente !== id_cliente)});
        });
    }

    detailsCliente(id){
        this.props.history.push(`/details-cliente/${id}`);
    }

    createCliente(){
        this.props.history.push(`/create-cliente`);
    }

    editCliente(id){
        this.props.history.push(`/update-cliente/${id}`);
    }

    componentDidMount() {
    ClienteService.getClientes().then((response) => { this.setState({ clientes: response.data})
    console.log(response.data)
})
    
    }

    render() {
        return (
            <div>
                <Jumbotron titulo="Clientes" numero={this.state.clientes.length}></Jumbotron>
                <div className='container'>
                
                    <div style={{margin: "30px"}}>
                    <button className="btn btn-primary botao" onClick={this.createCliente}>Create</button>
                
                    </div>
                    <div className='table-responsive'>
                        <table className='table table-striped table-bordered '>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Data de Nasc.</th>
                                <th>Estado de origem</th>
                                <th>Cidade de origem</th>
                                <th>Data de ida</th>
                                <th>Data de volta</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                        {this.state.clientes.length == 0? 
                        <tr align="center">
                            <td colSpan="9">Sem registros.</td>
                        </tr>
                        :
                            this.state.clientes.map(
                                clientes =>
                
                                <tr key={clientes.id_cliente}>
                                    <td>{clientes.id_cliente}</td>
                                    <td> {clientes.nome_cliente} </td>
                                    <td> {clientes.email_cliente}</td>
                                    <td> {clientes.data_nascimento}</td>
                                    <td> {clientes.estado_cliente}</td>
                                    <td> {clientes.cidade_cliente}</td>
                                    <td> {clientes.data_ida}</td>
                                    <td> {clientes.data_volta}</td>
                                    <td><button onClick={() => this.editCliente(clientes.id_cliente)} className="btn btn-info">Update</button></td>
                            
                
                                    <td><button style={{marginLeft: "10px"}} onClick={() => this.deleteCliente(clientes.id_cliente)} className="btn btn-danger">Delete</button></td>
                
                                    <td><button style={{marginLeft: "10px"}} onClick={ () => this.detailsCliente(clientes.id_cliente)} className="btn btn-success">View </button></td>
                             
                                </tr>
                
                                )
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadClientes;