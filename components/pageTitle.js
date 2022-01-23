import styles from '../styles/PageTitle.module.css';

const PageTitle = ({ title }) => {
    return (
        <div className={styles.container}>
            <h3>
                {title}
            </h3>
        </div>
    );
}

export default PageTitle;