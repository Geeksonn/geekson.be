import Typed from 'typed.js';
import React from 'react';

import commonStyles from '../styles/common.module.css';
import css from '../styles/Hero.module.css';
import { lightArrow } from '../components/icons';

const Hero = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: ['<em>Web App</em>.', '<em>Website</em>.', '<em>Mobile App</em>.'],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        };
    }, []);
    return (
        <section id='Home' className={css.heroSection}>
            <div className={commonStyles.container}>
                <div className={css.leftPart}>
                    <h2>
                        Coding is <em>my passion</em>.<br />
                        Let's build a <span ref={el}></span>
                    </h2>
                    <p>
                        Hi, I'm Olivier. A Full-stack engineer, a tech addict, a husband and a father.
                    </p>
                    <button onClick={() => (window.location.href = '#Contact')} className={css.contactButton}>
                        <p>Let's Partner Up !</p>
                        <i>{lightArrow}</i>
                    </button>
                </div>
                <div className={css.rightPart}>
                    <img src='/images/hero_background.svg' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
