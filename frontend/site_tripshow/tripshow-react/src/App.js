import Footer from './Components/footer.jsx';
import Menu from './Components/menu.jsx';
import './Layout/css/menu_footer.css'
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";

import Home from './Views/Home.jsx'
import Contato from './Views/Contato.jsx'
import Destinos from './Views/Destinos.jsx'
import Promocoes from './Views/Promocoes';

import DestinosTeste from './Views/DestinosTeste';
import CreateDestino from './Views/CREATE/CreateDestino.jsx';
import UpdateDestino from './Views/CREATE/UpdateDestino.jsx';
import DestinoDetails from './Views/DestinoDetails.jsx';

function App() {
  return (
    <>
    <Router>
      <Menu />
 
     <Switch>
 
       <Route path="/"  exact component={Home}/>
       
       <Route path="/Contato" component={Contato}/>
 
       <Route path="/Destinos" component={Destinos}/>
 
       <Route path="/Promocoes" component={Promocoes}/>

       <Route path="/Destinos-details/:id" exact component={DestinoDetails}/>
 
       <Route path="/DestinosTeste" component={DestinosTeste}/>
       <Route path="/Destinos_CREATE" component={CreateDestino}/>
       <Route path="/Destinos_UPDATE:id" component={UpdateDestino}/>
     </Switch>
 
      <Footer />
     </Router>
    </>
  );
}

export default App;
