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
            Main nav
        </div>
    </Fragment>
};

export default MainHeader;