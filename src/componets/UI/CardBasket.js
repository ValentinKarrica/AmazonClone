import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './CardBasket.module.css'
import CardBasketProduct from './CardBasketProduct';


const CartBasket = (props) =>{
    const basketProducts = useSelector(state=>state.show.basketProducts)
    const tottalItems= useSelector(state=>state.show.tottalItems)
    const tottalPrice = useSelector(state=>state.show.tottalPrice).toFixed(2)
    const priceSym = useSelector(state=>state.show.priceSym)
    

    const basketList = basketProducts.map((list)=>(
        <CardBasketProduct
        id={list.id}
        key={list.id}
        image={list.image}
        price={list.price}
        name={list.name}
        department={list.department}
        symbol={priceSym}
        value={list.value}
    />))



    return <div className={style['sc-card-style']}>
        <div>
            <div className={style.arow}>
                <h1>Shopping Basket</h1>
            </div>
            <div className={style.arow}>
                <a className={style.aLinkrow} href='/home'>Deselect all items</a>
            </div>
        </div>


        <div className={style.divColumn}> 
            <spna className={style.spanColumn}>Price</spna>
        </div>
        {basketList}
        <div className={style['a-spacing-mini']}>
            <span>Subtotal ({tottalItems} items): </span>
            <span>{priceSym}{tottalPrice}</span>
        </div>
        <div className={style['a-spacing-mini']}>
            <Link to='/home'><button>Close Basket</button></Link>
        </div>




    </div>
}

export default CartBasket;