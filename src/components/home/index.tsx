import React from 'react';
import styles from './index.module.css'
import Pika from '../../assets/images/BannerComplete.png';

const Home: React.FC = () => {
    return (
        <home className={styles.home}>
            <img src={Pika} className={styles.pika}/>
        </home>
    );
};

export default Home;