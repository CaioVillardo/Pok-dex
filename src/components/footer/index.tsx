import React from 'react';
import styles from './index.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.footer2}> Make with ❤️ for the PokéSpartans team Platzi Master</h3>
            <h3 className={styles.footer3}>Ours Team</h3>
        </footer>
    );
};

export default Footer;