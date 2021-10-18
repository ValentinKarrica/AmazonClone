import { Fragment, useState } from 'react';
import Modal from '../UI/Modal';
import style from './NavLeft.module.css'
import { Link } from 'react-router-dom';

const NavLeft = () =>{

    const [locModal, setLocModal] = useState(false)

    const openLocModalHadler=()=>{
        setLocModal(true);
    }
    
    return <Fragment>
        <div className={style['nav-left']}>
            <div className={style['div-nav-logo']}>
                <Link  to='/home' href="/ref=nav_logo" id="nav-logo-sprites" className={style['nav-logo-link']} aria-label="Amazon.co.uk">
                    <span className={style['nav-logo']}></span>
                    <span id="logo-ext" className={style['nav-logo-ext']}></span>
                    <span className={style['nav-end']}>.co.uk</span>
                </Link>
            </div>
            <span className={style['a-declaredive']} onClick={openLocModalHadler}>
                <a className={style['nav-a']}>
                    <div className={style['nav-loc-icon']}></div>
                    <div className={style.lines}>
                        <span className={style['nav-line1']}>Hello</span>
                        <span className={style['nav-line2']}>Select your address</span>
                    </div>
                </a>
            </span>
        </div>
        {locModal&&<Modal>
            <div>
                <header className={style.aHeader}>
                    <h4 className={style.aH4}> Choose your location</h4>
                    <button className={style.aButton}>
                        <i className={style.aI}></i>
                    </button>
                </header>
                <div className={style.aPrimecontain}>
                    <span className={style.aText}>Delivery options and delivery speeds may vary for different locations</span>
                    <button className={style.abuttonprime}>
                    <span className={style.abuttonText} aria-hidden="true">Sign in to update your location</span>
                    </button>
                </div>
            </div>
        </Modal>}
    </Fragment>
}

export default NavLeft;