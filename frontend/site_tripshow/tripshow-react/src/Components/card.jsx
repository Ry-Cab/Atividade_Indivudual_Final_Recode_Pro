import React from 'react';

function Card (props){
    return(
        <>
        
        <div class="card card_home bg-dark text-white">
        <img class="card-img" src={props.img} alt="Imagem do card" />
        <div class="card-img-overlay">
          <h5 class="card-title">{props.titulo_card}</h5>
          <p class="card-text">Ver mais</p>
        </div>
      </div>
        </>
    );
}

export default Card;