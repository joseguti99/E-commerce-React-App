import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SideBar from './components/SideBar'
import Inicio from './components/pages/Inicio'
import Ofertas from './components/pages/Ofertas'
import Contact from './components/pages/Contact'
import CartProducts from './components/CartProducts'
import ItemDetailContainer from './components/ItemDetailContainer'
import Products from './components/pages/Productos'

function App() {
  return (
    <>
    <BrowserRouter> 
    <div className="d-flex">
      <SideBar/>
        <div className="content w-100">
          <Switch>
            <Route exact path ="/" component={Inicio}/>
            <Route exact path ="/Offers" component = {Ofertas}/>
            <Route exact path ="/Contact" component = {Contact} />
            <Route exact path ="/Cart" component = {CartProducts} />
            <Route exact path="/category/:categoryId" component= {Products}/>
            <Route exact path="/item/:itemId" component={ItemDetailContainer}/>
            <Route exact path="*"><h1>Se ha producido un error, la pagina no fue encontrada!</h1></Route>
          </Switch>
        </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
