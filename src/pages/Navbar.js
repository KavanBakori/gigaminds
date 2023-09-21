import React, { useState, useEffect } from "react";
import './navbaar.scss';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const [active, setactive] = useState(false);
    const isActive = () => {
        window.scrollY > 30 ? setactive(true) : setactive(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);
    return ([
        <nav className={active ? "navbar active" : "navbar"}>

            <Link to='/'><h3 className="logo" style={{color:'green'}}>Logo</h3></Link>
            <ul className={
                Mobile ?
                    "nav-links-mobile " :
                    "nav-links "
            } onClick={() => setMobile(false)}>

                <Link to='/ayurveda'><li>Ayurveda</li></Link>
                <Link to='/unani'><li>Unani</li></Link>
                <Link to='/sindha'><li>Siddha</li></Link>
                <Link to='/aboutus'><li>About Us</li></Link>
               <Link style={{backgroundColor:'green'}} className="button_create" to='/login'><li>Create Account</li></Link>
               


            </ul>
            <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                {Mobile ? <ImCross /> : <FaBars />}
            </button>

            {/* //testing */}

        </nav>,
        // <div className="testing"></div>
    ]);
}

export default Navbar;