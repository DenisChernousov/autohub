import React from 'react';
import styles from './Contacts.module.css';
import TG from '../../img/tg.png';
import YOUTUBE from '../../img/youtube.png';
import INST from '../../img/inst.png';
import TEL from '../../img/tel.png';
import DROM from '../../img/drom.png';
import AVITO from '../../img/avito.png';
const Contacts = () => {
    const socials = [

        {
            id: 2,
            name: 'Перейти в Telegram',
            icon: TG,
            link: 'https://t.me/AUTOHUBPRO'
        },
        {
            id: 3,
            name: 'Наш канал в YouTube',
            icon: YOUTUBE,
            link: 'https://www.youtube.com/channel/UCKsI0QGUHRXxIO6DnYiNUvw'
        },
        {
            id: 4,
            name: 'Перейти в Instagram',
            icon: INST,
            link: 'https://instagram.com/auto.hub139?igshid=MzRlODBiNWFlZA=='
        }];

    return (
        <section className={styles.contacts}>
            <div className='container'>
                <div className={styles.inner}>
                    {socials.map((social) => (
                        <div className={styles.social} id={social.id}>
                        <a className={styles.link} href={social.link}>
                            <img src={social.icon} alt={social.name} />
                        </a>

                        </div>
                        )
                    )
                    }
                </div>
                <div className={styles.place} >
                    <a className={styles.linkPlace} href="https://auto.drom.ru/dealer321898/">
                        <img src={DROM} alt="DROM"/> DROM
                    </a>
                    <a className={styles.linkPlace} href="https://www.avito.ru/user/895261779f9bd2990821afae42c1bc24/profile/all/avtomobili?id=2979165720&src=item&page_from=from_item_card&iid=2979165720&sellerId=895261779f9bd2990821afae42c1bc24">
                        <img src={AVITO} alt="Avito"/> AVITO
                    </a>
                </div>
                <div className={styles.tel}>
                   <div className={styles.telImg}><img src={TEL} /> </div> <a href="tel:+79050802222" className={styles.telLink}> +7 905 080 22 22</a>
                </div>
            </div>
        </section>
    );
};

export default Contacts;