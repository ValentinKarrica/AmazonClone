import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showActions } from '../../store/mainPage-slice'

import style from './CardBasketProducts.module.css'


const CardBasketProduct =(props)=>{
    const dispatch = useDispatch()
    

    const [defaultValue, setDefaultValue]=useState(props.value)
    const price = props.price.toFixed(2)

    const onHandlerValue=(event)=>{
        setDefaultValue(event.target.value)
        dispatch(showActions.addFromBasket({id : props.id, value: event.target.value}))
    }
    const removeProduct=()=>{
        dispatch(showActions.deleteFromBasket(props.id));
    }


    return <div className={style.mainDiv}>
        <div className={style.column1}>
            <div className={style.column1a}>
                <div className={style.column1aa}>
                    <div className={style.column1aa1}>
                        <div className={style.column1aa1a} ><input checked="checked" className={style.inputchekbox} type='checkbox'></input></div>
                        <div className={style.column1aa1b}>{props.image}</div>
                    </div>
                    <div className={style.column1aa2}>
                        <ul>
                            <li><span className={style.lispan1}>{props.name}</span></li>
                            <li><span className={style.lispan2}>in {props.department}</span></li>
                            <li><span className={style.lispan3}>in stock</span></li>
                            <li>
                                <input className={style.column1aa2b} type='checkbox'></input>
                                <span className={style.column1aa2a}>This will be a gift <a href='/home'>Learn more</a></span>
                            </li>
                        </ul>
                        <div className={style.sselct1}>
                            <span className={style.sselct2}>
                                <lablel  className={style.sselct3} >Qty: </lablel>
                                <select value={defaultValue} onChange={onHandlerValue} className={style.sselct4}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                </select>
                            </span>
                            <i className={style.isecion}></i>
                            <span onClick = {removeProduct} className={style.spansecion}>Delete</span>
                            <i className={style.isecion}></i>
                            <span className={style.spansecion}>Save for later</span>
                            <i className={style.isecion}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.column2}>
            <p className={style.column2a}><span className={style.column2b}>{props.symbol}{price}</span></p>
        </div>
    </div>
}

export default CardBasketProduct;