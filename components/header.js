import { useEffect } from 'react';

import styles from '../styles/Header.module.css';
import { githubIcon, discordIcon, linkedInIcon } from './icons';
import Image from 'next/image';

const Header = () => {
    useEffect(() => {
        const header = document.querySelector('header');

        function checkScroll() {
            const maxScroll = 450;

            if (window.scrollY <= maxScroll) {
                const opacity = (window.scrollY / maxScroll).toPrecision(1);
                header.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            }
        }
        window.addEventListener('scroll', checkScroll);
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', checkScroll);
    }, []); // Empty array ensures that effect is only run on mount

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image src='/images/logo_header.svg' alt='Geekson Software logo' width={167} height={23} />
                <nav className={styles.navLinks}>
                    <a className={styles.textLink} href='#Home'>
                        Home
                    </a>
                    <a className={styles.textLink} href='#About'>
                        About
                    </a>
                    {/*
                    <a className={styles.textLink} href='#Projects'>
                        Project
                    </a>
                    */}
                    <a className={styles.textLink} href='#Services'>
                        Services
                    </a>
                    <a className={styles.textLink} href='#Contact'>
                        Contact
                    </a>
                    <a className={styles.iconLink} href='https://discord.gg/cUN8bScBDT' target='_blank'>
                        <i>{discordIcon}</i>
                    </a>
                    <a className={styles.iconLink} href='https://github.com/Geeksonn' target='_blank'>
                        <i>{githubIcon}</i>
                    </a>
                    <a
                        className={styles.iconLink}
                        href='https://www.linkedin.com/in/olivier-sputael-23b3962a/'
                        target='_blank'>
                        <i>{linkedInIcon}</i>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
