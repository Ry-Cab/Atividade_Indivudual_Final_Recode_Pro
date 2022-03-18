import React, { Component } from 'react';
import DestinoService from '../../services/DestinoService';
import Jumbotron from '../Default/Jumbotron';

//READ AND DELETE destino
class ReadDestinos extends Component {
    constructor(props) {
        super(props);
        this.state={
            destinos:[]
        }
        this.createDestino = this.createDestino.bind(this);
        this.deleteDestino = this.deleteDestino.bind(this);
        this.editDestinos = this.editDestinos.bind(this);
        

    }

    deleteDestino(id_destino){
        DestinoService.deleteDestinos(id_destino).then(res => {
            this.setState({destinos: this.state.destinos.filter(destino => destino.id_destino !== id_destino)});
        });
    }

    detailsDestinos(id){
        this.props.history.push(`/details-destino/${id}`);
    }

    createDestino(){
        this.props.history.push("/create-destino");
    }

    editDestinos(id){
        this.props.history.push(`/update-destino/${id}`);
    }

    componentDidMount() {
        DestinoService.getDestinos().then((response) => { this.setState({ destinos: response.data})
    })
    }

    render() {
        return (
            <div >
                <Jumbotron numero={this.state.destinos.length} titulo="Destinos"></Jumbotron>
                <div className='container'>
                    <div style={{margin: "30px"}}>
                    <button className="btn btn-primary botao" onClick={this.createDestino}>Create</button>
                    </div>
                    <div>
                        <div className="table-responsive">
                            <table className='table table-striped table-bordered'>
                                <thead>
                
                            <tr>
                                <th>Id</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Preço</th>
                                <th>Desconto (Quant.)</th>
                            </tr>
                                </thead>
                                <tbody>
                            {this.state.destinos.length == 0? 

                            <tr align="center">
                                <td colSpan="7">Sem registros.</td>
                            </tr>
                            :

                                this.state.destinos.map(
                                    destinos =>
                
                                    <tr key={destinos.id_destino}>
                                        <td>{destinos.id_destino}</td>
                                        <td> {destinos.cidade_destino} </td>
                                        <td> {destinos.estado_destino}</td>
                                        <td> {destinos.preco_destino}</td>
                                        <td> {destinos.desconto_destino}</td>
                                                <td>
                                                    <button onClick={() => this.editDestinos(destinos.id_destino)} className="btn btn-info">Update</button>
                                                    <button style={{marginLeft: "10px"}} onClick={() => this.deleteDestino(destinos.id_destino)} className="btn btn-danger">Delete</button>
                                                    <button style={{marginLeft: "10px"}} onClick={ () => this.detailsDestinos(destinos.id_destino)} className="btn btn-success">View </button>
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

export default ReadDestinos;