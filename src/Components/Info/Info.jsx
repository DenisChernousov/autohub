import React from 'react';
import styles from './Info.module.css';
import MID from '../../img/mid.svg';

const Info = () => {
    return (
        <section className={styles.info}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.topSection}>
                        <div className={styles.title}>
                            <h1>АВТОМОБИЛИ <br /> с доставкой <br/>
                                {/*ИЗ КОРЕИ, ЕВРОПЫ, ОАЭ И КИТАЯ*/}
                            </h1>
                            {/*<span>с доставкой</span>*/}
                        </div>
                        {/*<div className={styles.mid}>*/}
                        {/*    <img className={styles.img} src={MID}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={styles.bottomSection}>
                        <h2 className={styles.subtitle}>
                            из кореи, европы, оаэ и китая
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;