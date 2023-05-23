import React from 'react';
import styles from './index.module.css'
import Pika from '../../assets/images/BannerComplete.png';


const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <div className={styles.banner}>
                <div className={styles.banner}>
                    <h1 className={styles.titulo}>
                        <strong>Find</strong> all your
                        <br/>favorite<br/>
                        <strong>Pokemon</strong>
                    </h1>
                    <h2 className={styles.subtitulo}>
                        You can know the type of Pokemon,<br/> its strengths, disadvantages and<br/> abilities
                    </h2>
                    <img src={Pika} className={styles.pika}/>
                </div>
            </div>
        </div>
    );
};

export default Home;