import MainHeader from "./componets/header/MainHeader";
import CartBasket from "./componets/UI/CardBasket"
import style from './componets/mainbody/MainBody.module.css'
import PriceSymSel from "./componets/mainbody/PriceSymSel"
import Products from "./componets/mainbody/Products"
import CartProvider from "./store/CartProvider";
import ProductsDetail from "./componets/UI/ProductsDetails";
import { Switch, Route, Redirect } from "react-router-dom";
import {useEffect, useCallback, } from 'react'
import {useDispatch} from 'react-redux'
import {showActions} from './store/mainPage-slice'



function App() {
  const dispatch = useDispatch()

  const sendGetRequest = useCallback(async()=>{
    const axios = require('axios');
    const params = {
        api_key: "demo",
        amazon_domain: "amazon.com",
        type: "product",
        asin: "B073JYC4XM"
    }
    try{
        const response = await axios.get('https://api.rainforestapi.com/request', { params })
        dispatch(showActions.actionShowProducts(response.data))
        console.log(response.data)

    } catch(err){
        console.log(err)
    }
}, []);


useEffect(()=>{
    sendGetRequest()
},[sendGetRequest])

  
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
