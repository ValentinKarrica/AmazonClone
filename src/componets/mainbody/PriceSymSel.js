import { Fragment, useContext } from "react"
import CartContext from "../../store/cart-context"
import style from './PriceSymSel.module.css'

const PriceSymSel = (props)=>{
    const cartCtx = useContext(CartContext);
    let symValue='pound'



    const onValueHandler =(event)=>{
        symValue = event.target.value
    }
    const onHadlerPrice = (event)=>{
        event.preventDefault();
        cartCtx.changeSym(symValue)
    }
    return <Fragment>
        <div className={style['a-column']}>
            <form onSubmit={onHadlerPrice} className={style['style-form']}>
                <span className={style['a-span7']}>
                    <h3 className={style.h3h3}>Currency Settings</h3>
                    <span className={style.spanspan}>
                        Select the currency you want to shop with.
                    </span> 
                    <br/>
                    <br/>
                    <br/>
                    <select  onChange={onValueHandler} className={style['a-dropdown-container']}>
                        <option value='pound'>£-Pound</option>
                        <option value='euro'>€-Euro</option>
                        <option value='dollar'>$-Dollar</option>
                    </select>
                </span>
                <br/>
                <br/>
                <br/>
                <button className={style['a-button-base']} onClick = {props.onCloseSet}>Cancel</button>
                <button type='submit' className={style['a-button-primary']}>Save changes</button>
            </form>
        </div>
    </Fragment>
}

export default PriceSymSel;
