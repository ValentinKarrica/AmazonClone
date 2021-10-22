import { useReducer, useEffect, useCallback } from "react"
import CartContext from "./cart-context"
import style from './CartProvider.module.css'





const dummyProducts = [
    {
        department: 'Books',
        name: 'Tugether: Memorable Meals Made Easy',
        price: 12,
        image: <img alt="Together: Memorable Meals Made Easy"
                 src="https://www.amazon.co.uk/images/I/81fFLfMKhWL._AC._SR360,460.jpg" 
                 class="octopus-pc-item-image octopus-pc-item-image-v3" 
                 className={style['image-pc-a']}
                 data-a-hires="https://www.amazon.co.uk/images/I/81fFLfMKhWL._AC._SR360,460.jpg" 
                 data-a-manual-replacement="true"></img>,
        id: 1,
        value: 1
    },
    {
        department: 'Books',
        name: 'Beautiful World, Where Are You',
        price: 8.45,
        image: <img alt="Beautiful World, Where Are You: from the internationally bestselling author of Normal People" 
                    src="https://www.amazon.co.uk/images/I/81LME3qQp7S._AC._SR360,460.jpg" 
                    class="octopus-pc-item-image octopus-pc-item-image-v3" 
                    className={style['image-pc-a']}
                    data-a-hires="https://www.amazon.co.uk/images/I/81LME3qQp7S._AC._SR360,460.jpg" 
                    data-a-manual-replacement="true"></img>,
        id: 2,
        value: 1
    },
    {
        department: 'Books',
        name: 'And Away',
        price: 10,
        image: <img alt="And Away..." src="https://www.amazon.co.uk/images/I/81EnlXkL25L._AC._SR360,460.jpg" 
                    class="octopus-pc-item-image octopus-pc-item-image-v3" 
                    className={style['image-pc-a']}
                    data-a-hires="https://www.amazon.co.uk/images/I/81EnlXkL25L._AC._SR360,460.jpg" 
                    data-a-manual-replacement="true"></img>,
        id: 3,
        value: 1
    },
    {
        department: 'Books',
        name: 'The Thursday Murder Club',
        price: 5.99,
        image: <img class="s-image" src="https://www.amazon.co.uk/images/I/71svh4XEL-S._AC_UY218_.jpg" 
                    srcset=" https://www.amazon.co.uk/images/I/71svh4XEL-S._AC_UY654_FMwebp_QL65_.jpg 3x" 
                    alt="The Thursday Murder Club" data-image-index="6" data-image-load="" 
                    className={style['image-pc-a']}
                    data-image-latency="s-product-image" ></img>,
        id: 4,
        value: 1
    },
    {
        department: 'Books',
        name: 'One August Night-0',
        price: 5,
        image: <img class="s-image" src="https://www.amazon.co.uk/images/I/912RYhI3FOL._AC_UY218_.jpg" 
        srcset=" https://www.amazon.co.uk/images/I/912RYhI3FOL._AC_UY654_FMwebp_QL65_.jpg 3x" 
        alt="One August Night" className={style['image-pc-a']}></img>,
        id: 5,
        value: 1
    },
]



const defaultProducts = {
    products: dummyProducts,
    priceSym: '£',
    basketProducts: [],
    totalAmount: 0,
    totalItems: 0,
    foundProd: false,
}


