import React, { useState } from 'react';
import styles from './index.module.css'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <navbar className={styles.navbar}>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className="text-black">Home</span>    
            </button>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className="text-black">Pokédex</span>    
            </button>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className="text-black">Legendaries</span>    
            </button>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar01"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={handleToggle}>
            <span className="text-black">Documentation</span>    
            </button>
        </navbar>
    );
};


export default Navbar;