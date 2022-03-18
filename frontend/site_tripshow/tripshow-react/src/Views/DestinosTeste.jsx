import React, { Component } from 'react';
import DestinoService from '../services/DestinoService';
import { Link } from 'react-router-dom';

class DestinosTeste extends Component {
    constructor(props) {
        super(props);
        this.state={
            destinos:[]
        }
        
        this.deleteDestino = this.deleteDestino.bind(this);
        this.putDestinos = this.putDestinos.bind(this);

    }

    componentDidMount() {
        DestinoService.getDestinos().then((response) => { this.setState({ destinos: response.data})
    })
    }

    deleteDestino(id_destino){
        DestinoService.deleteDestinos(id_destino).then(res => {
            this.setState({destinos: this.state.destinos.filter(destino => destino.id_destino !== id_destino)});
        });
    }

    putDestinos(id){
        this.props.history.push(`/Destinos_UPDATE/${id}`);
    }

    render() {
        return (
            <div>
                <div style={{margin: "30px"}}>
                <Link to="/Destinos_CREATE" className="a_nav"  href=''>Criar</Link>
                
                </div>

                {
                    this.state.destinos.map(
                        destinos => 
                        <>
                        <div class="card card_compra" key={destinos.id_destino}>
                        <div class="card-body">
                        <h5 class="card-title">{destinos.cidade_destino}</h5>
                        <p class="card-text">{destinos.estado_destino}</p>
                        </div>
                        <div class="card-body">
                        <p class="card-link"><strong>R${destinos.preco_destino}</strong></p>
                        <button onClick={() => this.putDestinos(parseInt(destinos.id_destino))} className="btn btn-info">Update</button>
                        <button style={{marginLeft: "10px"}} onClick={() => this.deleteDestino(destinos.id_destino)} className="btn btn-danger">Delete</button>
                        </div>
                        </div>
                        </>
                        )
                }
            </div>
        );
    }
};

export default DestinosTeste;