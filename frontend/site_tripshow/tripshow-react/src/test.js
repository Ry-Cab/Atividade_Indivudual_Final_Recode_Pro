import React,{ useState } from 'react';


export default function Teste(props){
  const [num,setNum]=useState(10);

  return(
      <>
      <p>Valor do state num: {num}</p>
      <button class="btn btn-primary" onClick={()=>setNum(num+100)}>100</button>
      </>
  );  
}

