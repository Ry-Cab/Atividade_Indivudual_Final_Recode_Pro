import Form from '../Components/form.jsx'
import React, { Component } from 'react';
import Jumbotron from '../Components/jumbotron.jsx';

class Contato extends Component {
    render() {
        return (
            <>
      <Jumbotron titulo="Fale conosco!" subtitulo="Vamos adorar te ouvir!"></Jumbotron>
       <Form></Form>
      
    
        </>
        );
    }
}

export default Contato;