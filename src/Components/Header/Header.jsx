import React from 'react';
import styles from './Header.module.css';
import TOP from '../../img/top.svg';
import LOGO from '../../img/logo.png';

const Header = () => {

    const points = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        }];


    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.top}>
                    <img className={styles.topImg} src={TOP}/>
                </div>
                <div className={styles.logoInner}>
                    <img className={styles.logo} src={LOGO} alt="AutoHub автомобили из кореи, европы, аоэ и китая"/>
                </div>
                <div className={styles.pointsInner}>
                    <div className={styles.points}>
                        {points.map((point) => (
                            <div id={points.id} className={styles.point}></div>))
                        }
                    </div>
                    <div className={styles.pointsBottom}>
                        {points.map((point) => (
                            <div id={points.id} className={styles.point}></div>))
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;