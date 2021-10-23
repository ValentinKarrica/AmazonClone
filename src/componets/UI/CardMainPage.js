import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { showActions } from "../../store/mainPage-slice"

import style from './CardMainPage.module.css'

const CardMainPage = (props)=>{
    const priceSym = useSelector((state)=> state.show.priceSym)
    const dispatch = useDispatch()
    const moveToBasket=()=>{
        dispatch(showActions.addToBasket({id: props.id, value: props.value}))
    }
    const price = props.price.toFixed(2)

    return <Fragment>
        <div className={style["a-section"]}>
            <div className={style["up-a-section"]}>
                <Link to={"/home/" + props.id }>
                    <div className={style['image-pc-a']}>
                        {props.image}
                    </div>
                </Link>

            </div>
            <div className={style["down-a-section"]}>
                <div>{props.department}</div>
                <div className={style["a1-section"]}>{priceSym}{price}</div>
                <div className={style["a2-section"]}>{props.name}</div>
                <div className={style["a3-section"]}>
                    <i className={style["a-star-mini-4-5"]}></i>
                    <span className={style["a-color-tertiary"]}>122</span>
                </div>
                <button onClick={moveToBasket}>Move to Basket</button>
            </div>
        </div>
    </Fragment>
}

export default CardMainPage