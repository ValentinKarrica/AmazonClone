import MainHeader from "./componets/header/MainHeader";
import CartBasket from "./componets/UI/CardBasket"
import style from './componets/mainbody/MainBody.module.css'
import PriceSymSel from "./componets/mainbody/PriceSymSel"
import Products from "./componets/mainbody/Products"
import CartProvider from "./store/CartProvider";
import ProductsDetail from "./componets/UI/ProductsDetails";
import { Switch, Route, Redirect } from "react-router-dom";



function App() {
 
  
  return (<CartProvider>
    <div className="App">
      <header >
       <MainHeader />
      </header>
      <main>
        <div className={style['a-section']}>
          <Switch>
            <Route path = '/' exact>
              <Redirect to='/home'/>
            </Route>
            <Route path="/home" exact>
                <Products/>
            </Route>

            <Route path='/Select-Currency'>
                <PriceSymSel/>
            </Route>
            
            <Route path='/Shopping-Basket'>
                <CartBasket/>
            </Route>
            <Route path='/home/:id'>
              <ProductsDetail/>
            </Route>
          </Switch>
        </div>
      </main>
      <footer>
        main footer
      </footer>
    </div>
  </CartProvider>
  );
}

export default App;
