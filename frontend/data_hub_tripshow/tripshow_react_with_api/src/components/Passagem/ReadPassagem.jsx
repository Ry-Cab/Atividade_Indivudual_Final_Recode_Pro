import React, { Component } from 'react';
import PassagemService from '../../services/PassagemService';
import Jumbotron from '../Default/Jumbotron';



//READ AND DELETE destino
class ReadPassagem extends Component {
    constructor(props) {
        super(props);
        this.state={
            passagens:[]
        }
        this.createPassagem = this.createPassagem.bind(this);
        this.deletePassagem = this.deletePassagem.bind(this);
        this.editPassagem = this.editPassagem.bind(this);
        

    }

    deletePassagem(id_passagem){
        PassagemService.deletePassagens(id_passagem).then(res => {
            this.setState({passagens: this.state.passagens.filter(passagem => passagem.id_passagem !== id_passagem)});
        });
    }

    detailsPassagem(id){
        this.props.history.push(`/details-passagem/${id}`);
    }

    detailsCliente(id){
        this.props.history.push(`/details-cliente/${id}`);
    }

    detailsDestino(id){
        this.props.history.push(`/details-destino/${id}`);
    }

    createPassagem(){
        this.props.history.push("/create-passagem");
    }

    editPassagem(id){
        this.props.history.push(`/update-passagem/${id}`);
    }

    componentDidMount() {
        PassagemService.getPassagem().then((response) => { this.setState({ passagens: response.data})
        console.log(response.data);
    })
    }

    render() {
        return (
            <div>
                <Jumbotron titulo="Passagens" numero={this.state.passagens.length}></Jumbotron>
                <div className='container'> 
                    <div style={{margin: "30px"}}>
                    <button className="btn btn-primary botao" onClick={this.createPassagem}>Create</button>
                    </div>
                    <div>
                        <div className="table-responsive">
                            <table className='table table-striped table-bordered'>
                                <thead>
                
                            <tr>
                                <th>Id</th>
                                <th>Data de compra</th>
                                <th>Id cliente (FK)</th>
                                <th>Id destino (FK)</th>
                            </tr>
                                </thead>
                                <tbody>
                            {this.state.passagens.length == 0? 
                            <tr align="center">
                                <td colSpan="7">Sem registros.</td>
                            </tr>
                            
                            
                            : 
                                this.state.passagens.map(
                                    passagens =>
                
                                    <tr key={passagens.id_passagem}>
                                        <td>{passagens.id_passagem}</td>
                                        <td>{passagens.data_compra}</td>
                                        <td> {passagens.cliente.id_cliente} <span  style={{color: "blue", marginLeft: "3px", borderRadius: "5px"}} onClick={() => this.detailsCliente(passagens.cliente.id_cliente)}>Ver registro</span> </td>
                                        <td> {passagens.destino.id_destino} <span  style={{color: "blue", marginLeft: "3px", borderRadius: "5px"}} onClick={() => this.detailsDestino(passagens.destino.id_destino)}>Ver registro</span></td>
                                                <td>
                                                    <button onClick={() => this.editPassagem(passagens.id_passagem)} className="btn btn-info">Update</button>
                                                    <button style={{marginLeft: "10px"}} onClick={() => this.deletePassagem(passagens.id_passagem)} className="btn btn-danger">Delete</button>
                                                    <button style={{marginLeft: "10px"}} onClick={ () => this.detailsPassagem(passagens.id_passagem)} className="btn btn-success">View </button>
                                                </td>
                                    </tr>
                
                                )
                            }
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ReadPassagem;