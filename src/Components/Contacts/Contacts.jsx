import React from 'react';
import styles from './Contacts.module.css';
import TG from '../../img/tg1.png';
import YOUTUBE from '../../img/youtube1.png';
import INST from '../../img/inst1.png';
import TEL from '../../img/tel1.png';
import DROM from '../../img/drom.png';
import AVITO from '../../img/avito.png';
import WA from '../../img/wa.png';
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
            name: 'Перейти в Instagram(запрещен в РФ)',
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
                    <a href="tel:+79050802222" className={styles.telLink}> <img className={styles.telImg} src={TEL} /> </a>
                    <a href="https://wa.me/79050802222?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..." className={styles.telLink}> <img className={styles.telImg} src={WA} /> </a>
                </div>
            </div>
        </section>
    );
};

export default Contacts;