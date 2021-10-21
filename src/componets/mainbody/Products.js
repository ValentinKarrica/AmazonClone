
import CardMainPage from "../UI/CardMainPage"
import { useSelector } from 'react-redux'



const Products = ()=>{
    const porductsRed = useSelector((state)=> state.show.showPoducts)

    
    console.log(porductsRed)

    const productList = porductsRed.map((product) => (
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