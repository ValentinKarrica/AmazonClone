import { Fragment } from "react"
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { showActions } from "../../store/mainPage-slice";
import style from './PriceSymSel.module.css'


let defValue = 'pound';

const PriceSymSel = withRouter((props)=>{

    const dispatch = useDispatch()
    let symValue = 'pound'


    const onValueHandler =(event)=>{
        symValue = event.target.value
    }
    const onHadlerPrice = (event)=>{
        event.preventDefault();

        dispatch(showActions.actionChangePrice(symValue));
        defValue = symValue;
        props.history.push ('/home'); 
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
                    <select  onChange={onValueHandler} defaultValue={defValue} className={style['a-dropdown-container']}>
                        <option value='pound'>£-Pound</option>
                        <option value='euro'>€-Euro</option>
                        <option value='dollar'>$-Dollar</option>
                    </select>
                </span>
                <br/>
                <br/>
                <br/>
                <Link to='/home'>
                    <button className={style['a-button-base']}>Cancel</button>
                </Link>
                    <button type='submit' className={style['a-button-primary']}>Save changes</button>
            </form>
        </div>
    </Fragment>
})

export default PriceSymSel;
