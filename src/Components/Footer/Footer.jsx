import React from 'react';
import styles from './Footer.module.css';
import BOTTOM from '../../img/bottom-big.svg';

const Footer = () => {
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
        }];
    return (
        <footer className={styles.footer}>
            {/*<div className="container">*/}
                <div className={styles.inner}>
                    <div className={styles.pointInner}>
                        {
                            points.map((point) => (
                                <div id={points.id} className={styles.point}> </div>
                            ))
                        }
                    </div>
                    <div className={styles.imgBox}>
                        <img className={styles.img} src={BOTTOM}/>
                    </div>

                </div>
            {/*</div>*/}

        </footer>
    );
};

export default Footer;