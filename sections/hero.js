import commonStyles from '../styles/common.module.css';
import css from '../styles/Hero.module.css';
import { lightArrow } from '../components/icons';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id='Home' className={css.heroSection}>
            <div className={commonStyles.container}>
                <div className={css.leftPart}>
                    <div className={css.textContainer}>
                        <h2>
                            Putting <em>my passion*</em> at your service.
                        </h2>
                        <p className={css.services}>* (Web Application | Mobile Application | Website)</p>
                        <p>
                            Hi, I'm Olivier. A Full-stack engineer, a tech addict, a husband and a father.
                            {/*
                            <br />
                            In my spare time, I like to build apps. Why not an app for you or your business ?
                            <br />
                            If you are looking for a partnership to help you by providing a web or mobile
                            application, a hosting solution or any advice regarding your IT, you've come to the
                            right place!
                            */}
                        </p>
                        <a href='#Contact'>
                            <button className={css.contactButton}>
                                <p>Let's Partner Up !</p>
                                <i>{lightArrow}</i>
                            </button>
                        </a>
                    </div>
                </div>
                <div className={css.rightPart}>
                    <Image src='/images/hero_background.svg' width={852} height={739} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
