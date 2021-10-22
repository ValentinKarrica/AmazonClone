import { createSlice } from "@reduxjs/toolkit"
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

const mainPageSlice = createSlice({
    name: 'showMainPage',
    initialState: {
        showPoducts: dummyProducts,
        firstPrice: [],
        getSuccess: false
    },
    reducers: {
        actionShowProducts(state, action){
            const dataTran =action.payload.sponsored_products.map((product)=> {
                return{
                    name: product.title,
                    id: Math.random().toString(36),
                    value: 1,
                    image: <img src={product.image}></img>,
                    price: product.price.value,
                }
            })
            state.showPoducts = state.showPoducts.concat(dataTran)
            state.firstPrice = state.showPoducts.map((price)=>
                price.price
            )
            state.getSuccess = true;
        }
    }
})

export const showActions = mainPageSlice.actions

export default mainPageSlice;