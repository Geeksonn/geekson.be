import css from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={css.footer}>
            <p>© {new Date().getFullYear()} All rights reserved. Geekson Software</p>
        </div>
    );
}

export default Footer;