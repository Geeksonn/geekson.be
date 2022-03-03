import { useState } from 'react';

import { lightArrow } from '../components/icons';

import css from '../styles/Contact.module.css';
import { sectionTitle } from '../styles/common.module.css';

const Contact = () => {
    return (
        <section id='Contact' className={css.section}>
            <div className={css.wrapper}>
                <div className={sectionTitle}>Contact</div>
                <p className={css.description}>
                    If you think you would require my services, or if you simply want to know more, 
                    do not hesitate to contact me. <br />
                    I'll answer within 1 or 2 working days.
                </p>
                <button className={css.contactButton}>
                    <p>olivier@geekson.be</p>
                </button>
            </div>
        </section>
    );
};

export default Contact;
