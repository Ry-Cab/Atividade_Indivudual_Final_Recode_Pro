
import { Link } from 'react-router-dom'; 
import Logo from './logo-200.png';

function Menu (props){
    return(
       <>
       <aside className='aside-nav-top'><a>Consulte aqui as atualizações sobre o coronavírus.</a></aside>
       

    <nav class="navbar navbar-expand-lg ">
  
    
    <img className='img_nav' src={Logo}/>

  <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item active">

      <Link class="nav-link" to="/" href=''>Home</Link>
       
      </li>

      <li class="nav-item active">

      <Link class="nav-link" to="/Destinos" >Destinos</Link>
      
      </li>
      <li class="nav-item active">
      <Link class="nav-link" to="/Promocoes" >Promoções</Link>
      </li>
      <li class="nav-item active">
      <Link className="nav-link"  to="/Contato" >Contato</Link>

       </li>
    </ul>
  </div>
</nav>
       </>
    );
}

export default Menu;