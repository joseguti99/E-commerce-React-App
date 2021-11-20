import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SideBar from './components/SideBar'
import Inicio from './components/pages/Inicio'
import Ofertas from './components/pages/Ofertas'
import Contact from './components/pages/Contact'
import CartProducts from './components/CartProducts'
import ItemDetailContainer from './components/ItemDetailContainer'
import Products from './components/pages/Productos'
import Payment from './components/Payment'
import { CartProvider } from './components/CartContext/CartContext.jsx';


function App() {
  return (
    <>
      <BrowserRouter> 
        <CartProvider>
        <div className="d-flex">
          {/* <SideBar/> */}
            <div className="content w-100">
              <Switch>  
                <Route exact={true} path ="/" component={Inicio}/>
                <Route exact={true} path ="/Offers" component = {Ofertas}/>
                <Route exact={true} path ="/Contact" component = {Contact} />
                <Route exact={true} path ="/Cart" component = {CartProducts} />
                <Route exact={true} path="/category/:categoryId" component= {Products}/>
                <Route exact={true} path="/item/:itemId" component={ItemDetailContainer}/>
                <Route exact={true} path="/Payment" component={Payment} />
                <Route exact={true} path="*"><h1>Se ha producido un error, la pagina no fue encontrada!</h1></Route>
              </Switch>
            </div>
        </div>
        </CartProvider>
      </BrowserRouter>
    
    </>
  );
}

export default App;
