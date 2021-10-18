import { Fragment } from "react"
import style from './NavFill.module.css'



const NavFill=()=>{
    return <Fragment>

        <div className={style['nav-fill']}>
        <div className={style['nav-search']}>
            <form className={style['nav-search-bar-form']}>
                <div className={style['nav-left']}>
                    <div className={style['nav-search-dropdown-card']}>
                        <div className={style['nav-search-scope']}>
                            <div className={style['nav-search-facade']}>
                                <span className={style['nav-search-label-id']}>All</span>
                                <i className={style['nav-icon']}></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style['nav-fill']}>
                    <div className={style['nav-search-field']}>
                        <input type='text' className={style['nav-input']}>
                        </input>
                    </div>
                </div>

                <div className={style['nav-right']}>
                    <div className={style['nav-search-submit']}>
                        <span className={style['nav-search-submit-text']}>
                            <input className={style['nav-search-submit-button']} type='submit'>
                            </input>
                        </span>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </Fragment>
}

export default NavFill;