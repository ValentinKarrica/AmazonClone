import { createSlice } from "@reduxjs/toolkit"
import { dummyProducts } from "./dummyProducts"


const mainPageSlice = createSlice({
    name: 'showMainPage',
    initialState: {
        products: dummyProducts,
        firstPrice: [],
        priceSym: '£',
        getSuccess: false,
        basketProducts: [],
        tottalPrice: 0,
        tottalItems: 0,
    },
    reducers: {
        actionShowProducts(state, action){
            const dataTran =action.payload.sponsored_products.map((product)=> {
                return{
                    name: product.title,
                    id: Math.random().toString(36),
                    value: 1,
                    image: <img src={product.image} alt='alt'></img>,
                    price: product.price.value,
                }
            })
            state.products = state.products.concat(dataTran)
            state.firstPrice = state.products.map((price)=>
                price.price
            )
            state.getSuccess = true;
        },

        actionChangePrice(state, action){
            if(action.payload === 'pound'){
                state.tottalPrice = 0
                state.priceSym = '£'
                for(let i = 0; i<state.products.length; i++){
                    state.products[i].price = state.firstPrice[i]
                    const findBasketPro = state.basketProducts.findIndex(product=> product.id === state.products[i].id)
                    const existingProduct = state.basketProducts[findBasketPro]; 
                    if(existingProduct){
                        const updateProduct = {...existingProduct, 
                                                price: state.firstPrice[i]*existingProduct.value,
                                                }
                        state.basketProducts = [...state.basketProducts]
                        state.basketProducts[findBasketPro] = updateProduct
                        state.tottalPrice = state.tottalPrice + updateProduct.price
                    }
                }

                
            }

            else if(action.payload === 'euro'){
                state.tottalPrice = 0
                state.priceSym = '€'
                for(let i = 0; i<state.products.length; i++){
                    state.products[i].price = state.firstPrice[i] * 1.17
                    const findBasketPro = state.basketProducts.findIndex(product=> product.id === state.products[i].id)
                    const existingProduct = state.basketProducts[findBasketPro]; 
                    if(existingProduct){
                        const updateProduct = {...existingProduct, 
                                                price: state.firstPrice[i]*existingProduct.value * 1.17
                                                }
                        state.basketProducts = [...state.basketProducts]
                        state.basketProducts[findBasketPro] = updateProduct
                        state.tottalPrice = state.tottalPrice + updateProduct.price
                    }
                }
            }

            else if(action.payload === 'dollar'){
                state.tottalPrice = 0
                state.priceSym = '$'
                for(let i = 0; i<state.products.length; i++){
                    state.products[i].price = state.firstPrice[i] * 1.37
                    const findBasketPro = state.basketProducts.findIndex(product=> product.id === state.products[i].id)
                    const existingProduct = state.basketProducts[findBasketPro]; 
                    if(existingProduct){
                        const updateProduct = {...existingProduct, 
                                                price: state.firstPrice[i]*existingProduct.value * 1.37
                                                }
                        state.basketProducts = [...state.basketProducts]
                        state.basketProducts[findBasketPro] = updateProduct
                        state.tottalPrice = state.tottalPrice + updateProduct.price
                    }
                }

            }
        },

        addToBasket(state, action){
            

            const findProduct = state.products.findIndex(products=>products.id === action.payload.id);

            state.tottalPrice = state.tottalPrice + (state.products[findProduct].price*action.payload.value);
            state.tottalItems = state.tottalItems + action.payload.value;

            const findBasketProduct = state.basketProducts.findIndex(products=>products.id === action.payload.id)
            const existingProduct = state.basketProducts[findBasketProduct];
            
            if(existingProduct){
                const updateProduct = {...existingProduct, 
                                        price: state.products[findProduct].price + existingProduct.price,
                                        value: existingProduct.value + 1}
                state.basketProducts = [...state.basketProducts]
                state.basketProducts[findBasketProduct] = updateProduct
            }
            else{
                state.basketProducts = state.basketProducts.concat(state.products[findProduct]);
            }
        },
        addFromBasket(state, action){
            const findProduct = state.products.findIndex(products=>products.id === action.payload.id)
            const productPrice = state.products[findProduct].price
            
            const findBasketProduct = state.basketProducts.findIndex(products=>products.id === action.payload.id)
            const existingProduct = state.basketProducts[findBasketProduct]
            
            console.log(existingProduct.value)
            const updateTotItems = state.tottalItems - existingProduct.value
            const updateTotPrice = state.tottalPrice - existingProduct.price
            
            const updateProdact = {...existingProduct, price: productPrice * action.payload.value, value: action.payload.value }
            state.basketProducts=[...state.basketProducts]
            state.basketProducts[findBasketProduct] = updateProdact

            state.tottalItems = updateTotItems + Number(updateProdact.value)
            console.log(state.tottalItems)
            state.tottalPrice = updateTotPrice + updateProdact.price
            console.log(state.tottalPrice)
        },
        deleteFromBasket(state, action){
            const findBasketProd = state.basketProducts.findIndex(products=>products.id === action.payload)
            state.tottalItems = state.tottalItems - state.basketProducts[findBasketProd].value;
            state.tottalPrice = state.tottalPrice - state.basketProducts[findBasketProd].price;
            state.basketProducts.splice(findBasketProd,1);
        }
    }
})

export const showActions = mainPageSlice.actions

export const getProducts = ()=>{
    return async(dispatch) =>{
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
    }
}

export default mainPageSlice;