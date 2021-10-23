import { useReducer, useEffect, useCallback } from "react"
import CartContext from "./cart-context"



const defaultProducts = {
    products: [],
    priceSym: '£',
    basketProducts: [],
    totalAmount: 0,
    totalItems: 0,
    foundProd: false,
}


const productsReducer = (state, action)=>{

    if(action.type==='ADDBASKET'){
        let updateProducts;
        const findProduct = state.products.findIndex(products=>products.id === action.id)
        const firstPrice = state.products[findProduct].price
        const findBasketProduct = state.basketProducts.findIndex(products=>products.id === action.id)
        const existingProduct = state.basketProducts[findBasketProduct]
        const updateProdact = {...existingProduct, price: firstPrice * action.value, value: action.value }
        updateProducts=[...state.basketProducts]
        updateProducts[findBasketProduct] = updateProdact
        

        return{
            basketProducts: updateProducts,
            products: state.products,
            priceSym: state.priceSym,
            totalAmount: state.totalAmount,
            totalItems: state.totalItems,
            foundProd: state.foundProd
        }
    }
return defaultProducts
}


const CartProvider=(props)=>{

   
    const [productsState, despachProductsAction] = useReducer(productsReducer, defaultProducts)


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
            
        } catch(err){
            console.log(err)
        }
    }, []);


    useEffect(()=>{
        sendGetRequest()
    },[sendGetRequest])
    

    const changeSymHandler=(symValue)=>{
        despachProductsAction({type: 'CHANGESYM', symValue:symValue})
    }

    const moveToBasketHadler=(id, value)=>{
        despachProductsAction({type:'ADD', id:id, value:value})
    }

    const andFromBasketHadler=(id, value)=>{
        despachProductsAction({type:'ADDBASKET', id:id, value:value})
    }


    
    const productsContext={
        basketProducts: productsState.basketProducts,
        products: productsState.products,
        priceSym: productsState.priceSym,
        totalAmount: productsState.totalAmount,
        totalItems: productsState.totalItems,
        foundProd: productsState.foundProd,
        changeSym: changeSymHandler,
        moveToBasket: moveToBasketHadler,
        addFromBasket: andFromBasketHadler
    }
    
    return (
        <CartContext.Provider value={productsContext}>
            {props.children}
            </CartContext.Provider>
    )
}
export default CartProvider;