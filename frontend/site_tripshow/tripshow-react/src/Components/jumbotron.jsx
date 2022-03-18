import React from "react";
import '../Layout/css/Jumbotron.css'
export default function Jumbotron(props){
    return(
        <>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{props.titulo}</h1>
    <p class="lead">{props.subtitulo}</p>
  </div>
</div>
        </>
    );
}