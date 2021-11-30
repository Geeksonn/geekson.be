import styles from '../styles/Navbar.module.css';
import NavIcons from './navIcons';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><NavIcons type="Home" /></li>
                <li><NavIcons type="About" /></li>
                <li><NavIcons type="Products" /></li>
                <li><NavIcons type="Services" /></li>
                <li><NavIcons type="Contact" /></li>
            </ul>
        </div>

    );
}

export default Navbar;