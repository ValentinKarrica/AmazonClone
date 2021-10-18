
import { useContext } from "react"
import CartContext from "../../store/cart-context"
import CardMainPage from "../UI/CardMainPage"



const Products = ()=>{
    
    const cartCtx = useContext(CartContext)
    let foundProd = cartCtx.foundProd;


    console.log(foundProd);


    const productList = cartCtx.products.map((product) => (
        <CardMainPage
            id={product.id}
            key={product.id}
            value={product.value}
            image={product.image}
            price={product.price}
            name={product.name}
            department={product.department}
    />))

    return <div>
        {productList}
        
    </div>
}

export default Products;

