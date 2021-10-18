import { Fragment, useContext } from "react"
import CartContext from "../../store/cart-context"
import { useParams } from "react-router-dom"
import style from './ProductsDetails.module.css'



const ProductsDetail= ()=>{
    const params = useParams();
    const cartCntx = useContext(CartContext)
    console.log(cartCntx.products, params.id)
    const product = cartCntx.products.find(product=> product.id=== parseInt(params.id, 10))
    
    console.log(product);


    return <Fragment>
        <div className={style.mainBox}>
            <div className={style.firstBox}>{product.image}</div>
            <div className={style.firstBox}>{product.department}<br/> {product.name}</div>
            <div className={style.firstBox}>{cartCntx.priceSym}{product.price}</div>
        </div>
    </Fragment>
}


export default ProductsDetail;