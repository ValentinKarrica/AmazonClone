import { Fragment } from "react";

import style from './MainHeader.module.css'
import NavFill from "./NavFill";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight"

const MainHeader=(props)=>{
  
    return <Fragment>
        <div className={style.test}>
            <NavLeft/>
            <NavFill/>
            <NavRight/>
        </div>
        <div className={style['nav-main']}>
            <div className={style.menu}>
                <i className={style.iconMenu}></i>
                <span className = {style.allMenu}>All</span>
            </div>
            <div>
                <span className = {style.menuallCat}>Grocery</span>
                <span className = {style.menuallCat}>Best Sellers</span>
                <span className = {style.menuallCat}>Customer Service</span>
                <span className = {style.menuallCat}>Gift Ideas</span>
                <span className = {style.menuallCat}>New Releases</span>
                <span className = {style.menuallCat}>
                    <span className={style.prime}>Prime</span>
                    <span className={style.iconPrime}></span>
                </span>
                <span className = {style.menuallCat}>Today's Deals</span>
                <span className = {style.menuallCat}>Books</span>
                <span className = {style.menuallCat}>Vouchers</span>
                <span className = {style.menuallCat}>Fashion</span>
                <span className = {style.menuallCat}>PC & Video Games</span>
                <span className = {style.menuallCat}>PC</span>
            </div>
            <span className = {style.menuimage}>
                <img alt="Fashion" src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2018/FASHION/PRIME_WARDROBE/XSITE/LAUNCH_OCT/UK_400x39._CB483365775_.jpg">
                    </img>
                </span>
        </div>
    </Fragment>
};

export default MainHeader;