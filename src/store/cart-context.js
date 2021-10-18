import React from "react"





const CartContext = React.createContext({
    basketProducts: [],
    products: [],
    priceSym: '',
    totalAmount:0,
    totalItems:0,
    foundProd: false,
    changeSym: (sym)=>{},
    moveToBasket: (value, id)=>{},
    addFromBasket: (value, id)=>{}
})

export default CartContext