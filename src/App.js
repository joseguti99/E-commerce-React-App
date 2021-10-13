import './App.css';
//Rutas Link
import {BrowserRouter as Router, Route} from 'react-router-dom'
import movile from './components/SideBar/movile.png'
import NavBarNav from './components/NavBarNav';
import SideBar from './components/SideBar'
import Inicio from './components/pages/Inicio'
import Ofertas from './components/pages/Ofertas'
import Productos from './components/pages/Productos'
import Contact from './components/pages/Contact'
import CartProducts from './components/CartProducts'

function App() {
  return (
    <>
    <Router> 
      <div className="d-flex">
      <SideBar/>
      <div className="content w-100">
        <Route path ="/Inicio" exact= {true} component = {Inicio} />
        <Route path ="/Ofertas" exact= {true} component = {Ofertas} />
        <Route path ="/Productos" exact= {true} component = {Productos} />
        <Route path ="/Contact" exact= {true} component = {Contact} />
        <Route path ="/CartProducts" exact= {true} component = {CartProducts} />
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
