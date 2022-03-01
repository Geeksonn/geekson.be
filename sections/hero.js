import HeroBackground from '../components/heroBackground';

import commonStyles from '../styles/common.module.css';
import styles from '../styles/Hero.module.css';
import { lightArrow } from '../components/icons';

const Hero = () => {
    return (
        <section id='Home' className={styles.heroSection}>
            <div className={commonStyles.container}>
                <div className={styles.leftPart}>
                    <div className={styles.textContainer}>
                        <h2>
                            Putting <em>my passion</em> at your service.
                        </h2>
                        <p>
                            Hi, I'm Olivier. A Full-stack engineer, a tech addict, a husband and a father.
                            <br />
                            In my spare time, I like to build apps. Why not an app for you or your business ?
                            <br />
                            If you are looking for a partnership to help you by providing a web or mobile
                            application, a hosting solution or any advice regarding your IT, you've come to the
                            right place!
                        </p>
                        <a href='#Contact'>
                            <button className={styles.contactButton}>
                                <p>Start a project together</p>
                                <i>{lightArrow}</i>
                            </button>
                        </a>
                    </div>
                </div>
                <div className={styles.rightPart}>
                    <HeroBackground />
                </div>
            </div>
        </section>
    );
};

export default Hero;
