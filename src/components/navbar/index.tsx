import React, { useState } from 'react';
import styles from './index.module.css'
import Logo from '../../assets/images/logos/Logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.navbar}>
            <img src={Logo} alt="Logo" className={styles.logo}/>
            
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className={styles.navbartext}>Home</span>    
            </button>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className={styles.navbartext}>Pokédex</span>    
            </button>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className={styles.navbartext}>Legendaries</span>    
            </button>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className={styles.navbartext}>Documentation</span>    
            </button>
        </div>
    );
};


export default Navbar;