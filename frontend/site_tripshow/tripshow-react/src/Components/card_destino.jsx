import React,{useState} from 'react';



function CardDestino(props){
    const[nome,setNome]=useState('Comprar');
    
    return(
        <>
        <div class="card card_compra">
        <img class="card-img-top" src={props.img} alt="Imagem de capa do card" />
        <div class="card-body">
        <h5 class="card-title">{props.Cidade}</h5>
        <p class="card-text">{props.Estado}</p>
        </div>
        <ul class="list-group list-group-flush">
         <li class="list-group-item">Ida e volta</li>
        {
            props.Desconto == null || props.Desconto == 0 ?
            <></>
            :
            <li class="list-group-item">{props.Desconto}%</li>

        }
        

        </ul>
        <div class="card-body">
        {
            props.Descontado == null || props.Descontado == 0 ?
            <></>
            :
            <small><del>R${props.Descontado}</del></small>
        }
        

        <p class="card-link"><strong>R${props.Preco}</strong></p>
        </div>
        </div>
    </>
    );
}



export default CardDestino;

