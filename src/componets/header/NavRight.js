import { Fragment, useContext } from "react"
import CartContext from "../../store/cart-context"
import style from './NavRight.module.css'
import { Link } from "react-router-dom"


const NavRight = (props)=>{
    const cartCtx = useContext(CartContext)


    
    return <Fragment>
        <div className={style['nav-right']}>
            <div className={style['nav-tool']}>
                <Link to='/Select-Currency' className={style['nav-a']}>
                    <span className={style['icp-nav-link-inner']}>
                        <span className={style['nav-line-1']}></span>
                        <span className={style['nav-line-2']}>
                            <span className={style['icp-nav-flag']}></span>
                            <span className={style['nav-icon']}></span>
                        </span>
                    </span>
                </Link>
                <a href='#' className={style['nav-a']}>
                    <div className={style['nav-line-1-container']}>
                        <span className={style['nav-line-3']}>Hello, Sing in</span>
                    </div>
                    <span className={style['nav-line-4']}>
                        Account & Lists
                        <span className={style['nav-icon']}></span>
                    </span>
                </a>
                <a href='#' className={style['nav-a']}>
                    <div className={style['nav-line-1-container']}>
                        <span className={style['nav-line-3']}>Returns</span>
                    </div>
                    <span className={style['nav-line-4']}>& Orders</span>
                </a>
                <Link to='/Shopping-Basket' className={style["nav-progressive-attribute"]}>
                    <div className={style['nav-cart-count-container']}>
                        <span className={style['nav-cart-count']}>0</span>
                        <span className={style['nav-cart-icon']}></span>
                    </div>
                    <div className={style['nav-cart-text-container']}>
                        <span className={style['nav-line-3']}></span>
                        <span className={style['nav-line-4']}>Basket</span>
                    </div>
                </Link>
            </div>
        </div>
    </Fragment>
}

export default NavRight;