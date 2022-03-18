import React, { Component } from 'react';
import "../../layout/css/jumbotron.css"
class Jumbotron extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" >
  <div class="container">

    <div>  
            <h1 class="display-4" >{this.props.titulo}</h1>
            
   
        {this.props.numero == 0 || this.props.numero == null ?
        <div></div>
        :

        <div className='badge_jumbotron'>
            
        <h3>{this.props.numero} {this.props.numero == 1? <span>resgistro</span> : <span>resgistros</span>}</h3>
       </div>

        }
          
    </div>

  </div>
</div>
        );
    }
}

export default Jumbotron;