const productsReducer = (state, action)=>{

    if (action.type === 'GET_SUCCESS'){
        const dataTran =action.dataProd.sponsored_products.map((product)=> {
            return{
                name: product.title,
                id: product.asin,
                value: 1,
                image: <img src={product.image} alt='new'></img>,
                price: product.price.value,
            }
        })
        let updateProducts = state.products.concat(dataTran)

        return{
            basketProducts: state.basketProducts,
            products: updateProducts,
            priceSym: state.priceSym,
            totalAmount: state.totalAmount,
            totalItems: state.totalItems,
            foundProd: state.foundProd
        }
        
    }



    if(action.type==='CHANGESYM'){
        let pricePound = []
        let priceEuro = []
        let priceDollar = []
        for(let i = 0; i<state.products.length; i++){
            pricePound.push(state.products[i].price)
            priceEuro.push(state.products[i].price * 1.17)
            priceDollar.push(state.products[i].price * 1.37)
        }
        let updatePriceSym = ''
        
    
        if(action.symValue === 'pound'){
            
            updatePriceSym = '£'
            for(let i = 0; i<pricePound.length; i++){
                state.products[i].price = pricePound[i]

                const findBProd = state.basketProducts.findIndex(products=>products.id=== state.products[i].id)
                const existingProduct = state.basketProducts[findBProd]
                
                if(existingProduct){
                    const updateProduct = {...existingProduct, 
                                            price: state.products[i].price * state.basketProducts[findBProd].value,
                                           }
                    state.basketProducts[findBProd] = updateProduct
                }
            }
            return {
                basketProducts: state.basketProducts,
                products: state.products,
                priceSym: updatePriceSym,
                totalAmount: state.totalAmount,
                totalItems: state.totalItems,
                foundProd: state.foundProd
            }
        }
        
        else if(action.symValue === 'euro'){
            updatePriceSym = '€'
            for(let i = 0; i<pricePound.length; i++){
                state.products[i].price = priceEuro[i]

                const findBProd = state.basketProducts.findIndex(products=>products.id=== state.products[i].id)
                const existingProduct = state.basketProducts[findBProd]
                if(existingProduct){
                    const updateProduct = {...existingProduct, 
                                            price: state.products[i].price * state.basketProducts[findBProd].value,
                                           }
                                           state.basketProducts[findBProd] = updateProduct
                                           
                }
            }
            return {
                basketProducts: state.basketProducts,
                products: state.products,
                priceSym: updatePriceSym,
                totalAmount: state.totalAmount,
                totalItems: state.totalItems,
                foundProd: state.foundProd
            }
        }  
        
        else if(action.symValue === 'dollar'){
            updatePriceSym = '$'
            for(let i = 0; i<pricePound.length; i++){
                state.products[i].price = priceDollar[i]

                const findBProd = state.basketProducts.findIndex(products=>products.id=== state.products[i].id)
                const existingProduct = state.basketProducts[findBProd]
                if(existingProduct){
                    const updateProduct = {...existingProduct, 
                                            price: state.products[i].price * state.basketProducts[findBProd].value,
                                           }
                                           state.basketProducts[findBProd] = updateProduct
                                           
                }
            }
            return {
                basketProducts: state.basketProducts,
                products: state.products,
                priceSym: updatePriceSym,
                totalAmount: state.totalAmount,
                totalItems: state.totalItems,
                foundProd: state.foundProd
            }
        }
    }
    


    if (action.type==='ADD'){
        console.log(state.totalAmount)
        let updateProducts;
        const findProduct = state.products.findIndex(products=>products.id === action.id)
        const findBasketProduct = state.basketProducts.findIndex(products=>products.id === action.id)
        const existingProduct = state.basketProducts[findBasketProduct];
        const uptotalAmount = state.totalAmount + state.products[findProduct].price
        console.log(uptotalAmount)
        if(existingProduct){
            const updateProduct = {...existingProduct, 
                                    price: state.products[findProduct].price + existingProduct.price,
                                    value: existingProduct.value+1}
            updateProducts=[...state.basketProducts]
            updateProducts[findBasketProduct] = updateProduct
        }
        else{
            updateProducts = state.basketProducts.concat(state.products[findProduct]);
        }

        
        
        return{
            basketProducts: updateProducts,
            products: state.products,
            priceSym: state.priceSym,
            totalAmount: uptotalAmount,
            totalItems: state.totalItems,
            foundProd: state.foundProd
        }
    }

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
            despachProductsAction({type:'GET_SUCCESS', dataProd: response.data})
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