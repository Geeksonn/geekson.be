import { sectionTitle } from '../styles/common.module.css';
import css from '../styles/About.module.css';
import {
    angularIcon,
    awsIcon,
    dockerIcon,
    htmlIcon,
    jsIcon,
    k8sIcon,
    mongodbIcon,
    nginxIcon,
    nodejsIcon,
    postgresqlIcon,
    reactIcon,
} from '../components/icons';
import Skills from '../components/skills';

const About = () => {
    return (
        <section id='About' className={css.aboutSection}>
            <div className={css.wrapper}>
                <div className={sectionTitle}>About</div>
                <div className={css.content}>
                    <h2 className={css.subTitle}>A little about me and my experience.</h2>
                    <p className={css.aboutText}>
                        My <em>10+ years</em> in the software industry made me experience all aspects of
                        <em>software development</em>. From high level design &amp; story mapping until
                        development, delivery and client support.
                        <br />
                        Aside from my professional experience, I always love learning new technologies and
                        languages to create <em>web or mobile applications</em>. There are no challenges that I am
                        afraid of.
                    </p>
                    {/*}
                        <br />
                        Below are some of the technologies that I use or that I've learned.
                    </p>
                */}
                </div>
                {/*
                <Skills />
            */}
                {/*
                <div className={css.techLogo}>
                    <span>{htmlIcon}</span>
                    <span>{jsIcon}</span>
                    <span>{reactIcon}</span>
                    <span>{nodejsIcon}</span>
                    <span>{angularIcon}</span>
                    <span>{mongodbIcon}</span>
                    <span>{postgresqlIcon}</span>
                    <span>{k8sIcon}</span>
                    <span>{dockerIcon}</span>
                    <span>{awsIcon}</span>
                    <span>{nginxIcon}</span>
                </div>
            */}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default About;
