import { createSlice } from "@reduxjs/toolkit"
import { dummyProducts } from "./dummyProducts"


const mainPageSlice = createSlice({
    name: 'showMainPage',
    initialState: {
        products: dummyProducts,
        firstPrice: [],
        priceSym: '£',
        getSuccess: false
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
                state.priceSym = '£'
                for(let i = 0; i<state.products.length; i++){
                    state.products[i].price = state.firstPrice[i]
                }
                
            }

            else if(action.payload === 'euro'){
                state.priceSym = '€'
                for(let i = 0; i<state.products.length; i++){
                    state.products[i].price = state.firstPrice[i] * 1.17
                }
            }

            else if(action.payload === 'dollar'){
                state.priceSym = '$'
                for(let i = 0; i<state.products.length; i++){
                    state.products[i].price = state.firstPrice[i] * 1.37
                }
            }
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