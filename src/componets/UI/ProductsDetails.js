import { Fragment } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import style from './ProductsDetails.module.css'



const ProductsDetail= ()=>{
    const params = useParams();
    const products = useSelector(state=>state.show.products);
    const priceSym = useSelector(state=>state.show.priceSym);
    const product = products.find(product=> product.id=== parseInt(params.id, 10));
    
    console.log(product);


    return <Fragment>
        <div className={style.mainBox}>
            <div className={style.firstBox}>{product.image}</div>
            <div className={style.firstBox}>{product.department}<br/> {product.name}</div>
            <div className={style.firstBox}>{priceSym}{product.price.toFixed(2)}</div>
        </div>
    </Fragment>
}


export default ProductsDetail;