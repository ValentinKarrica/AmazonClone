import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import style from './CardBasket.module.css'
import CardBasketProduct from './CardBasketProduct';


const CartBasket = (props) =>{
    const cartCntx = useContext(CartContext)
    const tottalItems= cartCntx.basketProducts.length
    

    const basketList = cartCntx.basketProducts.map((list)=>(
        <CardBasketProduct
        id={list.id}
        key={list.id}
        image={list.image}
        price={list.price}
        name={list.name}
        department={list.department}
        symbol={cartCntx.priceSym}
        value={list.value}
    />))



    return <div className={style['sc-card-style']}>
        <div>
            <div className={style.arow}>
                <h1>Shopping Basket</h1>
            </div>
            <div className={style.arow}>
                <a className={style.aLinkrow} href='#'>Deselect all items</a>
            </div>
        </div>


        <div className={style.divColumn}> 
            <spna className={style.spanColumn}>Price</spna>
        </div>
        {basketList}
        <div className={style['a-spacing-mini']}>
            <span>Subtotal ({tottalItems} items): </span>
            <span>{cartCntx.priceSym}{cartCntx.totalAmount}</span>
        </div>
        <div className={style['a-spacing-mini']}>
            <button onClick={props.onCloseBasket}>Close Basket</button>
        </div>




    </div>
}

export default CartBasket;