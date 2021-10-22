
import CardMainPage from "../UI/CardMainPage"
import { useSelector } from 'react-redux'
import LoadingSpinner from "../UI/LoadingSpiner";



const Products = ()=>{
    const porductsRed = useSelector((state)=> state.show.showPoducts);
    const getSuccess = useSelector((state)=> state.show.getSuccess);


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
        
        {getSuccess ? productList : <LoadingSpinner/> }
        
    </div>
}

export default Products;