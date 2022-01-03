import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Inicio from './components/pages/Inicio'
import CartProducts from './components/CartProducts'
import ItemDetailContainer from './components/ItemDetailContainer'
import Products from './components/pages/Productos'
import Payment from './components/Payment'
import Error from './components/Error'
import { CartProvider } from './components/CartContext/CartContext.jsx';


function App() {
  return (
    <>
      <BrowserRouter basename='/'> 
        <CartProvider>
        <div className="d-flex">
            <div className="content w-100">
              <Switch>  
                <Route exact={true} path ="/" component={Inicio}/>
                <Route exact={true} path ="/Cart" component = {CartProducts} />
                <Route exact={true} path="/category/:categoryId" component= {Products}/>
                <Route exact={true} path="/item/:itemId" component={ItemDetailContainer}/>
                <Route exact={true} path="/Payment" component={Payment} />
                <Route exact={true} path="*" component={Inicio}/>
              </Switch>
            </div>
        </div>
        </CartProvider>
      </BrowserRouter>
    
    </>
  );
}

export default App;
