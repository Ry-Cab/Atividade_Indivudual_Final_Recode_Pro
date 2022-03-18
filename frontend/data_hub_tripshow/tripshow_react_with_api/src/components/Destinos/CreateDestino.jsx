
import React, { Component } from 'react';
import "../../layout/css/form.css"
import DestinoService from '../../services/DestinoService';

class CreateDestino extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            cidade_destino: '',
            imagemURL_destino:'',
            estado_destino: '',
            preco_destino: '',
            desconto_destino:''
        }
        
        this.changeCidadeDestinoHandler = this.changeCidadeDestinoHandler.bind(this);
        this.changeImagemURLDestinoHandler = this.changeImagemURLDestinoHandler.bind(this);
        this.changeEstadoDestinoHandler = this.changeEstadoDestinoHandler.bind(this);
        this.changePrecoDestinoHandler = this.changePrecoDestinoHandler.bind(this);
        this.changeDescontoDestinoHandler = this.changeDescontoDestinoHandler.bind(this);
        this.saveDestino = this.saveDestino.bind(this);
    }
    
    saveDestino = (e) =>{
        e.preventDefault();

        let destino = {
            cidade_destino: this.state.cidade_destino,
            imagemURL_destino: this.state.imagemURL_destino,
            estado_destino: this.state.estado_destino,
            preco_destino: parseFloat(this.state.preco_destino),
            desconto_destino: parseInt(this.state.desconto_destino) 
        };
        console.log("Destino => " + JSON.stringify(destino));

        DestinoService.postDestinos(destino).then(res => {
        this.props.history.push("/destinos");
        });
    }

    changeCidadeDestinoHandler=(event)=>{
        this.setState({cidade_destino: event.target.value})
    }

    changeImagemURLDestinoHandler=(event)=>{
        this.setState({imagemURL_destino: event.target.value})
    }

    changeEstadoDestinoHandler=(event)=>{
        this.setState({estado_destino: event.target.value})
    }

    changePrecoDestinoHandler=(event)=>{
        this.setState({preco_destino: event.target.value})
    }

    changeDescontoDestinoHandler=(event)=>{
        this.setState({desconto_destino: event.target.value})
    }

    cancel(){
        this.props.history.push("/destinos");
    }

    render() {
        return (
            <div>
                <div className="container" style={{marginTop: "30px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                         <h1 className="text-center">Adicionar Destino</h1> 
                         <div className="card-body">
                            <form>
                            <div className="form-group">
                            <label>Cidade:</label>  
                            <input type="text" className="form-control" placeholder='cidade do destino' name='fisrtName' value={this.state.cidade_destino} onChange={this.changeCidadeDestinoHandler} />
                            </div>

                            <div className="form-group">
                            <label>URL da Imagem:</label>  
                            <input type="text" className="form-control" placeholder='imagem do destino' name='imagem' value={this.state.imagemURL_destino} onChange={this.changeImagemURLDestinoHandler} />
                            </div>

                            <div className="form-group">
                            <label>Estado:</label>  
                            <input type="text" className="form-control" placeholder='estado do destino' name='lastName' value={this.state.estado_destino} onChange={this.changeEstadoDestinoHandler} />
                            </div> 
                            <div className="form-group">
                            <label>Preço:</label>  
                            <input type="number" className="form-control" placeholder='preço do destino' name='emailid' value={this.state.preco_destino} onChange={this.changePrecoDestinoHandler} />
                            </div>  
                            <div className="form-group">
                            <label>Desconto:</label>  
                            <input type="number" className="form-control" placeholder='desconto do destino (Ex.: 20 == 20%)' name='emailid' value={this.state.desconto_destino} onChange={this.changeDescontoDestinoHandler} />
                            </div>  

                           <div style={{marginTop: "15px"}}>
                               <button className="btn btn-success" onClick={this.saveDestino}>Save</button>
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

export default CreateDestino;